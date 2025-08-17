import { FaFacebook, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="row-start-3 flex flex-col gap-6 items-center justify-center p-8 border-t"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--background)',
      }}
    >
      {/* footer content grid */}
      <div className="footer-main-grid w-full max-w-6xl">
        {/* mission statement section */}
        <div className="footer-mission-section">
          <Image
            src="/logo_NoText.png"
            alt="Tahuya River Valley Water District Logo"
            width={150}
            height={150}
            className="footer-logo"
          />
          <p className="footer-mission-text">
            The mission of the Tahuya River Valley Water District is
            to provide an ample supply of pure water to the Tahuya
            River Valley Community at a reasonable cost.
          </p>
        </div>

        {/* contact information section */}
        <div className="footer-contact-section">
          <h3 className="footer-section-title">Contact Us</h3>

          <div className="footer-contact-group">
            <h4 className="footer-contact-subtitle">
              Commissioner Meetings
            </h4>
            <p className="footer-contact-note">
              (open to the public)
            </p>
            <address className="footer-address">
              <p>Tahuya River Valley Community Club</p>
              <p>1665 NE Tahuya River Drive</p>
              <p>Tahuya, WA 98588</p>
              <p>Fourth Tuesday of each month at 6:00 PM</p>
            </address>
          </div>

          <div className="footer-contact-group">
            <h4 className="footer-contact-subtitle">
              Mailing Address
            </h4>
            <address className="footer-address">
              <p>Tahuya River Valley Water District</p>
              <p>P.O. Box 849</p>
              <p>Belfair, WA 98528</p>
            </address>
          </div>

          <div className="footer-contact-links">
            <Link
              href="tel:3602750279"
              className="footer-contact-link"
              title="Call Tahuya River Valley Water District"
              aria-label="Call Tahuya River Valley Water District"
            >
              <FaPhone className="footer-contact-icon" />
              (360) 275-0279
            </Link>
            <Link
              href="mailto:trvwdistrict@outlook.com"
              className="footer-contact-link"
              title="Email Tahuya River Valley Water District"
              aria-label="Email Tahuya River Valley Water District"
            >
              <MdEmail className="footer-contact-icon" />
              trvwdistrict@outlook.com
            </Link>
          </div>
        </div>

        {/* quick links section */}
        <div className="footer-nav-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <nav className="footer-nav-links">
            <Link href="/" className="footer-nav-link">
              Home
            </Link>
            <Link href="/staff" className="footer-nav-link">
              Staff
            </Link>
            <Link href="/meetings" className="footer-nav-link">
              Meetings
            </Link>
            <Link href="/reports" className="footer-nav-link">
              Reports
            </Link>
            <Link href="/news" className="footer-nav-link">
              News
            </Link>
            <Link href="/resources" className="footer-nav-link">
              Resources
            </Link>
            <Link href="/contact" className="footer-nav-link">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* social links */}
      <div className="flex gap-6 flex-wrap">
        <a
          className="footer-social-link"
          href="https://www.facebook.com/trvcc/"
          target="_blank"
          rel="noopener noreferrer"
          title="Tahuya River Valley Community Facebook Page"
        >
          <FaFacebook size={32} style={{ color: 'var(--primary)' }} />
        </a>
        <a
          className="footer-social-link"
          href="https://www.facebook.com/groups/1638565539732130"
          target="_blank"
          rel="noopener noreferrer"
          title="Crime Awareness In Tahuya River Valley & Surrounding Areas Facebook Group (Private)"
        >
          <FaFacebook size={32} style={{ color: 'var(--primary)' }} />
        </a>
      </div>

      {/* copyright */}
      <div className="footer-text">
        <em style={{ color: 'var(--muted-foreground)' }}>
          &copy; {new Date().getFullYear()} Tahuya River Valley Water
          District. All rights reserved.
        </em>
      </div>

      {/* attribution */}
      <div className="footer-text">
        <span style={{ color: 'var(--muted-foreground)' }}>
          Website Designed, Developed, and Maintained by{' '}
        </span>
        <a
          className="footer-attribution-link"
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
