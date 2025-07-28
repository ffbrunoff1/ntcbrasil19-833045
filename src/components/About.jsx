import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const aboutImageUrl =
    'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: Building,
      title: 'Projetos Inovadores',
      description:
        'Utilizamos as mais recentes tecnologias e métodos para entregar projetos que superam as expectativas.',
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description:
        'Cada projeto é uma parceria. Trabalhamos lado a lado com nossos clientes para garantir a sua total satisfação.',
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade Garantida',
      description:
        'Compromisso com os mais altos padrões de qualidade e segurança em todas as etapas da construção.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Mais que Construção,{' '}
              <span className="gradient-text">Realização de Sonhos</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Na NTC Brasil, entendemos que cada tijolo assentado é parte de um
              grande sonho. Com anos de experiência no setor da construção,
              nossa missão é transformar ideias em estruturas sólidas e
              duradouras, sempre com um compromisso inabalável com a excelência,
              a integridade e a inovação.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={featureVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-dark-text">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-2xl"></div>
            <img
              src={aboutImageUrl}
              alt="Equipe de construção em um projeto"
              className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
              style={{ maxHeight: '600px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
