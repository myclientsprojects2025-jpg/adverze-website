import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-lg';
  
  const variants = {
    primary: 'bg-[#bc9131] hover:bg-[#9a7628] text-[#1f151a]',
    secondary: 'bg-[#d4a845] hover:bg-[#bc9131] text-[#1f151a]',
    yellow: 'bg-[#bc9131] hover:bg-[#9a7628] text-[#1f151a]',
    outline: 'border-2 border-[#bc9131] text-[#bc9131] hover:bg-[#bc9131] hover:text-[#1f151a]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
