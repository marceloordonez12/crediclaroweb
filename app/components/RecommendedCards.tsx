'use client';

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const StarIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="white">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface ListProduct {
  emoji: string;
  name: string;
  meta: string;
  probabilityLabel: string;
  probabilityType: 'orange' | 'green';
  tagLabel: string;
}

const listProducts: ListProduct[] = [
  {
    emoji: '🚗',
    name: 'Credito con Garantia Auto',
    meta: 'Hasta $150,000 MXN | Respuesta en 48h',
    probabilityLabel: 'Media probabilidad',
    probabilityType: 'orange',
    tagLabel: 'Requiere auto',
  },
  {
    emoji: '📋',
    name: 'Prestamo Sin Buro',
    meta: 'Hasta $45,000 MXN | Respuesta en 24h',
    probabilityLabel: 'Alta probabilidad',
    probabilityType: 'green',
    tagLabel: 'Sin consulta buro',
  },
  {
    emoji: '👴',
    name: 'Credito Pensionados IMSS',
    meta: 'Hasta $80,000 MXN | Respuesta en 24h',
    probabilityLabel: 'Alta probabilidad',
    probabilityType: 'green',
    tagLabel: 'Solo pensionados',
  },
];

export default function RecommendedCards() {
  return (
    <section className="py-[60px] bg-bg-page">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="font-poppins text-[33px] font-bold text-navy mb-1">
            Opciones recomendadas para ti
          </h2>
          <p className="font-inter text-[14px] text-gray-light">
            Basado en tu busqueda
          </p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Featured card */}
          <div className="bg-white border-2 border-[rgba(46,170,107,0.3)] rounded-[20px] w-[420px] flex-shrink-0 overflow-hidden">
            {/* Card header */}
            <div className="bg-green rounded-t-[20px] h-12 flex items-center gap-2.5 px-5">
              <StarIcon />
              <span className="font-inter text-[14px] font-bold text-white">
                MEJOR OPCION PARA TI
              </span>
            </div>

            {/* Card body */}
            <div className="p-5">
              {/* Product logo */}
              <div className="w-[60px] h-[60px] bg-[#f5f7fa] rounded-xl mb-3 flex items-center justify-center text-[22px]">
                🏦
              </div>

              <h3 className="font-poppins text-[18px] font-bold text-navy mb-0.5">
                Prestamo Personal Plus
              </h3>
              <p className="font-inter text-[13px] text-gray-light mb-3.5">
                Financiera Credimex
              </p>

              <p className="font-inter text-[14px] font-semibold text-gray-text">
                Monto estimado aprobado
              </p>
              <p className="font-poppins text-[26px] font-bold text-navy my-0.5">
                $75,000 MXN
              </p>
              <p className="font-inter text-[12px] text-gray-light mb-3.5">
                Plazo: 12 a 48 meses
              </p>

              {/* Tags */}
              <div className="flex gap-2.5 flex-wrap mb-3.5">
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 h-8 font-inter text-[13px] font-semibold"
                  style={{ background: 'rgba(46,170,107,0.1)', color: '#2eaa6b' }}
                >
                  <span className="w-2 h-2 rounded-full bg-green" />
                  Alta probabilidad
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 h-8 font-inter text-[13px] font-semibold"
                  style={{ background: 'rgba(26,58,92,0.06)', color: '#5a6a7a' }}
                >
                  ⏱ 24h respuesta
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-2 font-inter text-[13px] text-gray-text">
                  <span className="text-green text-[14px]">✔</span>
                  Sin aval requerido
                </div>
                <div className="flex items-center gap-2 font-inter text-[13px] text-gray-text">
                  <span className="text-green text-[14px]">✔</span>
                  Aprobacion en linea
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={() => window.open('https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20el%20Prestamo%20Personal%20Plus', '_blank')}
                className="flex items-center justify-center gap-2.5 w-full bg-green hover:bg-green-dark border-0 rounded-xl h-[51px] text-white font-inter text-[16px] font-bold cursor-pointer transition-colors"
              >
                <WaIcon size={22} />
                Hablar con asesor
              </button>
            </div>
          </div>

          {/* List cards */}
          <div className="flex-1 flex flex-col gap-4">
            {listProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-[rgba(26,58,92,0.08)] rounded-2xl py-5 px-6 flex items-center gap-4"
              >
                {/* Logo */}
                <div className="w-14 h-14 bg-[#f5f7fa] rounded-xl flex-shrink-0 flex items-center justify-center text-[20px]">
                  {product.emoji}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4 className="font-poppins text-[16px] font-semibold text-navy mb-0.5">
                    {product.name}
                  </h4>
                  <p className="font-inter text-[14px] text-gray-text mb-2">
                    {product.meta}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-[6px] py-1 px-2.5 font-inter text-[12px]"
                      style={
                        product.probabilityType === 'orange'
                          ? { background: 'rgba(245,121,65,0.1)', color: '#f57941' }
                          : { background: 'rgba(46,170,107,0.1)', color: '#2eaa6b' }
                      }
                    >
                      {product.probabilityLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-[#f5f7fa] rounded-[6px] py-1 px-2.5 font-inter text-[12px] text-gray-text">
                      {product.tagLabel}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}`,
                      '_blank'
                    )
                  }
                  className="flex items-center gap-2 bg-navy hover:bg-navy-dark border-0 rounded-lg h-9 px-4 text-white font-inter text-[13px] font-semibold cursor-pointer whitespace-nowrap flex-shrink-0 transition-colors"
                >
                  <WaIcon size={16} />
                  Ver por WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
