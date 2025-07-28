import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const contactImageUrl =
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-lg text-gray-600">
            Pronto para dar o próximo passo? Entre em contato e saiba como
            podemos transformar sua ideia em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-accent p-8 md:p-12 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-dark-text mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <a
                  href="tel:+5544991040774"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  +55 44 99104-0774
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <p className="text-gray-700">
                  Padre Lebret, 801, G05, Bloco 03
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={contactImageUrl}
                alt="Escritório de planejamento"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center disabled:bg-secondary disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center p-4 bg-green-100 text-green-800 rounded-lg"
              >
                <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                Entraremos em contato em breve.
              </motion.div>
            )}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center p-4 bg-red-100 text-red-800 rounded-lg"
              >
                <AlertTriangle className="mr-2" /> Erro: {submitError}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
