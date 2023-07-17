import React from 'react';
import Header from '../Components/Header/Header';
import Sidenav from '../Components/Sidenav/Sidenav';
import Main from '../Main/Main';



const Dashboard = () => {

  const [state, setState] = React.useState(0);

  const updateState = () => {
    setState((state) => state + 1);
  };

  const Dashboard = state%2;

  return (
    <div className={Dashboard ? 'navopen': 'navclose'}>
        <Header handler={updateState} />
        <Sidenav />
        <Main />
    </div>
  )
}

export default Dashboard