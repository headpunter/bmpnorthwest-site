// Returns contact details only after a valid Cloudflare Turnstile token.
export async function onRequestPost({ request, env }) {
  let token = "";
  try { token = (await request.json()).token || ""; } catch { /* no body */ }
  if (!token) return json({ ok: false, error: "missing token" }, 400);

  const ip = request.headers.get("CF-Connecting-IP") || "";
  const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip });
  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const v = await r.json();
  if (!v.success) return json({ ok: false, error: "challenge failed" }, 403);

  return json({ ok: true, phone: env.CONTACT_PHONE, email: env.CONTACT_EMAIL });
}

export function onRequestGet() { return json({ ok: false, error: "POST only" }, 405); }

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
