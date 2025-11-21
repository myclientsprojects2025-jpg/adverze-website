interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group p-6 bg-[#1f151a]/50 rounded-2xl border border-[#bc9131]/30 hover:border-[#bc9131] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#bc9131]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <div className="text-[#bc9131]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#bc9131] mb-3 group-hover:text-[#d4a845] transition-colors">
        {title}
      </h3>
      <p className="text-[#bc9131]/80 mb-4 leading-relaxed">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-[#bc9131]/70">
              <svg className="w-5 h-5 text-[#d4a845] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
