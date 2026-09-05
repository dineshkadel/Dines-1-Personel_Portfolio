import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', children, icon, href, to, className = '' }) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-sky text-bg hover:bg-sky-light hover:-translate-y-0.5 font-semibold",
    outline: "bg-transparent border border-sky/25 text-text hover:border-sky hover:text-sky hover:-translate-y-0.5"
  };
  
  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {icon && <i className={`fas ${icon}`}></i>}
        {children}
      </Link>
    );
  }
  
  const Tag = href ? 'a' : 'button';
  
  return (
    <Tag href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <i className={`fas ${icon}`}></i>}
      {children}
    </Tag>
  );
};

export default Button;