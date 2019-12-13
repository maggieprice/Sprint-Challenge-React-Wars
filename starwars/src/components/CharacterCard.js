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
                <CardTitle><h2>Name:{props.name}</h2></CardTitle>
                    <CardSubtitle><h3>Birth Year:{props.birth_year}| Species: {props.species}</h3> </CardSubtitle>
                        <CardText>
                         <p>{props.name} has starred in these films: {props.films}.</p>   
                        </CardText>
            </CardBody>
        </Card>
    </div>
)

  }

  export default characterCards;