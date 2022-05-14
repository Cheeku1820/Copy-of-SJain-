import { useState } from 'react'
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat23 from "../public/images/sps_1_1177x400.png"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/Black_background.jpeg"
import b from "../public/images/Black_background.jpeg"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/mechmonkey_150x150.png"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"

export default function Home() {
  return (
    
    <div className="bg-slate-200">
      <h1 className = "text-center text-8xl font-bold pt-36 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-700">
      Automotive Engineering Club
      __________
      </h1>
      <h1 className = "text-center text-7xl font-bold py-16 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-700">
      Self-Driving Cars
      </h1>
      <div className = "flex justify-evenly items-center w-full h-full py-24">
      <Image className = "w-full h-full"
      src={cat23}
      />
      </div>     
<div className = "flex flex-row py-28">
    <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-24 pr-6 pb-12">
    <div className=" bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black rounded-xl shadow-md overflow-hidden ">
  <div className="md:flex">
    <div className="py">
      <Image className=" object-cover md:h-full md:w-full" src={c} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Self-Driving Cars</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Mission Statement</a>
      <p className="mt-2 text-white">
        *Insert Mission Statement*
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
      <Image className=" object-cofillver md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Our Team</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Mechanical Monkeys</a>
      <p className="mt-2 text-white">
      *Insert Team Description*
</p>
</div>
  </div>
</div>
</div>
  </div>

  </div>

<div className = "bg-slate-900 flex flex-row flex-items-justify center">
  <div className=" pb-12 pl-24 pr-12 pt-12">
      <Image className=" object-cover md:h-full md:w-full" src={e} alt="">
    </Image>
    </div>
    <h1 className = "text-white text-3xl pl-20 pt-24">
      Home
    </h1>
    <h1 className = "text-white text-3xl pl-28 pt-24">
      About Us
    </h1>
    <h1 className = "text-white text-3xl pl-28 pt-24">
      Competitions
    </h1>
    <h1 className = "text-white text-3xl pl-28 pt-24">
      Officers
    </h1>
    </div>

  </div>
  
  )
}
