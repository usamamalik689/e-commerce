import type { ComponentProps, ReactNode } from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type InputWithIconProps = ComponentProps<typeof Input> & {
  icon: ReactNode;
};

export function InputWithIcon({ icon, className, ...props }: InputWithIconProps) {
  return (
    <div className="relative">
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground [&_svg]:size-4">
        {icon}
      </span>
      <Input className={cn('pl-9', className)} {...props} />
    </div>
  );
}
