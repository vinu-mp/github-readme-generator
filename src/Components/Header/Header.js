import HOC from '../HOC/HOC';

const Header = (props) => {
  return (
    <header className="header">
      <HOC>
        <div className="header_logo">
          Readme
        </div>
      </HOC>
    </header>
  )
}

export default Header;