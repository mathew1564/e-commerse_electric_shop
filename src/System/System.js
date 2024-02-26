import Link from "~/components/Link/Link";
import PageTitle from "~/Title/PageTitle";
import {Row,Col} from 'react-bootstrap';        
import "./System.css"
import { Envelope } from 'react-bootstrap-icons';
export default function System() {
    return(
        <>
        <Link titleNav="Hệ thống cửa hàng"/>
        <PageTitle title="Hệ thống cửa hàng"/>
        <Row className="bg-white system-container"> 
            <Row className="system-content system-border-bottom">
            <Col lg="6">
                <h4 className="system-title">Điện tử NShop – Quận 9</h4>
                <div>Thời gian làm việc: <span className="text-dark font-bold">từ 8h00 đến 18h00 </span>, chủ nhật nghỉ</div>
                <div>Địa chỉ: 7 Trần Hưng Đạo, Hiệp Phú, Quận 9, TP. HCM</div>

                <div>Bán hàng: <span className="text-primary cursor-pointer dark"> 093 27 23 186 </span> - <span className="text-primary cursor-pointer dark">093 27 34 186</span></div>
                <div>Kỹ thuật: <span className="text-primary cursor-pointer dark"> 0339 449 749</span></div>
                <Envelope color="blue" className="d-inline-block"/> <div className="d-inline-block"> info@nshopvn.com</div>
            </Col>
            <Col lg="6">
                <iframe className="map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.530938906791!2d106.77271301480137!3d10.84716309227357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x837bfddc52013876!2zxJBp4buHbiB04butIE5TaG9wIFF14bqtbiA5!5e0!3m2!1svi!2s!4v1588601616347!5m2!1svi!2s"></iframe>
            </Col>

            </Row>
            <Row className="system-content ">
            <Col lg="6">
                <h4 className="system-title">ĐĐiện tử NShop – Tân Phú</h4>
                <div>Thời gian làm việc: <span className="text-dark font-bold">từ 8h00 – 12h00 và 13h00 – 18h00 (nghỉ trưa 12h-13h) </span>, chủ nhật nghỉ</div>
                <div>Địa chỉ: 1 Bùi Xuân Phái, Tây Thạnh, Tân Phú, TP. HCM</div>
                <div>Bán hàng: <span className="text-primary cursor-pointer dark"> 093 27 23 186 </span> - <span className="text-primary cursor-pointer dark">093 27 34 186</span></div>
                <div>Kỹ thuật: <span className="text-primary cursor-pointer dark"> 0339 449 749</span></div>
                <Envelope color="blue" className="d-inline-block"/> <div className="d-inline-block"> info@nshopvn.com</div>
            </Col>
            <Col lg="6">
                <iframe className="map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0630929081776!2d106.62612595046883!3d10.806479792263282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be209e90215%3A0x84c9b0d811688acb!2zxJBp4buHbiB04butIE5TaG9wIFTDom4gUGjDug!5e0!3m2!1svi!2s!4v1588612368506!5m2!1svi!2s"></iframe>
            </Col>

            </Row>

            <Row className="system-video">
            <iframe width="100" height="500" src="https://www.youtube.com/embed/PDobVIEOmWY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Row>
        </Row>
        </>
    )
}