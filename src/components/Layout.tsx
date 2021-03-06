import React, { ReactChild } from "react";
import Link from "next/link";

interface Props {
  children: ReactChild;
}

function Layout({ children }: Props) {
  return (
    <div
      className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
      style={{ minHeight: "100vh" }}
    >
      <header className="py-3 shadow-2xl">
        <div className="container mx-auto px-5 lg:px-0">
          <Link href="/">
            <a>
              <h1 className="text-center text-2xl">Job Application Tracker</h1>
            </a>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-3 lg:px-0">{children}</div>
    </div>
  );
}

export default Layout;
