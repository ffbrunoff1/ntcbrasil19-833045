import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753723696340_0.png';
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Abordagem', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <motion.footer
      className="bg-dark-text text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-gray-400 max-w-xs">
              Drenagem com a solidez e a confiança que seu projeto merece.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Fale Conosco
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-primary transition-colors"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-primary transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <p>Padre Lebret, 801, G05, Bloco 03</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
