// components/register/ContactInfo.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactInfo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: '',
        city: ''
    });

    // Helper seguro para parsear JSON desde localStorage
    const safeParse = (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : {};
        } catch (err) {
            // Si el JSON está corrupto, devolvemos objeto vacío en vez de romper la app
            return {};
        }
    };

    React.useEffect(() => {
        // Cargar datos previos del localStorage de forma segura y solo tomar keys esperadas
        const savedData = safeParse('registrationData');
        const allowed = {};
        ['email', 'phone', 'address', 'city'].forEach(k => {
            if (k in savedData) allowed[k] = savedData[k];
        });
        setFormData(prev => ({ ...prev, ...allowed }));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Guardar en localStorage de forma segura
        const existing = safeParse('registrationData');
        localStorage.setItem('registrationData', JSON.stringify({
            ...existing,
            ...formData
        }));
        navigate('/register/confirmation');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Información de Contacto</h2>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="phone">Teléfono:</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="address">Dirección:</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px' }}
                    required
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="city">Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '8px' }}
                    required
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                <button
                    type="button"
                    onClick={() => navigate('/register/personal')}
                    style={{ marginRight: '10px' }}
                >
                    Anterior
                </button>
                <button type="submit">Siguiente</button>
            </div>
        </form>
    );
};

export default ContactInfo;