import React, { useState, useEffect } from 'react';
import './App.css';
import ServiceList from './components/ServiceList';
import ContactForm from './components/ContactForm';
import ProjectStatus from './components/ProjectStatus';
import { getServices, createConsultationRequest } from './services/api';

const App: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [projectStatus, setProjectStatus] = useState<any[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    
    const fetchProjectStatus = async () => {
      const statusData = await getProjectStatus();
      setProjectStatus(statusData);
    };
    
    fetchServices();
    fetchProjectStatus();
  }, []);

  const handleContactSubmit = async (formData: any) => {
    await createConsultationRequest(formData);
  };

  return (
    <div className="App">
      <h1>Aplikasi Jasa Konsultansi Interior dan Desain Rumah</h1>
      <ServiceList services={services} />
      <ContactForm onSubmit={handleContactSubmit} />
      <ProjectStatus status={projectStatus} />
    </div>
  );
};

export default App;
