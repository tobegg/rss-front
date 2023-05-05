import { ChangeEvent } from 'react';

interface Props {
  id: string;
  value: string;
  options: string[];
  label?: string;
  onChange: (val: string) => void;
}

const Select: React.FC<Props> = ({
  id,
  options,
  value,
  label,
  onChange
}) => (
  <div className="">
    {label && (
      <label
        htmlFor={id}
        className="mb-2"
      >
        {label}
      </label>
    )}
    <select
      id={id}
      className="block py-2 px-4 relative max-w-[300px] border-2 border-solid border-cyan-500 hover:order-cyan-600 rounded"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value="">-----</option>
      {options.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        );
      })}
    </select>
  </div>
);

export default Select;
