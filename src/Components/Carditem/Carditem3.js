import React from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';

const Carditem3 = ({userProfile}) => {
  
    return userProfile.map(item => {
        return (
            <Card key={item.id}>
                <CardBody className="d-flex justify-content-around">
                    <img src={`https://robohash.org/${item.id}`} alt="..." width="50px" height="50px"/>
                    <div>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.email}</CardText>
                    </div>
                </CardBody>
            </Card>
        );
    
    })
  
}


export default Carditem3;