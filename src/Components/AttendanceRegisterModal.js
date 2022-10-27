import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import Modal from 'react-bootstrap/Modal'

import '../Styling/AttendanceModal.css'







const AttendanceRegisterModal = ({AttendanceInfo,showModal,hideModal}) => {


    const displayAttendance = AttendanceInfo.map((info)=>(
        <tr className='border-spaces'>
            <td>{info.date}</td>
            <td>{info.timeIn}</td>
            <td>{info.timeOut}</td>
            <td>9 </td>
            <td>{info.activities}</td>
            <td>{info.sign}</td>
            <td>{info.checkedBy}</td>

        </tr>
        

    ))






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
            <Table bordered >
                <tbody>
                <tr className='border-spaces'>
                    <td className='user'>Name</td>
                    <td className='user' colSpan={6}>Name of User </td>

                </tr>

                <tr className='border-spaces'>
                    <th >DATE</th>
                    <th>TIME IN</th>
                    <th >TIME OUT</th>
                    <th >NUMBER OF HRS</th>
                    <th >ACTIVITIES</th>
                    <th >SIGN</th>
                    <th>CHECKED BY</th>
                </tr>

                <tr className='border-spaces'>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>

                </tr>
                {displayAttendance}
                </tbody>

                


            </Table>
        </Modal.Body>
    </Modal>
  )
}

export default AttendanceRegisterModal