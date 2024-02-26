import Modal from 'react-bootstrap/Modal';
import Update from '../../img/Update-mess.png'
//Hiển thị thông báo ra màn hình //
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='text-danger'>
          Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        <img src={Update} alt="update" width={400} />
        <p>Các tính năng đang được cập nhật...</p>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal
