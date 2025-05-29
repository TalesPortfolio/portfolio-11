"use client";
import { useTranslations } from "next-intl";
import AppNavbar from "../../../../components/Navbar";
import { Section,SectionMain } from "./styled";
import Footer from "../../../../components/Footer";

export default function About() {
  const t = useTranslations("About");
  return (
    <SectionMain>
      <AppNavbar />
      <Section>
        <h1>{t("title")}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero
          voluptatum beatae alias consequuntur sit officiis, sunt magni? Dolorum
          maiores aliquid pariatur optio voluptatibus et quasi aliquam illo,
          tenetur odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Cum libero voluptatum beatae alias consequuntur sit officiis,
          sunt magni? Dolorum maiores aliquid pariatur optio voluptatibus et
          quasi aliquam illo, tenetur odit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Cum libero voluptatum beatae alias
          consequuntur sit officiis, sunt magni? Dolorum maiores aliquid
          pariatur optio voluptatibus et quasi aliquam illo, tenetur odit. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Cum libero
          voluptatum beatae alias consequuntur sit officiis, sunt magni? Dolorum
          maiores aliquid pariatur optio voluptatibus et quasi aliquam illo,
          tenetur odit.
        </p>
        <img
          src="https://dummyimage.com/600x600/ff0000/ffffff&text=Golden+Charm"
          alt="Golden Charm"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero
          voluptatum beatae alias consequuntur sit officiis, sunt magni? Dolorum
          maiores aliquid pariatur optio voluptatibus et quasi aliquam illo,
          tenetur odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Cum libero voluptatum beatae alias consequuntur sit officiis,
          sunt magni? Dolorum maiores aliquid pariatur optio voluptatibus et
          quasi aliquam illo, tenetur odit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Cum libero voluptatum beatae alias
          consequuntur sit officiis, sunt magni? Dolorum maiores aliquid
          pariatur optio voluptatibus et quasi aliquam illo, tenetur odit.
        </p>
        <img
          src="https://dummyimage.com/600x600/ff0000/ffffff&text=Golden+Charm"
          alt="Golden Charm"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero
          voluptatum beatae alias consequuntur sit officiis, sunt magni? Dolorum
          maiores aliquid pariatur optio voluptatibus et quasi aliquam illo,
          tenetur odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Cum libero voluptatum beatae alias consequuntur sit officiis,
          sunt magni? Dolorum maiores aliquid pariatur optio voluptatibus et
          quasi aliquam illo, tenetur odit. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Cum libero voluptatum beatae alias
          consequuntur sit officiis, sunt magni? Dolorum maiores aliquid
          pariatur optio voluptatibus et quasi aliquam illo, tenetur odit. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Cum libero
          voluptatum beatae alias consequuntur sit officiis, sunt magni? Dolorum
          maiores aliquid pariatur optio voluptatibus et quasi aliquam illo,
          tenetur odit. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Cum libero voluptatum beatae alias consequuntur sit officiis,
          sunt magni? Dolorum maiores aliquid pariatur optio voluptatibus et
          quasi aliquam illo, tenetur odit.
        </p>
      </Section>
      <Footer />
    </SectionMain>
  );
}
