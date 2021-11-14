import Editor from '../Editor/Editor';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Fragment, useState } from 'react';

const Layout = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isSidebarActive, setSidebarActive] = useState(false);

  const onSideBarIconClick = (target) => {

    setActiveItem((prevState) => {
      if (prevState === target || !target) {
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
      <Header />
      <section className='d-md-flex'>
        <Sidebar onSidebarClose={onSideBarIconClick} onSidebarClick={onSideBarIconClick} activeState={isSidebarActive} activeItem={activeItem} />
        <Editor activeState={isSidebarActive} />
      </section>
    </Fragment>
  )
}

export default Layout;