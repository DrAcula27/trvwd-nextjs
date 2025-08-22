import Image from 'next/image';
import Link from 'next/link';

export default function Reports() {
  return (
    <main className="page">
      <section className="bg-style-1 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-6xl mx-auto">
          <div className="card mt-0 max-w-1/2">
            <h1 className="title">
              We Prioritize Your Health and Safety
            </h1>
            <p>
              Our comprehensive water quality report ensures
              transparency and adherence to the{' '}
              <Link
                href={
                  'https://ecology.wa.gov/Water-Shorelines/Water-quality/Water-quality-standards'
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Water Quality Standards - Washington State Department of Ecology"
                aria-label="Water Quality Standards - Washington State Department of Ecology"
              >
                highest standards
              </Link>
              . Through advanced filtration, rigorous testing, and
              constant monitoring, we guarantee that the water you
              receive is free from contaminants. Trust us to provide
              you with the best water quality for your peace of mind.
            </p>
            <p className="bold-text">
              To view all reports on the Tahuya River Valley Water
              District, click the link below to visit Washington
              State&apos;s department of health. Read and accept the
              disclaimer and search for Tahuya River Valley Water
              District. The Water System ID is{' '}
              <span className="standout-text">87115N</span>
              . <br />
              <Link
                href={
                  'https://fortress.wa.gov/doh/eh/portal/odw/si/Disclaimer.aspx?Page=/portal/odw/si/listmultiwatersystems.aspx'
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Washington State Department of Health - Division of Environmental Health - Office of Drinking Water"
                aria-label="Washington State Department of Health - Division of Environmental Health - Office of Drinking Water"
              >
                Washington State Department of Health - Division of
                Environmental Health - Office of Drinking Water
              </Link>
            </p>
          </div>
          <Image
            src="/images/community/communityPond01.jpg"
            alt="Tahuya River Valley Water District"
            width={1008}
            height={756}
            priority
            className="rounded-lg shadow-lg max-w-1/2 h-auto"
          />
        </div>
      </section>
    </main>
  );
}
