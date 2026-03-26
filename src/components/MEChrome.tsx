import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

type ScrollNavItem = {
  label: string;
  kind: "scroll";
  target: string;
};

type RouteNavItem = {
  label: string;
  kind: "route";
  to: string;
};

type NavItem = ScrollNavItem | RouteNavItem;

type NavCallToAction = {
  label: string;
  to: string;
};

type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  website: string;
};

type FooterInfo = {
  copyright: string;
};

type ChromeDept = {
  code: string;
  shortTitle: string;
  contact: ContactInfo;
  excellencePage: {
    path: string;
  };
  footer: FooterInfo;
};

export function MENavbar({
  dept,
  items,
  onNav,
  cta,
}: {
  dept: ChromeDept;
  items: NavItem[];
  onNav?: (id: string) => void;
  cta?: NavCallToAction;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 980px)");
    const handleDesktopEnter = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleDesktopEnter);

    return () => {
      mediaQuery.removeEventListener("change", handleDesktopEnter);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollItemClick = (target: string) => {
    onNav?.(target);
    closeMenu();
  };

  const desktopLinks = (
    <nav className="me-nav__links" aria-label={`${dept.shortTitle} navigation`}>
      {items.map((item) =>
        item.kind === "scroll" ? (
          <button
            key={item.label}
            type="button"
            className="me-nav__link"
            onClick={() => onNav?.(item.target)}
          >
            {item.label}
          </button>
        ) : (
          <Link key={item.label} to={item.to} className="me-nav__link">
            {item.label}
          </Link>
        )
      )}
    </nav>
  );

  const mobileDrawer =
    typeof document === "undefined"
      ? null
      : createPortal(
          <>
            <div
              className={isMenuOpen ? "me-nav__overlay is-open" : "me-nav__overlay"}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <nav
              id="me-nav-menu"
              className={isMenuOpen ? "me-nav__drawer is-open" : "me-nav__drawer"}
              aria-label={`${dept.shortTitle} navigation`}
              aria-hidden={!isMenuOpen}
            >
              <div className="me-nav__drawer-head">
                <div>
                  <p className="me-nav__drawer-label">Navigation</p>
                  <p className="me-nav__drawer-title">{dept.shortTitle}</p>
                </div>

                <button
                  type="button"
                  className="me-nav__drawer-close"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                >
                  <span className="me-nav__drawer-close-line" />
                  <span className="me-nav__drawer-close-line" />
                </button>
              </div>

              {items.map((item) =>
                item.kind === "scroll" ? (
                  <button
                    key={item.label}
                    type="button"
                    className="me-nav__link"
                    onClick={() => handleScrollItemClick(item.target)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.label} to={item.to} className="me-nav__link" onClick={closeMenu}>
                    {item.label}
                  </Link>
                )
              )}

              {cta ? (
                <Link to={cta.to} className="me-button me-button--nav me-nav__cta" onClick={closeMenu}>
                  {cta.label}
                </Link>
              ) : null}
            </nav>
          </>,
          document.body
        );

  return (
    <>
      <header className="me-nav">
        <div className="me-nav__inner">
          <Link to={`/dept/${dept.code}`} className="me-nav__brand" onClick={closeMenu}>
            <img src="/icons/me.png" alt="Mechanical Engineering Logo" className="me-nav__seal" />
            <span>
              <span className="me-nav__title">{dept.shortTitle}</span>
              <span className="me-nav__subtitle">College of Engineering</span>
            </span>
          </Link>

          {desktopLinks}

          {cta ? (
            <Link to={cta.to} className="me-button me-button--nav me-nav__desktop-cta">
              {cta.label}
            </Link>
          ) : null}

          <button
            type="button"
            className="me-nav__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="me-nav-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="me-nav__toggle-bar" />
            <span className="me-nav__toggle-bar" />
            <span className="me-nav__toggle-bar" />
          </button>
        </div>
      </header>

      {mobileDrawer}
    </>
  );
}

export function MEFooter({ dept }: { dept: ChromeDept }) {
  return (
    <footer className="me-footer">
      <div className="me-footer__inner">
        <div>
          <p className="me-footer__eyebrow">Bulacan State University</p>
          <h2 className="me-footer__title">{dept.shortTitle}</h2>
          <p className="me-footer__copy">{dept.contact.address}</p>
        </div>

        <div>
          <p className="me-footer__eyebrow">Quick Links</p>
          <div className="me-footer__links">
            <Link to={`/dept/${dept.code}`}>Program Page</Link>
            <Link to={dept.excellencePage.path}>Performance and Extension</Link>
          </div>
        </div>

        <div>
          <p className="me-footer__eyebrow">Contact</p>
          <div className="me-footer__links">
            <span>{dept.contact.phone}</span>
            <a href={`mailto:${dept.contact.email}`}>{dept.contact.email}</a>
            <a href={`https://${dept.contact.website}`} target="_blank" rel="noreferrer">
              {dept.contact.website}
            </a>
          </div>
        </div>
      </div>

      <div className="me-footer__bar">{dept.footer.copyright}</div>
    </footer>
  );
}

export function MESectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  revealDelay = 0,
  revealVariant = "up",
}: {
  eyebrow: string;
  title: string;
  text: string;
  centered?: boolean;
  revealDelay?: number;
  revealVariant?: "up" | "left" | "right" | "scale";
}) {
  return (
    <div
      className={centered ? "me-section-heading me-section-heading--center" : "me-section-heading"}
      data-me-reveal={revealVariant}
      style={{ "--me-delay": `${revealDelay}ms` } as CSSProperties}
    >
      <p className="me-eyebrow">{eyebrow}</p>
      <h2 className="me-section-title">{title}</h2>
      <p className="me-section-copy">{text}</p>
    </div>
  );
}

export function MEMediaSlot({
  src,
  alt,
  title,
  text,
  className = "",
  revealDelay = 0,
  revealVariant = "up",
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  className?: string;
  revealDelay?: number;
  revealVariant?: "up" | "left" | "right" | "scale";
}) {
  if (src.trim()) {
    return (
      <div
        className={`me-media-slot ${className}`}
        data-me-reveal={revealVariant}
        style={{ "--me-delay": `${revealDelay}ms` } as CSSProperties}
      >
        <img src={src} alt={alt} className="me-media-slot__image" />
      </div>
    );
  }

  return (
    <div
      className={`me-media-slot me-media-slot--placeholder ${className}`}
      data-me-reveal={revealVariant}
      style={{ "--me-delay": `${revealDelay}ms` } as CSSProperties}
    >
      <div className="me-media-slot__placeholder">
        <p className="me-media-slot__label">Image Placeholder</p>
        <h3 className="me-media-slot__title">{title}</h3>
        <p className="me-media-slot__text">{text}</p>
      </div>
    </div>
  );
}
