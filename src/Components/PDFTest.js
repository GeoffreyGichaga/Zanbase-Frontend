import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import PaymentApprovalModal from './PaymentApprovalModal';

const PDFTest = () => {

    const componentRef = useRef();

  
  return (
    <div>
       <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />

    <PaymentApprovalModal ref={componentRef} />



    </div>
  )
}

export default PDFTest