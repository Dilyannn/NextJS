import Link from "next/link";

import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header className="main-header">
      <Link href="/">
        <img src={logoImg.src} alt="Logo" className="logo" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
