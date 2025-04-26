import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { trackEvent } from '../../utils/analytics';

// Category translations
const categoryTranslations = {
  all: { en: "All", es: "Todos" },
  commercial: { en: "Commercial", es: "Comercial" },
  corporate: { en: "Corporate", es: "Corporativo" },
  interviews: { en: "Interviews & Podcasts", es: "Entrevistas y Podcasts" },
  social: { en: "Social Media Content", es: "Contenido para Redes Sociales" },
  product: { en: "Product Video", es: "Video de Producto" },
  events: { en: "Events", es: "Eventos" },
  realestate: { en: "Real Estate", es: "Inmobiliaria" }
};

// Portfolio projects data
const portfolioProjects = [
  {
    id: 1,
    title: "TMC Campaign",
    brand: "TeachMeCode Institute",
    category: "commercial",
    thumbnail: "https://imgur.com/2hLwK3Z.jpg",
    videoUrl: "https://vimeo.com/973021885",
    description: {
      en: "This commercial highlights the impact of learning coding on a man who goes from a life of stress and pressure to one of success and fulfillment. The commercial contrasts the chaos of a demanding job with the serenity of achieving personal and professional dreams, symbolized by a warm family moment, inspiring viewers to believe in their own aspirations.",
      es: "Este comercial destaca el impacto del aprendizaje de programación en un hombre que pasa de una vida de estrés y presión a una de éxito y satisfacción. El comercial contrasta el caos de un trabajo exigente con la serenidad de lograr sueños personales y profesionales, simbolizado por un cálido momento familiar, inspirando a los espectadores a creer en sus propias aspiraciones."
    },
    additionalDetails: {
      en: "Director: Theodor Ioniță, Year 2024.",
      es: "Director: Theodor Ioniță, Año 2024."
    },
    isVertical: false
  },
  {
    id: 2,
    title: "Sierra Sailing",
    brand: "Sierra Sailing",
    category: "events",
    thumbnail: "https://imgur.com/joYVZF1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=UP3uGT7gIF0",
    description: {
      en: "This is the aftermovie for Sierra Fest 2022, an intimate sailing & music festival, that brings up the perfect mix of travelling & partying. 7 days of dreamy locations, good music and the right group of friends. I filmed part of the shots in this after-movie.",
      es: "Este es el aftermovie de Sierra Fest 2022, un festival íntimo de navegación y música, que ofrece la mezcla perfecta de viajes y fiesta. 7 días de lugares de ensueño, buena música y el grupo adecuado de amigos. Filmé parte de las tomas en este aftermovie."
    },
    additionalDetails: {
      en: "Year: 2022.",
      es: "Año: 2022."
    },
    isVertical: false
  },
  {
    id: 3,
    title: "CLL - Launch Video",
    brand: "Camera Lucida Lab",
    category: "social",
    thumbnail: "https://imgur.com/ortdnAs.jpg",
    videoUrl: "https://vimeo.com/847088299",
    description: {
      en: "This is an online commercial made for an indie photo lab in Bucharest. We wanted to show the feeling that one has when shooting on film, and the thrill of remembering memories through photos.",
      es: "Este es un comercial en línea realizado para un laboratorio fotográfico independiente en Bucarest. Queríamos mostrar la sensación que uno tiene al disparar en película, y la emoción de recordar memorias a través de fotos."
    },
    additionalDetails: {
      en: "Director: Alex Bodrug. Year: 2023.",
      es: "Director: Alex Bodrug. Año: 2023."
    },
    isVertical: false
  },
  {
    id: 4,
    title: "Flip - EURO 2024",
    brand: "Flip.ro",
    category: "commercial",
    thumbnail: "https://imgur.com/8dDoFMx.jpg",
    videoUrl: "https://www.youtube.com/watch?v=FTZFPDBZVTo",
    description: {
      en: "An energetic commercial created for Flip.ro, celebrating the excitement of EURO 2024. Through dynamic visuals and a spirited tone, the video promotes Flip's sustainable approach to smartphones, aligning the passion for football with smart, eco-friendly choices.",
      es: "Un comercial energético creado para Flip.ro, celebrando la emoción de la EURO 2024. A través de visuales dinámicos y un tono animado, el video promueve el enfoque sostenible de Flip hacia los smartphones, alineando la pasión por el fútbol con elecciones inteligentes y ecológicas."
    },
    additionalDetails: {
      en: "Produced by DSF Media & Rabbit Studio.",
      es: "Producido por DSF Media & Rabbit Studio."
    },
    isVertical: false
  },
  {
    id: 5,
    title: "VireTS",
    brand: "Aditerna",
    category: "product",
    thumbnail: "https://imgur.com/L7JGhgd.jpg",
    videoUrl: "https://www.youtube.com/watch?v=QcxiyCpGk3I",
    description: {
      en: "The goal of the video was to spotlight the advantages and capabilities of the VireTS software solution for military training purposes. This is a project that we produced and filmed, and we're thrilled with the final result.",
      es: "El objetivo del video era destacar las ventajas y capacidades de la solución de software VireTS para fines de entrenamiento militar. Este es un proyecto que produjimos y filmamos, y estamos encantados con el resultado final."
    },
    additionalDetails: {
      en: "",
      es: ""
    },
    isVertical: false
  },
  {
    id: 6,
    title: "CUSTOM CARS GT 2023",
    brand: "Custom Tuning",
    category: "events",
    thumbnail: "https://imgur.com/RVUXK85.jpg",
    videoUrl: "https://www.youtube.com/watch?v=sCN2C6U_1PM",
    description: {
      en: "An adrenaline-filled event video capturing the essence of CUSTOM CARS GT 2023. Shot for Custom Tuning, the piece highlights the craftsmanship, passion, and vibrant community around custom-built vehicles through dynamic cinematography and powerful pacing.",
      es: "Un video de evento lleno de adrenalina que captura la esencia de CUSTOM CARS GT 2023. Filmado para Custom Tuning, la pieza destaca la artesanía, la pasión y la vibrante comunidad alrededor de vehículos personalizados a través de una cinematografía dinámica y un ritmo potente."
    },
    additionalDetails: {
      en: "Produced by Rabbit Studio.",
      es: "Producido por Rabbit Studio."
    },
    isVertical: false
  },
  {
    id: 7,
    title: "Headspace AD",
    brand: "Headspace",
    category: "commercial",
    thumbnail: "https://imgur.com/xJq81q7.jpg",
    videoUrl: "https://vimeo.com/553274938",
    description: {
      en: "We did this project as a spec ad for the guided meditation app \"Headspace\", in collaboration with a wonderful team.",
      es: "Realizamos este proyecto como un anuncio especulativo para la aplicación de meditación guiada \"Headspace\", en colaboración con un equipo maravilloso."
    },
    additionalDetails: {
      en: "Year 2021.",
      es: "Año 2021."
    },
    isVertical: false
  },
  {
    id: 8,
    title: "TMC - Launch Video",
    brand: "TeachMeCode",
    category: "interviews",
    thumbnail: "https://imgur.com/bbaLszi.jpg",
    videoUrl: "https://vimeo.com/902779948",
    description: {
      en: "This series of videos was meant to highlight the advantages of TeachMeCode Institute, the most coding school of Dubai. We filmed each of the instructors and more. This is a project that we finished by collaborating closely with the intern marketing department of the TeachMeCode team.",
      es: "Esta serie de videos estaba destinada a destacar las ventajas del Instituto TeachMeCode, la escuela de codificación más importante de Dubai. Filmamos a cada uno de los instructores y más. Este es un proyecto que terminamos colaborando estrechamente con el departamento de marketing interno del equipo de TeachMeCode."
    },
    additionalDetails: {
      en: "Year 2023.",
      es: "Año 2023."
    },
    isVertical: false
  },
  {
    id: 9,
    title: "Montana Aerospace",
    brand: "UAC Alloy",
    category: "corporate",
    thumbnail: "https://imgur.com/whRlUip.jpg",
    videoUrl: "https://vimeo.com/922010300/001446ad28?share=copy",
    description: {
      en: "I filmed a part of this video, as part of a documentary series showcasing how the aviation sector is working together, on an international scale, to forge a path to net zero. I filmed at Universal Alloy Corporation, part of Montana Aerospace, in Baia Mare, Romania.",
      es: "Filmé una parte de este video, como parte de una serie documental que muestra cómo el sector de la aviación está trabajando en conjunto, a escala internacional, para forjar un camino hacia cero emisiones netas. Filmé en Universal Alloy Corporation, parte de Montana Aerospace, en Baia Mare, Rumania."
    },
    additionalDetails: {
      en: "Year 2023.",
      es: "Año 2023."
    },
    isVertical: false
  },
  {
    id: 10,
    title: "Nadirom Promo",
    brand: "Nadirom",
    category: "realestate",
    thumbnail: "https://imgur.com/CIyDoMK.jpg",
    videoUrl: "https://youtube.com/shorts/Yyvm_sE2V-Q",
    description: {
      en: "A dynamic promotional short created for Nadirom, highlighting the company's real estate solutions with a clean and modern visual approach. Designed for maximum impact on digital platforms, the video emphasizes professionalism, trust, and the quality of their services.",
      es: "Un corto promocional dinámico creado para Nadirom, destacando las soluciones inmobiliarias de la empresa con un enfoque visual limpio y moderno. Diseñado para un impacto máximo en plataformas digitales, el video enfatiza el profesionalismo, la confianza y la calidad de sus servicios."
    },
    additionalDetails: {
      en: "",
      es: ""
    },
    isVertical: true
  },
  {
    id: 11,
    title: "Takeovers Studio Promo",
    brand: "HipHopTakeovers",
    category: "social",
    thumbnail: "https://imgur.com/NsX1T9C.jpg",
    videoUrl: "https://youtube.com/shorts/pL2JjoQF-tc",
    description: {
      en: "A high-energy promotional video crafted for HipHopTakeovers, showcasing the vibrant atmosphere and creative spirit of their new studio. Tailored for social media audiences, the piece combines fast-paced editing with an authentic urban vibe to engage the community.",
      es: "Un video promocional de alta energía elaborado para HipHopTakeovers, mostrando la atmósfera vibrante y el espíritu creativo de su nuevo estudio. Adaptado para audiencias de redes sociales, la pieza combina una edición de ritmo rápido con un auténtico ambiente urbano para involucrar a la comunidad."
    },
    additionalDetails: {
      en: "",
      es: ""
    },
    isVertical: true
  },
  {
    id: 12,
    title: "CLL - Christmas Video",
    brand: "Camera Lucida Lab",
    category: "social",
    thumbnail: "https://imgur.com/YJoBsQd.jpg",
    videoUrl: "https://youtube.com/shorts/IaZD1ujqM-I",
    description: {
      en: "A festive and heartfelt short video produced for Camera Lucida Lab's Christmas campaign. Capturing the warm spirit of the holidays, the piece blends simple storytelling with joyful imagery to create a relatable and engaging seasonal message for their online audience.",
      es: "Un video corto festivo y sincero producido para la campaña navideña de Camera Lucida Lab. Capturando el cálido espíritu de las fiestas, la pieza combina una narración simple con imágenes alegres para crear un mensaje estacional relacionable y atractivo para su audiencia en línea."
    },
    additionalDetails: {
      en: "",
      es: ""
    },
    isVertical: true
  }
];

const PortfolioGrid = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isSpanish = i18n.language === 'es';
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check for hash in URL to open specific project
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const projectId = parseInt(hash.replace('#item-', ''));
      const project = portfolioProjects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsModalOpen(true);
      }
    }
  }, [location.hash]);
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Track category filter in analytics
    trackEvent('portfolio_filter', {
      category: category,
      language: i18n.language
    });
  };
  
  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    
    // Update URL with project hash
    navigate(`#item-${project.id}`);
    
    // Track project view in analytics
    trackEvent('portfolio_view', {
      project_id: project.id,
      project_title: project.title,
      language: i18n.language
    });
  };
  
  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    
    // Remove hash from URL
    navigate(location.pathname, { replace: true });
  };
  
  // Navigate to previous project
  const goToPreviousProject = () => {
    if (!selectedProject) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      const prevProject = filteredProjects[currentIndex - 1];
      setSelectedProject(prevProject);
      navigate(`#item-${prevProject.id}`);
      
      // Track navigation in analytics
      trackEvent('portfolio_navigation', {
        direction: 'previous',
        from_project: selectedProject.id,
        to_project: prevProject.id
      });
    }
  };
  
  // Navigate to next project
  const goToNextProject = () => {
    if (!selectedProject) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      const nextProject = filteredProjects[currentIndex + 1];
      setSelectedProject(nextProject);
      navigate(`#item-${nextProject.id}`);
      
      // Track navigation in analytics
      trackEvent('portfolio_navigation', {
        direction: 'next',
        from_project: selectedProject.id,
        to_project: nextProject.id
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'all'
                ? 'bg-secondary-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {isSpanish ? categoryTranslations.all.es : categoryTranslations.all.en}
          </button>
          
          {Object.keys(categoryTranslations).filter(cat => cat !== 'all').map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isSpanish ? categoryTranslations[category].es : categoryTranslations[category].en}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card overflow-hidden cursor-pointer group"
              onClick={() => openProjectModal(project)}
            >
              <div className={`relative ${project.isVertical ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden`}>
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-primary-300 text-sm font-medium block mb-1">
                      {isSpanish ? categoryTranslations[project.category].es : categoryTranslations[project.category].en}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-600 text-sm font-medium">
                    {isSpanish ? categoryTranslations[project.category].es : categoryTranslations[project.category].en}
                  </span>
                  <span className="text-gray-500 text-sm">{project.brand}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {isSpanish ? project.description.es : project.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation arrows */}
              <button 
                onClick={goToPreviousProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Previous project"
                disabled={filteredProjects.findIndex(p => p.id === selectedProject.id) === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={goToNextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                aria-label="Next project"
                disabled={filteredProjects.findIndex(p => p.id === selectedProject.id) === filteredProjects.length - 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className={`grid ${selectedProject.isVertical ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
                {/* Video */}
                <div className={`${selectedProject.isVertical ? 'aspect-[9/16] md:h-auto' : 'aspect-video'} w-full bg-black`}>
                  <ReactPlayer
                    url={selectedProject.videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      },
                      vimeo: {
                        playerOptions: { title: true, byline: true, portrait: true }
                      }
                    }}
                  />
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-primary-600 text-sm font-medium">
                      {isSpanish ? categoryTranslations[selectedProject.category].es : categoryTranslations[selectedProject.category].en}
                    </span>
                    <span className="text-gray-500 text-sm">{selectedProject.brand}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-700 mb-6">
                    {isSpanish ? selectedProject.description.es : selectedProject.description.en}
                  </p>
                  {selectedProject.additionalDetails && (
                    <p className="text-gray-500 text-sm italic">
                      {isSpanish ? selectedProject.additionalDetails.es : selectedProject.additionalDetails.en}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
