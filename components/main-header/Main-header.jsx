'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MainHeaderBackground from "./Main-header-background";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  const pathname = usePathname();

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
              <Link href="/meals" className={`${pathname === "/meals" ? styles.active : ""}`}>Meals</Link>
            </li>
            <li>
              <Link href="/community" className={`${pathname === "/community" ? styles.active : ""}`}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
