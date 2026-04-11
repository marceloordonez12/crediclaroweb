interface Stat {
  icon: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: '📊', value: '+5,000', label: 'Clientes asesorados' },
  { icon: '🏢', value: '30+', label: 'Instituciones financieras' },
  { icon: '⏱️', value: '24h', label: 'Tiempo de respuesta' },
  { icon: '⭐', value: '100%', label: 'Asesoria gratuita' },
];

export default function StatsBar() {
  return (
    <div className="bg-navy h-[180px] flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-4">
            {/* Stat item */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 flex items-center justify-center text-[28px]">
                {stat.icon}
              </div>
              <div>
                <div className="font-poppins text-[40px] font-bold text-white leading-[1.1]">
                  {stat.value}
                </div>
                <div className="font-inter text-[16px] text-white/70">
                  {stat.label}
                </div>
              </div>
            </div>

            {/* Divider (not after last item) */}
            {index < stats.length - 1 && (
              <div className="w-px h-20 bg-white/15 ml-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
