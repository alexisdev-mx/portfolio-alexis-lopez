import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

type ContactBody = {
  nombre: string;
  email: string;
  mensaje: string;
};

const MAX_LENGTH = {
  nombre: 120,
  email: 180,
  mensaje: 2000
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isContactBody(x: unknown): x is ContactBody {
  if (typeof x !== "object" || x === null) return false;
  const r = x as Record<string, unknown>;
  return (
    typeof r.nombre === "string" &&
    typeof r.email === "string" &&
    typeof r.mensaje === "string"
  );
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as unknown;

    if (!isContactBody(raw)) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const nombre = raw.nombre.trim();
    const email = raw.email.trim();
    const mensaje = raw.mensaje.trim();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }
    if (nombre.length > MAX_LENGTH.nombre || email.length > MAX_LENGTH.email || mensaje.length > MAX_LENGTH.mensaje) {
      return NextResponse.json({ error: "Los datos exceden la longitud permitida." }, { status: 413 });
    }

    await sendEmail({ nombre, email, mensaje });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("Error en /api/contact:", msg);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
