"use client";

//import {useTranslations} from 'next-intl';
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Image from "next/image";

function Login() {
  //const t = useTranslations('Login');
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

Login.displayNane = "Login";

export default Login;
