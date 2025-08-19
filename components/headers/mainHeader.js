import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./mainHeader.module.css";
import MainHeaderBg from "./mainHeaderBg";
import NavLink from "./navLink";

const MainHeader = () => (
  <>
    <MainHeaderBg />
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="Plate with some food on it." priority />
        Nextlevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default MainHeader;
