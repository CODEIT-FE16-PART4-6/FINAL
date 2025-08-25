'use client';
import { useState, useRef, useEffect } from 'react';

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
    <div className="w-64" ref={containerRef}>
      {label && <label className="block mb-1 font-semibold">{label}</label>}
      <div
        className="border border-gray-300 rounded px-4 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value?.name || '카테고리'}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M19 15l-7-7-7 7' : 'M19 9l-7 7-7-7'} />
        </svg>
      </div>
      {isOpen && (
        <div className="border border-gray-300 rounded bg-white max-h-60 overflow-y-auto absolute w-64 z-50 mt-1">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
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
}

