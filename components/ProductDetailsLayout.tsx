"use client";

import { PropsWithChildren } from "react";

export const ProductDetailsLayout = ({ children }: PropsWithChildren) => (
  <div
    id="product-details"
    style={{ maxWidth: "88.5rem", margin: "0 auto" }}
    className="py-14 px-5 md:py-14 md:px-0"
  >
    {children}
  </div>
);
