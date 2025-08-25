import  {DropdownSelect}  from '@/components/DropdownSelect'

// {/* 드롭다운 테스트 페이지 */}

const TestPage = () => {
  const activities = [
    { id: 1, name: '문화/예술' },
    { id: 2, name: '스포츠' },
    { id: 3, name: '투어' },
  ];
  return (
    <div>
      <DropdownSelect activities={activities} value={null} onChange={() => {}} />
    </div>
  );
}

export default TestPage;