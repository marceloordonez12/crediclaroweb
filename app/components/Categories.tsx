interface Category {
  emoji: string;
  iconBg: string;
  title: string;
  description: string;
  linkColor: string;
}

const categories: Category[] = [
  {
    emoji: '💵',
    iconBg: 'rgba(46,170,107,0.1)',
    title: 'Prestamo Personal',
    description: 'Sin garantia, para cualquier necesidad. Montos desde $5,000 hasta $300,000.',
    linkColor: '#2eaa6b',
  },
  {
    emoji: '🚗',
    iconBg: 'rgba(245,121,65,0.1)',
    title: 'Prestamo con Garantia',
    description: 'Usa tu auto como garantia y sigue usandolo. Tasas mas bajas.',
    linkColor: '#f57941',
  },
  {
    emoji: '🚙',
    iconBg: 'rgba(26,58,92,0.08)',
    title: 'Credito Automotriz',
    description: 'Compra tu auto nuevo o seminuevo con las mejores condiciones.',
    linkColor: '#1a3a5c',
  },
  {
    emoji: '💳',
    iconBg: 'rgba(99,102,241,0.1)',
    title: 'Tarjetas de Credito',
    description: 'Encuentra la tarjeta ideal segun tu perfil y necesidades.',
    linkColor: '#6366f1',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-bg-page">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <h2 className="font-poppins text-[36px] font-bold text-navy mb-1.5">
          Creditos para cada necesidad
        </h2>
        <p className="font-inter text-[18px] text-gray-text mb-10">
          Explora por categoria y encuentra la opcion ideal para ti
        </p>

        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-[rgba(26,58,92,0.08)] rounded-[20px] p-7 flex flex-col gap-3.5 cursor-pointer transition-shadow hover:shadow-[0_8px_32px_rgba(26,58,92,0.12)]"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-[28px]"
                style={{ background: cat.iconBg }}
              >
                {cat.emoji}
              </div>

              {/* Title */}
              <h3 className="font-poppins text-[15px] font-bold text-navy">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[12px] text-gray-text leading-relaxed flex-1">
                {cat.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="flex items-center gap-1.5 font-inter text-[15px] font-semibold no-underline"
                style={{ color: cat.linkColor }}
              >
                Ver opciones &nbsp;→
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
