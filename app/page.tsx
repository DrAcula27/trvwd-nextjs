import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        src="/logo.png"
        alt="Tahuya River Valley Water District"
        width={256}
        height={128}
        priority
      />
    </main>
  );
}
