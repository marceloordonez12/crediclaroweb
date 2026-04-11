interface Testimonial {
  quote: string;
  name: string;
  label: string;
  avatarLetter: string;
  avatarBg: string;
  avatarColor: string;
  approved: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Me habian rechazado en 3 bancos. Aqui me dijeron exactamente donde aplicar y en 24 horas ya tenia mi credito aprobado. El asesor fue super paciente y me explico todo."',
    name: 'Maria Gonzalez',
    label: 'Prestamo personal | CDMX',
    avatarLetter: 'M',
    avatarBg: '#e8f5e9',
    avatarColor: '#2eaa6b',
    approved: '✔ $65,000 aprobados',
  },
  {
    quote:
      '"Soy pensionado y pense que nadie me daria credito. Me conectaron con una financiera especial para pensionados y consegui $80,000 con excelente tasa. Muy agradecido."',
    name: 'Roberto Martinez',
    label: 'Credito pensionados | GDL',
    avatarLetter: 'R',
    avatarBg: '#fff3e0',
    avatarColor: '#f57941',
    approved: '✔ $80,000 aprobados',
  },
  {
    quote:
      '"Use mi carro como garantia y me dieron el doble de lo que me ofrecian en otros lados. El proceso fue super rapido y sigo usando mi auto normalmente. Excelente servicio."',
    name: 'Carlos Hernandez',
    label: 'Prestamo con garantia | MTY',
    avatarLetter: 'C',
    avatarBg: '#e0f2f1',
    avatarColor: '#2eaa6b',
    approved: '✔ $150,000 aprobados',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-page">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <h2 className="font-poppins text-[36px] font-bold text-navy mb-1.5">
          Historias de exito
        </h2>
        <p className="font-inter text-[18px] text-gray-text mb-10">
          Miles de mexicanos ya encontraron su credito ideal
        </p>

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[rgba(26,58,92,0.08)] rounded-[20px] p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#f59e0b] text-[20px]">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="font-inter text-[16px] text-[#3a4a5a] leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-[#f0f2f5]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[22px] font-bold flex-shrink-0"
                  style={{ background: t.avatarBg, color: t.avatarColor }}
                >
                  {t.avatarLetter}
                </div>
                <div>
                  <div className="font-inter text-[16px] font-bold text-navy">
                    {t.name}
                  </div>
                  <div className="font-inter text-[13px] text-gray-light">
                    {t.label}
                  </div>
                </div>
              </div>

              {/* Approved badge */}
              <div>
                <span
                  className="inline-flex items-center gap-1.5 rounded-lg py-1 px-3 font-inter text-[13px] font-semibold"
                  style={{ background: 'rgba(46,170,107,0.1)', color: '#2eaa6b' }}
                >
                  {t.approved}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
