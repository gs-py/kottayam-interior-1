import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
}

const BASE_URL = 'https://interiorworld.in'

export function Seo({ title, description, path = '/', image }: SeoProps) {
  const url = `${BASE_URL}${path}`
  const ogImage = image ?? `${BASE_URL}/logo.png`

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
