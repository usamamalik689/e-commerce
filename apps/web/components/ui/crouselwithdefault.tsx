'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type CarouselWithDefaultProps = Omit<ComponentProps<typeof Carousel>, 'children'> & {
  items: { id: string; content: ReactNode }[];
};

export function CarouselWithDefault({ items, ...props }: CarouselWithDefaultProps) {
  return (
    <Carousel {...props}>
      <CarouselContent>
        {items.map((item) => <CarouselItem key={item.id}>{item.content}</CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
