import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface StatProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stat: string | number;
  description: string;
}

export default function Stat({ stat, description, className }: StatProps) {
  return (
    <div className={twMerge('w-full', className)}>
      <p className='text-grizz-red font-bold text-xl md:text-2xl lg:text-3xl lg:font-semibold'>
        {stat}
      </p>
      <p className='text-xs w-3/4 mx-auto leading-3 text-slate-500 lg:text-base md:text-sm md:leading-4 lg:leading-4'>
        {description}
      </p>
    </div>
  );
}
