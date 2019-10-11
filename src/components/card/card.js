import React from 'react';
import './card.css'
const Card = props => (
  <div className="row">
    { props.items.map((item) => {
      return (
        <div key={item.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="card__box">
            <div className="card-header row">
            <img 
              className="card__box-img" 
              src={item.image_url} 
              alt={item.title}/>
            <div className="card-header-title">  
                <h4>{item.title}</h4>
                <span className="card-price">from &#8377;{item.price}</span>  
            </div>
            </div>  
                <p className="card-desc">{item.desc}</p>
              <button className="button-excel">
              Order
              </button>
          </div>
        </div>
      );
    })}
    </div>
);

export default Card;