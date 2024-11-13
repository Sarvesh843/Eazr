"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AdminLogin: React.FC = () => {
  const [contactNumber, setContactNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const router = useRouter();

  // Function to handle OTP sending
  const handleSendOtp = async () => {
    try {
      await axios.post('https://eazrdaily.eazr.in/auth/admin/sendOtp', {
        contactNumber: '7710957578', // replace this with contactNumber if dynamic input is needed
      });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = async () => {
    if (otp === '7710') { // Mocked OTP for testing
      // In a real app, call the API to verify OTP and get a token
      const token = 'sampleToken'; // Replace with actual token from the response
      document.cookie = `token=${token}; path=/`;
      router.push('/admin/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #ebf8ff, #f3f4f6)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '400px',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s',
          transform: 'scale(1)',
        }}
      >
        <h2
          style={{
            fontSize: '1.875rem',
            fontWeight: '800',
            color: '#4a4a4a',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Admin Login
        </h2>

        {!isOtpSent ? (
          <>
            <label
              htmlFor="contactNumber"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#4a4a4a',
              }}
            >
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your mobile number"
              style={{
                marginTop: '8px',
                padding: '12px',
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '1rem',
                transition: 'border 0.2s',
              }}
            />
            <button
              onClick={handleSendOtp}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                backgroundColor: '#2563eb',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label
              htmlFor="otp"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#4a4a4a',
              }}
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              style={{
                marginTop: '8px',
                padding: '12px',
                width: '100%',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '1rem',
                transition: 'border 0.2s',
              }}
            />
            <button
              onClick={handleVerifyOtp}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                backgroundColor: '#059669',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#047857')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;