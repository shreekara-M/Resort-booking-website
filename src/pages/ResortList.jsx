import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resorts } from '../data/resorts';
import './ResortList.css';

const ResortList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredResorts = resorts.filter(resort =>
        resort.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resort.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="resort-list-page">
            <section className="search-section">
                <div className="container">
                    <h1 className="search-title">Find Your Perfect Getaway</h1>
                    <p className="search-subtitle">Discover luxury resorts across the globe</p>
                    {/* Placeholder for a real search bar */}
                    <input
                        type="text"
                        placeholder="Search by name or location..."
                        style={{
                            padding: '1rem',
                            marginTop: '2rem',
                            width: '100%',
                            maxWidth: '600px',
                            borderRadius: '50px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>

            <div className="container">
                <div className="resorts-container">
                    {filteredResorts.map(resort => (
                        <Link to={`/resort/${resort.id}`} key={resort.id} className="resort-card">
                            <div className="resort-image-container">
                                <img src={resort.image} alt={resort.name} className="resort-image" />
                            </div>
                            <div className="resort-content">
                                <div className="resort-header">
                                    <h3 className="resort-name">{resort.name}</h3>
                                    <span className="resort-rating">{resort.rating} ★</span>
                                </div>
                                <div className="resort-location">
                                    <span>📍 {resort.location}</span>
                                    <span>• {resort.reviews} reviews</span>
                                </div>
                                <div className="resort-amenities">
                                    {resort.amenities.map((amenity, idx) => (
                                        <span key={idx} className="amenity-tag">{amenity}</span>
                                    ))}
                                </div>
                                <div className="resort-footer">
                                    <div className="resort-price-block">
                                        <span className="price-label">Starts from</span>
                                        <span className="resort-price">{resort.price}</span>
                                    </div>
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResortList;
