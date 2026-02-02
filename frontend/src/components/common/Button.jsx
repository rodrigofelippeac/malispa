import PropTypes from 'prop-types'

/**
 * Button - Botão reutilizável com variantes e tamanhos
 *
 * Uso:
 * <Button>Texto</Button>
 * <Button variant="secondary">Texto</Button>
 * <Button size="lg" onClick={handleClick}>Texto</Button>
 * <Button variant="whatsapp" href="https://wa.me/...">WhatsApp</Button>
 */
export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  // Variantes de cores
  const variants = {
    gold: 'text-brown-dark shadow-xl hover:shadow-2xl font-semibold',
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-dark hover:bg-secondary text-primary-dark shadow-lg hover:shadow-xl border-2 border-secondary-dark',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg',
    ghost: 'bg-transparent text-primary hover:bg-secondary-light',
    whatsapp: 'bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-xl',
  }

  // Tamanhos
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  // Classes base
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'

  // Combinar classes
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  // Estilos inline para gradiente gold
  const goldStyle = variant === 'gold' ? {
    background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)',
  } : {}

  // Handlers para hover do gold
  const handleMouseEnter = (e) => {
    if (variant === 'gold') {
      e.currentTarget.style.background = 'linear-gradient(135deg, #D4B46A 0%, #E5C77B 100%)'
    }
  }

  const handleMouseLeave = (e) => {
    if (variant === 'gold') {
      e.currentTarget.style.background = 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)'
    }
  }

  // Se for link (href)
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        style={goldStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  // Se for botão
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      style={goldStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Carregando...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['gold', 'primary', 'secondary', 'outline', 'ghost', 'whatsapp']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}
