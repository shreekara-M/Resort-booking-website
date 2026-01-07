import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './RoomCard.css';

const RoomCard = ({ image, title, price, link }) => {
    return (
        <div className="room-card">
            <div className="room-card__image-container">
                <img src={image} alt={title} className="room-card__image" />
            </div>
            <div className="room-card__content">
                <h3 className="room-card__title">{title}</h3>
                <p className="room-card__price">{price}</p>
                <Link to={link}>
                    <Button variant="outline" className="room-card__btn">View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
