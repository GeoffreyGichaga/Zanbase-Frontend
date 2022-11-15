import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from "pdfmake/build/vfs_fonts"
import Button from 'react-bootstrap/esm/Button';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
 

const AttendancePDF = () => {

    const docDefination ={
        content: [
    
          {
            style: "pvTable",
            color: "black",
            table: {
              widths: ["auto","auto","auto", "auto" ,"auto","auto","auto"],
              headerRows: 3,
              body: [
                [{text: "ZANA AFRICA",alignment: 'center',style: "titles"}],
                [{text: "DAILY ATTENDANCE REGISTER(date to be insterted automatically)",colspan: 7,alignment: 'center',style: "titles"}],
                [{text: "NAME", style: "subheader"},{text: "users name to be inserted here"}],
                

                // Details Headers: 
                // [
                //   {text: 'DATE', style: 'subheader'}, 
                //   {text: 'TIME IN', style: 'subheader'}, 
                //   {text: 'TIME OUT', style: 'subheader'},
                //   {text: 'Number of Hrs', style: 'subheader'},
                //   {text: "Activites for the day",style: 'subheader'},
                //   {text: "Sign", style: "subheader"},
                //   {text: "Checked By", style: "subheader"}


                // ],





                ['Sample value 1', 'Sample value 2', 'Sample value 3', '8', 'Sample value 5','Sample value 6', 'Sample value 7']
                // ['Sample value 1', 'Sample value 2', 'Sample value 3', '8', 'Sample value 5','Sample value 6', 'Sample value 7'],
                // ['Sample value 1', 'Sample value 2', 'Sample value 3', '8', 'Sample value 5','Sample value 6', 'Sample value 7'],
                // ['Sample value 1', 'Sample value 2', 'Sample value 3', '8', 'Sample value 5','Sample value 6', 'Sample value 7'],
                // ['Sample value 1', 'Sample value 2', 'Sample value 3', '8', 'Sample value 5','Sample value 6', 'Sample value 7']

                
                

                ]
            }
            
          }
        ],




        // PDF styles
        styles: {

          // whole table 
          pvTable : {
            margin: [1]
          },
          tableExample: {
            margin: [0]
          },

          titles: {
            bold: true,
            fontSize: 16,
          },

          subheader: {
            fontSize: 13,
            bold: true

            
          }
          
        },


        defaultStyle: {
          color: "black" 
        } 

      }

    const onClickPdfMake =()=>(
        
        pdfMake.createPdf(docDefination,"pv").open()
    )

    

    
  return (
    <div>AttendancePDF
        <Button onClick={onClickPdfMake}>Download PV</Button>
    </div>
  )
}

export default AttendancePDF