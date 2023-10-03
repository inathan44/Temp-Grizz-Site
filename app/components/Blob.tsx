import Image from 'next/image';
import blobSVG from '@/public/blob.svg';
import { ImgHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Blob = ({ className }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Image
      className={twMerge('absolute z-0', className)}
      alt='radial blur blob'
      src={blobSVG}
    ></Image>
  );
};

export default Blob;
