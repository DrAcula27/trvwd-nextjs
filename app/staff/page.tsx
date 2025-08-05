import Image from 'next/image';

export default function Staff() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
