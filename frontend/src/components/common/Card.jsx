import PropTypes from 'prop-types'

/**
 * Card - Card reutilizável com variantes
 *
 * Uso:
 * <Card>conteúdo</Card>
 * <Card variant="elevated">conteúdo</Card>
 * <Card className="p-8">conteúdo</Card>
 */
export default function Card({ children, variant = 'default', className = '' }) {
  // Variantes
  const variants = {
    default: 'bg-white shadow-md hover:shadow-lg',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    bordered: 'bg-white border-2 border-gray-200 hover:border-primary',
    flat: 'bg-white',
  }

  // Classes base
  const baseClasses = 'rounded-2xl transition-all duration-200 ease-in-out hover:-translate-y-1'

  // Combinar classes
  const cardClasses = `${baseClasses} ${variants[variant]} ${className}`

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'bordered', 'flat']),
  className: PropTypes.string,
}
