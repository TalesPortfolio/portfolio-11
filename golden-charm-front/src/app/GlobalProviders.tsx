// src/app/GlobalProviders.tsx
"use client";

/////////////////////////////////////////////////////////////////////
// This component involves the app with global provides that      ///
// They should not be disassembled, even when changing language.  ///
// Example: Cartprovider (keeps the cart when changing language)  ///
/////////////////////////////////////////////////////////////////////

"use client";

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext"; // ⬅️ importar o ThemeContext

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CartProvider>
  );
}
