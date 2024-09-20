import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label'; // Korrigierter Import

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    children: React.ReactNode; // Sicherstellen, dass `children` explizit definiert ist
    htmlFor?: string;
  }
>(({ children, htmlFor, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} htmlFor={htmlFor} {...props}>
    {children} {/* Sicherstellen, dass `children` korrekt an die Label-Komponente übergeben wird */}
  </LabelPrimitive.Root>
));

Label.displayName = 'Label';

export default Label;
