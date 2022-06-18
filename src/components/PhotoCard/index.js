import React, { useRef, useEffect, useState } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = IMG }) => {
  const article = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(isIntersecting)
        observer.disconnect()
      }
    })

    observer.observe(article.current)
  }, [article])

  return (
    <Article ref={article}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
