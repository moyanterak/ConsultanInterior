import React, { useState } from 'react';

const ContactForm: React.FC<{ onSubmit: (formData: any) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', serviceId: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nama" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="serviceId" placeholder="ID Layanan" onChange={handleChange} />
      <textarea name="message" placeholder="Pesan" onChange={handleChange} />
      <button type="submit">Kirim Permintaan</button>
    </form>
  );
};

export default ContactForm;
