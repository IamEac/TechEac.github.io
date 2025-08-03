document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Language Switching
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = {
        '#hero h1': { es: 'Arquitectos de Innovación Digital', en: 'Digital Innovation Architects' },
        '#hero p': { es: 'En TechEac, transformamos desafíos empresariales en oportunidades de crecimiento mediante soluciones tecnológicas de vanguardia. Nuestro enfoque integral en innovación, creatividad y seguridad garantiza resultados excepcionales que impulsan su éxito en el mundo digital. Únase a nosotros y eleve su negocio a nuevas alturas.', en: 'At TechEac, we transform business challenges into growth opportunities through cutting-edge technological solutions. Our comprehensive approach to innovation, creativity, and security ensures exceptional results that drive your success in the digital world. Join us and elevate your business to new heights.'},
        '.cta-button': { es: 'Contáctanos', en: 'Contact Us' },
        'nav a[href="#hero"]': { es: 'Inicio', en: 'Home' },
        'nav a[href="#services"]': { es: 'Servicios', en: 'Services' },
        'nav a[href="#about"]': { es: 'Sobre Nosotros', en: 'About Us' },
        'nav a[href="#contact"]': { es: 'Contacto', en: 'Contact' },
        '#services h2': { es: 'Servicios', en: 'Services' },
        '.service-card:nth-child(1) h3': { es: 'Soluciones Digitales y Automatización', en: 'Digital Solutions & Automation' },
        '.service-card:nth-child(1) p:nth-of-type(1)': { es: 'Optimice sus operaciones con herramientas digitales avanzadas que integran automatización, software personalizado y desarrollo web de élite. Mejore la eficiencia, reduzca costos y personalice experiencias para un crecimiento acelerado.', en: 'Optimize your operations with advanced digital tools that integrate automation, custom software, and elite web development. Improve efficiency, reduce costs, and personalize experiences for accelerated growth.'},
        '.service-card:nth-child(1) .service-tagline': { es: 'Nuestras soluciones son tan únicas como sus desafíos. Nos adaptamos para crear la herramienta perfecta que su negocio necesita.', en: 'Our solutions are as unique as your challenges. We adapt to create the perfect tool your business needs.'},
        '.service-card:nth-child(1) .pricing-list': { es: '<li><strong>Por Proyecto:</strong> 1,000 - 5,000 USD</li>', en: '<li><strong>Per Project:</strong> 1,000 - 5,000 USD</li>'},
        '.service-card:nth-child(2) h3': { es: 'Experiencias Audiovisuales e Interactivas', en: 'Audiovisual & Interactive Experiences' },
        '.service-card:nth-child(2) p:nth-of-type(1)': { es: 'Producción y edicion de imagenes y videos,efectos especiales, mapping y experiencias inmersivas. Produccion Musical.', en: 'Image and video production and editing, special effects, mapping, and immersive experiences. Music Production.'},
        '.service-card:nth-child(2) .service-tagline:nth-of-type(1)': { es: 'Eleve su marca y cautive a su audiencia con creatividad sin límites.', en: 'Elevate your brand and captivate your audience with limitless creativity.' },
        '.service-card:nth-child(2) .service-tagline:nth-of-type(2)': { es: 'Transformamos ideas en experiencias visuales impactantes. Cada proyecto es una obra de arte única, diseñada para conectar y emocionar.', en: 'We transform ideas into impactful visual experiences. Each project is a unique work of art, designed to connect and excite.'},
        '.service-card:nth-child(2) .pricing-list': { es: '<li><strong>Por Proyecto:</strong> 120 - 750 USD</li>', en: '<li><strong>Per Project:</strong> 120 - 750 USD</li>'},
        '.service-card:nth-child(3) h3': { es: 'Capacitación en Inteligencia Artificial', en: 'Artificial Intelligence Training' },
        '.service-card:nth-child(3) p:nth-of-type(1)': { es: 'Domine la IA con cursos prácticos y actualizados que desarrollan habilidades esenciales. Desde sesiones rápidas hasta programas completos con suscripciones exclusivas, prepárese para liderar en la era inteligente.', en: 'Master AI with practical, up-to-date courses that develop essential skills. From quick sessions to full programs with exclusive subscriptions, prepare to lead in the intelligent era.'},
        '.service-card:nth-child(3) .service-tagline': { es: 'Conviértase en un experto en IA con nuestra formación de vanguardia, diseñada para el éxito en el mundo real.', en: 'Become an AI expert with our cutting-edge training, designed for real-world success.'},
        '.service-card:nth-child(3) .pricing-list': { es: '<li><strong>Clase de 1 hora:</strong> 70 USD</li><li><strong>Curso completo:</strong> 300 USD</li><li><strong>Curso + Suscripción Agente IA:</strong> 500 USD</li>', en: '<li><strong>1-hour class:</strong> 70 USD</li><li><strong>Full course:</strong> 300 USD</li><li><strong>Course + AI Agent Subscription:</strong> 500 USD</li>'},
        '.service-card:nth-child(4) h3': { es: 'Servicios de Ciberseguridad', en: 'Cybersecurity Services' },
        '.service-card:nth-child(4) p:nth-of-type(1)': { es: 'Proteja su futuro digital con hacking ético y defensas proactivas contra amenazas. Garantice la integridad de sus datos con soluciones confiables que priorizan la ética y la excelencia.', en: 'Protect your digital future with ethical hacking and proactive threat defenses. Ensure the integrity of your data with reliable solutions that prioritize ethics and excellence.'},
        '.service-card:nth-child(4) .service-tagline': { es: 'Su seguridad es nuestra prioridad. Blindamos su negocio contra las amenazas digitales con estrategias éticas y avanzadas.', en: 'Your security is our priority. We shield your business from digital threats with ethical and advanced strategies.'},
        '.service-card:nth-child(4) .pricing-list': { es: '<li><strong>Auditoría de Seguridad:</strong> 700 - 2,000 USD</li>', en: '<li><strong>Security Audit:</strong> 700 - 2,000 USD</li>'},
        '.service-card:nth-child(5) h3': { es: 'Escritura y Redacción Profesional', en: 'Professional Writing & Editing' },
        '.service-card:nth-child(5) p:nth-of-type(1)': { es: 'Ofrecemos servicios expertos de escritura, investigación científica y análisis detallado para elevar la calidad y el impacto de sus documentos, artículos y proyectos.', en: 'We offer expert writing, scientific research, and detailed analysis services to elevate the quality and impact of your documents, articles, and projects.'},
        '.service-card:nth-child(5) .service-tagline': { es: 'Transformamos datos complejos en narrativas claras y convincentes con precisión académica y rigor profesional.', en: 'We transform complex data into clear, compelling narratives with academic precision and professional rigor.'},
        '.service-card:nth-child(5) .pricing-list': { es: '<li><strong>Precio:</strong> Contacto depende del proyecto</li>', en: '<li><strong>Price:</strong> Contact for project-based pricing</li>'},
        '.service-card:nth-child(6) h3': { es: 'Shopify Ecommerce & Web Development', en: 'Shopify Ecommerce & Web Development' },
        '.service-card:nth-child(6) p:nth-of-type(1)': { es: 'Lanzamos su tienda en línea con Shopify o desarrollamos sitios web personalizados, creando plataformas robustas, seguras y optimizadas para la conversión y el crecimiento.', en: 'We launch your online store with Shopify or develop custom websites, creating robust, secure, and optimized platforms for conversion and growth.'},
        '.service-card:nth-child(6) .service-tagline': { es: 'Su visión de negocio, materializada en una experiencia de usuario excepcional y una presencia digital impecable.', en: 'Your business vision, materialized in an exceptional user experience and an impeccable digital presence.'},
        '.service-card:nth-child(6) .pricing-list': { es: '<li><strong>Por Proyecto:</strong> Desde 200 USD</li>', en: '<li><strong>Per Project:</strong> From 200 USD</li>'},
        '#about h2:first-of-type': { es: 'Acerca de TechEac: Nuestro Compromiso con la Excelencia', en: 'About TechEac: Our Commitment to Excellence' },
        '#about p:first-of-type': { es: 'TechEac es una empresa líder con años de experiencia dedicada a ayudar a individuos y organizaciones a integrar de manera fluida la tecnología en sus operaciones diarias, transformando visiones en realidades tangibles...', en: 'TechEac is a leading company with years of experience dedicated to helping individuals and organizations seamlessly integrate technology into their daily operations, transforming visions into tangible realities...'},
        '#contact h2': { es: 'Contacto', en: 'Contact' },
        'label[for="name"]': { es: 'Nombre', en: 'Name' },
        'label[for="email"]': { es: 'Email', en: 'Email' },
        'label[for="phone"]': { es: 'Teléfono', en: 'Phone' },
        'label[for="company"]': { es: 'Empresa', en: 'Company' },
        'label[for="service"]': { es: 'Servicio de Interés', en: 'Service of Interest' },
        '#service option[value=""]': { es: 'Seleccione un servicio', en: 'Select a service' },
        '#service option[value="digital_solutions"]': { es: 'Soluciones Digitales y Automatización', en: 'Digital Solutions & Automation' },
        '#service option[value="audiovisual_experiences"]': { es: 'Experiencias Audiovisuales e Interactivas', en: 'Audiovisual & Interactive Experiences' },
        '#service option[value="ai_training"]': { es: 'Capacitación en Inteligencia Artificial', en: 'Artificial Intelligence Training' },
        '#service option[value="cybersecurity"]': { es: 'Servicios de Ciberseguridad', en: 'Cybersecurity Services' },
        '#service option[value="writing_service"]': { es: 'Escritura y Redacción Profesional', en: 'Professional Writing & Editing' },
        '#service option[value="ecommerce_development"]': { es: 'Shopify Ecommerce & Web Development', en: 'Shopify Ecommerce & Web Development' },
        'label[for="budget"]': { es: 'Presupuesto (USD)', en: 'Budget (USD)' },
        'label[for="timeline"]': { es: 'Tiempo de Entrega Deseado', en: 'Desired Delivery Time' },
        'label[for="description"]': { es: 'Descripción del Proyecto', en: 'Project Description' },
        'label[for="source"]': { es: '¿Por dónde nos conociste?', en: 'How did you hear about us?' },
        '#source option[value=""]': { es: 'Seleccione una opción', en: 'Select an option' },
        '#source option[value="google"]': { es: 'Google', en: 'Google' },
        '#source option[value="social_media"]': { es: 'Redes Sociales', en: 'Social Media' },
        '#source option[value="referral"]': { es: 'Recomendación', en: 'Referral' },
        '#source option[value="other"]': { es: 'Otro', en: 'Other' },
        '#contact-form button': { es: 'Enviar Consulta', en: 'Send Inquiry' },
        'footer p': { es: '&copy; 2025 TechEac. Todos los derechos reservados.', en: '&copy; 2025 TechEac. All rights reserved.'}
    };

    let currentLanguage = 'es';

    function translatePage(language) {
        for (const selector in elementsToTranslate) {
            document.querySelectorAll(selector).forEach(element => {
                if (element) {
                    element.innerHTML = elementsToTranslate[selector][language];
                }
            });
        }
    }

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        languageToggle.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
        translatePage(currentLanguage);
    });

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            formStatus.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
            formStatus.style.color = '#F5F5F5';
            emailjs.sendForm('service_3kla9gx', 'template_4gv8ssz', this)
                .then(function() {
                    formStatus.textContent = currentLanguage === 'es' ? '¡Consulta enviada con éxito!' : 'Inquiry sent successfully!';
                    formStatus.style.color = '#008080';
                    form.reset();
                }, function(error) {
                    formStatus.textContent = (currentLanguage === 'es' ? 'Error al enviar: ' : 'Failed to send: ') + JSON.stringify(error);
                    formStatus.style.color = '#FF6B6B';
                });
        });
    }

    translatePage(currentLanguage);
});