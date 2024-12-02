import React from 'react';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ServiceList: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <div>
      <h2>Daftar Layanan</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Harga: ${service.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
