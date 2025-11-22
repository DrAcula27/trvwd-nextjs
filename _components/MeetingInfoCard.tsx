import Link from 'next/link';

export default function MeetingInfoCard() {
  return (
    <div className="card meeting-card">
      <h3 className="card-title">Meeting Information</h3>
      <div className="space-y-4">
        <p>
          TRVWD meetings are open to the public (except for rare
          executive sessions,{' '}
          <Link
            href={
              'http://apps.leg.wa.gov/RCW/default.aspx?cite=42.30.110'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Executive sessions (RCW 42.30.110) - Washington State Legislature"
            aria-label="Executive sessions (RCW 42.30.110) - Washington State Legislature"
          >
            RCW 42.30.110
          </Link>
          ). We welcome everyone to attend our meetings. Public
          comments are welcome during regular business meeting, but
          may be limited at the discretion of the Commission.
        </p>
        <p>
          Regular meetings of the Water Commission are held on the
          fourth Tuesday of each month, beginning at 6pm, located in
          the{' '}
          <Link
            href={
              'https://www.google.com/maps/place/1665+NE+Tahuya+River+Dr,+Tahuya,+WA+98588/@47.4212847,-122.9742256,236m/data=!3m1!1e3!4m6!3m5!1s0x5491c831cf0cff11:0x11424294f5d50c8d!8m2!3d47.421165!4d-122.973268!16s%2Fg%2F11c27wg_sp?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Tahuya River Valley Community Club Building - Google Maps"
            aria-label="Tahuya River Valley Community Club Building - Google Maps"
          >
            Tahuya River Valley Community Club Building
          </Link>{' '}
          unless otherwise noted.
        </p>
      </div>
      <div className="google-maps-widget">
        <iframe
          title="Tahuya River Valley Community Club Building Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.512263486913!2d-122.9754146843662!3d47.42116507916371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491c831cf0cff11%3A0x11424294f5d50c8d!2s1665%20NE%20Tahuya%20River%20Dr%2C%20Tahuya%2C%20WA%2098588!5e0!3m2!1sen!2sus!4v1705176226786!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
