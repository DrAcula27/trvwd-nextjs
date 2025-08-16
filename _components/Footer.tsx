import { FaFacebook } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col gap-[24px] items-center justify-center p-8">
      {/* social links */}
      <div className="flex gap-[24px] flex-wrap">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/trvcc/"
          target="_blank"
          rel="noopener noreferrer"
          title="Tahuya River Valley Community Facebook Page"
        >
          <FaFacebook className="fa-2x" size={32} color="#3a96ab" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/groups/1638565539732130"
          target="_blank"
          rel="noopener noreferrer"
          title="Crime Awareness In Tahuya River Valley & Surrounding Areas Facebook Group (Private)"
        >
          <FaFacebook className="fa-2x" size={32} color="#3a96ab" />
        </a>
      </div>

      {/* copyright */}
      <div className="flex gap-[24px] flex-wrap text-center">
        <i>
          &copy; {new Date().getFullYear()} Tahuya River Valley Water
          District. All rights reserved.
        </i>
        {/* <p>Terms of Service</p> */}
        {/* <p>Privacy Policy</p> */}
      </div>

      {/* attribution */}
      <div className="flex gap-[4px] flex-wrap justify-center text-center">
        Website Designed, Developed, and Maintained by
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-bold"
          href="https://danielle-andrews.devdecks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Danielle Andrews
        </a>
      </div>
    </footer>
  );
}
