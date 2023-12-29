"use client"
import React from "react";

export default function Footer() {

  const stats = [
    { name: 'Available in the Try State Area', value: '📍' },
    { name: 'Years of Industry  Experience', value: '20+' },
    { name: 'Flexible Scheduling', value: '🗓️' },
    { name: 'Sample In the Safety of Your Home', value: 'Security' },
  ]

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="relative isolate overflow-hidden bg-neutral-100 py-24 sm:py-32" id="footer">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem]  opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem]  opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
          Schedule a safe and comfortable phlebotomy appointment with us for top-quality care.
                <a
                  href="https://calendly.com/jsoto7087/burdier-mobile-phlebotomy"
                  target='_blank'
                  className="rounded-md ml-2 bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                   Book now!
                </a>
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-slate-700">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <hr className="font-bold sm:mt-2 md:mt-10 lg:mt-20"/>
          <div className="text-slate-700 items-center sm:mt-5 md:mt-8 lg:mt-12 text-sm">
              <ul className="text-slate-700">
                <li>
                  Copyright © {year} - All Rights Reserved Powered by JSoto
                </li>
              </ul>
          </div>
      </div>
    </div>
  )
}
