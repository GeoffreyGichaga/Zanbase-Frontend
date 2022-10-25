import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const PaymentApprovalModal = ({prfInfo,showModal,hideModal}) => {

  return (
    <> 
      <Modal
        size="lg"
        show={showModal}
        onHide={hideModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Payment Request From
        </Modal.Title>
        </Modal.Header>

        {/* Info */}
        <Modal.Body>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    date : {prfInfo.prepared_by_date}
                </Col>
                <Col xs={6} md={6}>
                org: {prfInfo.org}
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6}>
                program: {prfInfo.program}
                </Col>
                <Col xs={6} md={6}>
                function: {prfInfo.function}
                </Col>
            </Row>

            <p className='mt-5'>Intern Details </p>

            <Row>
                <Col xs={6} md={6}>
                name: {prfInfo.name}
                </Col>

            </Row>

            <Row>
                <Col>
                Intern ID: {prfInfo.employee_id}
                </Col>

                <Col>
                Daily Stipend: 500
                
                </Col>
            </Row>

            <Row>
                <Col>
                Start date of the week: {prfInfo.start_day_of_the_week} 
                </Col>
                
                <Col>
                End date of the week: {prfInfo.end_date_of_the_week}
                </Col>
            </Row>


            <Row>
                <Col>
                No Of days Worked: {prfInfo.number_of_days_worked}
                </Col>
                
                <Col>
                Amount Payable: {prfInfo.amount_payable}
                </Col>
            </Row>

            <p className='mt-5'>Payment Details</p>

            <Row>
                Name on Account: {prfInfo.name_on_account}

            </Row>

            <Row>
                Bank: {prfInfo.bank}
            </Row>

            <Row>
                Account: {prfInfo.account}
            </Row>

            <Row>
                Bank Code: {prfInfo.bank_code} 
            </Row>

            <Row>
                Branch Code: {prfInfo.branch_code}
            </Row>

              <Row>
                Tel: {prfInfo.telephone} 
            </Row> 
            
            <Row className='mt-5'>
            <p>Prepared By</p>

                <Col>
                Name: {prfInfo.name}
                </Col>
                <Col>
                Signature: {prfInfo.user_signature_sign}

                </Col>
                <Col>
                Date: {prfInfo.prepared_by_date}
                </Col>
            </Row>

            <Row className='mt-3'>
                <p>Approved By</p>
                <Col>
                Name
                </Col>
                <Col>
                Signature
                </Col>
                <Col>
                Date
                </Col>
            </Row>

            <Row className='mt-3'>
            <p>Authorized By</p>

                <Col>
                Name
                </Col>
                <Col>
                Signature
                </Col>
                <Col>
                Date
                </Col>
            </Row>
        </Container>
        </Modal.Body>
    </Modal>













  </>
  )
}

export default PaymentApprovalModal