import resort1 from '../assets/Resort image 6.png'; // Original Lux
import resort2 from '../assets/Resort image 3.png'; // Original Nature
import resort3 from '../assets/Presidential Suite image 5.png';
import resort4 from '../assets/Basic Room 2.png';

// Generated Assets
import beachCover from '../assets/beach_resort_cover_1767326685206.png';
import beachBasic from '../assets/beach_room_basic_1767326701162.png';
import beachDeluxe from '../assets/beach_room_deluxe_1767326720818.png';
import beachSuite from '../assets/beach_room_suite_1767326738009.png';
import beachPresidential from '../assets/beach_room_presidential_1767326754120.png';

import mountainCover from '../assets/mountain_resort_cover_1767326779146.png';

// Generated Madikeri and Wayanad Assets
import madikeriCover from '../assets/madikeri_cover_1767336989435.png';
import madikeriBasic from '../assets/madikeri_basic_room_1767337005398.png';
import madikeriDeluxe from '../assets/madikeri_deluxe_room_1767337022127.png';
import madikeriSuite from '../assets/madikeri_suite_room_1767337037813.png';
import madikeriPresidential from '../assets/madikeri_presidential_suite_1767337057125.png';
import wayanadCover from '../assets/wayanad_cover_1767337074155.png';

export const resorts = [
    {
        id: 'serenity-haven',
        name: 'Serenity Haven Resort',
        location: 'Maldives',
        rating: 4.9,
        reviews: 2450,
        price: '₹25,000',
        image: beachCover,
        description: 'Experience the ultimate luxury in our overwater bungalows.',
        amenities: ['Private Island', 'Coral Reef', 'Underwater Spa', 'Butler Service'],
        roomImages: {
            basic: beachBasic,
            deluxe: beachDeluxe,
            suite: beachSuite,
            presidential: beachPresidential
        }
    },
    {
        id: 'mountain-bliss',
        name: 'Mountain Bliss Retreat',
        location: 'Manali, India',
        rating: 4.7,
        reviews: 1200,
        price: '₹12,000',
        image: mountainCover,
        description: 'Peaceful getaway nestled in the snowy peaks.',
        amenities: ['Skiing', 'Hot Springs', 'Bonfire', 'Mountain Trekking'],
        roomImages: {
            // Reusing existing assets as fallbacks where unique ones weren't generated
            basic: resort4,
            deluxe: resort2,
            suite: resort1,
            presidential: resort3
        }
    },
    {
        id: 'coastal-paradise',
        name: 'Coastal Paradise Inn',
        location: 'Goa, India',
        rating: 4.3,
        reviews: 3100,
        price: '₹8,000',
        image: resort3,
        description: 'Vibrant nightlife meets serene beaches.',
        amenities: ['Beachfront Bar', 'Casino Access', 'Water Sports', 'Live Music'],
        roomImages: {} // Will fallback to defaults
    },
    {
        id: 'urban-oasis',
        name: 'Urban Oasis Hotel',
        location: 'Bangalore, India',
        rating: 4.6,
        reviews: 800,
        price: '₹9,500',
        image: resort4,
        description: 'Luxury stay in the heart of the tech capital.',
        amenities: ['Rooftop Pool', 'Co-working Space', 'Fine Dining', 'Gym'],
        roomImages: {}
    },
    {
        id: 'desert-dunes',
        name: 'Royal Desert Dunes',
        location: 'Jaisalmer, India',
        rating: 4.8,
        reviews: 950,
        price: '₹16,000',
        image: resort1,
        description: 'Live like royalty in the golden sands of Rajasthan.',
        amenities: ['Desert Safari', 'Folk Dance', 'Tent Stays', 'Candlelit Dinner'],
        roomImages: {}
    },
    {
        id: 'kerala-backwaters',
        name: 'Emerald Backwaters',
        location: 'Alleppey, India',
        rating: 4.9,
        reviews: 540,
        price: '₹18,500',
        image: resort2,
        description: 'Floating luxury on the calm backwaters of God\'s Own Country.',
        amenities: ['Houseboat Cruise', 'Ayurvedic Massage', 'Fishing', 'Local Cuisine'],
        roomImages: {}
    },
    {
        id: 'jungle-safari',
        name: 'Wilderness Lodge',
        location: 'Kabini, India',
        rating: 4.5,
        reviews: 420,
        price: '₹14,000',
        image: resort2,
        description: 'Stay close to nature and spot wildlife right from your room.',
        amenities: ['Jeep Safari', 'Nature Walk', 'Bird Watching', 'Campfire'],
        roomImages: {}
    },
    {
        id: 'island-retreat',
        name: 'Andaman Blue Resort',
        location: 'Havelock, India',
        rating: 4.7,
        reviews: 1800,
        price: '₹28,000',
        image: beachCover, // Reusing beach cover
        description: 'Pristine white sands and crystal clear waters.',
        amenities: ['Scuba Diving', 'Private Beach', 'Sea Plane Transfer', 'Spa'],
        roomImages: {
            basic: beachBasic,
            deluxe: beachDeluxe,
            suite: beachSuite,
            presidential: beachPresidential
        }
    },
    {
        id: 'misty-falls-madikeri',
        name: 'Misty Falls Resort',
        location: 'Madikeri, Coorg',
        rating: 4.8,
        reviews: 950,
        price: '₹17,500',
        image: madikeriCover,
        description: 'Luxury stay amidst coffee plantations with a private waterfall view.',
        amenities: ['Private Waterfall', 'Coffee Plantation Walk', 'Infinity Pool', 'Spa'],
        roomImages: {
            basic: madikeriBasic,
            deluxe: madikeriDeluxe,
            suite: madikeriSuite,
            presidential: madikeriPresidential
        }
    },
    {
        id: 'green-valley-wayanad',
        name: 'Green Valley Retreat',
        location: 'Wayanad, Kerala',
        rating: 4.7,
        reviews: 1100,
        price: '₹15,000',
        image: wayanadCover,
        description: 'Eco-friendly luxury treehouses surrounded by misty mountains.',
        amenities: ['Treehouse Stay', 'Nature Trek', 'Bonfire', 'Organic Farm'],
        roomImages: {
            basic: madikeriBasic,
            deluxe: madikeriDeluxe,
            suite: madikeriSuite,
            presidential: madikeriPresidential
        }
    }
];
