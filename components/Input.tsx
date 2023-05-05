import { ChangeEvent } from 'react';

interface Props {
  id: string;
  value: string;
  label?: string;
  wrapperClassName?: string;
  onChange: (val: string) => void;
}

const Input: React.FC<Props> = ({
  label,
  id,
  value,
  wrapperClassName,
  onChange,
}) => (
  <div className={wrapperClassName}>
    {label && (
      <label
        htmlFor={id}
        className="mb-2"
      >
        {label}
      </label>
    )}
    <div className="relative max-w-[300px] border-2 border-solid border-cyan-500 hover:order-cyan-600 rounded">
      <input
        tabIndex={0}
        id={id}
        className="w-full h-full font-sans text-base font-medium outline-none py-2 px-4"
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default Input;
