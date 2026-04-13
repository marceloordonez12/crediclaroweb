'use client';

import { useState } from 'react';

const chips = ['Sin aval', 'Sin buro', 'Soy pensionado', 'Tengo auto', 'Urgente'];

export default function Hero() {
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('Ciudad de Mexico');
  const [activeChip, setActiveChip] = useState('Sin aval');

  const handleSearch = () => {
    console.log('Búsqueda:', { tipo, monto, plazo, filtro: activeChip });
  };

  return (
    <section
      className="relative overflow-hidden py-20 pb-16"
      style={{
        background: 'linear-gradient(#ffffff 0%, #e8f5e9 50%, #fff3e0 100%)',
      }}
    >
      {/* Background decorative circles */}
      <div className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(46,170,107,0.08)' }} />
      <div className="absolute bottom-16 right-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'rgba(245,121,65,0.06)' }} />

      <div className="relative w-full max-w-[1280px] mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-[18px] px-4 py-2 mb-6"
          style={{ background: 'rgba(46,170,107,0.1)' }}>
          <span className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
          <span className="font-inter text-[13px] font-semibold text-green">
            +5,000 clientes asesorados en 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-poppins text-[52px] font-bold text-navy leading-[1.15] max-w-[900px] mb-5">
          Encuentra el credito que buscas aquí
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-[18px] text-gray-text max-w-[700px] leading-relaxed mb-10">
          Comparamos entre multiples financieras y te asesoramos gratis para encontrar la mejor opción segun tu perfil.
        </p>

        {/* Search box */}
        <div className="bg-white border border-[rgba(26,58,92,0.08)] rounded-3xl p-6 max-w-[1000px]">
          {/* Fields row */}
          <div className="flex gap-4 items-stretch mb-5">
            {/* Tipo de credito */}
            <div className="bg-[#f5f7fa] rounded-xl px-4 py-3 flex-1 min-w-0">
              <label className="block font-inter text-[10px] font-semibold text-navy mb-1 uppercase tracking-wide">
                Tipo de credito
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-inter text-[14px] text-[#475569] cursor-pointer appearance-none"
              >
                <option value="">Selecciona una opcion</option>
                <option value="personal">Prestamo Personal</option>
                <option value="garantia">Prestamo con Garantia</option>
                <option value="automotriz">Credito Automotriz</option>
                <option value="tarjeta">Tarjeta de Credito</option>
              </select>
            </div>

            {/* Monto */}
            <div className="bg-[#f5f7fa] rounded-xl px-4 py-3 flex-1 min-w-0">
              <label className="block font-inter text-[10px] font-semibold text-navy mb-1 uppercase tracking-wide">
                Monto que necesitas
              </label>
              <input
                type="text"
                placeholder="$50,000 - $100,000"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-inter text-[14px] text-[#475569] placeholder:text-[#475569]"
              />
            </div>

            {/* Ciudad */}
            <div className="bg-[#f5f7fa] rounded-xl px-4 py-3 flex-1 min-w-0">
              <label className="block font-inter text-[10px] font-semibold text-navy mb-1 uppercase tracking-wide">
                Ciudad
              </label>
              <select
                value={plazo}
                onChange={(e) => setPlazo(e.target.value)}
                className="w-full bg-transparent border-0 outline-none font-inter text-[14px] text-[#475569] cursor-pointer appearance-none"
              >
                <option value="">Selecciona un estado</option>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Ciudad de Mexico">Ciudad de Mexico</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de Mexico">Estado de Mexico</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacan">Michoacan</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo Leon">Nuevo Leon</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Queretaro">Queretaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosi">San Luis Potosi</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Yucatan">Yucatan</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </div>

            {/* Search button */}
            <button
              onClick={handleSearch}
              className="bg-orange hover:bg-orange-dark border-0 rounded-xl h-[60px] px-7 text-white font-inter text-[15px] font-bold cursor-pointer whitespace-nowrap self-stretch transition-colors flex-shrink-0"
            >
              Buscar credito
            </button>
          </div>

          {/* Quick filters */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-inter text-[14px] font-medium text-gray-text">
              Filtros rapidos:
            </span>
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveChip(chip)}
                className={`border rounded-[18px] h-9 px-4 font-inter text-[13px] cursor-pointer transition-colors
                  ${activeChip === chip
                    ? 'bg-[#e8f5e9] border-[#e8f5e9] text-navy'
                    : 'bg-transparent border-[#dde3ea] text-gray-text hover:border-green'
                  }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
