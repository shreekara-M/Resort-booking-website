import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import './Payment.css';

const Payment = () => {
    const { resortId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { cost, roomName } = location.state || { cost: 0, roomName: 'Room' };

    useEffect(() => {
        if (!location.state) {
            navigate(resortId ? `/resort/${resortId}` : '/');
        }
    }, [location, navigate, resortId]);

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            alert('Payment Successful! Your room has been booked.');
            navigate(resortId ? `/resort/${resortId}` : '/');
        }, 2000);
    };

    return (
        <div className="payment-page">
            <div className="payment-container">
                <h2>Payment Details</h2>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Room: <strong>{roomName}</strong></p>
                    <p className="total-cost">Total Amount: ₹{cost}</p>
                </div>

                <form className="payment-form" onSubmit={handlePayment}>
                    <div className="form-group">
                        <label>Cardholder Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" maxLength="19" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM/YY" maxLength="5" required />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input type="password" placeholder="123" maxLength="3" required />
                        </div>
                    </div>

                    <Button type="submit" className="btn-pay-confirm" disabled={loading}>
                        {loading ? 'Processing...' : `Pay ₹${cost}`}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
