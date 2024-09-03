import clsx from "clsx";
import { useRouter } from "next/router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, onClick, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex mt-10 w-full text-center justify-center h-14 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
