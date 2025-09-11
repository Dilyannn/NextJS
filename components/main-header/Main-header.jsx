import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./Main-header-background";
import NavLink from "./Nav-link";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {

  return (
    <>  
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
