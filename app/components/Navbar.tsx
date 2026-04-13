'use client';

import { useState } from 'react';
import Image from 'next/image';

const WaIcon = ({ size = 20, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-20 w-full flex items-center sticky top-0 z-50 shadow-[0_1px_0_rgba(26,58,92,0.08)]">
      <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center gap-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline flex-shrink-0">
          <Image
            src="/logo.png"
            alt="CrediClaro logo"
            width={48}
            height={48}
            className="rounded-[10px]"
          />
          <div className="flex">
            <span className="font-poppins text-[22px] font-bold text-navy">Credi</span>
            <span className="font-poppins text-[22px] font-bold text-orange">Claro</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 flex-1">
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green transition-colors">
            Inicio
          </a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green transition-colors">
            Categorias
          </a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green transition-colors">
            Como Funciona
          </a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green transition-colors">
            Nosotros
          </a>
        </div>

        {/* CTA button */}
        <button
          onClick={() => window.open('https://wa.me/5218134304954', '_blank')}
          className="hidden md:flex items-center gap-2 bg-green hover:bg-green-dark text-white border-0 rounded-3xl h-12 px-6 font-inter text-[15px] font-semibold cursor-pointer whitespace-nowrap transition-colors flex-shrink-0"
        >
          <WaIcon size={20} color="white" />
          Hablar con asesor
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-navy"></span>
          <span className="block w-6 h-0.5 bg-navy"></span>
          <span className="block w-6 h-0.5 bg-navy"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 gap-4 md:hidden z-50">
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green">Inicio</a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green">Categorias</a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green">Como Funciona</a>
          <a href="#" className="font-inter text-[15px] font-medium text-navy hover:text-green">Nosotros</a>
          <button
            onClick={() => window.open('https://wa.me/5218134304954', '_blank')}
            className="flex items-center justify-center gap-2 bg-green hover:bg-green-dark text-white border-0 rounded-3xl h-12 px-6 font-inter text-[15px] font-semibold cursor-pointer transition-colors"
          >
            <WaIcon size={20} color="white" />
            Hablar con asesor
          </button>
        </div>
      )}
    </nav>
  );
}
