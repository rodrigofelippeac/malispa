import PropTypes from 'prop-types'

/**
 * Container - Wrapper padrão com max-width responsivo
 *
 * Uso:
 * <Container>conteúdo</Container>
 * <Container size="sm">conteúdo</Container>
 * <Container className="py-20">conteúdo</Container>
 */
export default function Container({ children, size = 'lg', className = '' }) {
  const sizes = {
    sm: 'max-w-4xl',   // 896px
    md: 'max-w-6xl',   // 1152px
    lg: 'max-w-7xl',   // 1280px
    full: 'w-full',
  }

  const sizeClass = sizes[size] || sizes.lg

  return (
    <div className={`${sizeClass} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  className: PropTypes.string,
}
