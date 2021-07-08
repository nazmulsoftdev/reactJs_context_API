import React from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';

const Carditem2 = ({userProfile}) => {
  
    return userProfile.map(item => {
        return (
            <Card key={item.id}>
                <CardBody className="d-flex justify-content-around">
                    <img src={`https://robohash.org/${item.id}`} alt="..." width="50px" height="50px"/>
                    <div>
                        <CardTitle>{item.website}</CardTitle>
                        <CardText>{item.phone}</CardText>
                    </div>
                </CardBody>
            </Card>
        );
    
    })
  
}


export default Carditem2;