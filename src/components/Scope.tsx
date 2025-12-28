function Scope() {
  return (
    <div className="container">
      <div className="w"> 
        <div className="scope">
          <span className="scope__line"></span>
          <span className="scope__line"></span>
          <div className="scope__circle">
            <span className="scope__circle-point"></span>
            <span className="scope__circle-point"></span>
            <span className="scope__circle-point"></span>
            <div className="scope__circle-point">
              <p className="scope__data-score">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scope;
