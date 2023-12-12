import { ReactNode } from "react";
import { JetBrains_Mono } from 'next/font/google'

import Header from "./Header";

const jetBrainsMonno = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400'
})

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className={jetBrainsMonno.className}>
    <Header />

    {children}
  </div>
);


export default Layout;