function Color(props) {
  return (
    <div className="flex container">
      <div>
        <p> {props.colorName} </p>
        <p> color: {props.colorName}</p>
      </div>
      <div className="flex wrap">
        {props.color.map((clr , i) => (
          <div  className="bottom">
            <div className="color-box" style={{ backgroundColor: clr }}>
              {" "}
            </div>
            <span>{ i === 0 ? 50 : i * 100  } </span>
            <span className="span"> {clr}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;
