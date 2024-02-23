import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";
import { Metamorphous } from 'next/font/google';

const roboto = Metamorphous({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <h1 className={roboto.className} style={{"fontSize": "40px"}}>Jack Moes</h1>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
