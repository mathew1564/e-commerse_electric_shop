
import Blogitem from "./Blogitem"
import Link from "../Link/Link"
import PageTitle from "~/Title/PageTitle"
export function Blog() {
    const blog= [
        {
        img:'https://nshopvn.com/wp-content/uploads/2022/03/7-300x150.png',
        title:'Tìm hiểu về module sim 800A, cùng làm ứng dụng điều khiển từ xa 4 trong 1',
        des:'Trong bài viết này chúng ta cùng tìm hiểu cách sử dụng module sim 800A từ đó phát triển ứng dụng điều khiển từ xa 4 trong 1',
        category:'Góc chia sẻ',
        time:'12/03/2022'
        }
        ,{
        img:'https://nshopvn.com/wp-content/uploads/2022/03/14-300x150.jpg',
        title:'Cảm biến lưu lượng nước là gì ? nó hoạt động như thế nào, cảm biến lưu lượng nước đang bán tại Nshop',
        des:'Hôm nay chúng ta sẽ cùng tìm hiểu cảm biến lưu lượng nước là gì ứng dụng của nó trong cuộc sống, và cùng nhau tìm hiểu các loại cảm biến lưu lượng đang có tại Nshopvn.com',
        category:'Góc chia sẻ',
        time:'05/03/2022'
        }
        ,{
        img:'https://nshopvn.com/wp-content/uploads/2022/02/8-2-300x150.jpg',
        title:'Hiểu rõ về Pin 18650',
        des:'Pin 18650 được sử dụng rất phổ biến trong đời sống hằng ngày tuy nhiên chúng ta đã thực sự hiểu về nó và sử dụng nó đúng cách hãy cùng tìm hiểu trong bài viết này nhé',
        category:'Góc chia sẻ',
        time:'25/02/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/02/15-300x150.jpg',
        title:'Dimmer DC là gì hoạt động như thế nào, ứng dụng của dimmer DC, có những loại Dimmer DC nào đang bán tại NSHOP',
        des:'Hôm nay chúng ta sẽ cùng nhau mổ xẻ một dimmer DC xem chúng hoạt động như thế nào và cùng nhau lựa chọn loại dimmer phù hợp cho mình',
        category:'Góc chia sẻ',
        time:'19/02/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/02/1-4-300x150.jpg',
        title:'Cảm biến vật cản hồng ngoại hoạt động như thế nào, có những loại cảm biến vật cản hồng ngoại nào ? ứng dụng của cảm biến vật cản hồng ngoại, Hướng dẫn làm bộ đo tốc độ động cơ sử dụng cảm biến vật cản hồng ngoại',
        des:'Cảm biến vật cản hồng ngoại hoạt động như thế nào, có những loại cảm biến vật cản hồng ngoại nào ? ứng dụng của cảm biến vật cản hồng ngoại, Hướng dẫn làm bộ đo tốc độ động cơ sử dụng cảm biến vật cản hồng ngoại',
        category:'Góc chia sẻ',
        time:'12/02/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/01/2022-01-24-lich-nghi-tet-300x100.jpg',
        title:'THÔNG BÁO NGHỈ TẾT NGUYÊN ĐÁN 2022',
        des:'Kính gửi: Quý Khách Hàng, Nshop trân trọng thông báo đến Quý Khách Hàng lịch nghỉ Tết Nguyên Đán 2022: Thời gian nghỉ: Từ 28/1/2022 (26/12 Âm lịch) – đến 07/02/2022 (7/1 Âm lịch) Thời gian làm lại: Thứ 3, ngày 08/02/2022 (Mùng 8/1 Âm lịch) 🔹 Đối với các đơn hàng online liên tỉnh, […]',
        category:'Tin tức',
        time:'26/01/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/01/nhiet-ke-hong-ngoai-khong-tiep-xuc-2-300x150.jpg',
        title:'Cảm biến nhiệt độ hồng ngoại không tiếp xúc là gì? Nguyên lý, ứng dụng của cảm biến? Hướng dẫn làm bộ đo nhiệt độ cơ thể không tiếp xúc tự động với Arduino',
        des:'Trong bài viết này, chúng ta sẽ tìm hiểu về cảm biến nhiệt độ hồng ngoại không tiếp xúc; nguyên lý và ứng dụng của nó, từ đó làm một bộ đo nhiệt độ cơ thể tự động.',
        category:'Tài liệu hướng dẫn',
        time:'22/01/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/01/4-2-300x150.jpg',
        title:'Tổng quan màn hình oled, tạo ảnh tĩnh và ảnh động trên màn hình oled, tạo project đo nồng độ khí gas hiển thị trên màn hình oled',
        des:'Để hiển thị một hình ảnh đẹp lên màn hình oled thì không phải ai cũng làm được có nhiều người trong đó có mình từng phải đi vay mượn từng code chắp vá, nhưng vẫn chưa đáp ứng được nhu cầu, vì thế trong bài viết này chúng ta cùng nhau tìm hiểu các hiển thị 1 hình ảnh lên màn hình oled. không dài dòng nữa chúng ta bắt đầu thôi.',
        category:'Góc chia sẻ',
        time:'15/01/2022'
        },{
        img:'https://nshopvn.com/wp-content/uploads/2022/01/3-300x150.jpg	',
        title:'Cảm biến khí là gì ? Ứng dụng của cảm biến khí. Có những loại cảm biến khí nào ? Tự chế một bộ cảnh báo khí rò rỉ qua điện thoại và còi bằng Arduino',
        des:'Cảm biến khí là gì ? Ứng dụng của cảm biến khí. Có những loại cảm biến khí nào ? Tự chế một bộ cảnh báo khí rò rỉ qua điện thoại và còi bằng Arduino',
        category:'Góc chia sẻ',
        time:'08/01/2022'
        }
        ]

     return  (
        <>
      <Link titleNav='Blog'></Link>
        <PageTitle title="Blog"></PageTitle>
        <Blogitem blog={blog}></Blogitem>
        </>
     )
}