"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/admin/login'); // Navigates to the login page
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#edf2f7',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2d3748',
            marginBottom: '20px',
            letterSpacing: '1px',
          }}
        >
          Welcome to the Admin Dashboard
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#4a5568',
            marginBottom: '30px',
            maxWidth: '600px',
            lineHeight: '1.6',
          }}
        >
          To access the admin panel and manage the users, please click the button below to log in.
        </p>

        <button
          onClick={handleNavigateToLogin}
          style={{
            padding: '16px 32px',
            fontSize: '1.125rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          Go to Login Page
        </button>
      </div>
    </>
  );
};

export default Home;


