import React, { useState } from 'react';
import { ChevronRight, Users, BookOpen, Award, Target, Star, Menu, X } from 'lucide-react';
import frontimg from "../assets/Group-123.png"; // Adjust the path as necessary
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import arrow3 from "../assets/arrow3.png";
import arrow4 from "../assets/arrow4.png";
import arrow5 from "../assets/arrow5.png";
import arrowR1 from "../assets/arrowR1.png";
import footer1 from "../assets/footer-mobile.png";
import footer2 from "../assets/footer-desktop.png";
import connectionline from "../assets/connection-line.png";
import SwiperSlider from './SwipeSlides';
import logo from "../assets/logo.png"; 


export default function HomePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const steps = [
    { id: 1, title: "Digitale Theorie mit KI und Echtzeit-Feedback", description: "Intelligente Lernplattform" },
    { id: 2, title: "Identifizierungs-verfahren über Vertrag", description: "Sichere Verifizierung" },
    { id: 3, title: "Voll digital DSGVO-konform", description: "Datenschutz garantiert" },
    { id: 4, title: "Wissenschaftlich begleitet", description: "Bewährte Methoden" },
    { id: 5, title: "Kooperation für zertifizierte Partner", description: "Qualitätsgarantie" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="relative flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="DriveHero Logo" className="h-8" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Fallstudien</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Investor Relations</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Karriere</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">News & Insights</a>
          <div className="flex items-center space-x-2">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' viewBox='0 0 24 18'%3E%3Cpath fill='%23000' d='M0 0h8v6H0zm0 12h8v6H0zm8-12h8v6H8zm0 12h8v6H8zm8-12h8v6h-8zm0 12h8v6h-8z'/%3E%3Cpath fill='%23ff0' d='M0 6h8v6H0zm8 0h8v6H8zm8 0h8v6h-8z'/%3E%3C/svg%3E" alt="German flag" className="w-6 h-4" />
            <span className="text-sm text-gray-600">DE</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Login
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Fallstudien</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Investor Relations</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Karriere</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">News & Insights</a>
              <div className="flex items-center space-x-2 py-2">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='18' viewBox='0 0 24 18'%3E%3Cpath fill='%23000' d='M0 0h8v6H0zm0 12h8v6H0zm8-12h8v6H8zm0 12h8v6H8zm8-12h8v6h-8zm0 12h8v6h-8z'/%3E%3Cpath fill='%23ff0' d='M0 6h8v6H0zm8 0h8v6H8zm8 0h8v6h-8z'/%3E%3C/svg%3E" alt="German flag" className="w-6 h-4" />
                <span className="text-sm text-gray-600">DE</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors w-full">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-500">Fallstudie 2025:</span><br />
                Die neue Intelligenz in der<br />
                Fahrausbildung
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ein wissenschaftlich begründetes Pilotprogramm für Fahrschulen, Fahrschüler
                und akademische Partnerinstitutionen.
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg">
              <span>Jetzt registrieren</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10    ">
              <img src={frontimg} />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      <div
        className="bg-white  p-6 md:p-8 shadow-lg min-h-[500px]"
      >
        <div
          className="rounded-full p-8 md:p-8 text-white text-center mb-8 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #2196F3 0%, #00BCD4 100%)'
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Jetzt Teil des digitalen Pilotprogramms werden
          </h2>
          <p className="text-sm md:text-base leading-relaxed opacity-95">
            Die DriveHero-Fallstudie 2025 ist ein digital begleitetes Pilotprogramm zur Weiterentwicklung der Theorieausbildung.
            Mit KI, Echtzeit-Feedback und DSGVO-konformer Verifikation entsteht ein modernes Lernmodell – in Zusammenarbeit mit Fahrschulen und
            wissenschaftlichen Partnerinstitutionen.
          </p>
        </div>

        {/* Steps Flow */}
        {/* Desktop/Tablet View - Hidden on mobile */}
        <div className="relative top-[40px] md:top-[60px] hidden md:block">
          <img src={connectionline} className='absolute top-[15px]' />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {[
              { label: "Digitale Theorie mit KI und Echtzeit-Feedback", isTop: true, image: arrow1 },
              { label: "Identitätsverifikation über VeriGo", isTop: false, image: arrow2 },
              { label: "Identitätsverifikation über VeriGo", isTop: true, image: arrow3 },
              { label: "Wissenschaftlich begleitet", isTop: false, image: arrow4 },
              { label: "Kostenfrei für registrierte Partner", isTop: true, image: arrow5 }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {step.isTop && (
                  <div
                    className={`text-sm font-semibold leading-tight ${step.isTop ? 'absolute top-[-40px] left-[10px]' : ''}`}
                    style={{ color: '#2196F3' }}
                  >
                    {step.label}
                  </div>
                )}
                <img src={step.image} className={`${step.isTop ? "absolute top-[-40px]" : ""}`} />
                {!step.isTop && (
                  <div
                    className={`text-sm font-semibold leading-tight ${step.isTop ? 'mt-0' : 'text-start'}`}
                    style={{ color: '#2196F3' }}
                  >
                    {step.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Hidden on desktop/tablet */}
        <div className="relative top-[40px] block md:hidden">
          <div className="grid grid-cols-1 gap-8 relative z-10 mb-4">
            {[
              { label: "Digitale Theorie mit KI und Echtzeit-Feedback", image: arrowR1 },
              { label: "Identitätsverifikation über VeriGo", image: arrowR1 },
              { label: "Identitätsverifikation über VeriGo", image: arrowR1 },
              { label: "Wissenschaftlich begleitet", image: arrowR1 },
              { label: "Kostenfrei für registrierte Partner", image: arrowR1 }
            ].map((step, index) => (
              <div key={index} className="text-center relative flex flex-row items-center">
                <img src={step.image} className='p-4 w-[200px]' />
                <div
                  className={`text-xl font-semibold leading-tight text-center`}
                  style={{ color: '#2196F3' }}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>


      {/* Target Audience Section */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-r from-cyan-100 via-blue-50 to-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(71,187,228)]">
                Für wen ist das Programm geeignet?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Das Pilotprogramm richtet sich an zentrale Akteure der Verkehrsausbildung:
                Fahrschulen, ihre Fahrlehrer und interessierte Partner mit unterschiedliche
                Stakeholder. Jede Zielgruppe profitiert auf unterschiedliche Weise von der
                wissenschaftlich fundierten und technologisch unterstützten Fahrausbildung.
              </p>
            </div>
            <div className="w-full">
              <SwiperSlider />
            </div>
          </div>
        </div>
      </section>
      <footer className=" text-white">
        <img src={footer1} className='block md:hidden w-full'/>
        <img src={footer2} className='hidden md:block w-full'/>
      </footer>
    </div>
  );
}