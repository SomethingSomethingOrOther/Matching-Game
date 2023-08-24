import React from 'react';

const Card = ({ value, flipped, onClick }) => {
  return (
    <div style={{marginLeft:"4rem",border:"1px solid black",borderRadius:"2rem",height:"5rem",width:"10rem"}}
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <p style={{fontSize:"1.5rem"}}>{flipped ? value : '?'}</p>
    </div>
  );
};

export default Card;