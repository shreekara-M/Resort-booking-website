import basicRoomImg from '../assets/Basic Room 2.png';
import deluxeRoomImg from '../assets/Basic Room 3.png';
import suiteRoomImg from '../assets/Presidential Suite image.png';
import presidentialSuiteImg from '../assets/Presidential Suite image 5.png';

import foodImg from '../assets/Food image.png';
import acImg from '../assets/Air conditioner.png';
import jacuzziImg from '../assets/Presidential suite image 3.png';
import hygieneImg from '../assets/Resort image 3.png';
import televisionImg from '../assets/television.png';
import serviceImg from '../assets/24x7 2.png';

export const roomsData = {
    basic: {
        id: 'basic',
        name: 'Basic Room',
        price: 1500,
        image: basicRoomImg,
        description: 'A comfortable room for budget travelers.',
        facilities: [
            { img: acImg, text: 'Equipped with Air Conditioner' },
            { img: hygieneImg, text: 'High Hygiene Standards' },
            { img: televisionImg, text: 'Large Wall-mounted Television' },
            { img: serviceImg, text: '24/7 Room Service' }
        ],
        timings: { checkIn: '02:00 PM', checkOut: '11:00 AM' },
        extraInfo: 'Food is Chargeable'
    },
    deluxe: {
        id: 'deluxe',
        name: 'Deluxe Room',
        price: 3000,
        image: deluxeRoomImg,
        description: 'Experience luxury with our Deluxe rooms.',
        facilities: [
            { img: foodImg, text: 'Breakfast Included' },
            { img: acImg, text: 'Equipped with Air Conditioner' },
            { img: hygieneImg, text: 'High Hygiene Standards' },
            { img: televisionImg, text: 'Large Wall-mounted Television' },
            { img: serviceImg, text: '24/7 Room Service' }
        ],
        timings: { checkIn: '02:00 PM', checkOut: '11:00 AM' },
        extraInfo: ''
    },
    suite: {
        id: 'suite',
        name: 'Suite Room',
        price: 5000,
        image: suiteRoomImg,
        description: 'Spacious suite for a premium experience.',
        facilities: [
            { img: foodImg, text: 'All Meals Included' },
            { img: acImg, text: 'Central Air Conditioning' },
            { img: hygieneImg, text: 'Premium Hygiene Standards' },
            { img: televisionImg, text: 'Smart Television' },
            { img: serviceImg, text: 'Butlers & 24/7 Room Service' }
        ],
        timings: { checkIn: '02:00 PM', checkOut: '11:00 AM' },
        extraInfo: ''
    },
    presidential: {
        id: 'presidential',
        name: 'Presidential Suite',
        price: 7000,
        image: presidentialSuiteImg,
        description: 'The ultimate luxury experience.',
        facilities: [
            { img: foodImg, text: 'All Meals & Drinks Included' },
            { img: acImg, text: 'Climate Control' },
            { img: jacuzziImg, text: 'Private Jacuzzi' },
            { img: hygieneImg, text: 'Elite Hygiene Standards' },
            { img: televisionImg, text: 'Home Theater System' },
            { img: serviceImg, text: 'Dedicated Butler Service' }
        ],
        timings: { checkIn: '02:00 PM', checkOut: '11:00 AM' },
        extraInfo: 'Access to Private Lounge'
    }
};
