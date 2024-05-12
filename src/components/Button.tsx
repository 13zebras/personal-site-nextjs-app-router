"use client";

import Link from "next/link";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  type?: "button" | "submit" | "reset";
  id?: string;
  className?: string;
  onClick?(e: React.FormEvent | unknown): void;
  onKeyDown?(): void;
  style?: React.CSSProperties;
  link?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  type,
  id,
  className,
  onClick,
  onKeyDown,
  disabled,
  style,
  link,
}: Props) => {
  const btn = (
    <button
      type={type}
      id={id}
      className={`flex justify-center items-center text-zinc-300 hover:text-sky-200 active:text-sky-400 text-sm rounded-3xl border-2 border-zinc-400 hover:border-sky-300 active:border-sky-500 bg-black/20 transition-all duration-300 hover:bg-black/40 ${className || ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );

  if (link && link.length > 0) return <Link href={link}>{btn}</Link>;

  return btn;
};

export default Button;
