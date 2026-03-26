import { useEffect, useRef, useState } from "react";

type PreviewConfig = {
  label: string;
  route: string;
  previewUrl: string;
  description: string;
};

type PreviewPages = Record<string, PreviewConfig>;

const viewportOptions = {
  desktop: { label: "Desktop", width: 1280, height: 860 },
  tablet: { label: "Tablet", width: 900, height: 920 },
  mobile: { label: "Mobile", width: 390, height: 844 },
} as const;

type ViewportKey = keyof typeof viewportOptions;

function withPreviewNonce(url: string) {
  const parsed = new URL(url, window.location.origin);
  parsed.searchParams.set("_pv", String(Date.now()));
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

export default function MEAdminPreview({
  pages,
  activePage,
  onPageChange,
  liveToken,
}: {
  pages: PreviewPages;
  activePage: string;
  onPageChange: (page: string) => void;
  liveToken?: string;
}) {
  const [showEmbed, setShowEmbed] = useState(false);
  const [viewport, setViewport] = useState<ViewportKey>("desktop");
  const [src, setSrc] = useState(pages[activePage]?.previewUrl ?? "");
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentPage = pages[activePage];
  const currentViewport = viewportOptions[viewport];
  const scale =
    containerWidth > 0
      ? Math.min(1, Math.max(0.25, containerWidth / currentViewport.width))
      : 1;
  const stageHeight = Math.round(currentViewport.height * scale);

  const refreshPreview = () => {
    if (!currentPage) return;
    setSrc(withPreviewNonce(currentPage.previewUrl));
  };

  useEffect(() => {
    if (!currentPage) return;
    setSrc(withPreviewNonce(currentPage.previewUrl));
  }, [currentPage]);

  useEffect(() => {
    if (typeof liveToken === "undefined" || !showEmbed) return;

    const timer = window.setTimeout(() => {
      refreshPreview();
    }, 220);

    return () => window.clearTimeout(timer);
  }, [liveToken, showEmbed, currentPage]);

  useEffect(() => {
    if (!showEmbed) return;

    const node = containerRef.current;
    if (!node) return;

    const measure = () => {
      setContainerWidth(node.clientWidth - 32);
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(() => measure());
    observer.observe(node);
    return () => observer.disconnect();
  }, [showEmbed]);

  if (!currentPage) return null;

  return (
    <section className="me-admin__panel">
      <p className="me-admin__step">Step 2</p>
      <h2 className="me-admin__section-title">Check the page</h2>
      <p className="me-admin__section-copy">
        The easiest way to check your work is to open the real page in a new tab. The small
        embedded preview is optional and is only meant for a quick glance.
      </p>

      <div className="me-admin__page-switcher" role="tablist" aria-label="Preview page selection">
        {Object.entries(pages).map(([key, page]) => (
          <button
            key={key}
            type="button"
            onClick={() => onPageChange(key)}
            className={activePage === key ? "me-admin__pill me-admin__pill--active" : "me-admin__pill"}
          >
            {page.label}
          </button>
        ))}
      </div>

      <div className="me-admin__preview-actions">
        <a href={currentPage.route} target="_blank" rel="noreferrer" className="me-admin__button me-admin__button--primary">
          Open {currentPage.label}
        </a>
        <button type="button" onClick={refreshPreview} className="me-admin__button me-admin__button--ghost">
          Reload Small Preview
        </button>
        <button
          type="button"
          onClick={() => setShowEmbed((prev) => !prev)}
          className="me-admin__button me-admin__button--ghost"
        >
          {showEmbed ? "Hide Small Preview" : "Show Small Preview"}
        </button>
      </div>

      <div className="me-admin__preview-note">
        <p className="me-admin__preview-title">{currentPage.label}</p>
        <p className="me-admin__preview-copy">{currentPage.description}</p>
        <ol className="me-admin__preview-steps">
          <li>Open the real page in a new tab.</li>
          <li>Keep this admin page open in another tab.</li>
          <li>Edit one section here, then save.</li>
          <li>Reload the real page tab to check the result clearly.</li>
        </ol>
      </div>

      {showEmbed ? (
        <div className="me-admin__embedded-preview">
          <div className="me-admin__viewport-switcher">
            {Object.entries(viewportOptions).map(([key, option]) => (
              <button
                key={key}
                type="button"
                onClick={() => setViewport(key as ViewportKey)}
                className={viewport === key ? "me-admin__pill me-admin__pill--active" : "me-admin__pill"}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div ref={containerRef} className="me-admin__preview-stage" style={{ minHeight: `${stageHeight + 32}px` }}>
            <div
              className="me-admin__preview-frame"
              style={{
                width: `${currentViewport.width}px`,
                height: `${currentViewport.height}px`,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              <iframe src={src} title={`${currentPage.label} embedded preview`} className="me-admin__iframe" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
