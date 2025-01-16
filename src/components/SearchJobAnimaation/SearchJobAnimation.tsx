"use client";

import { ChatInterface } from "../ChatInterface/ChatInterface";

export default function SearchJobAnimation() {
  return (
    <div className="min-h-screen bg-slate-200  text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-24">
        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <span className="border-0  text-black font-zeyada hover:bg-pink-600">
              Early Access
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Meet wellfound<span className="text-pink-500">:ai</span>
              </h1>
              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Wellfound&apos;s AI recruiter.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              Here to help with all the logistics. wellfound:ai finds best fit
              candidates, vets for interest, and schedules your favorites on
              your calendar — all in a matter of days.
            </p>

            <p className="text-xl font-medium italic text-pink-500">
              It&apos;s that easy.
            </p>

            <button className="bg-white text-purple-900 hover:bg-gray-100">
              Learn more
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}
