import ContactCard from '@/_components/ContactCard';
import StaffCard from '@/_components/StaffCard';

export default function Contact() {
  return (
    <main className="page">
      <section className="bg-style-1">
        <h1 className="title text-center">
          Contact Tahuya River Valley Water District
        </h1>
        <div className="page-content">
          <ContactCard />
          <StaffCard />
        </div>
      </section>
    </main>
  );
}
