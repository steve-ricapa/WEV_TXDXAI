import React from 'react';

export default function LandingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#005B99] via-[#007AB8] to-[#005B99] text-white scroll-smooth">
      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#FFD166]">TxDxIA</div>
        <nav className="space-x-8">
          <a href="#product" className="hover:text-[#FFD166]">Product</a>
          <a href="#features" className="hover:text-[#FFD166]">Features</a>
          <a href="#marketplace" className="hover:text-[#FFD166]">Prices</a>
          <a href="#company" className="hover:text-[#FFD166]">Company</a>
        </nav>
        <a
          href="/login"
          className="px-4 py-2 border border-[#FFD166] rounded hover:bg-[#FFD166] hover:text-gray-900 transition"
        >
          Log in &rarr;
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mt-24 text-center">
        <h1 className="text-6xl font-extrabold leading-tight text-[#FFD166]">
          Data to enrich your <br /> online business
        </h1>
        <p className="mt-6 text-xl text-[#E0F7FA]">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="/register"
            className="px-10 py-4 bg-[#007AB8] rounded-lg font-semibold text-lg hover:bg-[#005B99] transition"
          >
            Get started
          </a>
          <a
            href="https://www.txdxsecure.com"
            className="px-10 py-4 flex items-center space-x-2 text-lg hover:text-[#005B99] transition"
          >
            <span>Learn more</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-6 mt-24 text-center">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://img.freepik.com/vector-gratis/panel-usuario-panel-infografia-plantilla_23-2148378206.jpg?semt=ais_hybrid&w=740"
            alt="User Panel Infographic"
            className="w-full object-cover"
          />
        </div>

        {/* Core Services - Botones flotantes */}
        <div className="mt-20 py-16 text-white text-center">
          <h2 className="text-7xl font-extrabold tracking-wide mb-12 text-[#FFD166]">SERVICES</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
            <a href="#architect" className="p-6 rounded-lg transition transform hover:scale-110 hover:bg-[#fff782]">
              <svg className="w-12 h-12 mx-auto text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 0L8 12m4-4l4 4" />
              </svg>
              <p className="mt-4 font-bold text-lg tracking-wide">TxDxSecure</p>
            </a>
            <a href="#devnet" className="p-6 rounded-lg transition transform hover:scale-110 hover:bg-[#fff782]">
              <svg className="w-12 h-12 mx-auto text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 108 0H3z" />
              </svg>
              <p className="mt-4 font-bold text-lg tracking-wide">XOC</p>
            </a>
            <a href="#cyberauth" className="p-6 rounded-lg transition transform hover:scale-110 hover:bg-[#fff782]">
              <svg className="w-12 h-12 mx-auto text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <p className="mt-4 font-bold text-lg tracking-wide">Cibersecurity News</p>
            </a>
            <a href="#deployment" className="p-6 rounded-lg transition transform hover:scale-110 hover:bg-[#fff782]">
              <svg className="w-12 h-12 mx-auto text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 100-6 3 3 0 000 6zM4 21v-3a4 4 0 014-4h12" />
              </svg>
              <p className="mt-4 font-bold text-lg tracking-wide">TxDx News</p>
            </a>
          </div>
        </div>
      </section>
      <section id="architect" className="bg-[#005B99] py-20 px-8 md:px-20 text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Video de TxDxSecure */}
    <div className="w-full md:w-2/3">
      <iframe
        className="w-full h-96 md:h-[500px] rounded-lg"
        src="https://www.youtube.com/embed/MA_EnKBjqZk"
        title="TxDxSecure Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="w-full md:w-1/3">
      <h3 className="text-2xl font-bold mb-4 text-[#FFD166]">TxDxSecure</h3>
      <p className="mb-4 text-lg text-[#E0F7FA]">
        Somos una empresa peruana especializada en arquitecturas 
        de red digitales seguras, con el objetivo de facilitar y automatizar
        la T&I/OT en las empresas. Contamos con
        profesionales +20 años de experiencia en el mercado, somos arquitectos
        diseñando desde el producto adecuado acorde a las necesidades de negocio,
        y su entorno actual, hacia soluciones tecnológicas y arquitecturas
        completas que serán plataformas de producción alineadas a los indicadores de negocios. 
      </p>
    </div>
  </div>
</section>
      <section id="devnet" className="bg-gray-900 py-20 px-8 md:px-20 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de @DEVNET */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              className="w-full h-full rounded-lg"
              src="https://image.shutterstock.com/image-photo/tech-overlay-concept-digital-computer-260nw-1681224819.jpg"
              alt="Devnet Image"
            />
          </div>
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD166]">@DEVNET</h3>
            <p className="mb-4 text-lg text-[#E0F7FA]">
              Servicios de Arquitecturas que se integran a la red en el panorama de la tecnología programable,
              llegando con estas habilidades a que pueda acelerar el negocio, catalizar nuevas aplicaciones
              y llevando las prácticas de SecDevOps a las redes, permitiendo a la industria aprovechar al máximo
              las capacidades de la nueva red para acelerar el negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Sección para @CYBERAUTH (Imagen Izquierda - Solo Imagen) */}
      <section id="architect" className="bg-[#005B99] py-20 px-8 md:px-20 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de @CYBERAUTH */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full rounded-lg"
              src="XOC.png"
              alt="Cyberauth Image"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFD166]">@CYBERAUTH</h3>
            <p className="mb-4 text-lg text-[#E0F7FA]">
              Seguridad en la transformación digital, todos los elementos que intervienen en la red es necesario
              asegurarla como plataforma e infraestructura, aplicamos metodologías y frameworks de seguridad,
              y automatizamos la seguridad, programándola para que se defiendan en forma integral y autónoma contra ataques
              informáticos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección para @DEPLOYMENT (Imagen Derecha - Solo Imagen) */}
      <section id="deployment" className="bg-gray-900 py-20 px-8 md:px-20 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de @DEPLOYMENT */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              className="w-full h-full rounded-lg"
              src="https://image.shutterstock.com/free-photo/cloud-deployment-concept-260nw-1549743511.jpg"
              alt="Deployment Image"
            />
          </div>
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD166]">@DEPLOYMENT</h3>
            <p className="mb-4 text-lg text-[#E0F7FA]">
              Conjunto de servicios para implementar soluciones IT en plataformas públicas o privadas de forma escalable y segura.
              Aceleramos el tiempo de despliegue y aseguramos la integridad del sistema.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}