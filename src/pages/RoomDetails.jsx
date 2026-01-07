import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/rooms';
import { resorts } from '../data/resorts';
import Button from '../components/ui/Button';
import './RoomDetails.css';

const RoomDetails = () => {
    const { id, resortId } = useParams();
    const navigate = useNavigate();

    // Get base room data
    const baseRoom = roomsData[id];

    // Get resort data to check for overrides
    const resort = resorts.find(r => r.id === resortId);

    // Determine the actual image to use
    let roomImage = baseRoom ? baseRoom.image : null;
    if (resort && resort.roomImages && resort.roomImages[id]) {
        roomImage = resort.roomImages[id];
    }

    // Merge into a final room object
    const room = baseRoom ? { ...baseRoom, image: roomImage } : null;

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [people, setPeople] = useState(2);
    const [totalCost, setTotalCost] = useState(0);

    if (!room) {
        return <div className="room-details-error">Room not found</div>;
    }

    const calculateCost = () => {
        if (!startDate || !endDate) {
            alert('Please select start and end dates');
            return;
        }
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 0) {
            alert('End date must be after start date');
            return;
        }

        const costPerNight = room.price * Math.ceil(people / 2); // Logic from original: 1500 * Math.ceil(people / 2)
        const cost = costPerNight * diffDays;
        setTotalCost(cost);
    };

    const handlePayment = () => {
        if (totalCost === 0) {
            alert('Please calculate cost first');
            return;
        }
        navigate(`/resort/${resortId}/payment`, { state: { cost: totalCost, roomName: room.name } });
    };

    return (
        <div className="room-details">
            <div className="room-details__header" style={{ backgroundImage: `url(${room.image})` }}>
                <div className="room-details__overlay">
                    <h1>{room.name}</h1>
                </div>
            </div>

            <div className="room-details__content container">
                <div className="room-details__info">
                    <img src={room.image} alt={room.name} className="room-details__img" />
                    <div className="room-details__facilities">
                        <h3>Facilities</h3>
                        <ul>
                            {room.facilities.map((facility, index) => (
                                <li key={index}>
                                    <img src={facility.img} alt="" width="30" height="30" />
                                    <span>{facility.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="room-details__timings">
                            <p>Check-in: {room.timings.checkIn}</p>
                            <p>Check-out: {room.timings.checkOut}</p>
                            {room.extraInfo && <p className="highlight">{room.extraInfo}</p>}
                        </div>
                    </div>
                </div>

                <div className="room-details__booking">
                    <h2>Book Now</h2>
                    <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="people">Number of People</label>
                            <input
                                type="number"
                                id="people"
                                min="1"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                            />
                        </div>

                        <div className="button-group">
                            <Button onClick={calculateCost} type="button" variant="outline" className="btn-calc">Calculate Cost</Button>
                        </div>

                        {totalCost > 0 && (
                            <div className="cost-display">
                                <p>Total Cost: ₹{totalCost}</p>
                                <Button onClick={handlePayment} className="btn-pay">Pay Now</Button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
