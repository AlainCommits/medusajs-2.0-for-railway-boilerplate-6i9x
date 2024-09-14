'use client'

import { WobbleCard } from "@/components/ui/wobble-card";
import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Image from 'next/image';
import myImage from '../../../../../public/images/bild4.png';
import rb1 from '../../../../../public/images/rb1.png';
import grow from '../../../../../public/images/rainbow2.jpg';


const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left column with text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 gradient-text-1">
              EasyGreen
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 lg:mb-8 gradient-text-2 max-w-md mx-auto lg:mx-0">
              Original Bisasam Shit  
            </p>
            
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent-foreground))_50%,hsl(var(--primary))_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-primary-foreground backdrop-blur-3xl">
                Zum Shop
              </span>
            </button>
          </div>

          {/* Right column with asymmetric grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-primary/10 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] gradient-text-2">
                Premium Cannabis Seeds and Clones
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-400">
                Cultivate the finest cannabis strains with our carefully selected seeds and healthy clones. Enjoy high-quality genetics and expert support.
                </p>
              </div>
              <Image
                src={rb1}
                width={250}	
                height={250}
               
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] gradient-text-3 drop-shadow-2xl">
              Essential Grow Supplies
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-400">
              Find everything you need for a successful grow, from nutrient solutions and lighting to pots and grow tents. Shop our curated collection of essentials.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary-foreground/40 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] gradient-text-4">
                Join Our Community
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-400">
                Connect with fellow growers, share tips, and learn from experts. Become part of our thriving community and stay up-to-date on the latest cannabis trends.
                </p>
              </div>
             
              <Image
                src={grow}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[20%]  -bottom-5 object-contain rounded-2xl z-50 "
                unoptimized
              />
            </WobbleCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;