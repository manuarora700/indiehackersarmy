"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "simple";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "no-underline flex space-x-2 group cursor-pointer relative  transition duration-200 rounded-full p-px text-xs font-semibold leading-6 px-4 py-2";

  const variantStyles = {
    primary:
      "w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-black  text-white",
    secondary:
      "relative z-20 text-sm bg-white shadow-input text-black  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
    simple:
      "relative z-20 text-sm bg-transparent shadow-input text-white  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
