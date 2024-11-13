import React from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  profilePicture: string;
  address: string;
}

// Fetch user details
async function fetchUserDetails(id: string): Promise<User> {
    // try {
  //   const response = await axios.get('https://eazrdaily.eazr.in//admin/users/[id]', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching user:', error);
  //   return [];
  // }
  const dummyUser = {
    id: id,
    name: 'John Doe',
    email: 'john@example.com',
    contactNumber: '123-456-7890',
    profilePicture: 'https://via.placeholder.com/150',
    address: '123 Main St, Springfield, IL, 62701',
  };
  return dummyUser;
}

// Define the component
const UserProfile = ({ user }: { user: User }) => {
  return (
    <div style={{ padding: '32px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb', height: "100vh" }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '24px', color: '#333' }}>User Profile</h1>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        {/* Profile Picture */}
        <img
          src={user.profilePicture}
          alt="Profile"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '2px solid #d1d5db',
            marginRight: '24px', // Space between picture and details
          }}
        />

        {/* User Details */}
        <div>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}><strong>ID:</strong> {user.id}</p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}><strong>Name:</strong> {user.name}</p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}><strong>Email:</strong> {user.email}</p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}><strong>Contact Number:</strong> {user.contactNumber}</p>
          <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: { params: { id: string } }) {
  //   const token = cookies().get('token')?.value;
// const token ="dummytoken"

//   if (!token) {
//     redirect('/admin/login');
//   }

//   const user = await fetchUserDetails(params.id, token);// if token is provided
  const user = await fetchUserDetails(params.id);

  // Return the user data as props
  return {
    props: {
      user,
    },
  };
}

export default UserProfile;
