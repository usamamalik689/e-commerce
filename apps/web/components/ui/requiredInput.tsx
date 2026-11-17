'use client';

import { useId, type ComponentProps } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function RequiredInput({ label, id, ...props }: ComponentProps<typeof Input> & { label: string }) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId}>{label}<span aria-hidden="true" className="text-destructive">*</span></Label>
      <Input {...props} id={inputId} required />
    </div>
  );
}
