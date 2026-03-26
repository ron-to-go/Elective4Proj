type JsonValueEditorProps = {
  label?: string;
  value: unknown;
  onChange: (next: unknown) => void;
  depth?: number;
  showLabel?: boolean;
};

function toTitleCase(path: string) {
  return path
    .replace(/\[(\d+)\]/g, " $1")
    .replace(/[._-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function makeEmptyLike(sample: unknown): unknown {
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === "object") {
    const next: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(sample as Record<string, unknown>)) {
      next[key] = makeEmptyLike(value);
    }
    return next;
  }
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  return "";
}

function FieldLabel({ text }: { text: string }) {
  return <p className="text-sm font-semibold text-gray-800">{toTitleCase(text)}</p>;
}

export default function JsonValueEditor({
  label = "root",
  value,
  onChange,
  depth = 0,
  showLabel = true,
}: JsonValueEditorProps) {
  const childIndent = depth > 1 ? "ml-4" : "";

  if (Array.isArray(value)) {
    const addItem = () => {
      const sample = value[0] ?? "";
      onChange([...value, makeEmptyLike(sample)]);
    };

    return (
      <section className={`${depth === 0 ? "space-y-4" : "rounded-xl border p-4"} ${childIndent}`}>
        {depth > 0 && showLabel && <FieldLabel text={label} />}

        <div className="space-y-3">
          {value.map((item, index) => (
            <div key={`${label}-${index}`} className="rounded-lg border p-3">
              <div className="mb-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, idx) => idx !== index))}
                  className="rounded-lg border px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Remove
                </button>
              </div>
              <JsonValueEditor
                label={`${label}[${index}]`}
                value={item}
                onChange={(nextItem) =>
                  onChange(value.map((current, idx) => (idx === index ? nextItem : current)))
                }
                depth={depth + 1}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addItem}
          className="rounded-lg border px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          Add Item
        </button>
      </section>
    );
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    return (
      <section className={`${depth === 0 ? "space-y-4" : "rounded-xl border p-4"} ${childIndent}`}>
        {depth > 0 && showLabel && <FieldLabel text={label} />}
        <div className="space-y-4">
          {entries.map(([key, current]) => (
            depth === 0 ? (
              <details key={key} className="rounded-xl border p-4" open>
                <summary className="cursor-pointer select-none text-sm font-bold text-gray-900">
                  {toTitleCase(key)}
                </summary>
                <div className="mt-4">
                  <JsonValueEditor
                    label={key}
                    value={current}
                    onChange={(nextValue) =>
                      onChange({
                        ...(value as Record<string, unknown>),
                        [key]: nextValue,
                      })
                    }
                    depth={depth + 1}
                    showLabel={false}
                  />
                </div>
              </details>
            ) : (
              <JsonValueEditor
                key={key}
                label={key}
                value={current}
                onChange={(nextValue) =>
                  onChange({
                    ...(value as Record<string, unknown>),
                    [key]: nextValue,
                  })
                }
                depth={depth + 1}
              />
            )
          ))}
        </div>
      </section>
    );
  }

  if (typeof value === "number") {
    return (
      <label className={`block ${childIndent}`}>
        {showLabel && <FieldLabel text={label} />}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value || 0))}
          className="mt-1 w-full rounded-lg border px-3 py-2"
        />
      </label>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className={`inline-flex items-center gap-2 ${childIndent}`}>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4"
        />
        {showLabel && <FieldLabel text={label} />}
      </label>
    );
  }

  if (value === null) {
    return (
      <label className={`block ${childIndent}`}>
        {showLabel && <FieldLabel text={label} />}
        <input
          value=""
          onChange={(e) => onChange(e.target.value)}
          placeholder="null"
          className="mt-1 w-full rounded-lg border px-3 py-2"
        />
      </label>
    );
  }

  const textValue = String(value ?? "");
  const multiline = textValue.includes("\n") || textValue.length > 100;
  const isImagePath = textValue.match(/\.(png|jpg|jpeg|svg|webp|gif)$/) || label.toLowerCase().includes("image") || label.toLowerCase().includes("file") || label.toLowerCase().includes("icon");

  if (isImagePath) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // In a real app with a backend, we'd upload here.
        // For this project, we assume the user will put the file in the public folder.
        onChange(`/departments/CE/${file.name}`);
      }
    };

    return (
      <div className={`block ${childIndent} space-y-2`}>
        {showLabel && <FieldLabel text={label} />}
        
        <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-lg group">
          {/* Live Preview */}
          <div className="w-24 h-24 rounded-2xl bg-white border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden shrink-0 relative shadow-inner">
            {textValue ? (
              <img 
                src={textValue} 
                alt="Preview" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.classList.add('bg-red-50');
                }}
              />
            ) : (
              <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest text-center px-2">No Image</div>
            )}
          </div>

          <div className="flex-1 w-full space-y-3">
            <div className="flex items-center gap-3">
              <label className="cursor-pointer bg-white border-2 ce-border-gold px-6 py-2.5 rounded-xl text-xs font-black ce-text-navy uppercase tracking-widest hover:ce-bg-navy hover:text-white hover:border-transparent transition-all shadow-sm active:scale-95">
                <span>Upload Image</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              <div className="h-px flex-1 bg-gray-100"></div>
            </div>
            
            <div className="space-y-1">
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Active Path</div>
              <code className="block w-full rounded-lg bg-gray-100 px-3 py-1.5 text-[11px] font-mono text-gray-600 break-all border border-gray-200/50">
                {textValue || "None selected"}
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (multiline) {
    return (
      <label className={`block ${childIndent}`}>
        {showLabel && <FieldLabel text={label} />}
        <textarea
          value={textValue}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 h-24 w-full rounded-lg border px-3 py-2"
        />
      </label>
    );
  }

  return (
    <label className={`block ${childIndent}`}>
      {showLabel && <FieldLabel text={label} />}
      <input
        value={textValue}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border px-3 py-2"
      />
    </label>
  );
}
