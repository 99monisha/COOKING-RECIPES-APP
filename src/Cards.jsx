import React from "react";
function Card(props){
    console.log(props);
  return(


    
  <div className='cards'>
  <div className='card'>
      <img src={props.imgsrc} alt='galery-img' className='card_img'></img>
      <div className='card_info'>
          <span className='card_category'>{props.tittle}</span>
          <h2 className='card_title'>{props.sname}</h2>
          <a href={props.link} target='_blank'>
              <button className="button">HOW TO COOKS</button>
          </a>
      </div>
  </div>
  </div>
  )
  }

  export default Card;