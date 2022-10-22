import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




const PaymentApprovalModal = ({prfData}) => {
    const [lgShow, setLgShow] = useState(false);

  return (
    <>
     
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
    
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {prfData.bank}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
      )
}

export default PaymentApprovalModal