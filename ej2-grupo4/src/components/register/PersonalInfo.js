import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const initialData = JSON.parse(localStorage.getItem('registrationData')) || {};
  
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    dateOfBirth: initialData.dateOfBirth || '',
    gender: initialData.gender || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentData = JSON.parse(localStorage.getItem('registrationData')) || {};
    localStorage.setItem('registrationData', JSON.stringify({ ...currentData, ...formData }));
    navigate('/register/contact');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información Personal</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Nombre:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Apellido:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Fecha de Nacimiento:</label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Género:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required>
          <option value="">Seleccionar</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit">Siguiente</button>
      </div>
    </form>
  );
};

export default PersonalInfo;