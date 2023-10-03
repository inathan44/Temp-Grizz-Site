import React, { SVGAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import logoWithText from 'public/Transparent Logo Cropped.png';

function GrizzLogo({ className }: SVGAttributes<SVGElement>) {
  return (
    <Image
      alt='Grizz Logo with text'
      src={logoWithText}
      className={twMerge(className)}
    />
  );
}

export default GrizzLogo;
