import type { NextPage } from "next"
import { SiteTitle } from "util/constants"

const Home: NextPage = () => {
  return (
    <div className="-z-10 flex flex-col gap-y-[10rem]">
      <h1 className="mx-10 text-8xl">{SiteTitle}</h1>
      <p className="ml-[10rem] text-4xl">Saito Hayato&apos;s Home Page</p>
    </div>
  )
}

export default Home
