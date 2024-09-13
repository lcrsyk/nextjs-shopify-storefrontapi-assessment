import Link from "next/link";

type ButtonProps = {
  as?: "button" | "a";
  href?: string;
  icon?: any;
  variant: "primary" | "bordered";
  disabled?: boolean;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export default function Button({
  as = 'button',
  href,
  icon,
  variant,
  disabled,
  children,
  ...rest
}: ButtonProps) {
    console.log(variant)
  const Icon = icon;
  return as === 'a' ? (
    <Link
      href={href || "#"}
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "bordered"
          ? "border-[1.5px] border-primary hover:bg-primary text-primary hover:text-white"
          : null
      } ${rest.className}`}
    >
      {children}
    </Link>
  ) : (
    <button {...rest} className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "bordered"
          ? "border-[1.5px] border-primary hover:bg-primary text-primary hover:text-white"
          : null
      } ${rest.className}`} >
      {children}
    </button>
  );
}
