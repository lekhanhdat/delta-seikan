type ContactInfoCardProps = {
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

const formatPhone = (phone: string) => {
  if (phone.length === 10) {
    return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }

  return phone;
};

const ContactInfoCard = ({
  title,
  factoryLabel,
  factoryAddress,
  officeLabel,
  officeAddress,
  emailLabel,
  email,
  phoneLabel,
  phones,
  taxCodeLabel,
  taxCode,
}: ContactInfoCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
      <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary-dark">{title}</h2>

      <div className="mt-6 space-y-6 text-gray-700">
        <div>
          <p className="font-semibold text-gray-900">{factoryLabel}</p>
          <p className="mt-2 leading-relaxed">{factoryAddress}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-900">{officeLabel}</p>
          <p className="mt-2 leading-relaxed">{officeAddress}</p>
        </div>
      </div>

      <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-gray-700">
        <p>
          <span className="font-semibold text-gray-900">{emailLabel}: </span>
          <a href={`mailto:${email}`} className="text-primary-dark hover:text-primary">
            {email}
          </a>
        </p>

        <p>
          <span className="font-semibold text-gray-900">{phoneLabel}: </span>
          {phones.map((phone, index) => (
            <span key={phone}>
              <a href={`tel:${phone}`} className="text-primary-dark hover:text-primary">
                {formatPhone(phone)}
              </a>
              {index < phones.length - 1 ? " - " : ""}
            </span>
          ))}
        </p>

        <p>
          <span className="font-semibold text-gray-900">{taxCodeLabel}: </span>
          {taxCode}
        </p>
      </div>
    </article>
  );
};

export default ContactInfoCard;
