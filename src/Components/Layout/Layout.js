import Editor from '../Editor/Editor';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Fragment, useState } from 'react';

const Layout = () => {
  const [isSidebarActive, setSidebarActive] = useState({
    isActive: true,
    value: ''
  });

  const onSideBarIconClick = (target) => {
    setSidebarActive(prevState => {
      if(prevState.isActive === false) {
        prevState.isActive = true;
        prevState.value = target;
      } else {
        if(prevState.value === target) {
          prevState.isActive = false;
          prevState.value = '';
        } else {
          prevState.value = target;
        }
      }
      return prevState;
    });
    console.log(target, isSidebarActive)
  }

  return (
    <Fragment>
      {console.log('inside react', isSidebarActive)}
      <Header/>
      {isSidebarActive.isActive}
      <Sidebar onSidebarClick={onSideBarIconClick} activeState={isSidebarActive.isActive}/>
      <Editor activeState={isSidebarActive.isActive}/>
      {/* <div style={{width: '100%', height:'400px'}}></div> */}
    </Fragment>
  )
}

export default Layout;