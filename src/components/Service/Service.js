import React from 'react';


const Service = (props) => {
    const {  name, img, body } = props.service;

    
    return (
        <div className="p-2">
  
             <div className="bg-light border border-3 border-secondary rounded-3 container">
            <img className="h-25 w-50 img-thumbnail" src={img} alt="" />
            <h2 className="text-danger fst-italic">{name}</h2>
            <p>{body}</p>

  </div>
       </div>

    );
};

export default Service;