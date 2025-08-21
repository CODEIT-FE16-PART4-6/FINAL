'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScrollY from '@/utils/useScrollY';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollY();

  useEffect(() => {
    scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
  }, [scrollY]);

  return (
    <header
      className={clsx(
        'sticky top-0 left-0 z-10 flex h-[70px] w-full items-center bg-white transition-shadow border border-gray-300',
        {
          shadow: isScrolled,
        },
      )}
    >
      <div className='flex w-full items-center justify-between px-5 md:px-6 lg:mx-auto lg:w-[1200px]'>
        <Link href='/'>
          <Image src='/images/logo.svg' alt='Experia 로고' width={134} height={42} />
        </Link>
        <nav className='flex gap-3 font-medium text-black'>
          <Link href='/signin' className='nav-list'>
            로그인
          </Link>
          <Link href='/signup' className='nav-list'>
            회원가입
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
