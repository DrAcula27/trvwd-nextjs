import Link from 'next/link';
import PageTitle from '@/_components/PageTitle';
import MeetingCard from '@/_components/MeetingCard';
import MeetingInfoCard from '@/_components/MeetingInfoCard';
import MeetingMinutesArchive from '@/_components/MeetingMinutesArchive';
import ResolutionsArchive from '@/_components/ResolutionsArchive';
import OtherPublicRecordsArchive from '@/_components/OtherPublicRecordsArchive';

export default function Meetings() {
  return (
    <main className="page">
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District Public Records and Meetings" />
      </section>
      <section className="bg-style-2 sticky top-[75px] z-10 bg-background border-y border-border shadow-sm py-1">
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center flex-wrap px-2 py-2 sm:py-2">
          <Link
            href={'#meetings'}
            className="btn btn-primary text-xs sm:text-sm"
          >
            Meetings
          </Link>
          <Link
            href={'#public-records'}
            className="btn btn-primary text-xs sm:text-sm"
          >
            Public Records
          </Link>
          <Link
            href={'#minutes'}
            className="btn btn-primary text-xs sm:text-sm"
          >
            Minutes
          </Link>
          <Link
            href={'#resolutions'}
            className="btn btn-primary text-xs sm:text-sm"
          >
            Resolutions
          </Link>
          <Link
            href={'#other-records'}
            className="btn btn-primary text-xs sm:text-sm"
          >
            Other Records
          </Link>
        </div>
      </section>

      <section id="meetings" className="bg-style-1 scroll-mt-[100px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="title text-center mb-6">Meetings</h2>
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

            <div className="max-w-2xl">
              <MeetingInfoCard />
            </div>
          </div>
        </div>
      </section>

      <section
        id="public-records"
        className="bg-style-2 scroll-mt-[100px]"
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
                <h3
                  id="minutes"
                  className="card-title scroll-mt-[175px]"
                >
                  Meeting Minutes
                </h3>
                <p className="text-muted-foreground">
                  Access official meeting minutes and documentation
                  from our commission meetings.
                </p>
                <div className="mt-4">
                  <MeetingMinutesArchive />
                </div>
              </div>

              <div className="card">
                <h3
                  id="resolutions"
                  className="card-title scroll-mt-[175px]"
                >
                  Resolutions
                </h3>
                <p className="text-muted-foreground">
                  Browse official resolutions and decisions made by
                  the water district commission.
                </p>
                <div className="mt-4">
                  <ResolutionsArchive />
                </div>
              </div>

              <div className="card">
                <h3
                  id="other-records"
                  className="card-title scroll-mt-[175px]"
                >
                  Other Public Records
                </h3>
                <p className="text-muted-foreground">
                  Additional public documents, reports, and records
                  available for review.
                </p>
                <div className="mt-4">
                  <OtherPublicRecordsArchive />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
