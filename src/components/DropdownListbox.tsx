'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export interface DataType {
  label: string;
  value: string;
}

export interface DropdownProps {
  data: DataType[];
}

/**
 * 드롭다운 value와 트리거 버튼 렌더링을 포함한 컴포넌트 입니다
 * 선택한 value가 드롭다운 외부에 표시됩니다
 * @param {DataType[]} props.dataList - 드롭다운에 표시될 데이터 항목 배열 datas={dataList}
 */
const DropdownListbox: React.FC<DropdownProps> = ({ data }) => {
  const [selectedData, setSelectedData] = useState<DataType | null>(null);

  return (
    <div className='mx-auto h-screen w-52 pt-20'>
      <Listbox value={selectedData} onChange={setSelectedData} __demoMode>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
          )}
        >
          {selectedData?.value || '체험을 선택하세요'}
          <ChevronDownIcon
            className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
            aria-hidden='true'
          />
        </ListboxButton>
        <ListboxOptions
          anchor='bottom'
          transition
          className={clsx(
            'w-(--button-width) rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0',
          )}
        >
          {data.map(data => (
            <ListboxOption
              key={data.value}
              value={data}
              className='group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10'
            >
              <CheckIcon className='invisible size-4 fill-white group-data-selected:visible' />
              <div className='text-sm/6 text-white'>{data.value}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default DropdownListbox;
