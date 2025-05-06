
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', whatsapp: '' });
  };

  return (
    <section id="contact" className="section">
      <h2 className="presskit-heading">Contact</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="presskit-input"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="presskit-input"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="presskit-input"
            required
          />
        </div>
        <div>
          <button type="submit" className="presskit-button w-full">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
