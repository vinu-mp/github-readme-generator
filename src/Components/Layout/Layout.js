import Editor from '../Editor/Editor';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Fragment, useState } from 'react';

const Layout = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isSidebarActive, setSidebarActive] = useState(false);

  const onSideBarIconClick = (target) => {
    setActiveItem((prevState) => {
      if(prevState === target) {
        prevState = ''
        setSidebarActive(false);
      } else {
        prevState = target;
        setSidebarActive(true);
      }
      return prevState;
    });
  }

  return (
    <Fragment>
      <Header/>
      <Sidebar onSidebarClick={onSideBarIconClick} activeItem={activeItem}/>
      <Editor activeState={isSidebarActive}/>
      {/* <div style={{width: '100%', height:'400px'}}></div> */}
    </Fragment>
  )
}

export default Layout;