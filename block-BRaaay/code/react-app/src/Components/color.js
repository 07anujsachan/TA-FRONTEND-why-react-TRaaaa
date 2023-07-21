function Color(props) {
  return (
    <div className="flex container">
      <div>
        <p> {props.colorName} </p>
        <p> color: {props.colorName}</p>
      </div>
      <div className="flex wrap">
        {props.color.map((clr) => (
          <div>
            <div className="color-box" style={{ backgroundColor: clr }}>
              {" "}
            </div>
            
            <p> {clr}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;
