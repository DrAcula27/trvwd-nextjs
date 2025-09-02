import Link from 'next/link';
import Image from 'next/image';

export default function MissionStatementCard() {
  return (
    <div className="card mission-statement-card">
      <div className="mission-statement-content">
        <Image
          src="/images/home/trvcc.PNG"
          alt="Tahuya River Valley Water District Service Area Satellite Image"
          width={600}
          height={400}
          className="rounded-lg mb-4"
        />
        <h1 className="card-title">Our Mission</h1>
        <h2 className="card-subtitle">
          The mission of the Tahuya River Valley Water District is to
          provide an ample supply of pure water to the Tahuya River
          Valley Community at a reasonable cost.
        </h2>
        <div className="mission-statement-text">
          <p>
            We strive to be professional and transparent in our
            relationship with our customers.
          </p>
          <p>
            Tahuya River Valley Water District is a municipal
            corporation operating a water supply and distribution
            system as authorized by Washington State Law in{' '}
            <a href="http://apps.leg.wa.gov/RCW/default.aspx?cite=57">
              RCW 57
            </a>
            .
          </p>
          <p>
            To view a PDF map of our service area, click{' '}
            <a
              href="/images/home/TRVCC-Service-Area.pdf"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <Link href="/contact" className="btn-primary btn-card">
        Contact Us
      </Link>
    </div>
  );
}
