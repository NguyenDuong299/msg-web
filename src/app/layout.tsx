import type { Metadata } from "next";
import "./globals.css";
import '../public/style/sb-admin-2.min.css';
import AppProvider from "./AppProvider";
import { cookies } from "next/headers";
import Layout from "./admin/_components/layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  console.log("cookieStore", sessionToken);
  return (
    <html lang="en">
      <body>
        <AppProvider initialSessionToken={sessionToken?.value}>
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
