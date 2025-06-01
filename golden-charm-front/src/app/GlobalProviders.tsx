// src/app/GlobalProviders.tsx
"use client";

/////////////////////////////////////////////////////////////////////
// This component involves the app with global provides that      ///
// They should not be disassembled, even when changing language.  ///
// Example: Cartprovider (keeps the cart when changing language)  ///
/////////////////////////////////////////////////////////////////////

import { CartProvider } from "@/context/CartContext";

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}