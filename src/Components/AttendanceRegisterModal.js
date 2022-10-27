import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import Modal from 'react-bootstrap/Modal'









const AttendanceRegisterModal = ({attendanceInfo,showModal,hideModal}) => {
  return (
    <Modal
        size="lg"
        show={true}
        onHide={hideModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
        <Modal.Title className='text-center' id="modal-title">
            <h4 >ZANAAFRICA</h4>
            <h5 >DAILY ATTENDANCE REGISTER </h5>
        </Modal.Title>
        </Modal.Header>

        {/* Info */}
        <Modal.Body>
            <Table bordered>


            </Table>
        </Modal.Body>
    </Modal>
  )
}

export default AttendanceRegisterModal