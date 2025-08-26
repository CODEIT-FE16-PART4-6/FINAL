'use client';
import { DropdownSelect, Activity } from '@/components/DropdownSelect';
import { useState } from 'react';

// {/* 드롭다운 테스트 페이지 */}

const activities = [
  { id: 1, name: '문화/예술' },
  { id: 2, name: '스포츠' },
  { id: 3, name: '투어' },
];
const TestPage = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<number>(activities[0].id);

  const handleDropdownChange = (id: number) => {
    setSelectedActivityId(id); // 드롭다운에서 선택한 id로 상태 업데이트
  };

  return (
    <div>
      <DropdownSelect
        activities={activities}
        placeholder='카테고리'
        value={activities.find(activity => activity.id === selectedActivityId) || null}
        onChange={() => handleDropdownChange(selectedActivityId)}
      />
    </div>
  );
};

export default TestPage;
