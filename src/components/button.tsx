import Link from "next/link";

type ButtonProps = {
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "danger" | "bordered";
  isDisable?: boolean;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export default function Button({
  as = "button",
  href,
  variant,
  isDisable,
  children,
  ...rest
}: ButtonProps) {
  return as === "a" ? (
    <Link
      href={href || "#"}
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "bordered"
          ? "border-[1.5px] border-primary hover:bg-primary text-primary hover:text-white"
          : variant === "danger"
          ? "bg-red-800 text-white"
          : null
      } ${rest.className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      {...rest}
      disabled={isDisable}
      className={`${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "bordered"
          ? "border-[1.5px] border-primary hover:bg-primary text-primary hover:text-white"
          : variant === "danger"
          ? "bg-red-800 text-white"
          : null
      } ${rest.className}`}
    >
      {children}
    </button>
  );
}
