export function sanitizeInput(val: unknown, maxLength: number = 50000): string {
  if (typeof val !== "string") return "";
  const sanitized = val
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:[^\s"]*/gi, "")
    .trim();
  return sanitized.slice(0, maxLength);
}
