import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <button className='btn btn-primary'>Hello</button>
      <div className='glass h-80 w-60'>Glass</div>
    </main>
  );
}