import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from "pdfmake/build/vfs_fonts"
import Button from 'react-bootstrap/esm/Button';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
 

const AttendancePDF = () => {

    
  return (
    <div>AttendancePDF
    </div>
  )
}

export default AttendancePDF