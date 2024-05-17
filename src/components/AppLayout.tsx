
import React from 'react'
import NewNavbar from './NewNavbar';

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <NewNavbar />
      { children }
    </div>
  )
}

export default AppLayout