import { useEffect, useState } from 'react'

/** Tracks which section id is currently active in the viewport. */
export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + offset
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}
