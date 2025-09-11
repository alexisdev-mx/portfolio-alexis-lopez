export type ContactPayload = {
  nombre?: string;
  email?: string;
  mensaje?: string;
};

/**
 * Envía el mensaje a Formspree si FORMSPREE_ENDPOINT está definido.
 * De lo contrario, actúa en modo "simulado" (retorna ok).
 */
export async function sendEmail(payload: ContactPayload) {
  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    // Modo simulado (útil en desarrollo o demo)
    console.log("[sendEmail] Simulado:", payload);
    return { ok: true, simulated: true };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Formspree error: ${res.status} ${text}`);
  }

  return { ok: true, simulated: false };
}
