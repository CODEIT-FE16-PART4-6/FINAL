import DropdownListbox from '@/components/DropdownListbox';
import { DataType } from '@/components/DropdownListbox';

//셀렉트 드롭다운 예시 목데이터
const dataList: DataType[] = [
  { label: '함께 배우면 즐거운 스트릿 댄스', value: '함께 배우면 즐거운 스트릿 댄스' },
  { label: '러시아로 떠나는 국립 발레 배우기', value: '러시아로 떠나는 국립 발레 배우기' },
];

export default function Home() {
  return (
    <main>
      반응형, 컬러 시스템 테스트
      <div className='bg-primary md:bg-green lg:bg-yellow h-6 w-full md:mx-5 md:w-[400px] lg:w-[1200px]'></div>
      <h2 className='text-4xl font-bold text-black'>폰트 테스트</h2>
      <h3 className='text-primary-dark text-3xl font-bold'>폰트 테스트</h3>
      <h4 className='text-red-primary text-2xl font-semibold'>폰트 테스트</h4>
      <h5 className='text-orange text-xl font-medium'>폰트 테스트</h5>
      <h6 className='text-green text-lg'>폰트 테스트</h6>
      <p className='text-base text-black'>폰트 테스트</p>
      <div className='h-[150vh]'></div>
      <DropdownListbox data={dataList} />
    </main>
  );
}
