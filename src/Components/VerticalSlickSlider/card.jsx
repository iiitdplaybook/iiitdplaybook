import React,{useEffect} from 'react';
import './card.css';

export default function  Card({cardsData}){

    

    


    return(
        <div className="card">
        {console.log(cardsData)}
            
        <img src ={cardsData.Profile_Pic} className="image" />

        <div className='info'>

        

        
         <h2 className="title"> {cardsData.Name}</h2>
        
         <p className='occ' >{cardsData.Designation}</p>
         <p className = 'org'> {cardsData.Organisation}</p>
         <a
                  className='fa fa-linkedin fa-lg icon'
                  href={cardsData.LinkedIN}
                  target='_blank'
                ></a>

        </div>
       
        <br />
        
         <tips class="tips"> {cardsData.Tips} </tips>
         <br />
         <br />
    </div>
    );

};