import { DropdownSelect, DataType } from '@/components/DropdownSelect';
//셀렉트 드롭다운 예시 목데이터
const dataList:DataType[] = [
  {label: '함께 배우면 즐거운 스트릿 댄스',
  value: '함께 배우면 즐거운 스트릿 댄스',},
  {label: '러시아로 떠나는 국립 발레 배우기',
  value: '러시아로 떠나는 국립 발레 배우기',}
]

export default function Home() {
  return (
    <main>
      반응형, 컬러 시스템 테스트
      <div className='w-full md:w-[400px] h-6 md:mx-5 lg:w-[1200px] bg-primary md:bg-green lg:bg-yellow'></div>
      <h2 className='text-4xl font-bold text-black'>폰트 테스트</h2>
      <h3 className='text-3xl font-bold text-primary-dark'>폰트 테스트</h3>
      <h4 className='text-2xl font-semibold text-red-primary'>폰트 테스트</h4>
      <h5 className='text-xl font-medium text-orange'>폰트 테스트</h5>
      <h6 className='text-lg text-green'>폰트 테스트</h6>
      <p className='text-base text-black'>폰트 테스트</p>
    {/* 드롭다운 테스트 */}
      <DropdownSelect datas={dataList}/>
    </main>
  );
}
