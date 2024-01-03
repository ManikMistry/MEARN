import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import RecordList from './components/RecordList';

function App() {
  return (
    <>
    <Navbar/>
    <div style={{margin:"20px"}}>
      <Routes>
        <Route exact path='/' element={<RecordList/>}> </Route>
      </Routes>
    </div>
    </>
  )
}

export default App