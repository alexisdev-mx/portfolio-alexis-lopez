import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

type ContactBody = {
  nombre: string;
  email: string;
  mensaje: string;
};

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

    const { nombre, email, mensaje } = raw;
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
