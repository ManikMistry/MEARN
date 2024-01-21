import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import RecordList from './components/RecordList';
import Create from './components/Create';
import Edit from './components/Edit';
// import GoogleLoginPage from './components/GoogleSignIn';
import {GoogleLogin} from '@react-oauth/google'

function App() {
  return (
    <>
    <GoogleLogin onSuccess={(credentialResponse)=>{
      console.log(credentialResponse);
    }}
      onError={()=>{
        console.log("Login Failed")
      }}
    />
    <Navbar/>
    <div style={{margin:"20px"}}>
      <Routes>
      {/* <Route path='/login' element={<GoogleLoginPage/>}></Route> */}
        <Route exact path='/' element={<RecordList/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='/edit/:id' element={<Edit/>}> </Route>
      </Routes>
    </div>
    </>

  )
}

export default App