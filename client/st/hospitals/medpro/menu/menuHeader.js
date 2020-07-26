export default menuHeader = [
  {
    key: 'trang-chu',
    link: '/',
    url: '/',
    name: 'Trang chủ',
    content: '',
    sortOrder: 1,
  },
  {
    key: 'gioi-thieu',
    link: '/gioi-thieu',
    url: '/gioi-thieu',
    name: 'Giới thiệu',
    content: `<p>Ch&agrave;o mừng bạn đến với&nbsp;<strong>phần mềm MEDPRO - Giải ph&aacute;p tiếp cận y tế th&ocirc;ng minh</strong><strong>,&nbsp;</strong>phần mềm li&ecirc;n kết với c&aacute;c bệnh viện nhằm&nbsp;gi&uacute;p bệnh nh&acirc;n c&oacute; thể:</p>
      <p>+ Đăng k&yacute; kh&aacute;m bệnh.</p>
      <p>+ Thanh to&aacute;n tiền kh&aacute;m.</p>
      <p>+ Nhận phiếu kh&aacute;m bệnh.</p>
      <p>+ Tạo hồ sơ bệnh nh&acirc;n.</p>
      <p>+ Quản l&yacute; hồ sơ&nbsp;bệnh nh&acirc;n.</p>
      <p>+ Quản l&yacute; phiếu kh&aacute;m bệnh.</p>
      <p>+ Quản l&yacute; lịch hẹn t&aacute;i kh&aacute;m, ..v..v..</p>
      <p>Ho&agrave;n to&agrave;n trực tuyến ở&nbsp;mọi l&uacute;c mọi nơi m&agrave; kh&ocirc;ng cần phải đến bệnh viện để xếp h&agrave;ng v&agrave; chờ đợi.</p>
      <p>Th&ocirc;ng qua phần mềm, ch&uacute;ng t&ocirc;i lu&ocirc;n hy vọng đ&atilde; tạo n&ecirc;n một phương thức&nbsp;gi&uacute;p bệnh nh&acirc;n c&oacute; thể tiếp cận với c&aacute;c dịch vụ y tế (n&oacute;i chung), v&agrave; dịch vụ&nbsp;kh&aacute;m chữa bệnh (n&oacute;i ri&ecirc;ng) một c&aacute;ch dễ d&agrave;ng, nhanh ch&oacute;ng v&agrave; thuận lợi.</p>
      <p>Từ đ&oacute; l&agrave;m tăng th&ecirc;m&nbsp;sự h&agrave;i l&ograve;ng của bệnh nh&acirc;n,&nbsp;n&acirc;ng cao chất lượng dịch&nbsp;vụ của bệnh viện, v&agrave; g&oacute;p phần ph&aacute;t triển bệnh viện&nbsp;ng&agrave;y c&agrave;ng&nbsp;trở n&ecirc;n&nbsp;th&ocirc;ng minh&nbsp;hiện đại đ&aacute;p ứng với sự kỳ vọng v&agrave; tin tưởng của qu&yacute; bệnh nh&acirc;n&nbsp;trong v&agrave; ngo&agrave;i nước.&nbsp;</p>
      <p>Tr&acirc;n trọng!</p>`,
    sortOrder: 2,
  },
  {
    key: 'quy-trinh',
    link: '/quy-trinh',
    url: '/quy-trinh',
    name: 'Quy trình',
    content: `<ul class="timeline">
      <li>
        <p class="timeline_date">Bước 1</p>
        <div class="timeline_content">
          <h3>Đặt lịch khám</h3>
          <div class="ct_inside">
            <ul>
              <li>Đăng nhập phần mềm trên web hoặc ứng dụng di động.</li>
              <li>Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.</li>
              <li>Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới.</li>
              <li>Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline_date">Bước 2</p>
        <div class="timeline_content">
          <h3>Thanh toán tiền khám</h3>
          <div class="ct_inside">
            <ul>
              <li>Chọn loại thẻ thanh toán: Thẻ khám bệnh, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa hoặc ví điện tử.</li>
              <li>Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.</li>
              <li>Nhập thông tin thẻ để tiến hành thanh toán.</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline_date">Bước 3</p>
        <div class="timeline_content">
          <h3>Xác nhận Người bệnh đến bệnh viện khám theo hẹn</h3>
          <div class="ct_inside">
            <ul>
              <li>Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</li>
              <li><strong>Đến ngày khám, </strong>người bệnh vui lòng đến quầy tiếp nhận để xác nhận thông tin hoặc đến trực tiếp phòng khám theo hướng dẫn trên phiếu khám bệnh.</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline_date">Bước 4</p>
        <div class="timeline_content">
          <h3>Khám và thực hiện cận lâm sàng</h3>
          <div class="ct_inside">
            <ul>
              <li>Người bệnh khám tại các phòng khám chuyên khoa theo thông tin khám đã đặt.</li>
              <li>Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</li>
              <li>Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline_date">Bước 5</p>
        <div class="timeline_content">
          <h3>Nhận thuốc</h3>
          <div class="ct_inside">
          </div>
        </div>
      </li>
      <li>
        <p class="timeline_date">Bước 6</p>
        <div class="timeline_content">
          <h3>Đặt lịch tái khám</h3>
          <div class="ct_inside">
            <ul>
              <li>Sử dụng phần mềm đặt hẹn tái khám như BƯỚC 1 và BƯỚC 2 để nhận phiếu khám điện tử.</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>`,
    sortOrder: 3,
    icon: 'fal fa-stethoscope',
  },
  {
    key: 'huong-dan',
    link: '/',
    url: '/huong-dan',
    name: 'Hướng dẫn',
    content: 'Nội dung hướng dẫn',
    sortOrder: 4,
  },
  {
    key: 'thac-mac',
    link: '/thac-mac',
    url: '/thac-mac',
    name: 'Thắc mắc',
    content: [
      {
        id: 1,
        name: 'Vấn đề chung',
        faq: [
          {
            id: 101,
            question:
              'Đối tượng bệnh nhân nào có thể sử dụng phần mềm để đăng ký khám bệnh?',
            answer: `<p>Tất cả người bệnh đều c&oacute; thể sử dụng phần mềm để đăng k&yacute; kh&aacute;m bệnh.</p><p>Tuy nhi&ecirc;n, phần mềm chỉ ph&ugrave; hợp cho những người bệnh c&oacute; kế hoạch kh&aacute;m chữa bệnh chủ động, hoặc t&igrave;nh trạng bệnh KH&Ocirc;NG khẩn cấp.</p><p>Trong trường hợp CẤP CỨU, người nh&agrave; n&ecirc;n đưa người bệnh đến cơ sở y tế gần nhất hoặc gọi số cấp cứu 115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 102,
            question: 'Đăng ký khám qua phần mềm có tốn phí không?',
            answer: `<p>C&oacute;!</p><p>Hiện tại, khi đăng k&yacute; kh&aacute;m bệnh qua phần mềm, ngo&agrave;i tiền kh&aacute;m bạn phải trả th&ecirc;m ph&iacute; tiện &iacute;ch.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 103,
            question:
              'Các loại tiền và phí khi sử dụng phần mềm để đăng ký khám bệnh?',
            answer: `<ul><li><strong>Tiền kh&aacute;m</strong>: l&agrave; số tiền bạn trả cho việc sử dụng dịch vụ kh&aacute;m chữa bệnh của bệnh viện, số tiền n&agrave;y được thu theo qui định của bệnh viện.</li><li><strong>Ph&iacute; tiện &iacute;ch</strong>: l&agrave; số tiền bạn trả để hỗ trợ cho việc sử dụng dịch vụ đăng k&yacute; kh&aacute;m bệnh trực tuyến của phần mềm.</li></ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 104,
            question:
              'Tôi có thể bị bệnh viện từ chối khám bệnh, sau khi đã đăng ký khám qua phần mềm không?',
            answer: `<p>C&oacute;!</p><p>Trong trường hợp th&ocirc;ng tin thực tế của bạn kh&ocirc;ng tr&ugrave;ng khớp với th&ocirc;ng tin bệnh nh&acirc;n in tr&ecirc;n phiếu kh&aacute;m bệnh, hoặc bạn thực hiện việc kh&aacute;m chữa bệnh kh&ocirc;ng đ&uacute;ng với th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh.</p><p> </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 105,
            question:
              'Những lí do nào tôi có thể bị bệnh viện từ chối tiếp nhận khám chữa bệnh?',
            answer: `<p>Bạn c&oacute; thể bị bệnh viện từ chối tiếp nhận kh&aacute;m chữa bệnh với những l&iacute; do sau:</p><ul><li>Th&ocirc;ng tin thực tế của bạn kh&ocirc;ng tr&ugrave;ng khớp với th&ocirc;ng tin bệnh nh&acirc;n in tr&ecirc;n phiếu kh&aacute;m bệnh:<ul><li>Họ t&ecirc;n</li><li>Năm sinh</li><li>Giới t&iacute;nh</li><li>Số chứng minh nh&acirc;n d&acirc;n hoặc giấy tờ t&ugrave;y th&acirc;n...</li></ul></li><li>Bạn thực hiện việc kh&aacute;m chữa bệnh kh&ocirc;ng đ&uacute;ng với th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh:<ul><li>Kh&ocirc;ng đ&uacute;ng ng&agrave;y kh&aacute;m</li><li>Kh&ocirc;ng đ&uacute;ng chuy&ecirc;n khoa</li><li>Kh&ocirc;ng đ&uacute;ng ph&ograve;ng kh&aacute;m</li><li>Chưa đến số thứ tự&hellip;.</li></ul></li></ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 106,
            question:
              'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám, sau đó bán lại cho Bệnh nhân không?',
            answer: `<p>Kh&ocirc;ng!</p><p>C&aacute;c dịch vụ của phần mềm được x&acirc;y dựng để phục vụ cho nhu cầu đăng k&yacute; kh&aacute;m bệnh của người bệnh, v&igrave; mục đ&iacute;ch sử dụng c&aacute; nh&acirc;n.</p><p>Tất cả c&aacute;c h&agrave;nh vi sử dụng dịch vụ của phần mềm v&igrave; mục đ&iacute;ch thương mại, cho d&ugrave; dưới bất kỳ h&igrave;nh thức n&agrave;o, cũng đều kh&ocirc;ng được ph&eacute;p, bị cấm v&agrave; sẽ chịu ho&agrave;n to&agrave;n tr&aacute;ch nhiệm trước ph&aacute;p luật. </p><p> </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 107,
            question: 'Tôi có lợi gì khi đăng ký khám bệnh qua phần mềm?',
            answer: `<p>Khi đăng k&yacute; kh&aacute;m bệnh tr&ecirc;n phần mềm, bạn c&oacute; thể:</p><ul><li>Đăng k&yacute; trước ng&agrave;y kh&aacute;m từ 01 đến 30 ng&agrave;y.</li><li>Chủ động lựa chọn c&aacute;c th&ocirc;ng tin kh&aacute;m: b&aacute;c sĩ kh&aacute;m, ng&agrave;y kh&aacute;m, chuy&ecirc;n khoa, ph&ograve;ng kh&aacute;m, giờ kh&aacute;m...</li><li>Thanh to&aacute;n v&agrave; nhận phiếu kh&aacute;m bệnh trực tuyến.</li><li>Tạo, cập nhật hồ sơ v&agrave; quản l&yacute; c&aacute;c phiếu kh&aacute;m bệnh dễ d&agrave;ng.</li><li>Được th&ocirc;ng b&aacute;o nhắc t&aacute;i kh&aacute;m, l&agrave;m tăng khả năng tu&acirc;n thủ điều trị.</li></ul><p>V&agrave; quan trọng nhất l&agrave; bạn thực hiện được tất cả c&aacute;c t&iacute;nh năng tr&ecirc;n ho&agrave;n to&agrave;n trực tuyến ở mọi l&uacute;c mọi nơi, m&agrave; kh&ocirc;ng cần phải đến bệnh viện để xếp h&agrave;ng v&agrave; chờ đợi.</p><p> </p><p> </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 108,
            question:
              'Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?',
            answer: `<p>Được!</p><p>Phiếu Kh&aacute;m Bệnh c&oacute; gi&aacute; trị sử dụng từ 6h30 &ndash; 16h30 của ng&agrave;y kh&aacute;m.</p><p>Nếu bạn đến trễ hơn so với giờ kh&aacute;m dự kiến đ&atilde; đăng k&yacute;, nhưng phiếu kh&aacute;m bệnh vẫn c&ograve;n gi&aacute; trị sử dụng, th&igrave; bạn vẫn được kh&aacute;m.</p><p>Tuy nhi&ecirc;n, trong trường hợp n&agrave;y bạn vui l&ograve;ng li&ecirc;n hệ v&agrave; nghe theo sự hướng dẫn của nh&acirc;n vi&ecirc;n bệnh viện.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 109,
            question: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
            answer: `<p>C&oacute;!</p><p>Phần mềm cho ph&eacute;p bạn thực hiện việc đăng k&yacute; kh&aacute;m v&agrave;o bất kỳ thời điểm n&agrave;o trong ng&agrave;y v&agrave; bất cứ ng&agrave;y n&agrave;o trong tuần, đảm bảo bạn c&oacute; thể sử dụng Phần mềm để đăng k&yacute; kh&aacute;m bệnh mọi l&uacute;c mọi nơi, m&agrave; kh&ocirc;ng cần phải đến trực tiếp bệnh viện để thực hiện.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 110,
            question:
              'Tại sao sau khi đăng ký khám thành công tôi không nhận được phiếu khám bệnh gửi qua email?',
            answer: `<p>Nếu hồ sơ bệnh nh&acirc;n của bạn c&oacute; địa chỉ email ch&iacute;nh x&aacute;c, th&igrave; sau khi đăng k&yacute; kh&aacute;m bệnh th&agrave;nh c&ocirc;ng, ngay lập tức phần mềm sẽ gửi phiếu kh&aacute;m bệnh đến địa chỉ email của bạn.</p><p>Bạn vui l&ograve;ng kiểm tra hộp thư đến hoặc Spam để t&igrave;m thấy email phiếu kh&aacute;m bệnh của m&igrave;nh.</p><p>Trường hợp đ&atilde; kiểm tra kỹ nhưng vẫn kh&ocirc;ng thấy email gửi phiếu kh&aacute;m bệnh, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 19002267 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 111,
            question:
              'Sau khi đã đăng ký khám thành công qua phần mềm, có thể hủy phiếu khám không?',
            answer: `<p>Bạn c&oacute; thể chủ động hủy phiếu kh&aacute;m đ&atilde; đặt th&agrave;nh c&ocirc;ng, nếu kế hoạch kh&aacute;m chữa bệnh c&aacute; nh&acirc;n c&oacute; thay đổi.</p>
              <p><br /> Hoặc trong 1 số trường hợp, bệnh viện c&oacute; quyền từ chối phiếu kh&aacute;m nếu c&oacute; sự sai lệch th&ocirc;ng tin bệnh nh&acirc;n, sai th&ocirc;ng tin phiếu kh&aacute;m, hoặc c&oacute; vấn đề bất khả kh&aacute;ng ph&aacute;t sinh từ ph&iacute;a bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Bạn đều sẽ được ho&agrave;n tiền lại nếu chưa thực sự đặt kh&aacute;m v&agrave; kh&aacute;m th&agrave;nh c&ocirc;ng (nhưng phải tu&acirc;n theo quy định của phần mềm v&agrave; bệnh viện).</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 112,
            question:
              'Tôi có thẻ khám bệnh của bệnh viện ĐHYD, tôi không có đăng ký khám online nhưng thẻ của tôi bị trừ tiền?',
            answer: `<p ><span><span><span><span><span><span>Bạn vui l&ograve;ng kiểm tra xem bạn c&oacute; đăng k&yacute; kh&aacute;m bệnh qua tổng đ&agrave;i bệnh viện 19007178 kh&ocirc;ng? Đăng k&yacute; kh&aacute;m qua tổng đ&agrave;i của bệnh viện cũng bị trừ tiền kh&aacute;m.</span></span></span></span></span></span></p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 113,
            question:
              'Bác sĩ có hẹn lịch tái khám, nhưng vào phần mềm đăng ký không có, tôi phải làm sao để đăng ký tái khám?',
            answer:
              '<p><span><span><span ><span><span><span>Lịch hẹn tái khám sẽ được c&acirc;̣p nh&acirc;̣t tr&ecirc;n ph&acirc;̀n m&ecirc;̀m m&ocirc;̃i 60 phút / l&acirc;̀n</span></span></span></span></span></span></p><p><span><span><span ><span><span><span>Hoặc b&ecirc;̣nh nh&acirc;n có th&ecirc;̉ sử dụng tính năng đặt khám ngay và chọn th&ocirc;ng tin khám (Bác sĩ, ngày khám, giờ khám&hellip;) theo th&ocirc;ng tin tái khám được hẹn.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 114,
            question:
              'Tôi có lịch hẹn tái khám của bác sĩ Lê Minh nhưng không đặt được ?',
            answer:
              '<p style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>V&igrave; lịch kh&aacute;m của b&aacute;c sĩ L&ecirc; Minh lu&ocirc;n k&iacute;n trước 3 th&aacute;ng. Nhưng phần mềm chỉ cho đăng k&yacute; trước 30 ng&agrave;y, n&ecirc;n hiện tại phần mềm chưa hỗ trợ đặt kh&aacute;m cho b&aacute;c sĩ L&ecirc; Minh.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 115,
            question:
              'Tôi điện thoại tổng đài 19007178 hoài không ai nghe máy?',
            answer:
              '<p style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>Bạn vui l&ograve;ng gọi tổng đ&agrave;i 19002267 để được hỗ trợ</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 116,
            question:
              'Tôi đăng ký mà báo là quý khách chưa đăng ký dịch vụ hoặc dịch vụ không hoạt động ?',
            answer:
              '<p><span><span><span ><span><span><span>Vui l&ograve;ng li&ecirc;n hệ trực tiếp tổng đ&agrave;i 19002267.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 117,
            question: 'Tôi bị bệnh A, B, C… tôi phải đăng ký khoa nào?',
            answer:
              '<p style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>Vui lòng đi&ecirc;̣n thoại t&ocirc;̉ng đài b&ecirc;̣nh vi&ecirc;̣n 19007178 đ&ecirc;̉ được tư v&acirc;́n chọn chuy&ecirc;n khoa.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 118,
            question:
              'Tôi đăng ký trước nhưng mai tôi bận không đến khám được tôi muốn hủy phiếu làm sao?',
            answer:
              '<ul><li><span><span><span ><span><span><span>Bạn vui l&ograve;ng thực hiện việc hủy phiếu kh&aacute;m đ&atilde; đặt trước 16h30 của ng&agrave;y trước ng&agrave;y kh&aacute;m để nhận lại tiền ho&agrave;n. Thao t&aacute;c hủy phiếu kh&aacute;m cụ thể như sau:</span></span></span></span></span></span></li></ul><ul><li><span><span><span ><span><span><span>Web: đăng nhập website umc.medpro.com.vn &gt; chọn th&ocirc;ng tin t&agrave;i khoản &gt; chọn quản l&yacute; phiếu kh&aacute;m bệnh &gt; chọn phiếu kh&aacute;m bệnh muốn hủy &gt; bấm hủy phiếu</span></span></span></span></span></span></li><li style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>App: Mở ứng dụng UMC &ndash; ĐKKBOL &gt; chọn phiếu kh&aacute;m bệnh &gt; chọn phiếu kh&aacute;m bệnh muốn hủy &gt; bấm hủy phiếu.</span></span></span></span></span></span></li></ul>',
            status: 1,
            category_id: 1,
          },
          {
            id: 119,
            question:
              'Tôi nhập thông tin cho người nhà có nhập số CMND đã bấm lưu nhưng mở lại không có?',
            answer:
              '<p style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>Th&ocirc;ng tin bạn vừa update tr&ecirc;n phần mềm, sau 24h mới được cập nhật tr&ecirc;n hệ thống. Vui l&ograve;ng kiểm tra th&ocirc;ng tin sau 24h.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
          {
            id: 120,
            question: 'Bên mình có hỗ trợ đăng ký khoa  khám dịch vụ không?',
            answer:
              '<p style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>Phần mềm hiện kh&ocirc;ng hỗ trợ đăng k&yacute; kh&aacute;m dịch vụ.</span></span></span></span></span></span></p>',
            status: 1,
            category_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Vấn đề về tài khoản',
        faq: [
          {
            id: 201,
            question:
              '“Mã Số Bệnh Nhân” là gì? Làm sao tôi có thể biết được mã số bệnh nhân của mình?',
            answer: `<p>M&atilde; số bệnh nh&acirc;n l&agrave; <strong>số hồ sơ</strong>&nbsp;m&agrave; bệnh viện d&ugrave;ng để quản l&yacute; th&ocirc;ng tin của bạn tr&ecirc;n hệ thống dữ liệu của bệnh viện.</p><p>Để biết được m&atilde; số bệnh nh&acirc;n của m&igrave;nh, bạn c&oacute; thể tham khảo gợi &yacute; về c&aacute;ch t&igrave;m m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m thấy trong&nbsp;c&aacute;c loại giấy tờ&nbsp;như: toa thuốc, phiếu chỉ định cận l&acirc;m s&agrave;ng, c&aacute;c bi&ecirc;n lai thu tiền&hellip;</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 202,
            question: 'Tôi quên Mã Số Bệnh Nhân của mình, phải làm sao?',
            answer: `<p>Để t&igrave;m lại m&atilde; số bệnh nh&acirc;n, bạn c&oacute; thể:</p><ul><li>Xem qua gợi &yacute; về c&aacute;ch t&igrave;m lại m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m lại trong c&aacute;c loại giấy tờ kh&aacute;m chữa bệnh của m&igrave;nh.</li><li>Hoặc mở t&iacute;nh năng &quot;T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n&quot; &gt; nhập ch&iacute;nh x&aacute;c c&aacute;c th&ocirc;ng tin y&ecirc;u cầu &gt; bấm&nbsp;&quot;X&aacute;c nhận&quot; &gt; v&agrave; chọn hồ sơ của m&igrave;nh trong danh s&aacute;ch kết quả.</li></ul>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 203,
            question: 'Làm sao tôi biết mình đã có Mã Số Bệnh Nhân chưa?',
            answer: `<p>Nếu bạn đ&atilde; từng thực hiện việc&nbsp;kh&aacute;m chữa bệnh&nbsp;tại bệnh viện, đồng nghĩa với việc bạn&nbsp;đ&atilde; c&oacute; &ldquo;m&atilde; số bệnh nh&acirc;n&rdquo; tr&ecirc;n hệ thống của bệnh viện.</p><p>Khi đ&oacute;, h&atilde;y t&igrave;m lại m&atilde; số bệnh nh&acirc;n của bạn trong c&aacute;c loại&nbsp;giấy tờ kh&aacute;m chữa bệnh, hoặc bạn c&oacute; thể&nbsp;sử dụng t&iacute;nh năng &ldquo;T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n&rdquo; để t&igrave;m lại m&atilde; số bệnh nh&acirc;n của m&igrave;nh ngay tr&ecirc;n phần mềm.</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 204,
            question:
              'Tôi có thể chọn tùy ý một hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Trong trường hợp bạn cố t&igrave;nh hay nhầm lẫn&nbsp;d&ugrave;ng hồ sơ bệnh nh&acirc;n&nbsp;của người kh&aacute;c&nbsp;để đăng k&yacute; kh&aacute;m bệnh cho m&igrave;nh, l&agrave; đ&atilde; vi phạm điều khoản sử dụng của phần mềm.&nbsp;Khi đ&oacute;, bạn sẽ&nbsp;bị bệnh viện từ chối kh&aacute;m chữa bệnh, chịu ho&agrave;n to&agrave;n những thiệt hại v&agrave; t&ugrave;y mức độ c&oacute; thể chịu tr&aacute;ch nhiệm trước&nbsp;ph&aacute;p luật.</p><p>V&igrave; vậy,&nbsp;khi đăng k&yacute; kh&aacute;m bệnh bạn vui l&ograve;ng chọn/nhập v&agrave; kiểm tra&nbsp;ch&iacute;nh x&aacute;c&nbsp;hồ sơ&nbsp;bệnh nh&acirc;n của m&igrave;nh!</p>`,
            status: 1,
            category_id: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Vấn đề về quy trình đặt khám',
        faq: [
          {
            id: 301,
            question: 'Nếu BHYT của tôi bị từ chối, tôi phải làm sao?',
            answer: `<p>Trường hợp bạn chọn đối tượng l&agrave; BHYT khi đăng k&yacute; kh&aacute;m, nhưng khi x&aacute;c minh BHYT bạn kh&ocirc;ng thuộc đối tượng n&agrave;y, khi đ&oacute; bạn c&oacute; thể:</p><ul><li>Thực hiện việc kh&aacute;m chữa&nbsp;bệnh theo th&ocirc;ng tin tr&ecirc;n Phiếu Kh&aacute;m Bệnh, nhưng dưới&nbsp;h&igrave;nh thức &ldquo;Đối tượng kh&ocirc;ng c&oacute; BHYT&rdquo;.</li><li>Hoặc, bạn c&oacute; thể hủy việc kh&aacute;m chữa bệnh, v&agrave; vấn đề ho&agrave;n tiền trong trường hợp n&agrave;y sẽ do bệnh viện quyết định.</li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 302,
            question:
              'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Hiện tại phần mềm chưa hỗ&nbsp;trợ bạn đăng k&yacute; kh&aacute;m bệnh ngay trong ng&agrave;y.</p><p>Trong trường hợp, cần đăng k&yacute; kh&aacute;m bệnh trong ng&agrave;y,&nbsp;tr&ecirc;n bạn vui l&ograve;ng đến trực tiếp tại bệnh&nbsp;viện để&nbsp;đăng k&yacute;&nbsp;v&agrave; lấy số thứ tự&nbsp;tại c&aacute;c quầy tiếp nhận&nbsp;khu kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 303,
            question: 'Phần mềm cho phép đăng ký khám bệnh trước bao lâu?',
            answer: `<p>Hiện tại, bạn c&oacute; thể sử dụng phần mềm để&nbsp;đăng k&yacute; trước ng&agrave;y kh&aacute;m từ 01 đến&nbsp;30 ng&agrave;y.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 304,
            question: 'Hủy đăng ký khám đã đặt qua phần mềm, phải làm sao?',
            answer: `<p>Để hủy phiếu kh&aacute;m bệnh đ&atilde; đăng k&yacute;, bạn vui l&ograve;ng:</p><ul><li>Thực hiện việc hủy phiếu kh&aacute;m bệnh trước 16h30 của ng&agrave;y trước ng&agrave;y kh&aacute;m.</li><li>V&agrave; thao t&aacute;c theo tr&igrave;nh tự:&nbsp;<strong>Đăng nhập phần mềm </strong>&gt; <strong>Th&ocirc;ng tin t&agrave;i khoản</strong> &gt; <strong>Quản l&yacute; phiếu kh&aacute;m bệnh</strong> &gt; <strong>Chọn phiếu kh&aacute;m bệnh muốn hủy</strong> &gt; <strong>Chọn hủy phiếu kh&aacute;m bệnh</strong> &gt; <strong>X&aacute;c nhận hủy</strong>.</li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 305,
            question:
              'Tôi có thể thay đổi thông tin khám đã đặt qua phần mềm không?',
            answer: `<p>Bạn kh&ocirc;ng thể thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh đ&atilde; đặt, trừ trường hợp lịch kh&aacute;m của b&aacute;c sĩ bạn đăng k&yacute;&nbsp;thay đổi v&agrave;o ng&agrave;y kh&aacute;m tr&ecirc;n phiếu.&nbsp;</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 306,
            question:
              'Phần mềm có cho đăng ký khám bệnh với đối tượng bệnh nhân BHYT không?',
            answer: `<p>C&oacute;!</p><p>Tất cả c&aacute;c đối tượng bệnh nh&acirc;n BHYT hoặc Kh&ocirc;ng&nbsp;BHYT đều c&oacute; thể sử&nbsp;dụng phần mềm để đăng k&yacute; kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 307,
            question: 'Phần mềm có xác minh bảo hiểm y tế trực tuyến không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Phần mềm chỉ hỗ&nbsp;trợ bạn chọn đối tượng BHYT hoặc Kh&ocirc;ng BHYT khi đăng k&yacute; kh&aacute;m, chứ kh&ocirc;ng thực hiện việc x&aacute;c minh BHYT.</p><p>Để x&aacute;c minh BHYT, khi đi kh&aacute;m&nbsp;bạn phải mang đầy đủ c&aacute;c loại giấy tờ cần thiết, đến c&aacute;c quầy tiếp nhận khu kh&aacute;m bệnh của bệnh viện để thực hiện, trước khi v&agrave;o ph&ograve;ng kh&aacute;m gặp b&aacute;c sĩ.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 308,
            question: 'Nếu bác sĩ thay đổi lịch khám, tôi phải làm sao?',
            answer: `<p>Khi b&aacute;c sĩ thay đổi lịch kh&aacute;m, phần mềm sẽ gửi th&ocirc;ng b&aacute;o cho bạn qua tin nhắn sms, email v&agrave; tr&ecirc;n ứng dụng.</p><p>Khi&nbsp;nhận được th&ocirc;ng b&aacute;o về sự thay đổi. Bạn c&oacute; thể:</p><ul><li>Hủy Phiếu Kh&aacute;m Bệnh để nhận lại tiền kh&aacute;m theo quy định ho&agrave;n tiền.</li><li>Vẫn giữ nguy&ecirc;n th&ocirc;ng tin tr&ecirc;n Phiếu Kh&aacute;m Bệnh, v&agrave; điều n&agrave;y đồng nghĩa với việc bạn chấp nhận kh&aacute;m với b&aacute;c sĩ&nbsp;thay thế m&agrave; bệnh viện đ&atilde; sắp xếp.</li><li>Thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh, bằng c&aacute;ch:&nbsp;<strong>Đăng nhập phần mềm</strong> &gt; <strong>Th&ocirc;ng Tin T&agrave;i Khoản</strong> &gt; <strong>Quản l&yacute; phiếu kh&aacute;m bệnh</strong> &gt; chọn v&agrave;o phiếu kh&aacute;m bệnh bị thay đổi lịch kh&aacute;m &gt; bấm &quot;<strong>Chỉnh sửa</strong>&quot;.</li></ul><p><em>Việc thay đổi th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh phải được thực hiện theo <strong>Quy định chỉnh sửa th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh</strong>.</em></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 309,
            question:
              'Tôi có thể dùng phần mềm đăng ký khám bệnh cho người thân được không?',
            answer: `<p>Được!</p><p>Bạn c&oacute; thể d&ugrave;ng phần mềm&nbsp;để đăng k&yacute; kh&aacute;m bệnh&nbsp;cho người th&acirc;n của m&igrave;nh. Nhưng phải đảm bảo nhập ch&iacute;nh x&aacute;c th&ocirc;ng tin người th&acirc;n của bạn trong phần&nbsp;th&ocirc;ng tin bệnh nh&acirc;n&nbsp;khi&nbsp;đăng k&yacute;.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 310,
            question:
              'Làm sao có thể chọn đúng chuyên khoa để đăng ký khám qua phần mềm?',
            answer: `<p>Trường hợp t&aacute;i kh&aacute;m, bạn chỉ việc chọn đ&uacute;ng chuy&ecirc;n khoa của lần kh&aacute;m trước.</p><p>Trường hợp kh&aacute;m mới,</p><ul><li>Nếu biết chắc chuy&ecirc;n khoa m&igrave;nh muốn đăng k&yacute; kh&aacute;m, bạn chỉ việc t&igrave;m&nbsp;chọn chuy&ecirc;n khoa đ&oacute; trong danh s&aacute;ch.</li><li>Nếu&nbsp;chưa biết chuy&ecirc;n khoa n&agrave;o ph&ugrave; hợp, bạn&nbsp;c&oacute; thể gọi v&agrave;o tổng đ&agrave;i tư vấn s&agrave;ng lọc bệnh từ xa <strong>19007178</strong>, ch&uacute;ng t&ocirc;i sẽ kết nối bạn gặp trực tiếp c&aacute;c b&aacute;c sĩ của bệnh viện Đại Học Y&nbsp;Dược,&nbsp;để c&aacute;c b&aacute;c sĩ tư vấn gi&uacute;p bạn chọn chuy&ecirc;n khoa ph&ugrave; hợp.</li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 311,
            question:
              'Tại sao tôi phải cung cấp chứng minh nhân nhân hoặc giấy tờ tùy thân khi đăng ký khám bệnh qua phần mềm?',
            answer: `<p>Khi đăng k&yacute; kh&aacute;m bệnh tr&ecirc;n phần mềm,&nbsp;bạn&nbsp;phải cung cấp th&ocirc;ng tin về chứng minh nh&acirc;n d&acirc;n hoặc giấy tờ t&ugrave;y th&acirc;n, để bệnh viện l&agrave;m cơ sở đối chiếu đảm bảo x&aacute;c nhận đ&uacute;ng người bệnh&nbsp;in tr&ecirc;n phiếu kh&aacute;m bệnh,&nbsp;trước khi v&agrave;o ph&ograve;ng kh&aacute;m gặp b&aacute;c sĩ.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 312,
            question:
              'Tôi sẽ được khám bệnh vào đúng thời gian đã chọn, sau khi đăng ký khám qua phần mềm đúng không?',
            answer: `<p>C&oacute; thể!</p><p>Thời gian bạn chọn khi đăng k&yacute; kh&aacute;m, được xem l&agrave; thời gian kh&aacute;m bệnh dự kiến.</p><p>Do đặc th&ugrave; của c&ocirc;ng t&aacute;c kh&aacute;m chữa bệnh, ch&uacute;ng t&ocirc;i kh&ocirc;ng chắc chắn l&agrave;&nbsp;bạn sẽ được kh&aacute;m v&agrave;o đ&uacute;ng&nbsp;thời gian dự kiến đ&atilde; chọn.&nbsp;Tuy nhi&ecirc;n, ch&uacute;ng t&ocirc;i&nbsp;sẽ cố gắng cải thiện tốt nhất vấn đề n&agrave;y, gi&uacute;p bạn c&oacute; thể kh&aacute;m bệnh&nbsp;v&agrave;o đ&uacute;ng&nbsp;thời gian dự kiến&nbsp;đ&atilde; chọn.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 313,
            question:
              'Ngoài phiếu khám bệnh điện tử, tôi phải mang theo những giấy tờ gì khi đến bệnh viện để khám bệnh?',
            answer: `<p>Khi đến bệnh viện để kh&aacute;m chữa bệnh, bạn&nbsp;phải mang theo đầy đủ:</p><ul><li>Phiếu Kh&aacute;m Bệnh điện tử</li><li>Giấy tờ t&ugrave;y th&acirc;n (cmnd, hộ chiếu, &hellip;.)</li><li>C&aacute;c toa thuốc hoặc kết quả x&eacute;t nghiệm gần nhất.</li><li>Nếu l&agrave; <strong>Đối Tượng BHYT</strong>: bạn phải mang theo c&aacute;c giấy tờ để&nbsp;x&aacute;c minh BHYT (<strong>thẻ BHYT, giấy chuyển tuyến,</strong>&hellip;)&nbsp;</li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 314,
            question:
              'Làm sao để tôi có thể tìm lại phiếu khám bệnh đã từng đăng ký?',
            answer: `<p>Sau khi đăng k&yacute; kh&aacute;m bệnh&nbsp;th&agrave;nh c&ocirc;ng, phiếu kh&aacute;m bệnh sẽ được gửi đến bạn qua ba phương thức: tin nhắn SMS, hộp thư email, v&agrave; ngay tr&ecirc;n phần mềm.</p><p>Trong trường hợp cần t&igrave;m lại phiếu kh&aacute;m bệnh, bạn c&oacute; thể:</p><ul><li><strong>Đăng nhập phần mềm</strong> &gt; <strong>Th&ocirc;ng Tin T&agrave;i Khoản</strong> &gt; <strong>Quản L&yacute; Phiếu Kh&aacute;m Bệnh</strong> &gt; lọc theo bệnh nh&acirc;n c&oacute; phiếu kh&aacute;m bệnh cần t&igrave;m.</li><li>Kiểm tra lại hộp thư đến, v&agrave; Spam trong địa chỉ&nbsp;email.</li><li>Kiểm trai lại tin nhắn tr&ecirc;n&nbsp;điện thoại di động.</li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 315,
            question:
              'Đăng ký khám qua phần mềm thì khi nào tôi mới nhận được phiếu khám bệnh?',
            answer: `<p>Sau khi thanh to&aacute;n th&agrave;nh c&ocirc;ng, bạn sẽ nhận được phiếu kh&aacute;m bệnh ngay lập tức tr&ecirc;n phần mềm v&agrave; qua email (nếu hồ sơ bệnh nh&acirc;n của bạn c&oacute; th&ocirc;ng tin ch&iacute;nh x&aacute;c về&nbsp;địa chỉ email).</p><p>Ngo&agrave;i ra, Phần mềm cũng hỗ&nbsp;trợ việc gửi th&ocirc;ng tin phiếu kh&aacute;m bệnh qua tin nhắn SMS đến số điện thoại của bạn. Nhưng để sử dụng t&iacute;nh năng n&agrave;y bạn vui l&ograve;ng bấm v&agrave;o n&uacute;t &quot;Gửi Tin Nhắn SMS&quot; &gt; chọn&nbsp;số điện thoại &gt; bấm &quot;X&aacute;c Nhận&quot;.&nbsp;</p><p>&nbsp;</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 316,
            question: 'Phiếu khám bệnh có giá trị sử dụng bao lâu?',
            answer: `<p>Phiếu kh&aacute;m bệnh chỉ c&oacute; gi&aacute; trị sử dụng từ 6h30 &ndash; 16h30 của ng&agrave;y kh&aacute;m in tr&ecirc;n phiếu.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 317,
            question:
              'Tôi có thể đăng ký khám cho nhiều bệnh nhân trên 1 phiếu khám bệnh qua phần mềm được không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Trong c&ugrave;ng một lượt&nbsp;đăng k&yacute; kh&aacute;m, bạn chỉ được chọn 01 hồ sơ bệnh nh&acirc;n duy nhất.</p><p>Nếu muốn đăng k&yacute; kh&aacute;m th&ecirc;m&nbsp;cho một người&nbsp;bệnh kh&aacute;c, bạn vui l&ograve;ng thực hiện&nbsp;lượt&nbsp;đăng k&yacute; kh&aacute;m mới cho người&nbsp;bệnh đ&oacute;.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 318,
            question:
              'Tôi có thể đăng ký nhiều chuyên khoa cho cùng một bệnh nhân trên cùng một phiếu khám bệnh được không?',
            answer: `<p>Được!</p><p>Trong một lượt&nbsp;đăng k&yacute; kh&aacute;m, bạn c&oacute; thể&nbsp;đăng k&yacute; nhiều chuy&ecirc;n khoa kh&aacute;c nhau, tuy nhi&ecirc;n c&aacute;c chuy&ecirc;n khoa n&agrave;y phải được đăng k&yacute; cho c&ugrave;ng một người&nbsp;bệnh trong c&ugrave;ng một ng&agrave;y kh&aacute;m duy nhất.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 319,
            question:
              'Tôi có thể đăng ký nhiều ngày khám khác nhau trên cùng một phiếu khám bệnh được không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Trong một lượt&nbsp;đăng k&yacute; kh&aacute;m, bạn&nbsp;chỉ&nbsp;c&oacute; thể chọn&nbsp;đăng k&yacute; kh&aacute;m cho một ng&agrave;y duy nhất.</p><p>Nếu muốn đăng k&yacute;&nbsp;kh&aacute;m th&ecirc;m v&agrave;o&nbsp;ng&agrave;y kh&aacute;c, bạn&nbsp;vui l&ograve;ng&nbsp;thực hiện th&ecirc;m&nbsp;một lượt&nbsp;đăng k&yacute; kh&aacute;m mới.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 320,
            question: 'Tôi đăng ký khám nhưng không hủy phiếu được?',
            answer: `<p ><span><span><span><span><span><span>Thời gian quy định hủy phiếu phải được thực hiện trước 16g30 của ng&agrave;y trước ngày kh&aacute;m.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 321,
            question:
              'Tôi đăng ký đã bị trừ tiền nhưng sao không nhận được mã số khám bệnh?',
            answer: `<p ><span><span><span><span><span><span>Bạn vui l&ograve;ng kiểm tra trong phần th&ocirc;ng tin t&agrave;i khoản xem c&oacute; m&atilde; phiếu kh&aacute;m bệnh kh&ocirc;ng? Nếu kh&ocirc;ng vui l&ograve;ng gọi điện tổng đ&agrave;i 19002267 để được hỗ trợ </span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 322,
            question:
              'Tôi muốn đăng ký khám online tại bệnh viện ĐHYD thì phải làm sao?',
            answer: `<p ><span><span><span><span><span><span>Bạn c&oacute; thể truy cập website umc.medpro.com.vn hoặc tải v&agrave; sử dụng ứng dụng UMC &ndash; Đăng k&yacute; kh&aacute;m bệnh online tr&ecirc;n Google play hoặc Appstore để đặt kh&aacute;m online tại Bệnh viện Đại học y dược.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 323,
            question:
              'Tôi đã đăng ký thành công vậy khi đi khám tôi có phải xếp hàng gì không?',
            answer: `<p ><span><span><span><span><span><span>Sau khi đặt khám thành c&ocirc;ng tr&ecirc;n ph&acirc;̀n m&ecirc;̀m, đ&ecirc;́n ngày khám:</span></span></span></span></span></span></p><ul><li ><span><span><span><span><span><span>Người b&ecirc;̣nh kh&ocirc;ng&nbsp;BHYT sẽ đ&ecirc;́n trực ti&ecirc;́p&nbsp;ph&ograve;ng kh&aacute;m trước giờ hẹn 15 - 30 phút đ&ecirc;̉ khám b&ecirc;̣nh.</span></span></span></span></span></span></li><li ><span><span><span><span><span><span>Người b&ecirc;̣nh&nbsp;kh&aacute;m BHYT vui l&ograve;ng đến quầy 12, 13, 14 Khu A trước giờ hẹn 15 - 30 phút đ&ecirc;̉ xác nh&acirc;̣n BHYT trước khi vào phòng khám.</span></span></span></span></span></span></li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 324,
            question:
              'Tôi đăng ký và có mã số rồi, vậy đến ngày khám tôi lên thẳng phòng khám phải không?',
            answer: `<p ><span><span><span><span><span><span>Sau khi đặt khám thành c&ocirc;ng, Người b&ecirc;̣nh kh&ocirc;ng BHYT sẽ được đ&ecirc;́n trực ti&ecirc;́p phòng khám trước giờ hẹn 15 - 30 phút đ&ecirc;̉ khám b&ecirc;̣nh mà kh&ocirc;ng phải x&ecirc;́p hàng chờ đợi.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 325,
            question:
              'Tôi đăng ký bằng phần mềm và có mã số rồi, vậy tôi cần đến trước bệnh viện bao lâu để được khám?',
            answer: `<p ><span><span><span><span><span><span>Bạn chỉ cần đ&ecirc;́n trước giờ hẹn 15 - 30 phút, n&ecirc;́u:</span></span></span></span></span></span></p><ul><li><span><span><span><span><span><span>Kh&ocirc;ng BHYT Người b&ecirc;̣nh sẽ đ&ecirc;́n thẳng phòng khám đ&ecirc;̉ khám b&ecirc;̣nh.</span></span></span></span></span></span></li><li><span><span><span><span><span><span>Khám BHYT Người b&ecirc;̣nh sẽ đ&ecirc;́n qu&acirc;̀y 12,13,14 Khu A đ&ecirc;̉ xác nh&acirc;̣n BHYT trước khi vào phòng khám.</span></span></span></span></span></span></li></ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 326,
            question:
              'Khi đăng ký xong nhận được thông báo số bạn chọn đã hết tôi phải làm sao?',
            answer: `<p><span><span><span><span><span><span>Khi bạn nhận được th&ocirc;ng b&aacute;o đ&oacute; nghĩa l&agrave; khung giờ bạn chọn đ&atilde; hết số, bạn vui l&ograve;ng chọn sang khung giờ sau.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 3,
          },
        ],
      },
      {
        id: 4,
        name: 'Vấn đề về thanh toán',
        faq: [
          {
            id: 401,
            question: 'Điều kiện để được hoàn tiền là gì?',
            answer: `<p>Bạn chỉ được ho&agrave;n tiền khi thực hiện th&agrave;nh c&ocirc;ng y&ecirc;u cầu Hủy Phiếu Kh&aacute;m Bệnh.</p><p>V&igrave; vậy vui l&ograve;ng tham khảo quy định Hủy Phiếu Kh&aacute;m Bệnh trong phần Quy Định Sử Dụng Phầm Mềm.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 402,
            question:
              'Hoàn tiền như thế nào? Bao lâu thì tôi nhận lại được tiền hoàn?',
            answer: `<p>Khi bạn thực hiện việc&nbsp;thanh to&aacute;n bằng phương thức v&agrave; số t&agrave;i khoản n&agrave;o, th&igrave; phần mềm sẽ ho&agrave;n tiền&nbsp;lại cho bạn&nbsp;bằng <strong>đ&uacute;ng phương thức v&agrave; số t&agrave;i khoản</strong> đ&atilde; d&ugrave;ng để thanh to&aacute;n.</p><p>Thời gian bạn nhận được&nbsp;tiền ho&agrave;n th&ocirc;ng thường được quy định như sau:</p><ul><li>Thẻ kh&aacute;m bệnh:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 - 30 ng&agrave;y l&agrave;m việc.</li><li>Thẻ ATM nội địa:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 - 30 ng&agrave;y l&agrave;m việc.</li><li>Thẻ t&iacute;n dụng Visa, MasterCard:&nbsp; &nbsp; &nbsp; &nbsp; 1 - 45 ng&agrave;y l&agrave;m việc.</li></ul><p>T&iacute;nh từ thời điểm bạn thực hiện Hủy Phiếu Kh&aacute;m Bệnh th&agrave;nh c&ocirc;ng, nếu qu&aacute; thời gian tr&ecirc;n bạn vẫn chưa nhận được tiền ho&agrave;n, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 1900 2267 ch&uacute;ng t&ocirc;i sẽ hỗ&nbsp;trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 403,
            question:
              'Tôi có thể thanh toán tiền khám và phí tiện ích khi sử dụng phần mềm bằng cách nào?',
            answer: `<p>Bạn c&oacute; thể thanh to&aacute;n tiền kh&aacute;m v&agrave; ph&iacute; tiện &iacute;ch bằng&nbsp;c&aacute;ch thanh to&aacute;n&nbsp;trực tuyến&nbsp;qua ba phương thức:</p><ul><li>Thanh to&aacute;n bằng thẻ kh&aacute;m bệnh của bệnh viện.</li><li>Thanh to&aacute;n bằng ATM nội địa (đảm bảo thẻ ATM đ&atilde; được k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến)</li><li>Thanh to&aacute;n bằng c&aacute;c thẻ Visa/ MasterCard.</li></ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 404,
            question:
              'Tôi không có bất kỳ một thẻ khám bệnh hoặc thẻ ngân hàng nào để thanh toán, vậy tôi phải làm sao?',
            answer: `<p>Bạn c&oacute; thể li&ecirc;n hệ nh&acirc;n vi&ecirc;n bệnh viện&nbsp;tại c&aacute;c quầy hướng dẫn trong bệnh viện để được hỗ trợ l&agrave;m&nbsp;thẻ kh&aacute;m bệnh&nbsp;miễn ph&iacute; v&agrave; sử dụng ngay để thanh to&aacute;n đăng k&yacute; kh&aacute;m trực tuyến tr&ecirc;n phần mềm.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 405,
            question:
              'Thông tin thanh toán của tôi có bị lưu lại hoặc bị lộ khi tôi tiến hành thanh toán trên phần mềm không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Phần mềm&nbsp;ho&agrave;n to&agrave;n kh&ocirc;ng lưu lại, hoặc tiết lộ&nbsp;bất kỳ th&ocirc;ng tin thanh to&aacute;n n&agrave;o của bạn.</p><p>Sau khi bạn&nbsp;chọn phương thức thanh to&aacute;n ph&ugrave; hợp. Phần mềm&nbsp;sẽ chuyển bạn&nbsp;đến giao diện của cổng thanh to&aacute;n để nhập c&aacute;c th&ocirc;ng tin cần thiết v&agrave; thực hiện việc thanh to&aacute;n. V&igrave; vậy, phần mềm&nbsp;ho&agrave;n to&agrave;n kh&ocirc;ng lưu lại bất kỳ th&ocirc;ng tin thanh to&aacute;n&nbsp;n&agrave;o của bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 406,
            question:
              'Phần mềm có hỗ trợ thanh toán tiền làm dich vụ cận lâm sàng, tiền viện phí, tiền thuốc, hay các khoản chi phí khác ngoài tiền khám bệnh không?',
            answer: `<p>Chưa!</p><p>Phần mềm&nbsp;sẽ x&acirc;y dựng những t&iacute;nh năng tr&ecirc;n trong thời gian sớm nhất.&nbsp;C&ograve;n&nbsp;hiện tại, phần mềm chỉ hỗ trợ bệnh nh&acirc;n thanh to&aacute;n tiền kh&aacute;m cho c&aacute;c chuy&ecirc;n khoa đ&atilde; đăng k&yacute;.</p><p>Trong qu&aacute; tr&igrave;nh kh&aacute;m, nếu c&oacute; ph&aacute;t sinh th&ecirc;m c&aacute;c chi ph&iacute;&nbsp;cận l&acirc;m s&agrave;ng, tiền thuốc hay c&aacute;c loại ph&iacute; điều trị kh&aacute;c. Người d&ugrave;ng vui l&ograve;ng&nbsp;thanh to&aacute;n tại c&aacute;c quầy thu ng&acirc;n của bệnh viện.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 407,
            question:
              'Có phải ngay sau khi thanh toán, tôi sẽ nhận được phiếu khám bệnh qua tin nhắn sms ngay lập tức không?',
            answer: `<p>Kh&ocirc;ng!</p><p>Sau khi thanh to&aacute;n th&agrave;nh c&ocirc;ng, bạn sẽ nhận được&nbsp;phiếu kh&aacute;m bệnh ngay lập tức tr&ecirc;n phần mềm v&agrave; email (nếu trong hồ sơ bệnh nh&acirc;n c&oacute; địa chỉ email).</p><p>Để nhận được th&ocirc;ng tin phiếu kh&aacute;m bệnh qua tin nhắn SMS, bạn phải bấm v&agrave;o &quot;<strong>Gửi Tin Nhắn SMS</strong>&quot; &gt; chọn&nbsp;số điện thoại muốn nhận tin nhắn &gt; bấm&nbsp;&quot;<strong>X&aacute;c Nhận</strong>&quot;, khi đ&oacute; phần mềm sẽ&nbsp;gửi&nbsp; tin nhắn chứa th&ocirc;ng tin phiếu kh&aacute;m bệnh đến số điện thoại bạn vừa chọn.</p><p>Lưu &yacute;: Mỗi phiếu kh&aacute;m bệnh chỉ c&oacute; thể thực hiện hai&nbsp;lần &quot;Gửi Tin Nhắn SMS&quot;, n&ecirc;n bạn h&atilde;y sử dụng t&iacute;nh năng n&agrave;y khi thực&nbsp;sự cần thiết.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 408,
            question:
              'Tôi đăng nhập đúng tên tài khoản nhưng không thanh toán được ?',
            answer: `<ul><li><span><span><span ><span><span><span>Đối với thẻ kh&aacute;m bệnh/ATM nội địa phải đảm bảo đ&atilde; k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến (internet banking) th&igrave; mới c&oacute; thể thanh to&aacute;n được. Nếu thẻ của bạn chưa k&iacute;ch hoạt TTTT th&igrave; vui l&ograve;ng li&ecirc;n hệ với ng&acirc;n h&agrave;ng ph&aacute;t h&agrave;nh thẻ của bạn để đăng k&yacute;. </span></span></span></span></span></span></li>rnt<li style="margin:0in 0in 8pt 0.5in"><span><span><span ><span><span><span>Nếu thẻ của bạn đ&atilde; đăng k&yacute; TTTT v&agrave; nhập ch&iacute;nh x&aacute;c th&ocirc;ng tin thanh to&aacute;n nhưng vẫn kh&ocirc;ng thanh to&aacute;n được, vui l&ograve;ng li&ecirc;n hệ 19002267 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn</span></span></span></span></span></span></li></ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 409,
            question:
              'Tôi đăng ký nhưng đến bước thanh toán lại thanh toán không được?',
            answer: `<p><span><span><span><span><span><span>Bạn vui l&ograve;ng ki&ecirc;̉m tra lại thẻ đã đăng ký chức năng thanh toán trực tuy&ecirc;́n&nbsp;chưa? Nếu đ&atilde; đăng k&yacute; m&agrave; vẫn kh&ocirc;ng thanh to&aacute;n được, vui l&ograve;ng li&ecirc;n hệ 19002267 để được hỗ trợ.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 410,
            question:
              'Tôi có thẻ bệnh viện nhưng chưa đăng ký thanh toán trực tuyến, vậy tôi phải làm sao?',
            answer: `<p ><span><span><span><span><span><span>Vui lòng li&ecirc;n hệ PGD ng&acirc;n h&agrave;ng Vietinbank tr&ecirc;n to&agrave;n quốc đ&ecirc;̉ đăng ký thanh toán trực tuy&ecirc;́n hoặc sử dụng thẻ ng&acirc;n h&agrave;ng kh&aacute;c đ&atilde; k&iacute;ch hoạt chức năng thanh toán trực tuy&ecirc;́n để thanh to&aacute;n.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 411,
            question:
              'Tôi muốn đăng ký khám online nhưng đến trực tiếp bệnh viện để thanh toán được không?',
            answer: `<p ><span><span><span><span><span><span>Hiện tại khi đặt kh&aacute;m tr&ecirc;n phần mềm bạn vui l&ograve;ng ho&agrave;n tất quy tr&igrave;nh thanh to&aacute;n ngay tr&ecirc;n phần mềm để được nhận phiếu kh&aacute;m bệnh.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 412,
            question:
              'Tôi đăng ký bằng thẻ Ngân hàng Quân đội nhưng không có tôi phải thanh toán làm sao?',
            answer: `<p ><span><span><span><span><span><span>Hiện phần mềm kh&ocirc;ng hỗ trợ thanh to&aacute;n của Ng&acirc;n h&agrave;ng Qu&acirc;n đội. Bạn vui l&ograve;ng sử dụng thẻ ng&acirc;n h&agrave;ng kh&aacute;c &nbsp;(theo danh s&aacute;ch Ng&acirc;n h&agrave;ng trong phần mềm c&oacute; hỗ trợ) để thanh to&aacute;n.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 413,
            question:
              'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
            answer: `<p ><span><span><span><span><span><span>Vui lòng ki&ecirc;̉m tra ch&iacute;nh x&aacute;c th&ocirc;ng tin thẻ đ&atilde; nhập. Trường hợp vẫn bị lỗi, h&atilde;y chụp ảnh m&agrave;n h&igrave;nh v&agrave; gửi qua email, ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 414,
            question:
              'Tôi đăng ký thanh toán bằng thẻ ngân hàng HSBC đã bị trừ tiền nhưng không nhận được phiếu?',
            answer: `<ul><li ><span><span><span><span><span><span>Sau khi đăng k&yacute; kh&aacute;m v&agrave; thanh to&aacute;n th&agrave;nh c&ocirc;ng, phần mềm sẽ gửi phiếu kh&aacute;m bệnh ngay cho bạn. Trường hợp đ&atilde; đăng k&yacute; kh&aacute;m v&agrave; thanh to&aacute;n th&agrave;nh c&ocirc;ng nhưng chưa nhận được phiếu kh&aacute;m bệnh, vui l&ograve;ng li&ecirc;n hệ ngay 19002267 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</span></span></span></span></span></span></li></ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 415,
            question:
              'Sau khi nhập thông tin thẻ, nhập OTP xong nhận được thông báo trạng thái không hợp lệ tôi phải làm sao?',
            answer: `<p><span><span><span><span><span><span>Do thời gian bạn nhập OTP qu&aacute; l&acirc;u n&ecirc;n sẽ nhận được th&ocirc;ng b&aacute;o tr&ecirc;n, bạn vui l&ograve;ng thao t&aacute;c thanh to&aacute;n lại</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 416,
            question:
              'Tôi nhận được thông báo đơn hàng bị hủy nhưng thẻ tôi vẫn bị trừ tiền?',
            answer: `<p><span><span><span ><span><span><span>Đ&acirc;y l&agrave; do lỗi của cổng thanh to&aacute;n, số tiền bạn sẽ được ng&acirc;n h&agrave;ng ho&agrave;n lại sau. Bạn vui l&ograve;ng thao t&aacute;c đăng k&yacute; lại, v&agrave; nếu được bạn đổi sang thẻ kh&aacute;c để thanh to&aacute;n.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 417,
            question:
              'Tôi đã đến ngân hàng Viettin để đăng ký chức năng thanh toán trực tuyến cho thẻ khám bệnh nhưng ngân hàng báo không được?',
            answer: `<p><span><span><span><span><span><span>Khi k&iacute;ch hoạt chức năng TTTT, ng&acirc;n h&agrave;ng y&ecirc;u cầu phải đ&iacute;ch th&acirc;n chủ thẻ mang thẻ v&agrave; chứng minh nh&acirc;n d&acirc;n đến để đăng k&yacute;. Nếu bạn l&agrave; chủ thẻ m&agrave; vẫn kh&ocirc;ng đăng k&yacute; được, bạn vui l&ograve;ng gọi tổng đ&agrave;i 19002267 để được hỗ trợ.</span></span></span></span></span></span></p>`,
            status: 1,
            category_id: 4,
          },
        ],
      },
    ],
    sortOrder: 5,
  },
  {
    key: 'lien-he',
    link: '/lien-he',
    url: '/lien-he',
    name: 'Liên hệ',
    content: 'Nội dung liên hệ',
    sortOrder: 6,
  },
];
