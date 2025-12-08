"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import AppNavbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { useTranslations } from "next-intl";

import {
  PageWrapper,
  MainContent,
  Title,
  Item,
  ItemDetails,
  RemoveButton,
  FinishButton,
  Total,
} from "./styled";

function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const t = useTranslations("CheckoutPage");

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <PageWrapper>
      <AppNavbar />
      <MainContent>
        <Title>{t("title")}</Title>

        {cart.length === 0 ? (
          <p>{t("empty")}</p>
        ) : (
          <>
            {cart.map((item) => (
              <Item key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  style={{ borderRadius: "8px" }}
                />
                <ItemDetails>
                  <h3>{item.title}</h3>
                  <p>
                    {t("quantity")}: {item.quantity}
                  </p>
                  <p>
                    {t("price")}: {item.price}
                  </p>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    {t("remove")}
                  </RemoveButton>
                </ItemDetails>
              </Item>
            ))}

            <Total>
              {t("total")}: €{total.toFixed(2)}
            </Total>

            <FinishButton onClick={clearCart}>
              {t("checkout")}
            </FinishButton>
          </>
        )}
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

CheckoutPage.displayName = 'CheckoutPage';

export default CheckoutPage;