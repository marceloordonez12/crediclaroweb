'use client';

import { useState } from 'react';

const WaIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Advisory() {
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [monto, setMonto] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!nombre.trim() || !whatsapp.trim() || !monto) {
      setError('Por favor completa todos los campos antes de continuar.');
      return;
    }
    setError('');
    const message = encodeURIComponent(
      `Hola! Soy ${nombre}, mi número es ${whatsapp} y necesito asesoría para un crédito de ${monto}.`
    );
    window.open(`https://wa.me/5218134304954?text=${message}`, '_blank');
  };

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(#e8f5e9 0%, #ffffff 50%, #fff3e0 100%)' }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-0 left-0 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'rgba(46,170,107,0.08)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'rgba(245,121,65,0.06)' }}
      />

      <div className="relative w-full max-w-[1280px] mx-auto px-6 flex gap-20 items-center">
        {/* Left side */}
        <div className="flex-1">
          {/* Badge */}
          <div
            className="inline-flex items-center rounded-2xl px-3.5 py-1.5 mb-5"
            style={{ background: 'rgba(245,121,65,0.1)' }}
          >
            <span className="font-inter text-[12px] font-bold text-orange uppercase tracking-wide">
              ASESORIA PERSONALIZADA
            </span>
          </div>

          <h2 className="font-poppins text-[40px] font-bold text-navy leading-[1.2] mb-5">
            No sabes que credito pedir? Te asesoramos gratis
          </h2>

          <p className="font-inter text-[18px] text-gray-text leading-relaxed mb-6">
            Dinos tu situación y te recomendamos las opciones donde tienes mayor probabilidad de aprobación. Sin costo, sin compromiso.
          </p>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 font-inter text-[15px] text-gray-text">
              <span className="text-green text-[18px]">✔</span>
              Respuesta en minutos
            </div>
            <div className="flex items-center gap-2.5 font-inter text-[15px] text-gray-text">
              <span className="text-green text-[18px]">✔</span>
              100% confidencial
            </div>
            <div className="flex items-center gap-2.5 font-inter text-[15px] text-gray-text">
              <span className="text-green text-[18px]">✔</span>
              Sin compromiso
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-[rgba(26,58,92,0.08)] rounded-3xl p-8 w-[480px] flex-shrink-0">
          <h3 className="font-poppins text-[20px] font-bold text-navy mb-5">
            Recibe tu recomendacion
          </h3>

          {/* Nombre */}
          <div className="mb-4">
            <label className="block font-inter text-[10px] font-semibold text-navy mb-1.5 uppercase">
              Tu nombre
            </label>
            <input
              type="text"
              placeholder="Ej: Juan Perez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-[#f5f7fa] border-0 rounded-xl h-9 px-3.5 font-inter text-[14px] text-[#475569] outline-none placeholder:text-[#94a3b8]"
            />
          </div>

          {/* WhatsApp */}
          <div className="mb-4">
            <label className="block font-inter text-[10px] font-semibold text-navy mb-1.5 uppercase">
              Tu WhatsApp
            </label>
            <input
              type="text"
              placeholder="Ej: 55 1234 5678"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full bg-[#f5f7fa] border-0 rounded-xl h-9 px-3.5 font-inter text-[14px] text-[#475569] outline-none placeholder:text-[#94a3b8]"
            />
          </div>

          {/* Monto */}
          <div className="mb-4">
            <label className="block font-inter text-[10px] font-semibold text-navy mb-1.5 uppercase">
              Monto aproximado
            </label>
            <select
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="w-full bg-[#f5f7fa] border-0 rounded-xl h-9 px-3.5 font-inter text-[14px] text-[#475569] outline-none appearance-none cursor-pointer"
            >
              <option value="">Selecciona un rango</option>
              <option value="$5,000 - $20,000">$5,000 - $20,000</option>
              <option value="$20,000 - $50,000">$20,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="Mas de $100,000">Mas de $100,000</option>
            </select>
          </div>

          {/* Error message */}
          {error && (
            <p className="font-inter text-[12px] text-red-500 mb-3">{error}</p>
          )}

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2.5 w-full bg-green hover:bg-green-dark border-0 rounded-[14px] h-[42px] text-white font-inter text-[15px] font-bold cursor-pointer mb-2 transition-colors"
          >
            <WaIcon size={24} />
            Recibir por WhatsApp
          </button>

          <p className="font-inter text-[10px] text-gray-light text-center">
            Al enviar aceptas nuestro aviso de privacidad
          </p>
        </div>
      </div>
    </section>
  );
}
