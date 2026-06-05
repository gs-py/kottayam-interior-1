import { useEffect, useRef, useState } from 'react'

/** Animate a number from 0 to `end` once `active` becomes true. */
export function useCountUp(end: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true

    let startTs: number | null = null

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [active, end, duration])

  return value
}
