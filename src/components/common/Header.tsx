import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

const Header: React.FC = () => (
  <header className={poppins.className}>
    <Link href='/'>
      <Image
        src="/favicon.svg"
        alt="Ícone da letra S, Logo de Sávio"
        width={55}
        height={55}
      />
    </Link>

    <nav>
      <Link href='/'>Sobre mim</Link>
      <Link href='/'>Portfolio</Link>
      <Link href='/contatos'>Entre em contato</Link>
    </nav>
  </header>
);

export default Header;