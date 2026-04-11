interface Step {
  number: string;
  bgColor: string;
  title: string;
  description: string;
  badgeText: string;
  badgeVariant: 'green' | 'orange' | 'navy';
  showArrow: boolean;
}

const steps: Step[] = [
  {
    number: '1',
    bgColor: '#2eaa6b',
    title: 'Cuentanos tu situacion',
    description:
      'Respondenos unas preguntas simples sobre tu perfil y cuanto necesitas. Todo por WhatsApp.',
    badgeText: '⏱ 2 minutos',
    badgeVariant: 'green',
    showArrow: true,
  },
  {
    number: '2',
    bgColor: '#f57941',
    title: 'Te recomendamos opciones',
    description:
      'Analizamos tu perfil entre 30+ financieras y te mostramos donde tienes mayor probabilidad.',
    badgeText: '⚡ Instantaneo',
    badgeVariant: 'orange',
    showArrow: true,
  },
  {
    number: '3',
    bgColor: '#1a3a5c',
    title: 'Recibe tu dinero',
    description:
      'Te acompanamos en todo el proceso hasta que tengas tu credito aprobado. Sin costo.',
    badgeText: '✔ 24-72 horas',
    badgeVariant: 'navy',
    showArrow: false,
  },
];

const badgeStyles: Record<string, string> = {
  green: 'bg-[rgba(46,170,107,0.1)] text-[#2eaa6b]',
  orange: 'bg-[rgba(245,121,65,0.1)] text-[#f57941]',
  navy: 'bg-[rgba(26,58,92,0.1)] text-[#1a3a5c]',
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-bg-page">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <h2 className="font-poppins text-[36px] font-bold text-navy mb-1.5">
          Como funciona CrediClaro
        </h2>
        <p className="font-inter text-[18px] text-gray-text mb-14">
          3 pasos simples para encontrar tu credito ideal
        </p>

        <div className="flex items-start gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 relative">
              {/* Arrow */}
              {step.showArrow && (
                <span className="absolute right-[-26px] top-5 text-[36px] text-[rgba(26,58,92,0.15)] pointer-events-none">
                  →
                </span>
              )}

              {/* Number circle */}
              <div
                className="w-20 h-20 rounded-[40px] flex items-center justify-center mb-6"
                style={{ background: step.bgColor }}
              >
                <span className="font-poppins text-[30px] font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="font-poppins text-[22px] font-bold text-navy mb-3">
                {step.title}
              </h3>

              <p className="font-inter text-[15px] text-gray-text leading-relaxed mb-4">
                {step.description}
              </p>

              <span
                className={`inline-flex items-center gap-2 rounded-lg py-1.5 px-3.5 font-inter text-[13px] font-medium ${badgeStyles[step.badgeVariant]}`}
              >
                {step.badgeText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
