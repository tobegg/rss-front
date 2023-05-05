import { ChangeEvent } from 'react';

interface Props {
  count: number;
  currentStep: number;
  onClick: (val: number) => void;
  className?: string;
}

const Pagination: React.FC<Props> = ({
  count,
  currentStep,
  onClick,
  className
}) => {
  const pageArr = Array(count).fill(0);

  return (
    <div className="flex items-center justify-center mt-6 mx-auto">
      {pageArr.map((item, index) => {
        const isActive = currentStep === index + 1;
        const classes = `p-4 cursor-pointer bg-cyan-300 hover:bg-cyan-500 ${isActive ? 'bg-cyan-600' : ''}`;

        return (
          <span
            key={index}
            className={classes}
            onClick={() => onClick(index + 1)}
          >
            {index + 1}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
