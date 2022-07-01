import { useEffect, useRef, useState } from 'react'

export function useNearScreen () {
  const article = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(isIntersecting)
          observer.disconnect()
        }
      })

      observer.observe(article.current)
    })
  }, [article])

  return [show, article]
}
