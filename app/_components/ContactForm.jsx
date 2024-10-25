// components/ContactForm.jsx
"use client";

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Correo enviado con éxito');
            } else {
                alert('Hubo un problema al enviar el correo');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo"
                required
                className="border p-2 w-full mb-2"
            />
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto"
                required
                className="border p-2 w-full mb-2"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje" 
                required
                className="border p-2 w-full mb-2"
            ></textarea>
            <button type="submit" className="bg-customMorado text-white py-2 px-4 rounded">
                Enviar
            </button>
        </form>
    );
}
