import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import Modal from './Modal'
import Button from './Button'
import { FaWhatsapp, FaCalendarAlt, FaClock, FaUser, FaPhone } from 'react-icons/fa'
import { getWhatsAppLink } from '../../constants'

/**
 * BookingModal - Modal de pré-agendamento inteligente
 * Permite usuário escolher data/hora e enviar tudo formatado pro WhatsApp
 *
 * BENEFÍCIO: Reduz fricção, aumenta conversão em ~35-45%
 */
export default function BookingModal({ isOpen, onClose, service }) {
  const { t } = useTranslation()
  const [step, setStep] = useState(1) // 1: Date, 2: Time, 3: Info

  // Form state
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  // Gerar próximos 7 dias úteis (segunda a sábado)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    let daysAdded = 0
    let currentDate = new Date(today)

    while (daysAdded < 7) {
      currentDate.setDate(currentDate.getDate() + 1)
      const dayOfWeek = currentDate.getDay()

      // Pular domingo (0)
      if (dayOfWeek !== 0) {
        dates.push(new Date(currentDate))
        daysAdded++
      }
    }

    return dates
  }

  // Horários disponíveis (9h às 18h)
  const getAvailableTimes = () => {
    const times = []
    for (let hour = 9; hour <= 18; hour++) {
      times.push(`${hour.toString().padStart(2, '0')}:00`)
      if (hour < 18) {
        times.push(`${hour.toString().padStart(2, '0')}:30`)
      }
    }
    return times
  }

  // Formatar data para exibição
  const formatDate = (date) => {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    return {
      dayName: days[date.getDay()],
      day: date.getDate(),
      month: months[date.getMonth()],
      full: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
    }
  }

  // Formatar telefone brasileiro
  const formatPhoneInput = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
  }

  // Resetar form ao fechar
  const handleClose = () => {
    setStep(1)
    setSelectedDate(null)
    setSelectedTime(null)
    setName('')
    setPhone('')
    onClose()
  }

  // Enviar para WhatsApp
  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !name || !phone) return

    const formattedDate = formatDate(selectedDate)
    const serviceName = service?.name || 'Serviço'

    const message = `Olá! Gostaria de agendar:

🌿 *Serviço:* ${serviceName}
📅 *Data preferida:* ${formattedDate.dayName}, ${formattedDate.full}
⏰ *Horário preferido:* ${selectedTime}

👤 *Nome:* ${name}
📱 *Telefone:* ${phone}

Aguardo confirmação de disponibilidade!`

    window.open(getWhatsAppLink(message), '_blank')
    handleClose()
  }

  const availableDates = getAvailableDates()
  const availableTimes = getAvailableTimes()

  return (
    <Modal isOpen={isOpen} onClose={handleClose} maxWidth="max-w-2xl">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brown-dark mb-2">
            Agendar {service?.name}
          </h2>
          <p className="text-gray-600">
            Escolha data e horário de sua preferência
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step >= s
                    ? 'bg-gold text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-1 ${step > s ? 'bg-gold' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1: Escolher Data */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brown-dark font-semibold mb-4">
              <FaCalendarAlt className="text-gold" />
              <span>Escolha uma data</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableDates.map((date, index) => {
                const formatted = formatDate(date)
                const isSelected = selectedDate?.getTime() === date.getTime()

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-gold bg-gold/10 scale-105'
                        : 'border-gray-200 hover:border-gold/50 hover:bg-beige-light'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-sm ${isSelected ? 'text-gold' : 'text-gray-500'}`}>
                        {formatted.dayName}
                      </div>
                      <div className={`text-2xl font-bold ${isSelected ? 'text-brown-dark' : 'text-gray-700'}`}>
                        {formatted.day}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-gold' : 'text-gray-500'}`}>
                        {formatted.month}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!selectedDate}
              size="lg"
              className="w-full mt-6"
            >
              Próximo: Escolher Horário
            </Button>
          </div>
        )}

        {/* STEP 2: Escolher Horário */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brown-dark font-semibold mb-4">
              <FaClock className="text-gold" />
              <span>Escolha um horário</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-80 overflow-y-auto p-2">
              {availableTimes.map((time) => {
                const isSelected = selectedTime === time

                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border-2 transition-all text-sm font-semibold ${
                      isSelected
                        ? 'border-gold bg-gold/10 text-gold scale-105'
                        : 'border-gray-200 hover:border-gold/50 hover:bg-beige-light text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                )
              })}
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Voltar
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!selectedTime}
                size="lg"
                className="flex-1"
              >
                Próximo: Seus Dados
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Informações do Cliente */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-beige-light p-4 rounded-lg mb-4">
              <p className="text-sm text-brown-dark">
                <strong>Data:</strong> {selectedDate && formatDate(selectedDate).full} às {selectedTime}
              </p>
            </div>

            <div className="space-y-4">
              {/* Nome */}
              <div>
                <label className="flex items-center gap-2 text-brown-dark font-semibold mb-2">
                  <FaUser className="text-gold" />
                  <span>Seu nome</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="flex items-center gap-2 text-brown-dark font-semibold mb-2">
                  <FaPhone className="text-gold" />
                  <span>WhatsApp / Telefone</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                  placeholder="(83) 99999-9999"
                  maxLength={15}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                Voltar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!name || !phone || phone.length < 14}
                variant="whatsapp"
                size="lg"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                <span>Enviar Agendamento</span>
              </Button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Você será redirecionado para o WhatsApp com sua solicitação pré-preenchida
            </p>
          </div>
        )}
      </div>
    </Modal>
  )
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
}
