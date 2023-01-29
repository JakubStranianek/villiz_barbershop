import * as React from "react"
import { useRef } from "react";
const features = [
  { name: '💈 Junior', description: 'Strih nožničkami a strojčekom pre deti do 15 rokov', price: "15€" },
  { name: '💈 Basic', description: 'Uprava brady', price: "15€" },
  { name: '💈 Standard', description: 'Pánsky strih nožničkami a strojčekom', price: "20€" },
  { name: '💈 Premium', description: 'Oholenie hlavy, úprava fúzov a brady', price: "28€" },
  { name: '💈 Gold', description: 'Pánsky strih, úprava fúzov a brady', price: "30€" },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div aria-hidden="true" className="relative">
        <img
          src="priceList-bg.png"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cenník našich služieb</h2>
          <p className="mt-4 text-gray-500">
          Cenník platný od 1.12.2022
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              <dd className="mt-2 text-base text-gray-500">{feature.price}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
