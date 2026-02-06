import PropTypes from 'prop-types'

/**
 * SkeletonLoader - Loading placeholder para conteúdo
 * Usado em lazy loading de seções
 */
export default function SkeletonLoader({ type = 'card', count = 1 }) {
  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="bg-beige-light h-48 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="bg-beige-light h-6 rounded w-3/4" />
              <div className="bg-beige-light h-4 rounded w-full" />
              <div className="bg-beige-light h-4 rounded w-5/6" />
              <div className="bg-beige-light h-10 rounded-lg mt-4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'text') {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="bg-beige-light h-4 rounded w-full" />
        <div className="bg-beige-light h-4 rounded w-5/6" />
        <div className="bg-beige-light h-4 rounded w-4/6" />
      </div>
    )
  }

  return (
    <div className="bg-beige-light h-32 rounded-lg animate-pulse" />
  )
}

SkeletonLoader.propTypes = {
  type: PropTypes.oneOf(['card', 'text', 'default']),
  count: PropTypes.number,
}
