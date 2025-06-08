"use client";


import Footer from "../../../../../components/Footer";
import AppNavbar from "../../../../../components/Navbar";
import Image from "next/image";

function reparation() {
  //const locale = useLocale();
  //const t = useTranslations("reparationPage"); // ← nome da chave de tradução


  return (
    <>
      <AppNavbar />
         <main style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
        <Image
          src="/images/pageInConstruction.png"
          alt="Page under construction"
          width={600}
          height={600}
        />
      </main>
      <Footer />
    </>
  );
}

reparation.displayName = 'reparation';

export default reparation;