import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, email, mensaje } = data || {};

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    await sendEmail({ nombre, email, mensaje });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Error en /api/contact:", e);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
