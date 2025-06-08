// src/app/layout.tsx
////////////////////////////////////////////////////////////////////////////////////
// This is the global layout of the app.                                         ///
// Everything here remains intact, even when navigating or changing language.    ///    
// Perfect for persistent provides such as cart, theme, authentication ...       ///
///////////////////////////////////////////////////////////////////////////////////
// app/layout.tsx
import GlobalProviders from "./GlobalProviders";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}