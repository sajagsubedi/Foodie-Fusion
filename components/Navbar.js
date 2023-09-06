import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <header className="Header" id="header">
      <nav
        className={`Navbar ${isNavActive ? "active" : ""} ${
          sticky ? "sticky" : ""
        }`}
        id="Navbar"
      >
        <div className="navFirsthalf">
          <div className="logoBx">
            <Link href="/">
              <Image
                className="logo"
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
              <h2 className="appName">Foodie Fusion</h2>
            </Link>
          </div>
          <div
            className="menuToggle"
            id="menuToggle"
            onClick={() => setIsNavActive(!isNavActive)}
          ></div>
        </div>
        <ul className="menu">
          <li>
            <Link className="activeLink" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
