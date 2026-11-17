'use client';

import { useState, type ComponentProps } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function PasswordInput({ className, disabled, ...props }: Omit<ComponentProps<typeof Input>, 'type'>) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input {...props} disabled={disabled} type={visible ? 'text' : 'password'} className={cn('pr-11', className)} />
      <Button type="button" variant="ghost" size="icon" disabled={disabled} aria-label={visible ? 'Hide password' : 'Show password'} aria-pressed={visible} className="absolute inset-y-0 right-0 h-full" onClick={() => setVisible(!visible)}>
        {visible ? <EyeOff /> : <Eye />}
      </Button>
    </div>
  );
}
