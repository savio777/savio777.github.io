import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

const Header: React.FC = () => (
  <header className={`${poppins.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-30`}>
    <Link href='/'>
      <Image
        src="/favicon.svg"
        alt="Ícone da letra S, Logo de Sávio"
        width={55}
        height={55}
      />
    </Link>

    <nav className='hidden md:flex items-center gap-10 text-md'>
      <Link href='/'>Sobre mim</Link>
      <Link href='/'>Portfolio</Link>
      <Link href='/contatos'>Entre em contato</Link>
    </nav>
  </header>
);

export default Header;