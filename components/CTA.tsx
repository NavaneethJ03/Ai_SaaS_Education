import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge font-bold'>
        Start Learning your way with our AI companions!
      </div>
      <h2>
        Build and Personalize Learning Companions!
      </h2>
      <p>
        Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun.
      </p>
      <Image
        src="/images/cta.svg"
        alt="cta"
        width={362}
        height={232}
      />
      <button className='btn-primary'>
        <Image 
          src="/icons/plus.svg"
          alt="plus"
          width={16}
          height={16}
          />
          <Link href="/companions/new" className='ml-2'>
          <p>Build a New Companion</p> 
          </Link>
      </button>
    </section>
  )
}

export default CTA