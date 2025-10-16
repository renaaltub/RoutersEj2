// components/register/Register.js
import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();

    
    const steps = [
        { path: 'personal', label: 'Información Personal' },
        { path: 'contact', label: 'Información de Contacto' },
        { path: 'confirmation', label: 'Confirmación' }
    ];

    
    const currentStep = steps.findIndex(step =>
        location.pathname.includes(step.path)
    );

    //Error
    useEffect(() => {
        if (location.pathname === '/register' || location.pathname === '/register/') {
            navigate('/register/personal', { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
            <h1>Registro de Usuario</h1>

            {/* Indicador de pasos */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                {steps.map((step, index) => (
                    <div key={step.path} style={{ textAlign: 'center', flex: 1 }}>
                        <div
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                // El color es azul si ya pasaste o estás en este paso
                                backgroundColor: index <= currentStep ? '#007bff' : '#ccc',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 10px' // Corregido 'margin: 0 auto 10px'
                            }}
                        >
                            {index + 1}
                        </div>
                        <span style={{ fontSize: '12px' }}>{step.label}</span>
                    </div>
                ))}
            </div>

            {/* Formulario actual */}
            <Outlet />
        </div>
    );
};

export default Register;