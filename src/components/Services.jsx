import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Lightbulb, HardHat } from 'lucide-react';

export default function Services() {
  const approachItems = [
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description:
        'Nosso portfólio é o nosso maior orgulho. Cada projeto finalizado é um testemunho do nosso compromisso com a mais alta qualidade e precisão técnica.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança e Transparência',
      description:
        'Construímos mais do que edifícios; construímos relações de confiança. A transparência em cada etapa do processo é fundamental para nós.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description:
        'Estamos sempre em busca de soluções mais inteligentes e eficientes, incorporando novas tecnologias e materiais para otimizar resultados.',
    },
    {
      icon: HardHat,
      title: 'Segurança em Primeiro Lugar',
      description:
        'A segurança de nossa equipe, parceiros e do seu patrimônio é nossa prioridade máxima. Seguimos rigorosos protocolos de segurança.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Nossa Abordagem de Trabalho
          </h2>
          <p className="text-lg text-gray-600 mb-16">
            Não se trata apenas de construir, mas de como construímos. Nossos
            pilares garantem que cada projeto seja um sucesso do início ao fim.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col text-center items-center"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
