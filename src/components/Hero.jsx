import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImageUrl =
    'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-accent"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      <div className="container mx-auto px-6 z-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-dark-text leading-tight mb-4"
            >
              Construindo o Futuro com{' '}
              <span className="gradient-text">Excelência.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
            >
              A sua confiança é o nosso alicerce. Deixe seus projetos em mãos
              experientes e veja suas ideias se transformarem em realidade.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="btn-primary inline-flex items-center group"
              >
                Entre em contato
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
            <motion.img
              src={heroImageUrl}
              alt="Arquitetura moderna"
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{ maxHeight: '500px' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
