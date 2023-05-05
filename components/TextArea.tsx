import { ChangeEvent } from 'react';

interface Props {
  id: string;
  value: string;
  label?: string;
  wrapperClassName?: string;
  onChange: (val: string) => void;
}

const TextArea: React.FC<Props> = ({
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
    <textarea
      id={id}
      className="border-2 border-solid border-cyan-500 hover:order-cyan-600 rounded w-full h-full font-sans text-base font-medium outline-none py-2 px-4"
      value={value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
    />
  </div>
);

export default TextArea;
