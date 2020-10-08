import React from 'react';
import UserCard from './UserCard';
import Row from 'react-bootstrap/Row';

const CardList = (props) => {
    const { robots } = props;
    return (
        // <div className='tc'>
        <Row>
            {
                robots.map(item => {
                    return <UserCard robot={item} />
                })
            }
            {/* </div > */}
        </Row>
    )
}

export default CardList;