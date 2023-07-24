import clsx from 'clsx';

interface IconProps {
  className?: string;
  name: string;
  size?: string | number;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export const Icon: React.FC<IconProps> = ({className, name, size, onClick}) => {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        className,
        'text-current notranslate',
        'inline-flex justify-center items-center',
        'leading-none tracking-normal',
        'align-middle select-none'
      )}
      style={{
        fontFeatureSettings: '"liga"',
        fontSize: size && size + 'px',
        width: size && size + 'px',
        height: size && size + 'px',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        className="fill-current w-6 h-6"
        style={{
          fontSize: size && size + 'px',
          width: size && size + 'px',
          height: size && size + 'px',
        }}
      >
        <path d={name}></path>
      </svg>
    </span>
  );
};
