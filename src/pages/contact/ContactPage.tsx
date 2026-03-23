import PageHero from "@/components/sections/PageHero/PageHero";
import hinh21 from "@/assets/images/hinh21.jpg";

const ContactPage = () => {
  return (
    <div>
      <PageHero
        title="Liên hệ"
        description="Kết nối với Delta Seikan để được tư vấn nhanh về giải pháp bao bì kim loại và hỗ trợ thông tin doanh nghiệp."
        backgroundImage={hinh21}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">
              Address
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary-dark">
              Thông tin liên hệ
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Nhà máy</p>
                <p className="mt-2 leading-relaxed">
                  Lô A, cụm công nghiệp Tam Lập, xã Phú Giáo, Thành phố Hồ Chí
                  Minh, Việt Nam
                </p>
                <p className="mt-1 leading-relaxed text-sm text-gray-600">
                  FACTORY: LOT A, TAM LAP INDUSTRIAL PARK, Phu Giao Commune, Ho
                  Chi Minh City, Viet Nam
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Văn phòng</p>
                <p className="mt-2 leading-relaxed">
                  602/32 Điện Biên Phủ, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí
                  Minh, Việt Nam
                </p>
                <p className="mt-1 leading-relaxed text-sm text-gray-600">
                  OFFICE: 602/32 Dien Bien Phu Street, Thanh My Tay Ward, Ho Chi
                  Minh City, Viet Nam
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                <a
                  href="mailto:Info@deltaseikan.com"
                  className="text-primary-dark hover:text-primary"
                >
                  Info@deltaseikan.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Số điện thoại liên hệ - Contact us:
                </span>{" "}
                <a
                  href="tel:0901838385"
                  className="text-primary-dark hover:text-primary"
                >
                  0901 838 385
                </a>{" "}
                -{" "}
                <a
                  href="tel:02749999886"
                  className="text-primary-dark hover:text-primary"
                >
                  0274 9999 886
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Mã số thuế:</span>{" "}
                3702894924
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-white p-3 md:p-4 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6935979615296!2d106.84348807590094!3d11.283918988897362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174bf3c5b488649%3A0xdeb5d082d17d2726!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gRGVsdGEgU2Vpa2Fu!5e0!3m2!1svi!2s!4v1774086352673!5m2!1svi!2s"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delta Seikan Map"
              className="rounded-xl"
            />
            <p className="px-2 pt-4 pb-1 text-sm text-gray-600 leading-relaxed">
              Địa chỉ nhà máy: Lô A, cụm công nghiệp Tam Lập, xã Phú Giáo, Thành
              phố Hồ Chí Minh, Việt Nam.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
