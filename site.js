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
    product1: "Medialunas Artesanales",
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
    review1: "Um lugar encantador! O café é delicioso e as medialunas são divinas. O atendimento é super atencioso e o ambiente muito acolhedor. Voltarei com certeza!",
    review1Name: "Maria Silva",
    review1Role: "Local Guide",
    review2: "Las mejores medialunas que probé en mi vida. El lugar es hermoso y la atención de las chicas es excelente. Muy recomendable para un desayuno tranquilo.",
    review2Name: "Juan Carlos",
    review2Role: "Turista",
    review3: "Ambiente pet friendly de verdade! Fui com meu cachorro e fomos muito bem recebidos. O brunch estava espetacular, especialmente o avocado toast.",
    review3Name: "Ana Paula",
    review3Role: "Cliente Frequente",
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
    product2: "Café de Especialidad",
    product2Desc: "Granos seleccionados, tostado perfecto y latte art para alegrar tu día.",
    product2Price: "R$ 14,00",
    product3: "Cheesecake con Frutos Rojos",
    product3Desc: "Suave y cremoso, con una base de galleta casera y una generosa capa de mermelada de frutas del bosque.",
    product3Price: "R$ 28,00",
    bestSeller: "Más Vendido",
    reviewsTitle: "Lo que dicen sobre nosotros",
    reviewsRating: "4.9/5 estrellas en Google Maps",
    review1: "¡Un lugar encantador! El café es delicioso y las medialunas son divinas. El servicio es muy atento y el ambiente muy acogedor. ¡Volveré con seguridad!",
    review1Name: "María Silva",
    review1Role: "Local Guide",
    review2: "Las mejores medialunas que probé en mi vida. El lugar es hermoso y la atención de las chicas es excelente. Muy recomendable para un desayuno tranquilo.",
    review2Name: "Juan Carlos",
    review2Role: "Turista",
    review3: "¡Ambiente pet friendly de verdad! Fui con mi perro y fuimos muy bien recibidos. El brunch estaba espectacular, especialmente el avocado toast.",
    review3Name: "Ana Paula",
    review3Role: "Cliente Frecuente",
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

// Estado actual
let currentLanguage = localStorage.getItem('language') || 'pt';

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initDarkMode();
  initMobileMenu();
  checkOpenStatus();
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
  
  // Actualizar todos los elementos con data-i18n
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
  
  if (themeIcon) {
    themeIcon.textContent = iconName;
  }
  if (themeIconMobile) {
    themeIconMobile.textContent = iconName;
  }
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

// Ejecutar loadTheme al cargar
loadTheme();

// Mobile menu toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú al hacer clic en enlaces
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
  
  // Horarios: 8:00-12:00 y 16:00-20:30
  const isOpen = (currentTime >= 8 && currentTime < 12) || (currentTime >= 16 && currentTime < 20.5);
  
  const statusKey = isOpen ? 'locationOpen' : 'locationClosed';
  const statusText = translations[currentLanguage][statusKey];
  
  statusElement.textContent = statusText;
  
  if (isOpen) {
    statusElement.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mt-2';
  } else {
    statusElement.className = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold mt-2';
  }
}

// Actualizar estado cada minuto
setInterval(checkOpenStatus, 60000);

// Actualizar estado al cambiar idioma
const originalSetLanguage = setLanguage;
setLanguage = function(lang) {
  originalSetLanguage(lang);
  checkOpenStatus();
};
