import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Container  from 'react-bootstrap/Container'
import SideMenu from './SideMenu'
import Card from 'react-bootstrap/Card';







const AccountsDashboard = () => {
  return (
    <>
    <Container fluid>
      
      <Row>

        <Col sm={12} md={6} lg={2} className='sidepanel'>
          <SideMenu/>
        </Col>
        <Col>
        {/* Nav Items  */}
          <Row sm={12} md={12} lg={12}>


           <Col sm={12} md={6} lg={6}>

            <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <p>To display current date</p>
            </Card>
           </Col>

           <Col sm={12} md={6} lg={6}>

            <Card style={{ width: '18rem' }}>
                <Card.Header>Notifications</Card.Header>
                <p>To display number of new pv's</p>
              </Card>
           </Col>
          </Row>
          
        </Col>
        

      </Row>

      {/* PV Approval sectin  */}
    </Container>

    </>
  )
}

export default AccountsDashboard