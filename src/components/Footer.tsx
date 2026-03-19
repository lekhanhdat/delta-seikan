import { FiAward, FiLink } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#13294b] text-gray-300">
      <div className="w-full px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">
            DELTA SEIKAN
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Dẫn đầu trong công nghệ đóng gói kim loại và lon nhôm 2 mảnh
            tại thị trường Việt Nam.
          </p>

          <div className="flex gap-3">
            <div className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
              <FiAward />
            </div>
            <div className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
              <FiLink />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest text-sm">
            KHÁM PHÁ
          </h3>
          <ul className="space-y-3">
            {["Giới thiệu", "Sản phẩm", "Chứng nhận", "Tin tức"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest text-sm">
            SẢN PHẨM
          </h3>
          <ul className="space-y-3">
            {["Lon 2 mảnh", "Lon 3 mảnh", "Nắp EOE", "Tráng phủ"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-widest text-sm">
            ĐỊA ĐIỂM
          </h3>

          <div className="mb-4">
            <p className="text-white font-semibold">HCMC Office</p>
            <p className="text-gray-400 text-sm">
              602/32 Điện Biên Phủ, Phường 22,
              Quận Bình Thạnh, TP. HCM
            </p>
          </div>

          <div>
            <p className="text-white font-semibold">Factory</p>
            <p className="text-gray-400 text-sm">
              Lô A, CCN Tam Lập, H. Phú Giáo,
              T. Bình Dương
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024 DELTA SEIKAN CORPORATION. ALL RIGHTS RESERVED.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer transition">
            QUY ĐỊNH BẢO MẬT
          </span>
          <span className="hover:text-white cursor-pointer transition">
            ĐIỀU KHOẢN SỬ DỤNG
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;