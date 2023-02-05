import * as React from "react"
import Layout from "../../components/Layout"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Home() {
  return (
    <Layout>
      <div className="bg-gray-50 py-8 flex items-center justify-center">
        <img src="/barber-wanted.jpg" className="w-1/4 rounded-md shadow-lg" />
      </div>
    </Layout>
  )
}
