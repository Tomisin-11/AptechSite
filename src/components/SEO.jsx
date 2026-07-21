import { useEffect } from 'react'

const SITE_URL = 'https://aptechakowonjo.com'
const SITE_NAME = 'Aptech Akowonjo'

function setMetaTag(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLinkTag(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

/**
 * Drop this at the top of any page component to set that page's
 * <title>, meta description, canonical URL, and Open Graph tags.
 *
 * <SEO
 *   title="About Us | Aptech Akowonjo"
 *   description="Learn about Aptech Akowonjo's mission..."
 *   path="/about"
 * />
 */
export default function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setLinkTag('canonical', url)

    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)

    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
  }, [title, description, path])

  return null
}
