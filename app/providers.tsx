"use client";

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ cssVar: true, hashed: false }}>
        {children}
      </ConfigProvider>
    </QueryClientProvider>
  );
};
