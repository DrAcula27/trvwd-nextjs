import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <ul className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <li>Home</li>
          <li>Staff/Commission</li>
          <li>Meetings</li>
          <li>Reports</li>
          <li>News</li>
          <li>Resources</li>
          <li>Contact</li>
          <li>(360) 275-0279</li>
        </ul>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/logo.png"
          alt="Tahuya River Valley Water District logo"
          width={256}
          height={128}
          priority
        />
      </main>
      <footer className="row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center">
        <div className="flex gap-[24px] flex-wrap">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.facebook.com/trvcc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tahuya River Valley Community Facebook Page
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.facebook.com/groups/1638565539732130"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crime Awareness In Tahuya River Valley & Surrounding Areas
            Facebook Group (Private)
          </a>
        </div>
        <div className="flex gap-[24px] flex-wrap">
          <i>© 2025 Tahuya River Valley Water District</i>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-[24px] flex-wrap">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://danielle-andrews.devdecks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Designed, Developed, and Maintained by Danielle
            Andrews
          </a>
        </div>
      </footer>
    </div>
  );
}
