import * as React from "react"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Staň sa najlepšiou verziou</span>{' '}
              <span className="block text-[#BFAEA8] xl:inline">seba samého</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Viac ako nový strih. Toto bude tvoj najlepší strih, pretože my vieme ako to urobiť lepšie. Zverte sa do 
              rúk naším profesionálom, ktorý majú vášeň pre barbierstvo.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#BFAEA8] px-8 py-3 text-base font-medium text-white hover:bg-[#BFAEA8] hover:bg-opacity-70 md:py-4 md:px-10 md:text-lg"
                >
                  Pozri služby
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#BFAEA8] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Objednaj sa
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="hero-photo2.jpg"
            alt="hero2"
          />
        </div>
      </main>
    </div>
  )
}
