import React from 'react'
import { Route,Routes } from 'react-router-dom';
import {useEffect} from 'react'
import './App.css';
import Onboarding from './Pages/onboarding';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cookies from './Pages/cookiesinfo'
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile'
import Pv from './Pages/Pv'
import Task from './Pages/Task'
import Messages from './Pages/Messages'
import TargetsBoard from './Pages/TargetsBoard'
import Tutorials from './Pages/Tutorials'
import Help from './Pages/Help'
import AttendanceRegister from './Pages/AttendanceRegister'
import AdminDashboard from './Pages/AdminDashboard'
import AccountsDashboard from './Pages/AccountsDashboard'
import { UserContext } from './custom-hooks/user'
import { useContext } from 'react';



function App() {

  const {user,setUser} = useContext(UserContext)
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me",{
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res =>{
      if (res.ok){
        res.json().then(user => setUser(user))
      }
    })

    // .then(res => res.json())
    // .then(data => console.log(data))
    
  }, [])

 





  // if(!user) {
  //   return <Login/>
    
  // } else{
  //   return <Dashboard/>
  // }
    

  // console.log(user)


  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Onboarding/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/accounts' element={<AccountsDashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/attendance-register' element={<AttendanceRegister/>}/>
            <Route path='/pv' element={<Pv/>}/>
            <Route path='/tasks' element={<Task/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/targets' element={<TargetsBoard/>}/>
            <Route path='/tutorials' element={<Tutorials/>}/>
            <Route path='/cookies' element={<Cookies/>}/>
            <Route path='/help' element={<Help/>}/> 
              
        </Routes>


      
    </div>
  );
}

export default App;
