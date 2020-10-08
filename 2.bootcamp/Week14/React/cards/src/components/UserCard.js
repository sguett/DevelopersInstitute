import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const UserCard = ({ robot }) => {
    // const { robot } = props;
    const { id, name, username, email } = robot;
    return (
        // <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        //     <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
        //     <h2>{name}</h2>
        //     <h4>{email}</h4>
        //     <p>{username}</p>
        // </div>
        <Col xs={6} md={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://robohash.org/${id}?size=200x200`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                    <Card.Text>
                        {username}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>

    )
}

export default UserCard;