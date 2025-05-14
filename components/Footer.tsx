export default function Footer() {
  return (
    // <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
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
        <i>
          &copy; {new Date().getFullYear()} Tahuya River Valley Water
          District. All rights reserved.
        </i>
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
  );
}
