"use client";

import { PropsWithChildren } from "react";

export const ProductDetailsLayout = ({ children }: PropsWithChildren) => (
  <div
    id="product-details"
    style={{ maxWidth: 1400, margin: "0 auto" }}
    className={"product-details"}
  >
    {children}
  </div>
);
