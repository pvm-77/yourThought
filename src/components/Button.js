
// import cn from 'classnames';

//   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   active?: boolean;
//   className?: string;
//   style?: 

export function Button({
    children,
    onClick,
    active = false,
    className,
    style,
}) {
    const activeClass = active
        ? 'bg-link border-link text-white hover:bg-link focus:bg-link active:bg-link'
        : 'bg-transparent text-primary dark:text-primary-dark active:text-primary shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10';
    const updatedClassName = `${className} text-base leading-tight font-bold rounded-full py-2 px-4 focus:outline focus:outline-offset-2 focus:outline-link dark:focus:outline-link-dark inline-flex items-center my-1 ${activeClass}`;
    return (
        <button
            style={style}
            onMouseDown={(evt) => {
                evt.preventDefault();
                evt.stopPropagation();
            }}
            onClick={onClick}
            className={updatedClassName}>
            {children}
        </button>
    );
}

export default Button;