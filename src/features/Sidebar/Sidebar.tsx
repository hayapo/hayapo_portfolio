import React from "react"
import Image from "next/image"
import InternalLink from "components/InternalLink"
import { pages } from "util/constants"

export function Sidebar() {
  return (
    <div className="flex h-screen w-screen items-center justify-end align-middle">
      <div className="group absolute right-[-35rem] top-[-25rem] flex h-[170%] w-[40rem] rotate-12 items-center justify-center bg-white  duration-500 hover:right-[-20rem]">
        <div className="invisible absolute right-[23rem] top-[47%] flex -rotate-12 flex-col gap-y-20 text-black group-hover:visible">
          {pages.map((page) => (
            <InternalLink
              key={page.href}
              text={page.text}
              href={page.href}
              className="text-4xl after:bg-black"
            />
          ))}
        </div>
        <div className="absolute left-[3rem] top-[61%] h-full w-[8rem] -rotate-12">
          <Image
            src="/RightArrow.svg"
            alt="Right Arrow Icon"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  )
}
