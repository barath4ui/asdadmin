import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Task from '../Layouts/Tasks/Task';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
        <Routes>
          <Route path='/' element={<Task/>} />
          <Route path='/task' element={<Task/>} />
        </Routes>
    </div>
  )
}

export default Main