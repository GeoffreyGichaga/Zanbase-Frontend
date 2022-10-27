import React from 'react'
import Modal from 'react-bootstrap/Modal'
import '../Styling/PaymentRequest.css'





const PaymentRequestModal = ({paymentRequestInfo,showModal,hideModal}) => {
  return (

    <Modal
        size="lg"
        show={showModal}
        onHide={hideModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
        <Modal.Title className='modal-tile'>
            <h4 >ZANAAFRICA</h4>
            <h5 >DAILY ATTENDANCE REGISTER </h5>
        </Modal.Title>
        </Modal.Header>

        {/* Info */}
        <Modal.Body>
        </Modal.Body>
    </Modal>
  )
}

export default PaymentRequestModal