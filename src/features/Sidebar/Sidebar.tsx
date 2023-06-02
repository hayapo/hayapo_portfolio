import React from "react"
import Image from "next/image"

function Sidebar() {
  return (
    <div className="group flex items-center justify-end align-middle">
      <div className="absolute left-[85rem] top-[-150px] flex h-[1000px] w-[500px] rotate-12 items-center bg-white duration-500 group-hover:left-[75rem]">
        <div className="invisible absolute ml-[7.5rem] flex -rotate-12 flex-col gap-y-20 text-black group-hover:visible">
          <div className="font-sen text-4xl">About</div>
          <div className="font-sen text-4xl">Skills</div>
          <div className="font-sen text-4xl">Works</div>
          <div className="font-sen text-4xl">Contact</div>
        </div>
      </div>
      <div className="group-hover: absolute mr-[11rem] mt-[31.5rem] duration-500 group-hover:mr-[22rem] group-hover:animate-flip group-hover:[animation-fill-mode:forwards]">
        <Image
          src="/RightArrow.svg"
          alt="Right Arrow Icon"
          width={70}
          height={70}
        />
      </div>
    </div>
  )
}

export default Sidebar
