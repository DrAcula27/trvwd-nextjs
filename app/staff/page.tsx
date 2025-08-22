import Image from 'next/image';

export default function Staff() {
  return (
    <main className="page">
      <h1 className="title mt-6 p-4 text-center">
        Tahuya River Valley Water District Staff and Commission
      </h1>
      <section className="bg-style-1">
        <div className="page-content">
          <Image
            src="/images/community/waterTower02.jpg"
            alt="Water Tower - Tahuya River Valley Water District"
            width={756}
            height={1008}
            priority
            className="rounded-lg shadow-lg mb-4 sm:mb-0 w-full max-w-md h-auto"
          />
          <div className="card mt-0">
            <h2 className="card-title">Staff</h2>
            <h3 className="card-subtitle">
              Drew Noble: System Manager
            </h3>
            <Image
              src="/images/staff/Drew-Noble.png"
              alt="Tahuya River Valley Water District"
              width={512}
              height={256}
              priority
              className="rounded-lg w-full h-auto"
            />
            <div className="max-w-fit mt-8">
              <h2 className="card-title">Commissioners</h2>
              <ul className="list-disc list-inside">
                <li>
                  <span className="bold-text">President</span>: Lisa
                  Johnson
                </li>
                <li>
                  <span className="bold-text">Treasurer</span>:
                  Pretoria Randles
                </li>
                <li>
                  <span className="bold-text">Secretary</span>:
                  Danielle Andrews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
