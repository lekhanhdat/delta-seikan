import "./ProductSection.css";

type ProductSectionProps = {
  title: string;
  description: string;

  features?: {
    title: string;
    desc: string;
  }[];

  images: string[];
  specImage?: string;
};

const ProductSection = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  return (
    <section className="product-section">
      
      {/* LEFT */}
      <div className="product-left">
        <h2 className="product-title">{title}</h2>

        <div className="product-line" />

        <p className="product-desc">{description}</p>

        {features && (
          <div className="product-features">
            {features.map((item, index) => (
              <div key={index} className="product-feature-item">
                <h4 className="product-feature-title">
                  {item.title}
                </h4>
                <p className="product-feature-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="product-right">

        <div className="product-images">
          {images.map((img, index) => (
            <div key={index} className="product-image-item group">
              <img src={img} className="product-image" />
            </div>
          ))}
        </div>

        {specImage && (
          <div className="product-spec">
            <img src={specImage} className="product-spec-img" />
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSection;