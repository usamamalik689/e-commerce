import { Suspense, type ReactNode } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export function SuspenseSkeleton({ children, fallback = <Skeleton className="h-24 w-full" /> }: { children: ReactNode; fallback?: ReactNode }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
