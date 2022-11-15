import React from 'react'
import whitelogo from './Assets/white-logo.png'
import dash from './Assets/dashboard.png'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../custom-hooks/user'
import './Styling/Sidemenu.css'
// import file from './Assets/files.png'
import process from './Assets/process.png'
import timeleft from './Assets/timeleft.png'
import check from './Assets/check.png'









const SideMenu = () => {
  return (
    <>
    {/* <Row className='sidepanel'> */}
            <div >
                {/* Zanbase Logo */}
                <div>
                    <img className='zanlogo mt-3' src={whitelogo} alt='zanalogo'/>
                </div>

                {/* Menu Icons */}
                <div className='d-flex mt-5'>
                    <img className='menu-icons' src={dash} alt='Dash'/>
                    <a href='/dashboard' className='menutext ms-3 mt-1'>Dashboard</a>
                </div>


                <div className='d-flex mt-5'>
                    <img className='menu-icons' src={process} alt='Dash'/>
                    <a href='/accountspv' className='menutext ms-3 mt-1'>PV's</a>
                </div>



                

                

                <hr className='hrline mt-4'/>





                {/* Logout Button  */}
                <div   className='d-flex mt-5'>
                    {/* <img className='menu-icons' src={logout} alt='Dash'/> */}
                    <h4 className='menutext ms-3 mt-1'>Logout</h4>
                </div>
                {/* Menu Icons */}


            </div>
        {/* </Row> */}


    </>
  )
}

export default SideMenu