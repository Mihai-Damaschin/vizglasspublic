"use client";

import { PropsWithChildren } from "react";
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";

const { useToken } = theme;

export const ProductDetailsLayout = ({ children }: PropsWithChildren) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["ProductDetailsLayout"] },
    () => ({
      ".product-details": {
        maxWidth: 1400,
        margin: "0 auto",
        padding: "80px 60px",

        "@media (max-width: 767px)": {
          padding: "40px 20px",
        },
      },
    }),
  );

  return wrapSSR(
    <div id="product-details" className={"product-details"}>
      {children}
    </div>,
  );
};
