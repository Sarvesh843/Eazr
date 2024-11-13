// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
}

async function fetchUsers(token: string): Promise<User[]> {
  // try {
  //   const response = await axios.get('https://example.com/users', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching users:', error);
  //   return [];
  // }
  return [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', contactNumber: '1234567890' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', contactNumber: '2345678901' },
    { id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com', contactNumber: '3456789012' },
    { id: '4', name: 'Bob Brown', email: 'bob.brown@example.com', contactNumber: '4567890123' },
    { id: '5', name: 'Charlie White', email: 'charlie.white@example.com', contactNumber: '5678901234' },
  ];
}

const AdminDashboard = async () => {
  // const token = cookies().get('token')?.value;
  const token = "demotoken"

  if (!token) {
    redirect('/admin/login');
  }

  const users = await fetchUsers(token);

  return (
    <div style={{ padding: '32px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9fafb' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#333',
        }}
      >
        Admin Dashboard
      </h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#e5e7eb',
              textAlign: 'left',
              fontWeight: '600',
            }}
          >
            <th
              style={{
                padding: '12px 16px',
                borderBottom: '2px solid #d1d5db',
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: '12px 16px',
                borderBottom: '2px solid #d1d5db',
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: '12px 16px',
                borderBottom: '2px solid #d1d5db',
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: '12px 16px',
                borderBottom: '2px solid #d1d5db',
                textAlign: 'center',
                fontSize: '1rem',
              }}
            >
              Contact Number
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{backgroundColor: '#fff', textAlign: 'center' }}>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #d1d5db',
                  fontSize: '0.95rem',
                }}
              >
                {user.id}
              </td>
              <Link href={`/admin/users/${user.id}`} key={user.id}>
                <td
                  style={{
                    padding: '12px 16px',
                    borderBottom: '1px solid #d1d5db',
                    fontSize: '0.95rem',
                    cursor:'pointer'
                  }}
                >
                  {user.name}
                </td>
              </Link>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #d1d5db',
                  fontSize: '0.95rem',
                }}
              >
                {user.email}
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #d1d5db',
                  fontSize: '0.95rem',
                }}
              >
                {user.contactNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
