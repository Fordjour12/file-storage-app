import type React from "react";
import { Fragment } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <NavBar />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <Footer />
    </Fragment>
  );
}
