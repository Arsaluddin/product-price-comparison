import React from "react";
import './Card.css';

const Card = () => {

    return(
        <>
           <div className="card">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30jkpT6jk9rphDowJ6gIBHhHeeeXJJ427WoukYKDkkTOu8TTlOC52x1dXLLKcQ6k-9iA&usqp=CAU"></img>
              <div className="card-desc">
               <h3>i phone 13(8/128Gb)</h3>
               <p>Price : 90,000 INR</p>

               <p>Rating :⭐⭐⭐⭐</p>
               <p><h3>Description</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur voluptas culpa, tenetur quaerat exercitationem. Quia totam adipisci dolorum vitae commodi eaque dolor dignissimos, quibusdam nam facere! Eos, enim sequi?</p>
              
            </div>
           </div>
        </>
    )
}

export default Card;