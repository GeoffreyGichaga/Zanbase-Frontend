import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../Styling/PRF.css'
import Table from 'react-bootstrap/esm/Table';
 


const PaymentApprovalModal = ({prfInfo,showModal,hideModal}) => {

 

  return (
    <> 
      <Modal
        size="lg"
        show={showModal}
        onHide={hideModal}
        aria-labelledby="example-modal-sizes-title-lg"
        scrollable={true}
      >
        <Modal.Header closeButton>
        
        </Modal.Header>

        {/* Info */}
        <Modal.Body >
        <h4 className='text-center'>ZANAAFRICA GROUP/ ZANAAFRICA PROGRAMS</h4>
            <h5 className='text-center'>STIPEND PAYMENT APPROVAL FORM</h5>
        <Container className='mt-5'>
            <Row>
                <Col  className='d-flex' >
                    <div>
                        <p>Date :</p> 
                    </div>

                    <div className='ms-4'>
                        <p className='cells'>{prfInfo.prepared_by_date}  </p>

                    </div>
  
                </Col>

                <Col className='d-flex' >

                    <div>
                        <p>Org:</p> 
                    </div>

                    <div className='ms-5'>
                        <p className='cells'>{prfInfo.org}  </p>

                    </div>
                </Col>
            </Row>

            <Row>
                <Col  className='d-flex' >
                    <div>
                        <p>Program :</p> 
                    </div>

                    <div className='ms-3'>
                        <p className='cells'>{prfInfo.program}  </p>

                    </div>
  
                </Col>

                <Col className='d-flex' >

                    <div>
                        <p>Function:</p> 
                    </div>

                    <div className='ms-3'>
                        <p className='cells'>{prfInfo.function}  </p>

                    </div>
                </Col>
            </Row>



          

            <p className='data-title mt-5'>INTERN DETAILS </p>
            <Table bordered >
                <tbody>
                    <tr className='info-space'>
                    <td className='data-title'>Name</td>
                    <td colSpan={3} >{prfInfo.name}</td>
                    
                    </tr>
                    <tr className='info-space'>
                    <td className='data-title'>Intern ID NO</td>
                    <td>{prfInfo.employee_id}</td>
                    <td className='data-title'>Daily Stipend</td>
                    <td>500</td>
                    </tr>
                    <tr className='info-space'>
                    <td className='data-title'>Start date of the week</td>
                    <td >{prfInfo.start_day_of_the_week}</td>
                    <td className='data-title'>End date of the week:</td>
                    <td >{prfInfo.end_date_of_the_week}</td>

                    </tr>

                    <tr className='info-space'>
                        <td className='data-title'>No Of days Worked:</td>
                        <td>{prfInfo.number_of_days_worked}</td>
                        <td className='data-title '>Amount Payable</td>
                        <td>{prfInfo.amount_payable}</td>

                    </tr>
                </tbody>

            </Table>

           

         


          

            <p className='data-title mt-5'>PAYMENT DETAILS</p>
            <Table bordered responsive="sm">
                <tbody>
                    <tr className='info-space'>
                        <td className='data-title '>Name on Account:</td>
                        <td >{prfInfo.name_on_account}</td>

                    
                    </tr>
                    <tr className='info-space'>
                        <td className='data-title'>Bank</td>
                        <td>{prfInfo.bank}</td>

                    </tr>
                    <tr className='info-space'>
                        <td className='data-title'>Account Number</td>
                        <td>{prfInfo.account}</td>
                    </tr>
                    <tr className='info-space'>
                        <td className='data-title'>Bank Code</td>
                        <td>{prfInfo.bank_code}.</td>
                    </tr>
                    <tr className='info-space'>
                        <td className='data-title'>Branch Code</td>
                        <td>{prfInfo.branch_code}</td>
                    </tr>
                    <tr className='info-space'>
                        <td className='data-title'>Telephone</td>
                        <td>{prfInfo.telephone}</td>
                    </tr>
                </tbody>
            </Table>

            

            {/* Approval Section  */}
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