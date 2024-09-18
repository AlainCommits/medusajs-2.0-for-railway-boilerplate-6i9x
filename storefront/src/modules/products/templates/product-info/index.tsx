'use client'

import React from "react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="w-full max-w-4xl mx-auto">
      <BackgroundGradient className="w-full h-full bg-background/80 rounded-xl" containerClassName="w-full">
        <div className="flex flex-col lg:flex-row h-full p-6 sm:p-8" data-testid="product-wrapper">
          <div className="relative flex-grow mb-6 lg:mb-0 lg:mr-6 lg:w-1/2 aspect-square">
            <Image
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:w-1/2">
            {product.collection && (
              <LocalizedClientLink
                href={`/collections/${product.collection.handle}`}
                className="text-sm text-ui-fg-muted hover:text-ui-fg-subtle mb-2"
              >
                {product.collection.title}
              </LocalizedClientLink>
            )}
            <Heading
              level="h2"
              className="text-2xl sm:text-3xl leading-tight text-ui-fg-base mb-4"
              data-testid="product-title"
            >
              {product.title}
            </Heading>
            <Text
              className="text-sm sm:text-base text-ui-fg-subtle whitespace-pre-line mb-6"
              data-testid="product-description"
            >
              {product.description}
            </Text>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default ProductInfo