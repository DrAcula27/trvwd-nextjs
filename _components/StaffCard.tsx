import Image from 'next/image';

export default function StaffCard() {
  return (
    <div className="card mt-0">
      <h2 className="card-title">Staff</h2>
      <h3 className="card-subtitle">Drew Noble: System Manager</h3>
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
            <span className="bold-text">President</span>: Lisa Johnson
          </li>
          <li>
            <span className="bold-text">Treasurer</span>: Pretoria
            Randles
          </li>
          <li>
            <span className="bold-text">Secretary</span>: Danielle
            Andrews
          </li>
        </ul>
      </div>
    </div>
  );
}
