import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import ProductList from '../Content/ProductList'
import './products.css'
import Link from '../Link/Link';
import FilterBar from './FilterBar';
import Form from 'react-bootstrap/Form';
import PageSelect from './PageSelect';
import PageTitle from '~/Title/PageTitle';
//icon
import { AiOutlineRightCircle } from 'react-icons/ai'
import { AiOutlineLeftCircle } from 'react-icons/ai'
const products = [
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
  {
    img: 'https://nshopvn.com/wp-content/uploads/2022/12/truc-nhom-cho-banh-xe-v-slot-5x10x6mm-2jh6-1-300x300.jpg',
    content: 'Trục nhôm cho bánh xe V-Slot 5x10x6mm',
    price: '2.000',
  },
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

function Products() {
  const [currentPage, setCurrentPage] = useState(1); // current page
  const itemsPerPage = 30; // number of products displayed per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <Link titleNav={'Sản phẩm'} />
      <PageTitle title="Sản phẩm"></PageTitle>
      <FilterBar />
      <ProductList products={currentItems} />
      <div className='pagination'>

        <PageSelect
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={setCurrentPage}
        />
        {currentPage > 1 && ( // show back button if not on first page
          <button onClick={() => setCurrentPage(currentPage - 1)} className='btn btn-back'><AiOutlineLeftCircle />TRANG TRƯỚC</button>
        )}
        {indexOfLastItem < products.length && ( // show "see more" button if not on last page
          <button onClick={() => setCurrentPage(currentPage + 1)} className='btn btn-see-more'>XEM THÊM <AiOutlineRightCircle /></button>
        )}
      </div>
    </>
  )
}
export default Products
