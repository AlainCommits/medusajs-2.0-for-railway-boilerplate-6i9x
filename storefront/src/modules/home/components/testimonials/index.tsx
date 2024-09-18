import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react'

type Props = {}
const Testi = (props: Props) => {
    const testimonials = [
        {
          quote: "EasyGreen hat die beste Auswahl an Samen, die ich je gesehen habe!",
          name: "Johannes D.",
          title: "Hobbygärtner"
        },
        {
          quote: "Ihr Anbaubedarf ist erstklassig. Meine Pflanzen sahen noch nie besser aus!",
          name: "Sarah M.",
          title: "Erfahrene Züchterin"
        },
        {
          quote: "Das Kundenservice-Team ist unglaublich kompetent und hilfsbereit.",
          name: "Michael R.",
          title: "Langjähriger Kunde"
        },
        {
          quote: "Die Qualität der Klone ist hervorragend. Jede einzelne hat sich prächtig entwickelt!",
          name: "Lisa K.",
          title: "Professionelle Anbauerin"
        },
        {
          quote: "Dank EasyGreen konnte ich meinen Ertrag verdoppeln. Absolut empfehlenswert!",
          name: "Thomas B.",
          title: "Kommerzieller Anbauer"
        }
      ];
    
      return (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text-3 text-primary">
              <TextGenerateEffect words="Das sagen unsere Kunden" />
            </h2>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </section>
      );
}

export default Testi
