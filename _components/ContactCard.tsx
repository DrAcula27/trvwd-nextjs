import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function ContactCard() {
  return (
    <div className="card mt-0">
      <h2 className="card-title">Commissioner Meetings</h2>
      <h3 className="card-subtitle">(open to the public)</h3>
      <address className="max-w-fit mb-6 -mt-2">
        <p className="m-0">Tahuya River Valley Community Club</p>
        <p className="m-0">1665 NE Tahuya River Dr</p>
        <p className="m-0">Tahuya, WA 98588</p>
      </address>
      <h2 className="card-title">Mailing address</h2>
      <address className="max-w-fit mb-6">
        <p className="m-0">Tahuya River Valley Water District</p>
        <p className="m-0">P.O. Box 849</p>
        <p className="m-0">Belfair, WA 98528</p>
      </address>
      <Link
        href={'tel:360-275-0279'}
        title="Call 360-275-0279"
        aria-label="Call 360-275-0279"
        className="block mb-4"
      >
        <FaPhone className="inline mb-1" /> 360-275-0279
      </Link>
      <Link
        href={'mailto:trvwdistrict@outlook.com'}
        title="Email trvwdistrict@outlook.com"
        aria-label="Email trvwdistrict@outlook.com"
        className="block"
      >
        <MdEmail className="inline mb-1" /> trvwdistrict@outlook.com
      </Link>
    </div>
  );
}
