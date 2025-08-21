import MeetingCard from '@/_components/MeetingCard';
import MeetingMinutesDropdown from '@/_components/MeetingMinutesDropdown';
import Link from 'next/link';

export default function Meetings() {
  return (
    <main className="page">
      <h1 className="title mt-6 p-4 text-center">
        Tahuya River Valley Water District Public Records and Meetings
      </h1>
      <section className="bg-style-2 p-4 sticky top-[75px] z-10 bg-background border-y border-border shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
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
        </div>
      </section>

      <section id="meetings" className="bg-style-1 p-8 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="title text-center mb-6">
            Tahuya River Valley Water District Commission Meetings
          </h2>
          <p className="subtitle text-center mb-8">
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
            complete transparency to the ratepayers and citizens of
            the Water District.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <div className="max-w-fit">
              <MeetingCard />
            </div>

            <div className="card max-w-2xl">
              <h3 className="card-title">Meeting Information</h3>
              <div className="space-y-4">
                <p>
                  TRVWD meetings are open to the public (except for
                  rare executive sessions,{' '}
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
                  ). We welcome everyone to attend our meetings.
                  Public comments are welcome during regular business
                  meeting, but may be limited at the discretion of the
                  Commission.
                </p>
                <p>
                  Regular meetings of the Water Commission are held on
                  the fourth Tuesday of each month, beginning at 6pm,
                  located in the{' '}
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
          </div>
        </div>
      </section>

      <section
        id="public-records"
        className="bg-style-2 p-8 scroll-mt-26"
      >
        <div className="section-content">
          <h2 className="title">Public Records</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p>
              TRVWD will make available upon request our public
              records, except those that are exempted under the Open
              Public Records Act (
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
              ). The majority of TRVWD public records are available
              for download below.
            </p>
            <p>
              If you need a record not listed below, you may submit a
              public records request.
            </p>

            <div className="grid gap-8 mt-12">
              <div className="card">
                <h3 id="minutes" className="card-title scroll-mt-44">
                  Meeting Minutes
                </h3>
                <p className="text-muted-foreground">
                  Access official meeting minutes and documentation
                  from our commission meetings.
                </p>
                <div className="mt-4">
                  <MeetingMinutesDropdown />
                </div>
              </div>

              <div className="card">
                <h3
                  id="resolutions"
                  className="card-title scroll-mt-44"
                >
                  Resolutions
                </h3>
                <p className="text-muted-foreground">
                  Browse official resolutions and decisions made by
                  the water district commission.
                </p>
                <div className="mt-4">
                  <Link href="#" className="btn btn-primary">
                    View Resolutions
                  </Link>
                </div>
              </div>

              <div className="card">
                <h3
                  id="other-records"
                  className="card-title scroll-mt-44"
                >
                  Other Public Records
                </h3>
                <p className="text-muted-foreground">
                  Additional public documents, reports, and records
                  available for review.
                </p>
                <div className="mt-4">
                  <Link href="#" className="btn btn-primary">
                    View Other Records
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
