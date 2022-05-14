import { useState } from 'react'
import Image from "next/image"
import cat23 from "../public/images/Screen Shot 2022-04-23 at 10.03.41 AM.png"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/Black_background.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"

export default function officers() {
    return (
      <div className = "h-screen bg-black">
        <h1 className = "text-center text-6xl font-bold py-24 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
          More Information to Come Out Soon!
        </h1>
        <div className = "flex flex-row">
    <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-24 pr-6 pb-12">
    <div className=" bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="">
      <Image className=" object-cover md:h-full md:w-full" src={c} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Self-Driving Cars</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Our Team</a>
      <p className="mt-2 text-white">
        *More Information Coming Soon*
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-24 pb-12">
    <div className="bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black  rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="">
      <Image className=" object-cofillver md:h-full md:w-full" src={c} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Self-Driving Cars</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Our Team</a>
      <p className="mt-2 text-white">
      *More Information Coming Soon*
</p>
</div>
  </div>
</div>
</div>
  </div>
  </div>
      </div>
    )
  }