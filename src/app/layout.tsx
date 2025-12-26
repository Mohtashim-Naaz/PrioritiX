import "./globals.css";
import type { Metadata } from "next";
import ClientThemeWrapper from "./ClientThemeWrapper";

export const metadata: Metadata = {
  title: "PrioritiX",
  description: "Prioritize. Execute. Win.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientThemeWrapper>{children}</ClientThemeWrapper>
      </body>
    </html>
  );
}
