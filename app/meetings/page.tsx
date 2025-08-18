// import Image from 'next/image';
import MeetingCard from '@/_components/MeetingCard';
import Link from 'next/link';

export default function Meetings() {
  return (
    <main className="page">
      <section className="flex flex-col sm:flex-row gap-2">
        <Link href={'#meetings'} className="btn btn-primary">
          Meetings
        </Link>
        <Link href={'#public-records'} className="btn btn-primary">
          Public Records
        </Link>
        <Link href={'#minutes'} className="btn btn-primary">
          Minutes
        </Link>
        <Link href={'#resolutions'} className="btn btn-primary">
          Resolutions
        </Link>
        <Link href={'#other-records'} className="btn btn-primary">
          Other Records
        </Link>
      </section>
      <section id="meetings" className="section-style-1 p-6">
        {/* section that describes the meetings, including the meeting card */}
        <h1 className="title">
          Tahuya River Valley Water District Commission Meetings
        </h1>
        <h2 className="subtitle">
          As a public commission, Tahuya River Valley Water District
          (TRVWD) is subject to the Open Public Meetings Act (
          <Link
            href={
              'http://apps.leg.wa.gov/RCW/default.aspx?cite=42.30'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Open Public Meetings Act (RCW 42.30) - Washington State Legislature"
            aria-label="Open Public Meetings Act (RCW 42.30) - Washington State Legislature"
          >
            RCW 42.30
          </Link>
          ) and the Open Public Records Act (
          <Link
            href={
              'http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Public Records Act (RCW 42.56) - Washington State Legislature"
            aria-label="Public Records Act (RCW 42.56) - Washington State Legislature"
          >
            RCW 42.56
          </Link>
          ). TRVWD supports open government and strives to maintain
          complete transparency to the ratepayers and citizens of the
          Water District.
        </h2>
        <div>
          <MeetingCard />
          <div>
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
              comments are welcome during regular business meeting,
              but may be limited at the discretion of the Commission.
            </p>
            <p>
              Regular meetings of the Water Commission are held on the
              fourth Tuesday of each month, beginning at 6pm , located
              in the{' '}
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
        </div>
      </section>

      <section id="public-records" className="row">
        <h1 className="title">Public Records</h1>
        <p>
          TRVWD will make available upon request our public records,
          except those that are exempted under the Open Public Records
          Act (
          <Link
            href={
              'http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56.070'
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Public Records Act (RCW 42.56.070) - Washington State Legislature"
            aria-label="Public Records Act (RCW 42.56.070) - Washington State Legislature"
          >
            RCW 42.56.070
          </Link>
          ). The majority of TRVWD public records are available for
          download below.
        </p>
        <p>
          If you need a record not listed below, you may submit a
          public records request.
        </p>
        <h2 id="minutes">Meeting Minutes</h2>
        <hr />
        <h2 id="resolutions">Resolutions</h2>
        <hr />
        <h2 id="other-records">Other Public Records</h2>
      </section>
    </main>
  );
}
