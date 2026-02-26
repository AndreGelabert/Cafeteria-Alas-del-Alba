// Pool de reseñas auténticas de Google Maps
const reviewsPool = {
  pt: [
    {
      text: "Nos dias que passei em Bombas não perdi nenhum sem vir tomar café da manhã neste lugar encantador. Atendimento maravilhoso, comida deliciosa. Tudo organizado, tudo impecável, estão atentos a todos os detalhes.",
      name: "Sofia Colazo",
      role: "Local Guide · 15 avaliações",
      stars: 5,
      initials: "SC",
      color: "bg-secondary/30 text-secondary"
      },
      {
      text: "Excelente lugar. Tanto o café gelado quanto o quente são uma delícia, as torradas (egg toast e avocado toast) maravilhosas. As medialunas são ótimas!! E as pessoas são muito queridas. Finalmente uma cafeteria como deve ser 🤣❤️❤️❤️",
      name: "Constanza Randazzo",
      role: "Turista",
      stars: 5,
      initials: "CR",
      color: "bg-primary/20 text-primary"
      },
      {
      text: "Tem um cardápio bem argentino. É o lanche perfeito ao voltar da praia. Deixo uma fotinho de uma medialuna com doce de leite 🥐",
      name: "Angie Lorena Avila Rosales",
      role: "Local Guide · 30 avaliações",
      stars: 5,
      initials: "A",
      color: "bg-teal-100 text-teal-700"
      },
      {
      text: "O ambiente do lugar é muito acolhedor.<br>O atendimento foi muito gentil e nos recomendaram atividades para fazer.<br>A comida nota 10!!! Excelente custo benefício.",
      name: "Sabrina Leiva",
      role: "Turista",
      stars: 5,
      initials: "SL",
      color: "bg-pink-100 text-pink-700"
      },
      {
      text: "Uma experiência inesquecível em sabores.. atendimento muito bom.. destaco os sabores incríveis.. tudo mais que perfeito... Levo uma ótima lembrança das minhas férias... Obrigado.",
      name: "Leandro Geronimo",
      role: "Local Guide · 45 avaliações",
      stars: 5,
      initials: "LG",
      color: "bg-amber-100 text-amber-700"
      },
      {
      text: "Muito gostoso tudo. Comemos um croissant de brigadeiro bem servido, café e suco de laranja. Ambientação muito bonita e ótimo atendimento ♥️",
      name: "Lucrecia Piquet",
      role: "Local Guide · 26 avaliações",
      stars: 5,
      initials: "LP",
      color: "bg-secondary/30 text-secondary"
      },
      {
      text: "100% recomendado! Ambiente, atendimento e comida, tudo excelente.<br>As medialunas mais gostosas que provamos em Bombinhas (somos argentinos)<br>Muita variedade em cafeteria e confeitaria. Se procuram um lugar para tomar café da manhã ou lanchar, precisam conhecer o Alas del Alba.",
      name: "Pablo Pino",
      role: "Turista",
      stars: 5,
      initials: "P",
      color: "bg-teal-100 text-teal-700"
      },
      {
      text: "Excelente lugar, muito saboroso! Recomendo muito que visitem! Ideal para dias de chuva! O misto quente de presunto e queijo meu Deus, uma loucura, nunca comi um tão bom na vida! 10 de 10!",
      name: "Daniel Ricon",
      role: "Local Guide · 45 avaliações",
      stars: 5,
      initials: "DR",
      color: "bg-amber-100 text-amber-700"
      },
      {
      text: "Excelentes todos os pratos, as tortas com sabores incríveis, realmente dá para perceber a excelente qualidade dos ingredientes! Voltaria com certeza 😍",
      name: "Dustin Carabajal",
      role: "Turista",
      stars: 5,
      initials: "DC",
      color: "bg-secondary/20 text-secondary"
      },
      {
      text: "Lugar lindo e acolhedor para aproveitar em família, excelente atendimento. Comida farta e deliciosa",
      name: "Florencia Belisan",
      role: "Turista",
      stars: 5,
      initials: "FB",
      color: "bg-pink-100 text-pink-700"
      },
      {
      text: "Sem dúvidas a melhor cafeteria de Bombinhas. Excelente atendimento e tudo muito gostoso. Como se estivesse na Argentina. PARABÉNS!",
      name: "Joni Gomez",
      role: "Turista",
      stars: 5,
      initials: "J",
      color: "bg-indigo-100 text-indigo-700"
      },
      {
      text: "Excelente atendimento, comida muito deliciosa e ambiente super agradável, as pessoas que atendem são muito atenciosas e simpáticas. 100% recomendado.",
      name: "Elias Fabbro",
      role: "Turista",
      stars: 5,
      initials: "E",
      color: "bg-fuchsia-100 text-fuchsia-700"
      },
      {
      text: "Adoramos!! Cafés da manhã muito gostosos. Tem chá",
      name: "Daniela Alejandra Arellano",
      role: "Turista",
      stars: 5,
      initials: "D",
      color: "bg-green-100 text-green-700"
      },
      {
      text: "Excelente atendimento de todos! tudo muito gostoso, ambiente muito bonito e aconchegante!",
      name: "Marite Nieto",
      role: "Turista",
      stars: 5,
      initials: "M",
      color: "bg-red-100 text-red-700"
      },
      {
      text: "Fomos em família lanchar, excelente o café quente e gelado, boas variedades na confeitaria. Parabéns",
      name: "Alfredo Gimenez",
      role: "Local Guide · 11 opiniones",
      stars: 5,
      initials: "A",
      color: "bg-yellow-100 text-yellow-700"
      },
      {
      text: "A comida é deliciosa! Muita panificação argentina. Atendimento e local excelentes, voltaria mil vezes!!",
      name: "Facundo Veneziano",
      role: "Turista",
      stars: 5,
      initials: "F",
      color: "bg-violet-100 text-violet-700"
      },
      {
      text: "Muito boa a experiência, qualidade da comida excelente e atendimento espetacular. Um abraço da Espanha.",
      name: "Etienne Lamuniere",
      role: "Turista",
      stars: 5,
      initials: "E",
      color: "bg-stone-100 text-stone-700"
      },
      {
      text: "O ambiente é pequeno, mas o local é confortável, e falam espanhol, algo muito importante já que quase ninguém consegue se comunicar na região.",
      name: "Carla Gutierrez Acosta",
      role: "Local Guide · 31 avaliações",
      stars: 4,
      initials: "CA",
      color: "bg-teal-100 text-teal-700"
    }
  ],
  es: [
    {
      text: "Los días que pase en bombas no perdí ninguno sin venir a desayunar a este lugar encantador. Maravillosa atención , comida deliciosa. Todo prolijo , todo impecable, están en todos los detalles.",
      name: "Sofia Colazo",
      role: "Local Guide · 15 reseñas",
      stars: 5,
      initials: "SC",
      color: "bg-secondary/30 text-secondary"
    },
    {
      text: "Excelente lugar. Tanto el café frío como el caliente una delicia, sus tostadas (egg toast y avocado toast) una delicia. Las medialunas geniales!! Y la gente un amor . Al fin una cafetería como la gente 🤣❤️❤️❤️",
      name: "Constanza Randazzo",
      role: "Turista",
      stars: 5,
      initials: "CR",
      color: "bg-primary/20 text-primary"
    },
    {
      text: "Tienen una carta bien argenta. Es la merienda que necesitas al volver de la Praia. Dejo fotito de una medialuna con dulce de leche 🥐",
      name: "Angie Lorena Avila Rosales",
      role: "Local Guide · 30 reseñas",
      stars: 5,
      initials: "A",
      color: "bg-teal-100 text-teal-700"
    },
    {
      text: "El ambiente del lugar es muy cálido.<br>La atención muy amable y nos recomendó actividades para realizar.<br>La comida un 10!!! Excelente relación precio calidad.",
      name: "Sabrina Leiva",
      role: "Turista",
      stars: 5,
      initials: "SL",
      color: "bg-pink-100 text-pink-700"
    },
    {
      text: "Una experiencia inolvidable en cuanto a sabores.. muy buena atención .. destacó los sabores increíbles.. todo más q bien... Me llevo un buen recuerdo de mis vacaciones... Gracias.",
      name: "Leandro Geronimo",
      role: "Local Guide · 45 reseñas",
      stars: 5,
      initials: "LG",
      color: "bg-amber-100 text-amber-700"
    },
    {
      text: "Muy rico todo. Comimos una croissant de brigadeiro que era muy abundante, café y jugo de naranja. Muy linda ambientación y atención ♥️",
      name: "Lucrecia Piquet",
      role: "Local Guide · 26 reseñas",
      stars: 5,
      initials: "LP",
      color: "bg-secondary/30 text-secondary"
    },
    {
      text: "100% recomendable! Ambiente, atención y comida, todo genial.<br>Las medialunas más ricas que probamos en Bombinhas (somos argentinos)<br>Mucha variedad en cafetería y pastelería. Si buscan un lugar para desayunar y/o merendar, tienen que pasar por Alas del Alba.",
      name: "Pablo Pino",
      role: "Turista",
      stars: 5,
      initials: "P",
      color: "bg-teal-100 text-teal-700"
    },
    {
      text: "Excelente lugar, súper rico! Recomiendo mucho que vayan! Ideal para días de lluvia! El tostado de jamón y queso Dios mío una locura, nunca en mi vida comí un tostado tan rico! 10 de 10!",
      name: "Daniel Ricon",
      role: "Local Guide · 45 reseñas",
      stars: 5,
      initials: "DR",
      color: "bg-amber-100 text-amber-700"
    },
    {
      text: "Excelente todos los platos , las tortas con sabores increíbles, realmente se nota una calidad excelente en los ingredientes! Volvería a venir 😍",
      name: "Dustin Carabajal",
      role: "Turista",
      stars: 5,
      initials: "DC",
      color: "bg-secondary/20 text-secondary"
    },
    {
      text: "Hermoso y cálido lugar para disfrutar en familia, excelente atención. La comida abundante y deliciosa",
      name: "Florencia Belisan",
      role: "Turista",
      stars: 5,
      initials: "FB",
      color: "bg-pink-100 text-pink-700"
    },
    {
      text: "Sin dudas la mejor cafeteria de bombinhas. Excelente atencion y todo muy rico. Como si estuvieras en argentina. LOS FELICITO !",
      name: "Joni Gomez",
      role: "Turista",
      stars: 5,
      initials: "J",
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      text: "Excelente servicio, la comida muy deliciosa y el ambiente es super agradable, las personas que atienden super atentas y buena onda. 100% recomendable.",
      name: "Elias Fabbro",
      role: "Turista",
      stars: 5,
      initials: "E",
      color: "bg-fuchsia-100 text-fuchsia-700"
    },
    {
      text: "Nos encantó!! Muy ricos desayunos Hay té",
      name: "Daniela Alejandra Arellano",
      role: "Turista",
      stars: 5,
      initials: "D",
      color: "bg-green-100 text-green-700"
    },
    {
      text: "Excelente atención de todos! todo muy rico, el ambiente muy hermoso y acogedor!",
      name: "Marite Nieto",
      role: "Turista",
      stars: 5,
      initials: "M",
      color: "bg-red-100 text-red-700"
    },
    {
      text: "Fuimos en Flia. A merendar exelente el Café caliente y Frío de buenas variedades en parte de confitería felicitaciones",
      name: "Alfredo Gimenez",
      role: "Local Guide · 11 opiniones",
      stars: 5,
      initials: "A",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      text: "La comida riquísima! Mucha panaderia Argentina. La atención y el lugar excelente, volvería mil veces más!!",
      name: "Facundo Veneziano",
      role: "Turista",
      stars: 5,
      initials: "F",
      color: "bg-violet-100 text-violet-700"
    },
    {
      text: "Muy buena la experiencia, la calidad de la comida excelente y el servicio espectacular. Un saludo desde España.",
      name: "Etienne Lamuniere",
      role: "Turista",
      stars: 5,
      initials: "E",
      color: "bg-stone-100 text-stone-700"
    },
    {
      text: "El ambiente es chico, pero el local es cómodo, y hablan español, algo importantísimo ya que casi nadie puede comunicarse en la zona.",
      name: "Carla Gutierrez Acosta",
      role: "Local Guide · 31 reseñas",
      stars: 4,
      initials: "CA",
      color: "bg-teal-100 text-teal-700"
    }
  ]
};

// Seleccionar 3 reseñas al azar sin repetir
function getRandomReviews(lang) {
  const pool = [...reviewsPool[lang]];
  const selected = [];
  while (selected.length < 3 && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    selected.push(pool.splice(idx, 1)[0]);
  }
  return selected;
}

// Construir las estrellas SVG
function buildStars(count) {
  return Array.from({ length: count }, () =>
    `<span class="material-symbols-outlined text-sm fill-1">star</span>`
  ).join('');
}

// Renderizar las reseñas aleatorias en el DOM
function renderRandomReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  const reviews = getRandomReviews(currentLanguage);

  grid.innerHTML = reviews.map(r => `
    <div class="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700 flex flex-col h-full relative">
      <span class="material-symbols-outlined text-6xl text-primary/10 absolute top-4 right-4">format_quote</span>
      <div class="flex items-center gap-1 text-yellow-400 mb-4">
        ${buildStars(r.stars)}
      </div>
      <p class="text-gray-600 dark:text-gray-300 mb-6 italic flex-grow">"${r.text}"</p>
      <div class="flex items-center gap-3 mt-auto">
        <div class="w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-bold">${r.initials}</div>
        <div>
          <p class="font-bold text-gray-800 dark:text-white text-sm">${r.name}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">${r.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Configuración de idiomas
const translations = {
  pt: {
    navAbout: "Sobre Nós",
    navMenu: "Menu",
    navLocation: "Localização",
    navReviews: "Resenhas",
    navSelectLanguage: "Selecionar idioma",
    heroLocation: "Bombinhas - SC",
    heroTitle: "Alas del Alba",
    heroSubtitle: "Cafeteria e Confeitaria Artesanal. Onde cada detalhe é feito com amor.",
    heroOrderBtn: "Pedir por WhatsApp",
    heroMenuBtn: "Ver Menu",
    serviceConsumption: "Consumo no local",
    serviceConsumptionDesc: "Ambiente aconchegante",
    serviceTakeaway: "Para levar",
    serviceTakeawayDesc: "Embalagens especiais",
    serviceDelivery: "Delivery",
    serviceDeliveryDesc: "No conforto da sua casa",
    aboutTitle: "Artesanal & Acolhedor",
    aboutText1: "Nascemos da paixão por brunch, medialunas perfeitas e um serviço de qualidade que faz você se sentir em casa. Em Bombinhas, criamos um espaço onde o aroma do café de especialidade encontra a doçura da confeitaria tradicional.",
    aboutText2: "Cada receita é preparada com ingredientes selecionados, respeitando o tempo de cada processo. Seja para um café da manhã demorado ou um lanche rápido, o Alas del Alba é o seu refúgio de sabor na praia.",
    aboutCommunity: "Junte-se à nossa comunidade",
    aboutIdentity: "Identidade",
    aboutWomenOwned: "Women-Owned Business",
    menuHighlights: "Destaques",
    menuFavorites: "Nossos Favoritos",
    menuViewAll: "Ver menu completo",
    product1: "Medialunas Artesanais",
    product1Desc: "Feitas à mão diariamente, amanteigadas e com a doçura perfeita.",
    product1Price: "R$ 12,00",
    product2: "Café de Especialidade",
    product2Desc: "Grãos selecionados, torra perfeita e latte art para alegrar seu dia.",
    product2Price: "R$ 14,00",
    product3: "Cheesecake com Frutos Vermelhos",
    product3Desc: "Suave e cremoso, com uma base de biscoito caseiro e uma generosa camada de geléia de frutas silvestres.",
    product3Price: "R$ 28,00",
    bestSeller: "Best Seller",
    reviewsTitle: "O que dizem sobre nós",
    reviewsRating: "4.9/5 estrelas no Google Maps",
    locationTitle: "Venha nos visitar",
    locationAddress: "Endereço",
    locationAddressText: "Rua Colibri, 223<br/>Bombas, Bombinhas - SC<br/>88215-000, Brazil",
    locationHours: "Horário",
    locationHoursText: "Todos os dias<br/>8:00 AM – 12:00 PM<br/>4:00 PM – 8:30 PM",
    locationOpen: "Estamos abertos",
    locationClosed: "Estamos fechados",
    locationContact: "Contato",
    locationWhatsApp: "Fale conosco pelo WhatsApp",
    locationPetFriendly: "Pet Friendly",
    locationParking: "Estacionamento<br/>Gratuito",
    footerAbout: "Cafeteria e Confeitaria Artesanal em Bombinhas. Nos dedicamos a criar momentos especiais com o melhor café e sabores inesquecíveis.",
    footerQuickLinks: "Links Rápidos",
    footerHome: "Início",
    footerMenu: "Menu",
    footerLocation: "Localização",
    footerReviews: "Resenhas",
    footerCopyright: "© 2026 Alas del Alba. Todos os direitos reservados.",
    mobileLanguage: "Idioma:"
  },
  es: {
    navAbout: "Sobre Nosotros",
    navMenu: "Menú",
    navLocation: "Ubicación",
    navReviews: "Reseñas",
    navSelectLanguage: "Seleccionar idioma",
    heroLocation: "Bombinhas - SC",
    heroTitle: "Alas del Alba",
    heroSubtitle: "Cafetería y Confitería Artesanal. Donde cada detalle está hecho con amor.",
    heroOrderBtn: "Pedir por WhatsApp",
    heroMenuBtn: "Ver Menú",
    serviceConsumption: "Consumo en el local",
    serviceConsumptionDesc: "Ambiente acogedor",
    serviceTakeaway: "Para llevar",
    serviceTakeawayDesc: "Empaques especiales",
    serviceDelivery: "Delivery",
    serviceDeliveryDesc: "En la comodidad de tu hogar",
    aboutTitle: "Artesanal & Acogedor",
    aboutText1: "Nacimos de la pasión por el brunch, medialunas perfectas y un servicio de calidad que te hace sentir como en casa. En Bombinhas, creamos un espacio donde el aroma del café de especialidad se encuentra con la dulzura de la confitería tradicional.",
    aboutText2: "Cada receta se prepara con ingredientes seleccionados, respetando el tiempo de cada proceso. Ya sea para un desayuno prolongado o un aperitivo rápido, Alas del Alba es tu refugio de sabor en la playa.",
    aboutCommunity: "Únete a nuestra comunidad",
    aboutIdentity: "Identidad",
    aboutWomenOwned: "Women-Owned Business",
    menuHighlights: "Destacados",
    menuFavorites: "Nuestros Favoritos",
    menuViewAll: "Ver menú completo",
    product1: "Medialunas Artesanales",
    product1Desc: "Hechas a mano diariamente, mantecosas y con el dulce perfecto.",
    product1Price: "R$ 12,00",
    product2: "Café de Especialidade",
    product2Desc: "Granos seleccionados, tostado perfecto y latte art para alegrar tu día.",
    product2Price: "R$ 14,00",
    product3: "Cheesecake con Frutos Rojos",
    product3Desc: "Suave y cremoso, con una base de galleta casera y una generosa capa de mermelada de frutas del bosque.",
    product3Price: "R$ 28,00",
    bestSeller: "Más Vendido",
    reviewsTitle: "Lo que dicen sobre nosotros",
    reviewsRating: "4.9/5 estrellas en Google Maps",
    locationTitle: "Ven a visitarnos",
    locationAddress: "Dirección",
    locationAddressText: "Rua Colibri, 223<br/>Bombas, Bombinhas - SC<br/>88215-000, Brasil",
    locationHours: "Horario",
    locationHoursText: "Todos los días<br/>8:00 AM – 12:00 PM<br/>4:00 PM – 8:30 PM",
    locationOpen: "Estamos abiertos",
    locationClosed: "Estamos cerrados",
    locationContact: "Contacto",
    locationWhatsApp: "Contáctanos por WhatsApp",
    locationPetFriendly: "Pet Friendly",
    locationParking: "Estacionamiento<br/>Gratuito",
    footerAbout: "Cafetería y Confitería Artesanal en Bombinhas. Nos dedicamos a crear momentos especiales con el mejor café y sabores inolvidables.",
    footerQuickLinks: "Enlaces Rápidos",
    footerHome: "Inicio",
    footerMenu: "Menú",
    footerLocation: "Ubicación",
    footerReviews: "Reseñas",
    footerCopyright: "© 2026 Alas del Alba. Todos los derechos reservados.",
    mobileLanguage: "Idioma:"
  }
};

// Estado atual
let currentLanguage = localStorage.getItem('language') || 'pt';

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initDarkMode();
  initMobileMenu();
  checkOpenStatus();
  renderRandomReviews();
});

// Inicializar el idioma
function initLanguage() {
  setLanguage(currentLanguage);
  updateLanguageSelector();
}

// Cambiar idioma
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'IMG' || element.hasAttribute('src')) {
        element.src = element.getAttribute('data-src-' + lang) || element.src;
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  updateLanguageSelector();
  renderRandomReviews();
  checkOpenStatus();
}

// Actualizar el selector de idioma en el navbar
function updateLanguageSelector() {
  const currentFlag = document.getElementById('current-flag');
  const currentLangText = document.getElementById('current-lang-text');
  
  if (currentFlag) {
    currentFlag.className = currentLanguage === 'pt' ? 'fi fi-br' : 'fi fi-ar';
  }
  if (currentLangText) {
    currentLangText.textContent = currentLanguage === 'pt' ? 'PT' : 'ES';
  }
}

// Mostrar dropdown de idiomas
function toggleLanguageDropdown() {
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
  const langMenu = document.querySelector('[data-language-menu]');
  if (langMenu && !langMenu.contains(e.target)) {
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
      dropdown.classList.add('hidden');
    }
  }
});

// Seleccionar idioma del dropdown
function selectLanguage(lang) {
  setLanguage(lang);
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
  updateMobileLanguageButtons();
}

// Dark mode toggle
function initDarkMode() {
  const darkModeBtn = document.getElementById('dark-mode-btn');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', toggleDarkMode);
  }
  updateThemeIcon();
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');
  
  const iconName = isDark ? 'light_mode' : 'dark_mode';
  
  if (themeIcon) themeIcon.textContent = iconName;
  if (themeIconMobile) themeIconMobile.textContent = iconName;
}

// Cargar el tema guardado
function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
}

loadTheme();

// Mobile menu toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
  
  updateMobileLanguageButtons();
}

// Actualizar botones de idioma en móvil
function updateMobileLanguageButtons() {
  const ptBtn = document.getElementById('lang-pt-mobile');
  const esBtn = document.getElementById('lang-es-mobile');
  
  if (ptBtn && esBtn) {
    if (currentLanguage === 'pt') {
      ptBtn.classList.add('bg-primary', 'text-white', 'border-primary');
      ptBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
      esBtn.classList.remove('bg-primary', 'text-white', 'border-primary');
      esBtn.classList.add('text-gray-700', 'dark:text-gray-300');
    } else {
      esBtn.classList.add('bg-primary', 'text-white', 'border-primary');
      esBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
      ptBtn.classList.remove('bg-primary', 'text-white', 'border-primary');
      ptBtn.classList.add('text-gray-700', 'dark:text-gray-300');
    }
  }
}

// Verificar si la cafetería está abierta
function checkOpenStatus() {
  const statusElement = document.getElementById('open-status');
  if (!statusElement) return;
  
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;
  
  const isOpen = (currentTime >= 8 && currentTime < 12) || (currentTime >= 16 && currentTime < 20.5);
  
  const statusKey = isOpen ? 'locationOpen' : 'locationClosed';
  statusElement.textContent = translations[currentLanguage][statusKey];
  
  if (isOpen) {
    statusElement.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mt-2';
  } else {
    statusElement.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold mt-2';
  }
}

setInterval(checkOpenStatus, 60000);
