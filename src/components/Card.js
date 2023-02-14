function Card(props) {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
      {props.children}
    </div>
  );
}

export default Card;
