import Image from 'next/image';

export default function Home() {
  return (
    <main>
      반응형, 컬러 시스템 테스트
      <div className='w-full md:w-[400px] h-6 md:mx-5 lg:w-[1200px] bg-primary md:bg-green lg:bg-yellow'></div>
    </main>
  );
}
