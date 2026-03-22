type ContactMapCardProps = {
  iframeTitle: string;
  src: string;
  note: string;
};

const ContactMapCard = ({ iframeTitle, src, note }: ContactMapCardProps) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4 shadow-sm">
      <iframe
        src={src}
        width="100%"
        height="460"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={iframeTitle}
        className="rounded-xl"
      />
      <p className="px-2 pt-4 pb-1 text-sm text-gray-600 leading-relaxed">{note}</p>
    </article>
  );
};

export default ContactMapCard;
