// Generic HTTP helper that wraps fetch and returns a consistent envelope
// { ok, status, body?, error? }
// Can be reused by all service functions in this project.

export async function request(url, options) {
  try {
    const response = await fetch(url, options);
    const body = await response.json().catch(() => null);
    return { ok: response.ok, status: response.status, body };
  } catch (error) {
    console.error("Network error:", error);
    return { ok: false, error };
  }
}
