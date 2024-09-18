import React from 'react'

type Props = {}

export const AboutUs = (props: Props) => {
  return (
    <section className="bg-background py-16">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold gradient-text-3">Our Mission</h2>
        <p className="text-neutral-400 mt-4">
          We're committed to bringing you the highest quality products while promoting sustainability and community support.
        </p>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 gradient-text-2">
        {/* <Image src={missionImage} alt="Our Mission" className="rounded-lg" /> */}
        <h1>MAKE THE WORLD GREEN AGAIN</h1>
      </div>
    </div>
  </section>
  
  )
}