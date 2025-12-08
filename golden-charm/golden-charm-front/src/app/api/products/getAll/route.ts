// src/app/api/auth/login/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // aqui você normalmente chamaria seu serviço de autenticação...
  if (email === "test@example.com" && password === "123456") {
    return NextResponse.json({ success: true, token: "fake-jwt-token" });
  }

  return NextResponse.json(
    { success: false, message: "Credenciais inválidas" },
    { status: 401 }
  );
}


////////////////////////////////////////////////////////////////
// CRIAR AS ROTAS CODIGO PROVISORIO SOMENTE PRA FAZER O BUILD //
////////////////////////////////////////////////////////////////