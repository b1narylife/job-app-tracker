import React, { ReactChild, useState } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactChild;
}

function Layout({ children }: Props) {
  const [isUserLoggedIn] = useState(false);

  return (
    <div>
      <header>
        <Header isUserLoggedIn={isUserLoggedIn} />
      </header>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
