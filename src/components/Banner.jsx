import React from 'react'

function Banner(images) {
  console.log(images)
  return (
    <>
      <div className='companyscroll'>
        <div className='wrapper'>
          <section>
            {images.images.map((image) => {
              return <img src={image} />
            })}
          </section>
        </div>
        <div className='wrapper'>
          <section>
            {images.images.map((image) => {
              return <img src={image} />
            })}
          </section>
        </div>
      </div>
      <div className='companyscroll2'>
        <div className='wrapper'>
          <section>
            {images.images.map((image) => {
              return <img src={image} />
            })}
          </section>
        </div>
        <div className='wrapper'>
          <section>
            {images.images.map((image) => {
              return <img src={image} />
            })}
          </section>
        </div>
      </div>
    </>
  )
}

export default Banner
