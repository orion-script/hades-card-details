import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link
      to="/"
      className="font-bold text-3xl md:text-5xl font-mono py-3 md:py-6 w-1/12"
    >
      CARD
    </Link>
  );
}

export default Header;
