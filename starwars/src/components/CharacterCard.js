import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";

  const characterCards =(props)=>{

return (

    <div>
        <Card>
            <CardBody>
                <CardTitle><h2>Name:{props.x.name}</h2></CardTitle>
                    <CardSubtitle>
                        <h3>Gender: {props.x.gender} | Birth Year:{props.x.birth_year}</h3> 
                    </CardSubtitle>
                        <CardText>
                         <p>{props.x.name} is {props.x.height} centimeters.</p> 
                        </CardText>
            </CardBody>
        </Card>
    </div>
)

  }

  export default characterCards;

//  <div> Name: ${x.name} Height: ${x.height} </div>