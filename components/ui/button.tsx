import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition",
          variant === "gold" && "bg-gold text-black hover:bg-[#e6b422]",
          variant === "outline" && "border border-zinc-600 hover:border-gold",
          variant === "ghost" && "text-zinc-300 hover:text-gold",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
