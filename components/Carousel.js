import { useState } from 'react'
import FA from 'react-fontawesome'
import styles from '@styles/Carousel.module.css'
import commonStyles from '@styles/Common.module.css'
import cn from 'classnames'
import Image from 'next/image'

function CarouselPresenter({
  idx, setIdx, item, items, onPrev, onNext,
}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.controllerContainer}>
        <button
          onClick={onPrev}
          className={styles.button}
          type="button"
        >
          <FA name="chevron-left" size="2x" />
        </button>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1>{item.name}</h1>
            <p className={styles.caption}>{item.description}</p>
          </div>
          <Image
            src={item.thumbnailUrl}
            alt={item.name}
            width={780}
            height={439}
          />
          <div className={styles.indicatorContainer}>
            {items.map((it, i) => (
              <button
                key={it.title}
                aria-label={it.name}
                onClick={() => setIdx(i)}
                className={cn(styles.indicator, { [styles.indicatorSelected]: idx === i })}
                type="button"
              />
            ))}
          </div>
          <div className={styles.detailsContainer}>
            <p>
              Made with
              {' '}
              {item.technologies.map((tech) => tech.name).join(', ')}
              {' '}
              in
              {' '}
              {item.year}
            </p>
            <a className={commonStyles.mar_x5} href={item.sourceCodeLink}>Open</a>
            <a href={item.sourceCodeLink}>Code</a>
          </div>
        </div>
        <button
          onClick={onNext}
          className={styles.button}
          type="button"
        >
          <FA name="chevron-right" size="2x" />
        </button>
      </div>
    </div>
  )
}

function CarouselContainer({ items }) {
  const [idx, setIdx] = useState(0)
  const item = items[idx]

  const handlePrev = () => {
    setIdx(idx === 0 ? items.length - 1 : idx - 1)
  }

  const handleNext = () => {
    setIdx((idx + 1) % items.length)
  }

  return (
    <CarouselPresenter
      setIdx={setIdx}
      items={items}
      idx={idx}
      item={item}
      onPrev={handlePrev}
      onNext={handleNext}
    />
  )
}

const Carousel = CarouselContainer

export default Carousel
