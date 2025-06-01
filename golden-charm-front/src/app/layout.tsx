// src/app/layout.tsx
////////////////////////////////////////////////////////////////////////////////////
// This is the global layout of the app.                                         ///
// Everything here remains intact, even when navigating or changing language.    ///    
// Perfect for persistent provides such as cart, theme, authentication ...       ///
///////////////////////////////////////////////////////////////////////////////////


import GlobalProviders from "./GlobalProviders";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Involves the app with global provides (Cartprovider, etc.) */}
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
