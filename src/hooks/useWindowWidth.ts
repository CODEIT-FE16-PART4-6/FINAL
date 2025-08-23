'use client';

import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    handleWidth();

    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return width;
};

export default useWindowWidth;
