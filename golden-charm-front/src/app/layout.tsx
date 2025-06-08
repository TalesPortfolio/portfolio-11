// src/app/layout.tsx
////////////////////////////////////////////////////////////////////////////////////
// This is the global layout of the app.                                         ///
// Everything here remains intact, even when navigating or changing language.    ///    
// Perfect for persistent provides such as cart, theme, authentication ...       ///
///////////////////////////////////////////////////////////////////////////////////
// app/layout.tsx
import GlobalProviders from "./GlobalProviders";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
