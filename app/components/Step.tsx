import { ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';
import Blob from './Blob';

interface StepProps extends ImgHTMLAttributes<HTMLImageElement> {
  headline: string;
  description: string;
  image: any;
  reverse?: boolean;
}

export default function Step({
  headline,
  description,
  className,
  image,
  reverse,
}: StepProps) {
  return (
    <div
      className={cn('flex lg:flex-col items-center gap-8 w-full lg:gap-2', {
        'flex-row-reverse': reverse,
      })}
    >
      <div className='w-full'>
        <h3 className='font-semibold md:text-xl lg:text-2xl lg:mb-1'>
          {headline}
        </h3>
        <p className='text-xs md:text-sm lg:text-base md:leading-4'>
          {description}
        </p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Image
          src={image}
          alt='How it works directions icon'
          className={twMerge(className)}
        />
      </div>
    </div>
  );
}
