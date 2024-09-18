import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { WobbleCard } from '@/components/ui/wobble-card'
import React from 'react'

type Props = {}

const SoFunktioniertEs = (props: Props) => {
    const schritte = [
        { title: "Produkte auswählen", description: "Durchstöbern Sie unsere große Auswahl an Samen, Klonen und Anbauzubehör." },
        { title: "Bestellung aufgeben", description: "Sicherer Checkout mit verschiedenen verfügbaren Zahlungsmethoden." },
        { title: "Lieferung erhalten", description: "Lassen Sie sich die Artikel diskret an Ihre Haustür liefern." },
        { title: "Mit dem Anbau beginnen", description: "Starten Sie Ihre Anbau-Reise mit unseren hochwertigen Produkten." },
      ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text-1">
          <TextGenerateEffect words="So funktioniert es" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schritte.map((schritt, index) => (
            <WobbleCard key={index} containerClassName="h-full">
              <div className="text-4xl font-bold mb-4 text-primary">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{schritt.title}</h3>
              <p className="text-gray-600">{schritt.description}</p>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoFunktioniertEs
