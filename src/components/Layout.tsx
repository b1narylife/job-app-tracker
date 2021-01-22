import React, { ReactChild } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactChild;
}

function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
