import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import ContactMapCard from "../ContactMapCard/ContactMapCard";

type ContactInfoData = {
  title: string;
  factoryLabel: string;
  factoryAddress: string;
  officeLabel: string;
  officeAddress: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phones: string[];
  taxCodeLabel: string;
  taxCode: string;
};

type ContactMapData = {
  iframeTitle: string;
  src: string;
  note: string;
};

type ContactContentSectionProps = {
  contactInfo: ContactInfoData;
  mapInfo: ContactMapData;
};

const ContactContentSection = ({
  contactInfo,
  mapInfo,
}: ContactContentSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <ContactInfoCard {...contactInfo} />
        <ContactMapCard {...mapInfo} />
      </div>
    </section>
  );
};

export default ContactContentSection;
