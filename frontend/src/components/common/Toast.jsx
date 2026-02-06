import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa'

/**
 * Toast - Notificações temporárias
 * Tipos: success, info, warning, error
 */
export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const icons = {
    success: <FaCheckCircle className="text-green-500 text-xl" />,
    info: <FaInfoCircle className="text-blue-500 text-xl" />,
    warning: <FaExclamationTriangle className="text-yellow-500 text-xl" />,
    error: <FaExclamationTriangle className="text-red-500 text-xl" />,
  }

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200',
  }

  return (
    <div
      className={`fixed bottom-24 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border-2 shadow-xl animate-slide-up ${bgColors[type]} min-w-[280px] max-w-md`}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FaTimes />
      </button>
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
}
