'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'

type Props = {}

export const WhyUs = (props: Props) => {
    const benefits = [
        {
          title: "Premium Qualität",
          description: "Nur die besten Genetiken und Produkte für Ihren Anbau.",
          link: "/quality"
        },
        {
          title: "Expertenberatung",
          description: "Unser Team steht Ihnen mit Rat und Tat zur Seite.",
          link: "/expert-advice"
        },
        {
          title: "Diskrete Lieferung",
          description: "Ihre Bestellung erreicht Sie sicher und anonym.",
          link: "/shipping"
        },
        {
          title: "Große Auswahl",
          description: "Von Samen bis Zubehör - alles aus einer Hand.",
          link: "/products"
        }
      ];
    
      return (
        <section className="py-20 relative">
          <BackgroundBeams />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              <TextGenerateEffect words="Warum EasyGreen?" />
            </h2>
            <HoverEffect items={benefits} className="max-w-5xl mx-auto" />
          </div>
        </section>
      );
}