import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => (
  <header>
    <Link href='/'>
      <Image src="/favicon.svg" alt="Ícone da letra S, Logo de Sávio" width={500} height={500} />
    </Link>

    <nav>
      <Link href='/'>Sobre mim</Link>
      <Link href='/'>Portfolio</Link>
      <Link href='/contatos'>Entre em contato</Link>
    </nav>
  </header>
);

export default Header;