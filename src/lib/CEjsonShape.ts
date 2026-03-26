function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cloneValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

/**
 * Civil Engineering Department specific JSON merging logic.
 * Ensures new keys and full array contents are preserved while maintaining
 * the expected structure for the admin editor.
 */
export function mergeWithShape<T>(defaults: T, incoming: unknown): T {
  if (Array.isArray(defaults)) {
    if (!Array.isArray(incoming)) return cloneValue(defaults);

    // If it's an array of objects, merge each item with the first item of defaults as a template
    if (defaults.length > 0 && isRecord(defaults[0])) {
      const sample = defaults[0];
      return (incoming as unknown[]).map((item) => mergeWithShape(sample, item)) as T;
    }
    
    // If defaults is an empty array or primitive array, just return the incoming array
    return cloneValue(incoming as T);
  }

  if (isRecord(defaults)) {
    if (!isRecord(incoming)) return cloneValue(defaults);

    const next: Record<string, unknown> = { ...cloneValue(defaults) };
    
    // Merge existing keys and add new ones from incoming
    for (const key of Object.keys(incoming)) {
      if (key in defaults) {
        next[key] = mergeWithShape(
          (defaults as Record<string, unknown>)[key],
          incoming[key]
        );
      } else {
        next[key] = cloneValue(incoming[key]);
      }
    }
    return next as T;
  }

  if (defaults === null) {
    return (incoming ?? defaults) as T;
  }

  // Primitive types: prefer incoming if it matches type
  if (typeof incoming === typeof defaults && incoming !== undefined) {
    return incoming as T;
  }

  return defaults;
}
