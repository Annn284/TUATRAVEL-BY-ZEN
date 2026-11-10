/**
 * TUATRAVEL - Main Interactive Scripts
 * Chạm hành trình, trọn cảm xúc!
 */

// Tour Database for Interactive Modals and Filtering
const TOURS_DATA = {
  'phu-quoc': {
    id: 'phu-quoc',
    category: 'bien-dao',
    title: 'Phú Quốc - Thiên Đường Hoàng Hôn & Cầu Hôn Sunset Town',
    destination: 'Phú Quốc, Kiên Giang',
    duration: '3 Ngày 2 Đêm',
    transport: 'Máy bay khứ hồi & Cano cao tốc',
    hotel: 'Resort 4-5 sao ven biển',
    priceOriginal: '4.290.000 đ',
    priceCurrent: '3.490.000 đ',
    badge: 'Bán chạy nhất',
    badgeColor: 'bg-rose-500',
    image: 'assets/images/tour-bien-dao.jpg',
    overview: 'Hành trình biển ngọc đưa bạn đến với Sunset Town thơ mộng, trải nghiệm cáp treo vượt biển dài nhất thế giới Hòn Thơm, lặn ngắm san hô tại quần đảo An Thới và check-in Cầu Hôn biểu tượng mới.',
    highlights: [
      'Ngắm hoàng hôn lãng mạn tại Cầu Hôn (Kiss Bridge) và Thị trấn Hoàng Hôn Sunset Town',
      'Vi vu cáp treo Hòn Thơm ngắm trọn vẹn biển đảo Nam Phú Quốc từ trên cao',
      'Khám phá 4 hòn đảo thiên đường: Mây Rút, Gầm Ghì, Móng Tay bằng cano siêu tốc',
      'Tặng gói chụp hình SUP và quay Flycam chuyên nghiệp cho đoàn',
      'Thưởng thức hải sản tươi sống và ẩm thực chợ đêm Phú Quốc sầm uất'
    ],
    itinerary: [
      { day: 'Ngày 1', title: 'Đón sân bay - Grand World - Thành phố không ngủ', desc: 'Xe và HDV TUATRAVEL đón quý khách tại sân bay Phú Quốc, nhận phòng resort nghỉ ngơi. Chiều tham quan Grand World, thưởng ngoạn kênh đào Venice, xem show diễn Tinh hoa Việt Nam.' },
      { day: 'Ngày 2', title: 'Cano 4 đảo - Lặn san hô - Cáp treo Hòn Thơm - Cầu Hôn', desc: 'Trải nghiệm cano cao tốc đến cụm đảo An Thới hoang sơ, lặn ngắm san hô tự nhiên, chụp hình SUP Flycam. Buổi chiều trải nghiệm cáp treo Hòn Thơm và đón hoàng hôn tuyệt sắc tại Cầu Hôn Sunset Town.' },
      { day: 'Ngày 3', title: 'Cơ sở ngọc trai - Vườn tiêu - Mua đặc sản - Tiễn sân bay', desc: 'Tham quan nông trại nuôi cấy ngọc trai Phú Quốc, mua sắm nước mắm truyền thống, tiêu sọ và đặc sản sim rừng. Xe tiễn đoàn ra sân bay kết thúc hành trình trọn vẹn.' }
    ],
    included: [
      'Vé máy bay khứ hồi kèm 7kg hành lý xách tay + 20kg ký gửi',
      '02 đêm nghỉ tại khách sạn/resort 4 sao trung tâm, view biển',
      '02 bữa sáng buffet tiêu chuẩn quốc tế + 04 bữa ăn chính hải sản',
      'Cano du ngoạn 4 đảo + Kính lặn, áo phao chuyên dụng',
      'Vé cáp treo Hòn Thơm & vé tham quan Sunset Town',
      'Bảo hiểm du lịch nội địa mức bồi thường 100.000.000 đ/vụ'
    ]
  },
  'sa-pa': {
    id: 'sa-pa',
    category: 'nui-rung',
    title: 'Sa Pa - Chinh Phục Nóc Nhà Đông Dương Fansipan & Bản Cát Cát',
    destination: 'Sa Pa, Lào Cai',
    duration: '3 Ngày 2 Đêm',
    transport: 'Xe Limousine giường nằm VIP đôi',
    hotel: 'Khách sạn 4 sao trung tâm thị xã',
    priceOriginal: '3.590.000 đ',
    priceCurrent: '2.890.000 đ',
    badge: 'Săn mây cực đỉnh',
    badgeColor: 'bg-emerald-600',
    image: 'assets/images/tour-nui-rung.jpg',
    overview: 'Đến với Sa Pa bảng lảng mây mù, ngắm thung lũng Mường Hoa kỳ vĩ, chinh phục đỉnh Fansipan 3.143m và đắm mình trong nét văn hóa đặc sắc của đồng bào H\'Mông, Dao đỏ.',
    highlights: [
      'Chinh phục đỉnh thiêng Fansipan 3.143m ngắm biển mây bồng bềnh hùng vĩ',
      'Khám phá Bản Cát Cát cổ kính với guồng nước, nhà trình tường và suối Hoa',
      'Check-in Đèo Ô Quy Hồ - Một trong "Tứ đại đỉnh đèo" Tây Bắc Việt Nam',
      'Thưởng thức lẩu cá hồi, cá tầm tươi sống và ẩm thực nướng ngói Sa Pa đặc trưng',
      'Trải nghiệm tắm lá thuốc cổ truyền của người Dao Đỏ hồi phục thể lực'
    ],
    itinerary: [
      { day: 'Ngày 1', title: 'Hà Nội / Nội Bài - Sa Pa - Bản Cát Cát', desc: 'Xe Limousine đưa đoàn lên cao tốc Nội Bài - Lào Cai. Đến Sa Pa nhận phòng khách sạn, dùng bữa trưa. Buổi chiều dạo bước khám phá bản Cát Cát, chụp ảnh cổ trang dân tộc.' },
      { day: 'Ngày 2', title: 'Cáp treo Sun World Fansipan Legend - Đèo Ô Quy Hồ', desc: 'Chinh phục quần thể tâm linh Fansipan và cột cờ Tổ quốc trên đỉnh mây. Buổi chiều ghé Cổng Trời Ô Quy Hồ ngắm hoàng hôn rực lửa trên dãy Hoàng Liên Sơn.' },
      { day: 'Ngày 3', title: 'Moana Sa Pa - Nhà thờ đá - Chợ phiên - Khởi hành về', desc: 'Tự do check-in Moana Sa Pa, dạo chơi nhà thờ đá cổ kính, mua sắm hạt dẻ, mật ong rừng, thảo dược Tây Bắc. Đoàn lên xe về lại điểm đón ban đầu.' }
    ],
    included: [
      'Xe Limousine giường VIP đời mới đưa đón suốt tuyến',
      '02 đêm tại khách sạn 4 sao phong cách châu Âu giữa lòng thị xã',
      'Tất cả các bữa ăn trong chương trình (bao gồm lẩu cá tầm đặc sản)',
      'Vé cáp treo Fansipan khứ hồi + Tàu hỏa leo núi Mường Hoa',
      'Vé tham quan Cát Cát, Ô Quy Hồ',
      'Bảo hiểm du lịch hạn mức 100.000.000 đ/người'
    ]
  },
  'ninh-binh': {
    id: 'ninh-binh',
    category: 'van-hoa',
    title: 'Ninh Bình - Quần Thể Di Sản Tràng An - Cố Đô Hoa Lư - Hang Múa',
    destination: 'Tràng An, Ninh Bình',
    duration: '2 Ngày 1 Đêm',
    transport: 'Xe du lịch 29-45 chỗ cao cấp',
    hotel: 'Resort sinh thái ven hồ',
    priceOriginal: '2.450.000 đ',
    priceCurrent: '1.950.000 đ',
    badge: 'Di sản thế giới',
    badgeColor: 'bg-amber-600',
    image: 'assets/images/tour-van-hoa.jpg',
    overview: 'Hành trình tìm về cội nguồn di sản văn hóa và thiên nhiên thế giới kép Tràng An - Cố Đô Hoa Lư. Ngồi thuyền nan lướt nhẹ trên dòng sông xanh ngọc bích len lỏi qua các hang động kỳ thú.',
    highlights: [
      'Ngồi thuyền nan ngắm cảnh Tràng An - "Vịnh Hạ Long trên cạn"',
      'Chinh phục gần 500 bậc đá Hang Múa ngắm trọn thung lũng Tam Cốc mùa lúa chín',
      'Dâng hương tại chùa Bái Đính - Ngôi chùa sở hữu nhiều kỷ lục châu Á',
      'Thăm Cố Đô Hoa Lư lắng nghe lịch sử hào hùng triều Đinh - Tiền Lê',
      'Thưởng thức đặc sản dê núi cơm cháy Ninh Bình nức tiếng thập phương'
    ],
    itinerary: [
      { day: 'Ngày 1', title: 'Cố Đô Hoa Lư - Tuyệt Tình Cốc - Hang Múa ngắm hoàng hôn', desc: 'Đoàn khởi hành đến Ninh Bình, dâng hương đền vua Đinh - vua Lê. Chiều ghé Động Am Tiên (Tuyệt Tình Cốc) và leo đỉnh Hang Múa bắt trọn góc nhìn ngoạn mục.' },
      { day: 'Ngày 2', title: 'Du thuyền sinh thái Tràng An - Chùa Bái Đính', desc: 'Thưởng ngoạn tuyến thuyền Tràng An qua Hang Tối, Hang Sáng, Hang Nấu Rượu và Phim trường Đảo Kong. Chiều chiêm bái Đại tượng Phật chùa Bái Đính trước khi về.' }
    ],
    included: [
      'Xe du lịch tiện nghi đưa đón theo suốt hành trình',
      '01 đêm nghỉ tại Ecolodge / Resort sinh thái Tràng An',
      'Vé thuyền Tràng An cao cấp & vé tham quan các điểm',
      '03 bữa ăn chính đặc sản dê núi Ninh Bình + 01 bữa sáng',
      'Hướng dẫn viên chuyên nghiệp am hiểu sâu văn hóa lịch sử',
      'Bảo hiểm du lịch tối đa 100.000.000 đ/người'
    ]
  },
  'mien-tay': {
    id: 'mien-tay',
    category: 'song-nuoc',
    title: 'Miền Tây Sông Nước: Bến Tre Xứ Dừa - Cồn Phụng - Chợ Nổi Cái Răng',
    destination: 'Bến Tre - Tiền Giang - Cần Thơ',
    duration: '2 Ngày 1 Đêm',
    transport: 'Xe du lịch & Xuồng ba lá truyền thống',
    hotel: 'Khách sạn 4 sao bến Ninh Kiều',
    priceOriginal: '2.150.000 đ',
    priceCurrent: '1.650.000 đ',
    badge: 'Trải nghiệm dân gian',
    badgeColor: 'bg-teal-600',
    image: 'assets/images/tour-song-nuoc.jpg',
    overview: 'Hòa mình vào không gian rợp mát của những rặng dừa nước Bến Tre, ngồi xuồng ba lá lướt nhẹ trên rạch nhỏ, nghe đờn ca tài tử Nam Bộ và khám phá nhịp sống chợ nổi rộn ràng lúc ban mai.',
    highlights: [
      'Chèo xuồng ba lá len lỏi trong rạch dừa nước rợp bóng mát đậm chất thôn dã',
      'Tham quan cồn Thới Sơn, Cồn Phụng tìm hiểu di tích Đạo Dừa độc đáo',
      'Thưởng thức trái cây miệt vườn tươi hái tại vườn và mật ong hoa nhãn',
      'Lắng nghe giai điệu Đờn ca tài tử Nam Bộ - Di sản văn hóa phi vật thể UNESCO',
      'Ghé thăm Chợ nổi Cái Răng lúc sáng sớm trải nghiệm văn hóa "cây bẹo" độc nhất'
    ],
    itinerary: [
      { day: 'Ngày 1', title: 'Đón khách - Bến Tre - Cồn Thới Sơn - Cồn Phụng - Cần Thơ', desc: 'Xuôi về miền Tây, du thuyền trên sông Tiền ngắm 4 cù lao Long - Lân - Quy - Phụng. Đi xuồng ba lá, thưởng thức kẹo dừa nóng hổi. Chiều di chuyển về Cần Thơ, tự do dạo bến Ninh Kiều.' },
      { day: 'Ngày 2', title: 'Chợ Nổi Cái Răng - Lò hủ tiếu truyền thống - Miệt vườn trái cây', desc: 'Xuất phát sớm đi thuyền tham quan Chợ nổi Cái Răng, thưởng thức tô hủ tiếu nóng trên sông. Thăm lò hủ tiếu sáu Hoài và vườn trái cây trĩu quả. Khởi hành về điểm xuất phát.' }
    ],
    included: [
      'Xe du lịch đời mới máy lạnh suốt tuyến',
      '01 đêm lưu trú khách sạn 4 sao trung tâm TP Cần Thơ',
      'Tàu du lịch sông Tiền + Thuyền tham quan chợ nổi Cái Răng + Xuồng chèo ba lá',
      'Ăn uống trọn gói: cá lóc nướng trui, lẩu mắm miền Tây, tép rong bông điên điển',
      'Vé tham quan tất cả các điểm trong chương trình',
      'Bảo hiểm du lịch bồi thường tối đa 100.000.000 đ/trường hợp'
    ]
  }
};

// Legal & Policy Contents for Modals
const POLICIES_DATA = {
  'booking-policy': {
    title: 'Chính Sách Đặt Tour - TUATRAVEL',
    content: `
      <h4 class="font-bold text-gray-800 text-lg mb-2">1. Quy trình đặt tour</h4>
      <p class="text-gray-600 mb-4 leading-relaxed">Khách hàng có thể đặt tour qua website, hotline 1900 1234, hoặc nhắn tin trực tiếp tới Fanpage Facebook chính thức của TUATRAVEL. Sau khi tiếp nhận, chuyên viên tư vấn sẽ liên hệ trong vòng 15 phút để xác nhận thông tin và gửi phiếu xác nhận dịch vụ.</p>
      <h4 class="font-bold text-gray-800 text-lg mb-2">2. Đặt cọc giữ chỗ</h4>
      <p class="text-gray-600 mb-4 leading-relaxed">• Đối với tour đường bộ: Quý khách đặt cọc 30% - 50% tổng giá trị tour ngay khi xác nhận.<br>• Đối với tour có vé máy bay: Quý khách thanh toán 100% tiền vé máy bay và 50% tiền tour trên bộ tại thời điểm chốt dịch vụ.<br>• Số tiền còn lại sẽ được thanh toán trước ngày khởi hành từ 3 - 5 ngày làm việc.</p>
      <h4 class="font-bold text-gray-800 text-lg mb-2">3. Giấy tờ tùy thân</h4>
      <p class="text-gray-600 mb-2 leading-relaxed">Quý khách vui lòng mang theo Căn cước công dân (CCCD) còn hạn, Hộ chiếu (với khách quốc tế) hoặc Giấy khai sinh bản sao trích lục đối với trẻ em dưới 14 tuổi.</p>
    `
  },
  'payment-policy': {
    title: 'Chính Sách Thanh Toán Minh Bạch',
    content: `
      <h4 class="font-bold text-gray-800 text-lg mb-2">1. Hình thức thanh toán linh hoạt</h4>
      <p class="text-gray-600 mb-4 leading-relaxed">TUATRAVEL hỗ trợ đa dạng phương thức thanh toán an toàn:<br>
      • Chuyển khoản ngân hàng trực tuyến 24/7 (Vietcombank, Techcombank, MB Bank, v.v.).<br>
      • Quét mã QR VNPAY / VietQR tiện lợi không mất phí.<br>
      • Thẻ tín dụng quốc tế (Visa, MasterCard, JCB) với công nghệ bảo mật 3D-Secure.<br>
      • Thanh toán trực tiếp bằng tiền mặt tại văn phòng TUATRAVEL (123 Võ Thị Sáu, Đồng Nai).</p>
      <h4 class="font-bold text-gray-800 text-lg mb-2">2. Hóa đơn và chứng từ</h4>
      <p class="text-gray-600 mb-2 leading-relaxed">Tất cả các giao dịch thanh toán đều được cấp biên nhận điện tử ngay lập tức. TUATRAVEL xuất hóa đơn giá trị gia tăng (VAT) hợp lệ theo yêu cầu của quý khách và cơ quan doanh nghiệp.</p>
    `
  },
  'cancellation-policy': {
    title: 'Chính Sách Hủy & Hoàn Tiền Tour',
    content: `
      <h4 class="font-bold text-gray-800 text-lg mb-2">1. Trường hợp khách hàng hủy tour</h4>
      <p class="text-gray-600 mb-4 leading-relaxed">
      • Hủy trước 15 ngày so với ngày khởi hành: Phí hủy 10% giá tour (trừ vé máy bay theo quy định hãng hàng không).<br>
      • Hủy từ 07 - 14 ngày trước ngày khởi hành: Phí hủy 30% giá tour.<br>
      • Hủy từ 03 - 06 ngày trước ngày khởi hành: Phí hủy 50% giá tour.<br>
      • Hủy trong vòng 48 giờ hoặc vắng mặt: Phí hủy 100% giá tour.</p>
      <h4 class="font-bold text-gray-800 text-lg mb-2">2. Trường hợp bất khả kháng (Thiên tai, dịch bệnh, bão lũ)</h4>
      <p class="text-gray-600 mb-2 leading-relaxed">Nếu chuyến đi buộc phải hoãn hoặc hủy do điều kiện thời tiết nguy hiểm hoặc lệnh cấm của cơ quan chức năng, TUATRAVEL sẽ hỗ trợ quý khách dời ngày khởi hành miễn phí hoặc hoàn tiền sau khi trừ các chi phí thực tế đã thanh toán cho bên thứ ba (hãng bay, phòng khách sạn).</p>
    `
  },
  'privacy-policy': {
    title: 'Chính Sách Bảo Mật Thông Tin Khách Hàng',
    content: `
      <h4 class="font-bold text-gray-800 text-lg mb-2">1. Cam kết bảo mật</h4>
      <p class="text-gray-600 mb-4 leading-relaxed">TUATRAVEL cam kết tuyệt đối bảo vệ dữ liệu cá nhân của quý khách (Họ tên, SĐT, Email, ngày sinh, CCCD) theo đúng quy định pháp luật Việt Nam. Dữ liệu chỉ được sử dụng cho mục đích làm thủ tục xuất vé, bảo hiểm du lịch và đặt dịch vụ lưu trú.</p>
      <h4 class="font-bold text-gray-800 text-lg mb-2">2. Không chia sẻ cho bên thứ ba</h4>
      <p class="text-gray-600 mb-2 leading-relaxed">Chúng tôi cam kết không kinh doanh, mua bán, chia sẻ hoặc tiết lộ thông tin của quý khách cho bất kỳ mục đích quảng cáo rác nào ngoài phạm vi dịch vụ của chuyến đi.</p>
    `
  },
  'terms-policy': {
    title: 'Điều Khoản Dịch Vụ & Sử Dụng',
    content: `
      <p class="text-gray-600 mb-4 leading-relaxed">Khi đăng ký tham gia các chương trình du lịch do TUATRAVEL tổ chức, quý khách đồng ý tuân thủ các quy định chung về an toàn hành trình, nội quy khách sạn, quy định của ban quản lý danh lam thắng cảnh và hướng dẫn của trưởng đoàn.</p>
      <p class="text-gray-600 leading-relaxed">TUATRAVEL luôn cam kết đảm bảo đầy đủ quyền lợi, tiện nghi và sự an tâm tối đa cho mọi thành viên trong đoàn.</p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initHeroSlideshow();
  initQuickSearch();
  initTourTabs();
  initTourModal();
  initFaqAccordion();
  initCountdownTimer();
  initConsultationForm();
  initPolicyModals();
  initBackToTop();
});

// 1. Navbar Sticky & Scroll Effects
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  const navBrandText = document.getElementById('nav-brand-text');
  const navLinks = document.querySelectorAll('.nav-link-item');
  const navCtaBtn = document.getElementById('nav-cta-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('glass-nav', 'shadow-md');
      navbar.classList.remove('glass-nav-transparent');
    } else {
      navbar.classList.remove('glass-nav', 'shadow-md');
      navbar.classList.add('glass-nav-transparent');
    }
  });
}

// 2. Mobile Menu Drawer Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// 3. Hero Dynamic Slideshow
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      if (i === index) {
        s.classList.remove('opacity-0', 'scale-105');
        s.classList.add('opacity-100', 'scale-100');
      } else {
        s.classList.remove('opacity-100', 'scale-100');
        s.classList.add('opacity-0', 'scale-105');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('w-8', 'bg-cyan-400');
        dot.classList.remove('w-2.5', 'bg-white/50');
      } else {
        dot.classList.remove('w-8', 'bg-cyan-400');
        dot.classList.add('w-2.5', 'bg-white/50');
      }
    });

    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  slideInterval = setInterval(nextSlide, 6000);

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(slideInterval);
      const targetIndex = parseInt(e.target.getAttribute('data-slide-index'));
      showSlide(targetIndex);
      slideInterval = setInterval(nextSlide, 6000);
    });
  });
}

// 4. Quick Search Bar
function initQuickSearch() {
  const searchBtn = document.getElementById('quick-search-btn');
  const destSelect = document.getElementById('search-destination');
  const typeSelect = document.getElementById('search-type');
  const durationSelect = document.getElementById('search-duration');

  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const dest = destSelect ? destSelect.value : '';
    const type = typeSelect ? typeSelect.value : 'all';

    // Scroll to tours section
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Filter category tab if selected
    if (type && type !== 'all') {
      const targetTab = document.querySelector(`.tour-tab-btn[data-category="${type}"]`);
      if (targetTab) {
        targetTab.click();
      }
    } else {
      const allTab = document.querySelector('.tour-tab-btn[data-category="all"]');
      if (allTab) allTab.click();
    }

    // Highlight search result badge
    const searchFeedback = document.getElementById('search-feedback-bar');
    if (searchFeedback) {
      let filterText = 'Hiển thị các hành trình phù hợp';
      if (dest) filterText += ` tại "${dest}"`;
      if (type && type !== 'all') filterText += ` (${type.toUpperCase()})`;
      searchFeedback.innerText = filterText;
      searchFeedback.classList.remove('hidden');
      setTimeout(() => {
        searchFeedback.classList.add('hidden');
      }, 5000);
    }
  });
}

// 5. Tour Category Filter Tabs
function initTourTabs() {
  const tabButtons = document.querySelectorAll('.tour-tab-btn');
  const tourCards = document.querySelectorAll('.tour-card-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('bg-tua-ocean', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'hover:bg-cyan-50');
      });

      btn.classList.add('bg-tua-ocean', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-cyan-50');

      const selectedCat = btn.getAttribute('data-category');

      tourCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (selectedCat === 'all' || selectedCat === cardCat) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 6. Tour Detail Modal
function initTourModal() {
  const modal = document.getElementById('tour-detail-modal');
  const modalBackdrop = document.getElementById('tour-modal-backdrop');
  const closeBtn = document.getElementById('close-tour-modal');
  const detailButtons = document.querySelectorAll('.btn-view-detail');
  const modalBookBtn = document.getElementById('modal-book-tour-btn');

  let currentViewingTour = null;

  function openTourDetail(tourId) {
    const data = TOURS_DATA[tourId];
    if (!data) return;
    currentViewingTour = data;

    // Fill Modal Data
    document.getElementById('modal-tour-img').src = data.image;
    document.getElementById('modal-tour-img').alt = data.title;
    document.getElementById('modal-tour-title').innerText = data.title;
    document.getElementById('modal-tour-dest').innerText = data.destination;
    document.getElementById('modal-tour-duration').innerText = data.duration;
    document.getElementById('modal-tour-transport').innerText = data.transport;
    document.getElementById('modal-tour-hotel').innerText = data.hotel;
    document.getElementById('modal-tour-price').innerText = data.priceCurrent;
    document.getElementById('modal-tour-price-old').innerText = data.priceOriginal;
    document.getElementById('modal-tour-overview').innerText = data.overview;

    // Highlights list
    const highlightsContainer = document.getElementById('modal-tour-highlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5 text-gray-700 text-sm leading-relaxed';
      li.innerHTML = `<span class="text-cyan-600 mt-0.5"><i class="fa-solid fa-circle-check"></i></span><span>${h}</span>`;
      highlightsContainer.appendChild(li);
    });

    // Itinerary list
    const itineraryContainer = document.getElementById('modal-tour-itinerary');
    itineraryContainer.innerHTML = '';
    data.itinerary.forEach((item, idx) => {
      const step = document.createElement('div');
      step.className = 'border-l-2 border-cyan-500 pl-4 relative pb-4 last:pb-0';
      step.innerHTML = `
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-2 border-white shadow"></div>
        <div class="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 inline-block px-2 py-0.5 rounded">${item.day}</div>
        <h5 class="font-bold text-gray-800 text-base mt-1">${item.title}</h5>
        <p class="text-gray-600 text-sm mt-1 leading-relaxed">${item.desc}</p>
      `;
      itineraryContainer.appendChild(step);
    });

    // Inclusions
    const includedContainer = document.getElementById('modal-tour-included');
    includedContainer.innerHTML = '';
    data.included.forEach(inc => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-gray-700 text-xs sm:text-sm';
      li.innerHTML = `<span class="text-emerald-600"><i class="fa-solid fa-check"></i></span><span>${inc}</span>`;
      includedContainer.appendChild(li);
    });

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeTourDetail() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourId = btn.getAttribute('data-tour-id');
      openTourDetail(tourId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeTourDetail);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeTourDetail);

  // Book from modal
  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      closeTourDetail();
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Pre-select the destination in the form
      if (currentViewingTour) {
        const destInput = document.getElementById('form-destination');
        if (destInput) {
          destInput.value = currentViewingTour.destination.split(',')[0].trim();
        }
        const noteInput = document.getElementById('form-note');
        if (noteInput && !noteInput.value) {
          noteInput.value = `Tôi muốn tư vấn chi tiết cho chuyến đi: ${currentViewingTour.title}`;
        }
      }
    });
  }
}

// 7. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherContent = other.querySelector('.faq-content');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// 8. Countdown Timer for Offer Section
function initCountdownTimer() {
  const hoursEl = document.getElementById('timer-hours');
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');
  if (!hoursEl || !minutesEl || !secondsEl) return;

  // Set target to 48 hours from current visit (persistent in local memory or cycling)
  let targetTime = Date.now() + (36 * 3600 * 1000 + 45 * 60 * 1000 + 20 * 1000);

  function updateTimer() {
    const diff = targetTime - Date.now();
    if (diff <= 0) {
      targetTime = Date.now() + 48 * 3600 * 1000;
      return;
    }

    const hours = Math.floor((diff / (1000 * 60 * 60)));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    minutesEl.innerText = mins < 10 ? '0' + mins : mins;
    secondsEl.innerText = secs < 10 ? '0' + secs : secs;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// 9. Consultation Form Validation & Interactive Feedback
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const submitBtn = document.getElementById('btn-submit-consultation');
  const feedbackModal = document.getElementById('form-feedback-modal');
  const feedbackBackdrop = document.getElementById('feedback-modal-backdrop');
  const closeFeedbackBtn = document.getElementById('close-feedback-modal');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const phoneInput = document.getElementById('form-phone');
    const emailInput = document.getElementById('form-email');
    const destInput = document.getElementById('form-destination');
    const guestsInput = document.getElementById('form-guests');
    const dateInput = document.getElementById('form-date');
    const noteInput = document.getElementById('form-note');

    let isValid = true;

    // Reset error states
    [nameInput, phoneInput, emailInput, destInput, guestsInput].forEach(inp => {
      if (inp) {
        inp.classList.remove('border-rose-500', 'ring-1', 'ring-rose-500');
        const err = inp.parentElement.querySelector('.input-error-msg');
        if (err) err.remove();
      }
    });

    // Helper error display
    function showError(input, message) {
      isValid = false;
      input.classList.add('border-rose-500', 'ring-1', 'ring-rose-500');
      const err = document.createElement('span');
      err.className = 'input-error-msg text-rose-500 text-xs mt-1 block font-medium';
      err.innerText = message;
      input.parentElement.appendChild(err);
    }

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự)');
    }

    // Validate Phone (Vietnam format: 03, 05, 07, 08, 09...)
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim().replace(/\s/g, ''))) {
      showError(phoneInput, 'Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 số)');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() && !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Định dạng email chưa chính xác (ví dụ: name@gmail.com)');
    }

    // Validate Destination
    if (!destInput.value) {
      showError(destInput, 'Vui lòng chọn điểm đến bạn muốn khám phá');
    }

    if (!isValid) return;

    // Display loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Đang gửi yêu cầu...
    `;

    // Simulate system processing & reference code creation
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const inquiryCode = 'TUA-' + Math.floor(100000 + Math.random() * 900000);

      // Populate Success Modal
      document.getElementById('feedback-inquiry-code').innerText = inquiryCode;
      document.getElementById('feedback-client-name').innerText = nameInput.value.trim();
      document.getElementById('feedback-client-phone').innerText = phoneInput.value.trim();
      document.getElementById('feedback-client-dest').innerText = destInput.value;

      // Show Feedback Modal
      if (feedbackModal) {
        feedbackModal.classList.remove('hidden');
        feedbackModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      // Reset form
      form.reset();
    }, 1200);
  });

  function closeFeedback() {
    if (feedbackModal) {
      feedbackModal.classList.add('hidden');
      feedbackModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  if (closeFeedbackBtn) closeFeedbackBtn.addEventListener('click', closeFeedback);
  if (feedbackBackdrop) feedbackBackdrop.addEventListener('click', closeFeedback);
}

// 10. Policy Modals
function initPolicyModals() {
  const policyModal = document.getElementById('policy-modal');
  const policyBackdrop = document.getElementById('policy-modal-backdrop');
  const closeBtn = document.getElementById('close-policy-modal');
  const policyLinks = document.querySelectorAll('.policy-link');

  function openPolicy(policyKey) {
    const data = POLICIES_DATA[policyKey];
    if (!data) return;

    document.getElementById('policy-modal-title').innerText = data.title;
    document.getElementById('policy-modal-body').innerHTML = data.content;

    policyModal.classList.remove('hidden');
    policyModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closePolicy() {
    policyModal.classList.add('hidden');
    policyModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  policyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.getAttribute('data-policy');
      openPolicy(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closePolicy);
  if (policyBackdrop) policyBackdrop.addEventListener('click', closePolicy);
}

// 11. Back to Top Button
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
