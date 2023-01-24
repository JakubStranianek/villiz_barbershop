import * as React from "react"
import { useState, useEffect } from "react"

const data = [
    {
        id: 1,
        src: "guy1.jpg",
        review: "Vždy spokojný po návšteve tohto barbershopu. Príjemné prostredie, kvalitný barber, cena služieb zodpovedá kvalite. Plne každému odporúčam. Barber Vilo si dá vždy záležať.",
        name: "Martin"
    },
    {
        id: 2,
        src: "guy2.jpg",
        review: "Čo sa týka Viliho v Žiline tak odporúčam 👌 Šikovný chalan vie sa s tým pekne vyhrať. Spokojnosť 100% plus príjemné prostredie.",
        name: "Dávid"
    },
    {
        id: 3,
        src: "guy3.jpg",
        review: "Vždy spokojosť so strihom ale aj čo sa týka prostredia. Villiz Barber komunikatívny a vždy vykúzli účes ktorý spĺňa všetky moje kritéria, za mňa najlepšia voľba v ZA.",
        name: "Daniel"
    },
    {
        id: 4,
        src: "guy4.jpg",
        review: "Barber Villiz má perfektný prístup. Vždy mi urobí skvelý strih. Je to štýlový barbershop. TOPka v Žiline. Odporúčam.",
        name: "Miro"
    },
    {
        id: 5,
        src: "guy5.jpg",
        review: "Barber Villiz má perfektný prístup. Vždy mi urobí skvelý strih. Je to štýlový barbershop. TOPka v Žiline. Odporúčam.",
        name: "Michal"
    },
    {
        id: 6,
        src: "guy6.jpg",
        review: "Dlho som nevedel nájsť barbera, ktorý by vyhovoval mojej náročnosti, no Villiz spĺňa všetko na špičkovej úrovni. Od priateľského a pohodového prístupu k zákaznikovi až po precízne vypiplaný strih. Venuje sa klientovi v maximálnej možnej miere a dá si záležať aj na tých najmenších detailoch. Môžem len a len odporúčiť aj ostatným.",
        name: "Roman"
    },
    {
        id: 7,
        src: "guy7.jpg",
        review: "Top služby. Originálne a hlavne príjemné prostredie. Robota vždy na 100%, žiadne odfláknutie. Ochotný a kamarátsky prístup. Vždy odchádzam spokojný 👍☝️👏 Odporúčam !!",
        name: "Martin"
    },
    {
        id: 8,
        src: "guy8.jpg",
        review: "Vždy maximálna spokojnosť. Každý jeden strih je niečím jedinečný. Výborná komunikácia a veľmi príjemné prostredia. 10/10",
        name: "Jakub"
    },
    {
        id: 9,
        src: "guy9.jpg",
        review: "Moderné prostredie kde sa vždy cítim pohodlne. Výborna priateľská nálada a ešte lepšie služby. Vrelo odporúčam!!",
        name: "Lukáš"
    },
]

export default function Example() {
    const [actualIndex, setActualIndex] = useState(7)
    
    const handleNext = () => {
        if (actualIndex >= 9) {
            setActualIndex(1)
        } else {
            setActualIndex(actualIndex+1)
        }
    }

    useEffect(() => {
        setTimeout(() => handleNext(), 3000)
    }, [actualIndex])

    return (
      <div className="bg-white pt-16 lg:py-24">
        <div className="bg-myTeal pb-16 lg:relative lg:z-10 lg:pb-0">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  {data.filter(index => index.id === actualIndex).map(item => {
                    return(
                        <img
                          className="object-cover lg:h-full lg:w-full"
                          src={item.src}
                          alt=""
                        />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    {data.filter(index => index.id === actualIndex).map(item => {
                        return (
                            <p className="mt-6 text-2xl font-medium text-white">
                                {item.review}
                            </p>
                        )
                    })}
                  </div>
                  <footer className="mt-6">
                  {data.filter(index => index.id === actualIndex).map(item => {
                    return (
                        <p className="text-base font-medium text-white">{item.name}</p>
                    )
                  })}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  