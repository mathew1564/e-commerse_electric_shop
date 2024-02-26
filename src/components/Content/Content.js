import React from 'react';


import './Card/card.css';
import ProductList from './ProductList';
const productNew = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-canh-bao-xoay-vong-halogen-mau-do-12v-9wnn-1-300x300.jpg',
		content: 'Đèn cảnh báo xoay vòng Halogen màu Đỏ 12V',
		price: '208.000₫',
		soldOut: 'Hết Hàng'
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-canh-bao-xoay-vong-halogen-mau-do-24v-6l3h-1-300x300.jpg',
		content: 'Đèn cảnh báo xoay vòng Halogen màu Đỏ 24V',
		price: '208.000₫',
		soldOut: 'Hết Hàng'
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-canh-bao-xoay-vong-halogen-mau-vang-12v-3br2-1-300x300.jpg',
		content: 'Đèn cảnh báo xoay vòng Halogen màu Vàng 12V',
		price: '208.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-canh-bao-xoay-vong-halogen-mau-vang-24v-ka36-1-300x300.jpg',
		content: 'Đèn cảnh báo xoay vòng Halogen màu Vàng 24V',
		price: '208.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-canh-bao-12-24v-nhieu-che-do-mau-xanh-duong-g677-1-300x300.jpg',
		content: 'Đèn LED cảnh báo 12-24V nhiều chế độ màu Xanh Lam',
		price: '248.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-canh-bao-12-24v-nhieu-che-do-mau-vang-ll25-1-300x300.jpg',
		content: 'Đèn LED cảnh báo 12-24V nhiều chế độ màu Vàng',
		price: '248.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-canh-bao-12-24v-nhieu-che-do-mau-do-m6xw-1-300x300.jpg',
		content: 'Đèn LED cảnh báo 12-24V nhiều chế độ màu Đỏ',
		price: '248.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-nhay-canh-bao-12-24v-co-de-hut-nam-cham-mau-do-5aya-1-300x300.jpg',
		content: 'Đèn Led nháy cảnh báo 12-24V có đế hút nam châm màu Đỏ',
		price: '142.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-nhay-canh-bao-12-24v-co-de-hut-nam-cham-mau-vang-9zqq-1-300x300.jpg',
		content: 'Đèn Led nháy cảnh báo 12-24V có đế hút nam châm màu Vàng',
		price: '142.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/den-led-nhay-canh-bao-12-24v-co-de-hut-nam-cham-mau-xanh-duong-varu-1-300x300.jpg',
		content: 'Đèn Led nháy cảnh báo 12-24V có đế hút nam châm màu Xanh Dương',
		price: '142.000₫',
	},
];

const productFeatured = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2021/05/bo-nguon-da-nang-wanptek-kps3010df-30v-10a-wd0s-3-300x300.jpg',
		content: 'Bộ nguồn đa năng WANPTEK KPS3010DF 30V 10A',
		price: '1.897.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/11/pin-18650-1s-4-2v-3-cell-7800mah-tich-hop-mach-bao-ve-mql9-1-300x300.jpg',
		content: 'Pin 18650 1S 4.2V 3 cell 7800mAh tích hợp mạch bảo vệ',
		price: '130.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/02/may-kho-860d-dieu-chinh-nhiet-do-led-hien-thi-TXOR-2020-300x300.jpg',
		content: 'Máy khò điều chỉnh nhiệt độ 860D có led hiển thị',
		price: '1.349.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/01/bo-bat-tat-may-bom-theo-muc-nuoc-xkc-c352-3p-kem-3-cam-bien-ABEL-2020-300x300.jpg',
		content: 'Bộ bật tắt máy bơm theo mực nước XKC-C352-3P kèm 3 dây cảm biến 3 mét',
		price: '905.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/cam-bien-toc-do-gio-W10W-2020-300x300.jpg',
		content: 'Cảm biến tốc độ gió',
		price: '1.557.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/bo-dieu-khien-nhiet-do-dong-ngat-relay-220vac-stc-1000-uhsk-2-300x300.jpg',
		content: 'Bộ Điều Khiển Nhiệt Độ Đóng Ngắt Relay 220VAC STC-1000',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/dong-co-dc-servo-giam-toc-jgb37-342q-2-300x300.jpg',
		content: 'Động Cơ DC Servo Giảm Tốc JGB37',
		price: '252.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/mach-thu-phat-rf-uart-lora-sx1278-433mhz-3000m-wfmr-1-300x300.jpg',
		content: 'Mạch thu phát RF UART lora SX1278 433Mhz 3000m',
		price: '258.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/nguon-12v30a-nguon-to-ong-849V-2020-300x300.jpg',
		content: 'Nguồn tổ ong 12V 30A',
		price: '260.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/mo-han-chi-dieu-chinh-nhiet-do-no-911-60w-5-mui-han-mieng-gac-4hti-3-300x300.jpg',
		content: 'Mỏ hàn chì điều chỉnh nhiệt độ NO.911 60W + 5 mũi hàn + miếng gác',
		price: '160.000₫',
	},
];

const Arduino = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/09/board-arduino-nano-v3-1-lgt8f328p-zcmj-1-300x300.jpg',
		content: 'Board Arduino Nano V3.1 LGT8F328P',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/day-cap-a-b-50cm-1t6f-2lcw-1-300x300.jpg',
		content: 'Dây cáp A-B',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-uno-r3-dip-1-b1hz-6-300x300.jpg',
		content: 'Arduino UNO R3 DIP',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/08/mach-stm8s103f3p6-ntt3-1-300x300.jpg',
		content: 'Mạch STM8S103F3P6',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/09/arduino-promini-lgt328p-ssop20-55xw-2-300x300.jpg',
		content: 'Arduino Promini LGT328P SSOP20',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/05/mach-stm32f103c8t6-qrn2-1-300x300.jpg',
		content: 'Mạch STM32F103C8T6',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/de-ra-chan-arduino-nano-v3-6551-2020-300x300.jpg',
		content: 'Đế Ra Chân Arduino Nano v3',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/09/board-arduino-nano-v3-1-lgt8f328p-zcmj-1-300x300.jpg',
		content: 'Board Arduino Nano V3.1 LGT8F328P',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '115.000₫',
	},
];

const Cambien = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/04/cam-bien-can-nang-loadcell-400kg-jnx7-1-300x300.jpg',
		content: 'Cảm biến cân nặng Loadcell',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '115.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '15.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/03/cam-bien-van-tay-dien-dung-r557-ejns-2-300x300.jpg',
		content: 'Cảm biến vân tay điện dung R557',
		price: '915.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '215.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '155.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/03/cam-bien-chuyen-dong-radar-ld1020-3-3v-10ghz-q178-4-300x300.jpg',
		content: 'Cảm biến chuyển động radar LD1020 3.3V 10GHz',
		price: '145.000₫',
	},

	{
		img: 'https://nshopvn.com/wp-content/uploads/2023/02/cam-bien-nhan-dang-van-tay-quang-hoc-r308-m5so-2-300x300.jpg',
		content: 'Cảm Biến Nhận Dạng Vân Tay Quang Học R308',
		price: '185.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/arduino-pro-mini-5v-16mhz-e74h-1-1-300x300.jpg',
		content: 'Arduino Pro Mini 5V 16Mhz',
		price: '15.000₫',
	},
];

const dongho = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2021/05/dong-ho-dien-tu-aneng-a830l-atri-2-1-300x300.jpg',
		content: 'Đồng hồ điện tử ANENG A830L',
		price: '129.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2021/03/nhip-tham-do-kiem-tra-lcr-va-thanh-phan-chip-smd-28vc-5-300x300.jpg',
		content: 'Nhíp thăm dò kiểm tra LCR và thành phần chip SMD',
		price: '41.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2021/01/dong-ho-ampe-kim-tu-dong-winapex-8203-5wq6-2-300x300.jpg',
		content: 'Đồng hồ ampe kìm tự động WinAPEX 8203',
		price: '851.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/05/dong-ho-ampe-kim-tu-dong-winapex-8202-kp9j-S1-300x300.jpg',
		content: 'Đồng hồ ampe kìm tự động WinAPEX 8202',
		price: '592.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2020/04/dong-ho-ampe-kim-tu-dong-winapex-8201-XBGV-2020-0-300x300.jpg',
		content: 'Đồng hồ ampe kìm tự động WinAPEX 8201',
		price: '610.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/11/dong-ho-dien-tu-tu-dong-yiyoubao-et8133-QNZU-2020-300x300.jpg',
		content: 'Đồng hồ điện tử tự động YIYOUBAO ET8133',
		price: '353.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/dong-ho-dien-tu-winapex-et8103-auto-O75E-2020-300x300.jpg',
		content: 'Đồng hồ điện tử WinAPEX ET8103 Auto',
		price: '496.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/dong-ho-dien-tu-winapex-et8101-V9F2-2020-300x300.jpg',
		content: 'Đồng hồ điện tử WinAPEX ET8101',
		price: '382.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/Dong-ho-dien-tu-WinAPEX-ET8102-L7NA-3-300x300.jpg',
		content: 'Đồng hồ điện tử WinAPEX ET8102',
		price: '447.000₫',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2019/03/dong-ho-dien-tu-victor-vc830l-lyl8-5-300x300.jpg',
		content: 'Đồng hồ điện tử VICTOR VC830L',
		price: '289.000₫',
	},
];

const mayin = [
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/khop-cau-canh-tay-don-may-in-3d-kclx-vxbn-2-300x300.jpg',
		content: 'Khớp cầu cánh tay đòn máy in 3D SI3T/K ( ren M3 )',
		price: '17.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/khop-cau-canh-tay-don-may-in-3d-kclx-vxbn-2-300x300.jpg',
		content: 'Khớp cầu cánh tay đòn máy in 3D SI4T/K ( ren M4 )',
		price: '17.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/khoi-nhom-co-dinh-bo-dau-phun-e3d-v6-patm-4-300x300.jpg',
		content: 'Khối nhôm cố định Bộ đầu phun E3D V6',
		price: '64.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/dau-nung-nhua-may-in-3d-1-met-12v-60w-e3t3-1-300x300.jpg',
		content: 'Đầu nung nhựa máy in 3D 1 mét 12V 60W',
		price: '57.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/dau-nung-nhua-may-in-3d-1-met-24v-60w-dx73-1-300x300.jpg',
		content: 'Đầu nung nhựa máy in 3D 1 mét 24V 60W',
		price: '57.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/cam-bien-nhiet-ntc-100k-dung-cho-bo-dau-phun-e3d-v6-pzmd-5-300x300.jpg',
		content: 'Cảm biến nhiệt NTC 100K dùng cho bộ đầu phun E3D V6',
		price: '14.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/ong-tan-nhiet-bo-dau-phun-e3d-v6-original-dglw-2-300x300.jpg',
		content: 'Ống tản nhiệt Bộ đầu phun E3D V6 Original',
		price: '21.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/ong-tan-nhiet-cho-bo-dau-phun-e3d-v6-1clq-1-300x300.jpg',
		content: 'Ống tản nhiệt cho Bộ đầu phun E3D V6',
		price: '52.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/bo-ban-truot-v-slot-cho-nhom-dinh-hinh-2020-2040-openbuild-v0s7-2-300x300.jpg',
		content: 'Bộ bàn trượt V-Slot cho nhôm định hình 2020, 2040 OpenBuild',
		price: '118.000',
	},
	{
		img: 'https://nshopvn.com/wp-content/uploads/2022/12/truc-nhom-cho-banh-xe-v-slot-5x10x6mm-2jh6-1-300x300.jpg',
		content: 'Trục nhôm cho bánh xe V-Slot 5x10x6mm',
		price: '2.000',
	},
];

const Content = () => {
	return (
		<>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product1">Danh sách sản phẩm mới</h4>
					</div>
				</header>
				<a href="#/product"><ProductList products={productNew} /></a>
			</section>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product">Sản phẩm nổi bật</h4>
					</div>
					<a href="#" className='show99'><span>Xem thêm(99+)</span></a>
				</header>
				<a href="#/product"><ProductList products={productFeatured} /></a>
			</section>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product">Arduino</h4>
					</div>
					<a href="#" className='show99'><span>Xem thêm(99+)</span></a>
				</header>
				<a href="#/product"><ProductList products={Arduino} /></a>
			</section>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product">Cảm biến</h4>
					</div>
					<a href="#" className='show99'><span>Xem thêm(99+)</span></a>
				</header>
				<a href="#/product"><ProductList products={Cambien} /></a>
			</section>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product">Đồng hồ</h4>
					</div>
					<a href="#" className='show99'><span>Xem thêm(99+)</span></a>
				</header>
				<a href="#/product"><ProductList products={dongho} /></a>
			</section>
			<section className='block-product'>
				<header className='block-header'>
					<div className='title-modular'>
						<h4 className="title-list-product">Máy in</h4>
					</div>
					<a href="#" className='show99'><span>Xem thêm(99+)</span></a>
				</header>
				<a href="#/product"><ProductList products={mayin} /></a>
			</section>
		</>
	);
};

export default Content;


