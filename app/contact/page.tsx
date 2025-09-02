import ContactCard from '@/_components/ContactCard';
import PageTitle from '@/_components/PageTitle';
import StaffCard from '@/_components/StaffCard';

export default function Contact() {
  return (
    <main className="page">
      <section className="bg-style-1">
        <PageTitle title="Tahuya River Valley Water District Contact Information" />
        <div className="page-content">
          <ContactCard />
          <StaffCard />
        </div>
      </section>
    </main>
  );
}
