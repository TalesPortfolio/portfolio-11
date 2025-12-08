'use client';

import Footer from "../../../../components/Footer";
import AppNavbar from "../../../../components/Navbar";
import Image from "next/image";
//import {useTranslations} from 'next-intl';

 
function Favorite() {
  //const t = useTranslations('Favorite');
  return (
    <>
      <AppNavbar />

      <main
        style={{ display: "flex", justifyContent: "center", padding: "3rem" }}
      >
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

Favorite.displayNane = 'Favorite';

export default Favorite;
