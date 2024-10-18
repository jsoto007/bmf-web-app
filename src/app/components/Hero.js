'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import bmfLogoP from "../../../public/bmfLogoP.png"
import bmfLogoDropP from "../../../public/bmfLogoDropP.png"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll/modules"


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'About', to: "about" },
    { name: 'Scheduling', to: "footer" },
    { name: 'Company', to: "home" },
  ]

  return (
    <div className="bg-white" id='home'>
      <div className="">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className='fixed w-full top-0 backdrop-blur-md bg-neutral-100/10'>
              <nav className="flex items-center justify-between p-2 lg:px-8" aria-label="Global">
                  <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Burdier Mobile Phlebotomy</span>
                      <Image 
                        className='h-10 w-auto'
                        src={bmfLogoP}
                        alt='Burdier Mobile Phlebotomy logo'
                      />
                    </a>
                  
                </div>
                <div className="flex lg:hidden ">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 ">
                  {navigation.map((item) => (
                    <button key={item.name}>
                      <Link to={item.to} smooth={true} duration={500} offset={40}>
                        <ul className="text-sm font-semibold leading-6 text-gray-900">
                          {item.name}
                        </ul>
                      </Link>
                    </button>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  </a>
                </div>
              </nav>
          </div>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">BMF</span>
                  <Image 
                  className="h-12 w-auto"
                  src={bmfLogoDropP}
                  alt='BMF logo'
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <button 
                        key={item.name} 
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <Link to={item.to} smooth={true} duration={500} offset={40}>
                          <ul onClick={() => setMobileMenuOpen(false)}>
                            {item.name}
                          </ul>
                        </Link>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
            <div className="text-center">
              <div className='flex items-center justify-between'>
                <Image 
                  className='lg:h-80 md:h-80 sm:h-50 w-auto -mr-12 sm:-mr-12 -mt-16 drop-shadow-xl border-s-orange-700 '
                  src={bmfLogoDropP}
                  alt='BMF logo'
                />

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif drop-shadow-xl sm:-pr-8">
                  Burdier Mobile Phlebotomy
                </h1>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide safe and high-quality phlebotomy services in the comfort of your home while strictly adhering to safety standards.
              </p>
              <p className='text-slate-800 text-sm font-mono'>
                <span className='text-indigo-600 text-2xl'>☎</span>(516) 508 1898
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://calendly.com/burdiercorp/30min?back=1"
                  target='_blank'
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Scheduling
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >

            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
