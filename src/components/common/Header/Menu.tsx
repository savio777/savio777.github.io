import { MenuCloseIcon } from "@/components/icons/MenuCloseIcon";
import Image from "next/image";
import Link from "next/link";

interface IMenuProps {
  onClose: () => void;
}

const Menu: React.FC<IMenuProps> = ({ onClose }) => (
  <div
    onClick={onClose}
    className="flex fixed inset-0 h-full bg-black-40 backdrop-blur-sm md:hidden"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full bg-h-blue-900 h-96 shadow-md py-4 px-5"
    >
      <div className="flex justify-between mb-5">
        <Link href="/">
          <Image
            src="/favicon.svg"
            width={55}
            height={55}
            alt="ícone da lera H"
          />
        </Link>

        <button onClick={onClose}>
          <MenuCloseIcon className="fill-white w-10 h-10" />
        </button>
      </div>

      <nav className="flex flex-col gap-5 tex-xl p-5 items-center">
        <Link onClick={onClose} href="/">
          About me
        </Link>
        <Link onClick={onClose} href="/">
          Portfolio
        </Link>
        <Link onClick={onClose} href="/contatos">
          Contact
        </Link>
      </nav>
    </div>
  </div>
);

export default Menu;
