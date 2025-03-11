import React from 'react'

export const Thumb = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number w-full"
      >
        <img src={index.src} alt="" className="h-14 sm:h-[85px] w-full object-cover rounded-md"/>
      </button>
    </div>
  )
}
