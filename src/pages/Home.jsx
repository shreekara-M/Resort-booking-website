import React from 'react';
import { useParams } from 'react-router-dom';
import RoomCard from '../components/ui/RoomCard';
import { resorts } from '../data/resorts';
import './Home.css';
import basicRoomImg from '../assets/Basic Room 2.png';
import deluxeRoomImg from '../assets/Basic Room 3.png';
import suiteRoomImg from '../assets/Presidential Suite image.png';
import presidentialSuiteImg from '../assets/Presidential Suite image 5.png';
import foodImg from '../assets/Food image.png';
import acImg from '../assets/Air conditioner.png';
import jacuzziImg from '../assets/Presidential suite image 3.png';
import hygieneImg from '../assets/Resort image 3.png';
import luxuryImg from '../assets/Resort image 6.png';
import serviceImg from '../assets/24x7 2.png';

const facilities = [
    { img: foodImg, text: 'Food Included (except Basic Room) *Pure Veg Only' },
    { img: acImg, text: 'Air Conditioning in All Rooms' },
    { img: jacuzziImg, text: 'Private Jacuzzi (Presidential Suite)' },
    { img: hygieneImg, text: 'High Hygiene Standards' },
    { img: luxuryImg, text: 'Luxury Ambiance' },
    { img: serviceImg, text: '24/7 Room Service' }
];

const Home = () => {
    const { resortId } = useParams();
    const resort = resorts.find(r => r.id === resortId);

    // If resort is not found (e.g. invalid ID), fallback or show error
    // For now, we assume valid ID or just show default text
    const resortName = resort ? resort.name : 'Serenity Retreat';
    const resortLocation = resort ? resort.location : 'Luxury Hotel';

    const getRoomLink = (roomId) => {
        return resortId ? `/resort/${resortId}/${roomId}` : `/${roomId}`;
    };

    // Helper to get image for a room type
    const getRoomImage = (roomId, defaultImg) => {
        if (resort && resort.roomImages && resort.roomImages[roomId]) {
            return resort.roomImages[roomId];
        }
        return defaultImg; // Fallback
    };

    const rooms = [
        {
            id: 1,
            title: 'Basic Room',
            price: '₹8,000/night',
            image: getRoomImage('basic', basicRoomImg),
            link: getRoomLink('basic')
        },
        {
            id: 2,
            title: 'Deluxe Room',
            price: '₹12,000/night',
            image: getRoomImage('deluxe', deluxeRoomImg),
            link: getRoomLink('deluxe')
        },
        {
            id: 3,
            title: 'Suite Room',
            price: '₹25,000/night',
            image: getRoomImage('suite', suiteRoomImg),
            link: getRoomLink('suite')
        },
        {
            id: 4,
            title: 'Presidential Suite',
            price: '₹50,000/night',
            image: getRoomImage('presidential', presidentialSuiteImg),
            link: getRoomLink('presidential')
        }
    ];

    return (
        <div className="home">
            <section className="hero">
                <div className="hero__background"></div>
                {/* <div className="hero__sun"></div> REMOVED ANIMATION */}
                <div className="hero__overlay">
                    <div className="hero__badge">✨ Happy New Year 2026 ✨</div>
                    <h1 className="hero__title">Celebrate in Luxury</h1>
                    <h2 className="hero__subtitle">Welcome to {resortName}</h2>
                    <p className="hero__text">Experience the best of {resortLocation}. Start your year with an unforgettable experience.</p>
                    <button className="btn btn--primary hero__cta" onClick={() => document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' })}>
                        Book Your Stay Now
                    </button>
                </div>
                {/* <div className="hero__particles"></div> REMOVED ANIMATION */}
            </section>

            <section className="rooms-section" id="rooms">
                <div className="container">
                    <h2 className="section-title">Our Rooms</h2>
                    <div className="rooms-grid">
                        {rooms.map(room => (
                            <RoomCard
                                key={room.id}
                                title={room.title}
                                price={room.price}
                                image={room.image}
                                link={room.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="facilities-section">
                <div className="container">
                    <h2 className="section-title">Facilities at {resortName}</h2>
                    <ul className="facilities-list">
                        {facilities.map((facility, index) => (
                            <li key={index} className="facility-item">
                                <div className="facility-icon">
                                    <img src={facility.img} alt="" />
                                </div>
                                <p className="facility-text">{facility.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
