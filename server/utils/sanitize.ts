export function sanitizeInput(val: unknown, maxLength: number = 50000): string {
  if (typeof val !== "string") return "";
  // Strip null bytes and non-printable control characters (except common whitespace)
  let sanitized = val.replace(/\0/g, "").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  // Strip script tags, handlers, expressions, and data/javascript URIs
  sanitized = sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "")
    .replace(/on\w+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/on\w+\s*=\s*[^>\s]+/gi, "")
    .replace(/javascript:[^\s"'>]*/gi, "")
    .replace(/vbscript:[^\s"'>]*/gi, "")
    .trim();

  return sanitized.slice(0, maxLength);
}
