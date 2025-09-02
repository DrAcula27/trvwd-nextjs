import PageTitle from '@/_components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';

export default function Resources() {
  return (
    <main className="page">
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District Resources" />
        <div className="page-content">
          <div className="card mt-0 sm:max-w-1/2">
            <p>
              Valuable information on water management, conservation,
              billing, service requests, and more. Stay informed,
              access forms, and find answers to common questions.
              We’re committed to providing you with the resources you
              need for a sustainable water usage experience.
            </p>
            <ul className="">
              <li className="resource">
                <Link
                  href={'/images/home/TRVCC-Service-Area.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tahuya River Valley Water District Service Area Map (PDF)"
                  aria-label="Tahuya River Valley Water District Service Area Map (PDF)"
                >
                  Tahuya River Valley Water District Service Area Map
                  (PDF)
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={
                    'https://mrsc.org/explore-topics/utilities/water-sewer/water-sewer-districts-list'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Municipal Research and Services Center - Water/Sewer Districts List"
                  aria-label="Municipal Research and Services Center - Water/Sewer Districts List"
                >
                  Municipal Research and Services Center (MRSC)
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={
                    'https://ecology.wa.gov/Water-Shorelines/Water-quality/Groundwater/Protecting-aquifers/Critical-aquifer-recharge-areas'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Critical Aquifer Recharge Areas - Washington State Department of Ecology"
                  aria-label="Critical Aquifer Recharge Areas - Washington State Department of Ecology"
                >
                  Critical Aquifer Recharge Areas (CARA)
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={'http://www.northmasonrfa.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="North Mason Regional Fire Authority"
                  aria-label="North Mason Regional Fire Authority"
                >
                  North Mason Regional Fire Authority
                </Link>{' '}
                -{' '}
                <Link
                  href={'tel:360-275-6711'}
                  title="Call 360-275-6711"
                  aria-label="Call 360-275-6711"
                >
                  <FaPhone className="inline mb-1" /> 360-275-6711
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={
                    'https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  title="EPA - Drinking Water in Your Home"
                  aria-label="EPA - Drinking Water in Your Home"
                >
                  EPA - Drinking Water in Your Home
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={'https://doh.wa.gov/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Washington State Department of Health"
                  aria-label="Washington State Department of Health"
                >
                  Washington State Department of Health
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={
                    'https://ecology.wa.gov/water-shorelines/water-supply'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Water Supply - Washington State Department of Ecology"
                  aria-label="Water Supply - Washington State Department of Ecology"
                >
                  Water Supply - Washington State Department of
                  Ecology
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={'https://northmasonchamber.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="North Mason Chamber of Commerce"
                  aria-label="North Mason Chamber of Commerce"
                >
                  North Mason Chamber of Commerce
                </Link>
              </li>
              <li className="resource">
                Faith in Action -{' '}
                <Link
                  href={'tel:360-275-0535'}
                  title="Call 360-275-0535"
                  aria-label="Call 360-275-0535"
                >
                  <FaPhone className="inline mb-1" /> 360-275-0535
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={'https://www.waswd.org/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Washington Association of Sewer and Water Districts"
                  aria-label="Washington Association of Sewer and Water Districts"
                >
                  Washington Association of Sewer and Water Districts
                </Link>
              </li>
              <li className="resource">
                <Link
                  href={
                    'http://www.callbeforeyoudig.org/washington/index.asp'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Utility Notification Center of Washington - Call Before You Dig"
                  aria-label="Utility Notification Center of Washington - Call Before You Dig"
                >
                  Utility Notification Center of Washington
                </Link>
                - Call Before You Dig! Dial{' '}
                <Link
                  href={'tel:811'}
                  title="Call 811"
                  aria-label="Call 811"
                >
                  <FaPhone className="inline mb-1" /> 811
                </Link>{' '}
                or{' '}
                <Link
                  href={'tel:1-800-424-5555'}
                  title="Call 1-800-424-5555"
                  aria-label="Call 1-800-424-5555"
                >
                  <FaPhone className="inline mb-1" /> 1-800-424-5555
                </Link>
              </li>
            </ul>
          </div>
          <Image
            src="/images/community/tahuyaRiver02.jpg"
            alt="Tahuya River Valley Water District"
            width={756}
            height={1008}
            priority
            className="rounded-lg shadow-lg sm:max-w-1/2 h-auto"
          />
        </div>
      </section>
    </main>
  );
}
