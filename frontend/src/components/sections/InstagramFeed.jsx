import { useTranslation } from 'react-i18next'
import Container from '../common/Container'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'

/**
 * InstagramFeed - Galeria de imagens do Instagram
 * Mostra grid de posts com link direto para o Instagram
 */
export default function InstagramFeed() {
  const { t } = useTranslation()

  // Posts do Instagram do @malispa_br
  // Posts reais do Instagram com links diretos
  const instagramPosts = [
    {
      id: 1,
      image: '/instagram-1.jpg',
      caption: 'Momentos de bem-estar',
      likes: 145,
      comments: 12,
      url: 'https://www.instagram.com/p/DKvjKfEt0cM/'
    },
    {
      id: 2,
      image: '/instagram-2.jpg',
      caption: 'Experiências transformadoras',
      likes: 198,
      comments: 18,
      url: 'https://www.instagram.com/p/DJhA6z2N6AP/'
    },
    {
      id: 3,
      image: '/day-spa-aconchego.jpg',
      caption: 'Ritual Aconchego',
      likes: 223,
      comments: 24,
      url: 'https://www.instagram.com/malispa_br/'
    },
    {
      id: 4,
      image: '/instagram-3.jpg',
      caption: 'Terapias holísticas',
      likes: 187,
      comments: 15,
      url: 'https://www.instagram.com/p/C5v_zV9Lsg2/'
    },
    {
      id: 5,
      image: '/instagram-4.jpg',
      caption: 'Cuidado e acolhimento',
      likes: 256,
      comments: 31,
      url: 'https://www.instagram.com/p/C1ewAO9OJji/'
    },
    {
      id: 6,
      image: '/ambiente-spa-cliente.jpg',
      caption: 'Ambiente tranquilo',
      likes: 167,
      comments: 14,
      url: 'https://www.instagram.com/malispa_br/'
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <Container>
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <FaInstagram
              className="text-4xl md:text-5xl"
              style={{ color: '#E1306C' }}
            />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900">
              {t('instagram.title')}
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {t('instagram.subtitle')}
          </p>

          <a
            href="https://www.instagram.com/malispa_br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold transition-colors duration-300"
            style={{ color: '#E1306C' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C13584'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#E1306C'}
          >
            <span>@malispa_br</span>
          </a>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg aspect-square bg-gray-100"
            >
              {/* Imagem */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                {/* Caption */}
                <p className="text-white text-sm font-medium mb-3 line-clamp-2">
                  {post.caption}
                </p>

                {/* Likes e Comments */}
                <div className="flex items-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1.5">
                    <FaHeart className="text-base" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaComment className="text-base" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Ícone Instagram no hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
                >
                  <FaInstagram className="text-white text-xl" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA - Seguir no Instagram */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/malispa_br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              background: 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)',
              color: '#1a0a01',
              boxShadow: '0 4px 12px rgba(201, 160, 80, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4B46A 0%, #E5C77B 100%)'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 160, 80, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #C9A050 0%, #D4B46A 100%)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 160, 80, 0.3)'
            }}
          >
            <FaInstagram className="text-xl" />
            <span>{t('instagram.followButton')}</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
