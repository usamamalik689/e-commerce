'use client';

import { useId, type ComponentProps } from 'react';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function RequiredTextarea({ label, id, ...props }: ComponentProps<typeof Textarea> & { label: string }) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId}>{label}<span aria-hidden="true" className="text-destructive">*</span></Label>
      <Textarea {...props} id={inputId} required />
    </div>
  );
}
