import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Menu from "./Menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  return (
    <header
      className={`${poppins.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-30`}
    >
      <Link href="/">
        <Image
          src="/favicon.svg"
          alt="Ícone da letra S, Logo de Sávio"
          width={55}
          height={55}
        />
      </Link>

      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>

      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">About me</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/contatos">Contact</Link>
      </nav>

      {isOpenMenu && <Menu onClose={closeMenu} />}
    </header>
  );
};

export default Header;
