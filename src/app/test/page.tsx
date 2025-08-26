'use client';
import { DropdownSelect } from '@/components/DropdownSelect';
import { useState } from 'react';
import { DropdownMeatball } from '@/components/DropdownMeatball';

// {/* 드롭다운 테스트 페이지 */}

const activities = [
  { id: 1, name: '문화/예술' },
  { id: 2, name: '스포츠' },
  { id: 3, name: '투어' },
];
const TestPage = () => {
  //셀렉트 관련 상태와 함수
  const [selectedActivityId, setSelectedActivityId] = useState<number>(activities[0].id);
  const handleDropdownChange = (id: number) => {
    setSelectedActivityId(id); // 드롭다운에서 선택한 id로 상태 업데이트
  };

  //미트볼 관련 함수
  const handleEdit = () => {
    alert('수정하기 선택됨');
  };

  const handleDelete = () => {
    alert('삭제 선택됨');
  };

  return (
    <div>
      <DropdownSelect
        activities={activities}
        placeholder='카테고리'
        value={activities.find(activity => activity.id === selectedActivityId) || null}
        onChange={handleDropdownChange}
      />
      <DropdownMeatball onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TestPage;
