import { ChangeEvent } from 'react';

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  className
}) => (
  <button
    tabIndex={0}
    className={`bg-cyan-500 text-white h-[41px] px-4 py-2 rounded ${className || ''}`}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
