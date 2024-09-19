"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label"; // Achte auf korrekten Import
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & 
  VariantProps<typeof labelVariants> & 
  { children: React.ReactNode; htmlFor?: string }
>(({ className, children, htmlFor, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    htmlFor={htmlFor} // Hier das htmlFor-Attribut weiterleiten
    {...props}
  >
    {children}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
