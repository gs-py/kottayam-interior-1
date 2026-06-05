import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
}

const BASE_URL = 'https://kottayaminteriors.com'

export function Seo({ title, description, path = '/', image }: SeoProps) {
  const url = `${BASE_URL}${path}`
  const ogImage =
    image ??
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
