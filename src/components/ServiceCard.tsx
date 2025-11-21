interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <div className="text-purple-600 dark:text-purple-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
