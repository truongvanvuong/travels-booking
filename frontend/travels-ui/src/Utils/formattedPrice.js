import { useTranslation } from "react-i18next";

const formatPrice = (originalPrice) => {
  const { i18n } = useTranslation();

  const isVietNamese = i18n.language === "vi";

  let currency = "";
  let languageCode = "";
  isVietNamese ? (currency = "VND") : (currency = "USD");
  isVietNamese ? (languageCode = "vi-VN") : (languageCode = "en-US");
  const price = isVietNamese ? originalPrice * 24000 : originalPrice;
  const formattedPrice = price.toLocaleString(languageCode, {
    style: "currency",
    currency: currency,
  });
  return { languageCode, formattedPrice, price };
};
export default formatPrice;
