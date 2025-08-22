interface DataType {
  label: string;
  value: string;
}

interface DropdownWrapperProps {
  datas: DataType[];
  children: React.ReactNode;
}

interface DropdownTriggerProps {
  onClick?: () => void;
  isOpen: boolean;
}

interface DropdownMenuProps {
  isOpen: boolean;
  datas: DataType[];
  onChange: (data: DataType) => void;
  selectedData?: DataType | null;
}

const DropdownWrapper = () => {
  return <div></div>;
};

const DropdownTrigger = ({ onClick, isOpen }: DropdownTriggerProps) => {
  return (
    <div>
      <button type='button' onClick={onClick}>
        드롭다운버튼
      </button>
    </div>
  );
};

const DropdownMenu = ({ datas, isOpen, onChange, selectedData }: DropdownMenuProps) => {
  return (
    <div>
      {datas.map(data => (
        <li key={data.value} onClick={() => onChange(data)}>
          {data.label}
        </li>
      ))}
    </div>
  );
};
