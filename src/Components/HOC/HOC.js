const HOC = (props) => {
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  )
}

export default HOC;
