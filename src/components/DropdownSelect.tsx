'use client';
import { useState } from 'react';
// import Image from 'next/image';
import clsx from 'clsx';

export interface DataType {
  label: string;
  value: string;
}

export interface DropdownTriggerProps {
  onClick?: () => void;
  isOpen: boolean;
  value?: string;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  datas: DataType[];
  onChange: (data: DataType) => void;
  selectedData?: DataType | null;
}

/**
 * 드롭다운 value와 트리거 버튼 렌더링을 포함한 컴포넌트 입니다
 * 선택한 value가 드롭다운 외부에 표시됩니다
 * @param {DataType[]} props.datas - 드롭다운에 표시될 데이터 항목 배열 datas={dataList}
 */
export const DropdownSelect = ({ datas }: { datas: DataType[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<DataType | null>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleChange = (data: DataType) => {
    setSelectedData(data);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <DropdownTrigger onClick={toggleDropdown} isOpen={isOpen} value={selectedData?.label}/>
        <DropdownMenu
          datas={datas}
          isOpen={isOpen}
          onChange={handleChange}
          selectedData={selectedData}
        />
      </div>
    </div>
  );
};

export const DropdownTrigger = ({ onClick, value}: DropdownTriggerProps) => {
  return (
    <div>
      <button type='button' onClick={onClick}>
        {/* 선택된 값 또는 기본 텍스트 보여줌 */}
        <span>{value || '체험을 선택하세요'}</span>
      </button>
    </div>
  );
};

export const DropdownMenu = ({ datas, isOpen, onChange, selectedData }: DropdownMenuProps) => {
  if (!isOpen) return null;
  return (
    <div>
      <ul>
      {datas.map(data => (
        <li
        key={data.value}
        onClick={() => onChange(data)}
        className={clsx('cursor-pointer px-4 py-2 hover:bg-gray-200', {
          'bg-gray-300': selectedData?.value === data.value,
        })}
        >
          {data.label}
        </li>
      ))}
      </ul>
    </div>
  );
};

{/* <Image src={'/icons/ic_meatball_40px.svg'} width={40} height={40} alt='' /> */}