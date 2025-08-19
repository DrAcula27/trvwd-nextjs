import Image from 'next/image';

export default function Staff() {
  return (
    <main className="page">
      <h1 className="title mt-6 p-4 text-center">
        Tahuya River Valley Water District Staff and Commission
      </h1>
      <section className="bg-style-1 p-4 flex flex-col items-center justify-center sm:flex-row">
        <div className="card max-w-fit mx-auto">
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
            className="rounded-lg"
          />
        </div>
        <div className="card max-w-fit mx-auto p-8">
          <h2 className="card-title">Commissioners</h2>
          <h3 className="card-subtitle">
            Tahuya River Valley Water District
          </h3>
          <ul className="list-disc list-inside">
            <li>President: Lisa Johnson</li>
            <li>Treasurer: Pretoria Randles</li>
            <li>Secretary: Danielle Andrews</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
