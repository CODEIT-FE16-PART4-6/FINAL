'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
export interface Activity {
  id: number;
  name: string;
}

export interface DropdownProps {
  activities: Activity[];
  value: Activity | null;
  onChange: (value: Activity) => void;
  label?: string;
}

export const DropdownSelect = ({ activities, value, onChange, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (activity: Activity) => {
    onChange(activity);
    setIsOpen(false);
  };

  return (
    <div className='w-64' ref={containerRef}>
      {label && <label className='mb-1 block font-semibold'>{label}</label>}
      <div
        className='flex cursor-pointer items-center justify-between rounded border border-gray-300 px-4 py-2'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value?.name || '카테고리'}</span>
        <Image
          src='icons/ic_chevron_down.svg'
          alt='Dropdown Icon'
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className='absolute z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded border border-gray-300 bg-white'>
          {activities.map(activity => (
            <div
              key={activity.id}
              className={`cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white ${
                value?.id === activity.id ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleSelect(activity)}
            >
              {activity.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
