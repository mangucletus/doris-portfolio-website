import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormActivated, setIsFormActivated] = useState(false);

  useEffect(() => {
    // Check if FormSubmit is already activated
    const checkActivation = async () => {
      try {
        const response = await fetch('https://formsubmit.co/ajax/dorislonta33@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ _activate: true }),
        });
        
        const data = await response.json();
        setIsFormActivated(data.success || false);
      } catch (error) {
        console.log('FormSubmit not yet activated');
      }
    };
    
    checkActivation();
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    if (!validateEmail(email)) {
      setStatusMessage('Please provide a valid email address.');
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 3000);
      return;
    }

    try {
      // Add honeypot field to prevent spam
      formData.append('_captcha', 'false');
      formData.append('_subject', `New message from portfolio: ${formData.get('subject')}`);
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/dorislonta33@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        setStatusMessage('Message sent successfully!');
        form.reset();
      } else {
        setStatusMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatusMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div className="animate-slideUp">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <a href="mailto:dorislonta33@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    dorislonta33@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <a href="tel:+233545678506" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    +233 54 567 8506
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-700">Kumasi, Ghana</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/dorislonta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/DorisLonta?t=TX1BIguyMCIldyrMhBdgOA&s=09" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors duration-200" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/lonta_doris?igsh=cjBwNjYzN3E5aml3" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors duration-200" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/share/12LWTZmKfjc/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors duration-200" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="animate-slideUp animation-delay-200">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

              {!isFormActivated && (
                <div className="text-sm text-yellow-600 font-medium mb-4">
                  FormSubmit may require activation. If the form doesn't work, please check your email for an activation link from FormSubmit.
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                {/* Hidden field for FormSubmit - helps with activation */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from portfolio website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className={`text-sm font-medium ${statusMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;