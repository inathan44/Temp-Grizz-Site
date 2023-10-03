import Link from 'next/link';
import GrizzLogo from './GrizzLogo';

export default function Navbar() {
  return (
    <nav className='p-3 z-10'>
      <Link href={'/'}>
        <GrizzLogo className='w-24' />
      </Link>
    </nav>
  );
}
