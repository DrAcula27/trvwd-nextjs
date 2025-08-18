import Image from 'next/image';

export default function Staff() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20">
      <h1>STAFF</h1>
      <Image
        src="/images/logos/logo.png"
        alt="Tahuya River Valley Water District"
        width={256}
        height={128}
        priority
      />
    </main>
  );
}
