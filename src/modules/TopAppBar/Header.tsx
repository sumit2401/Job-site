"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items=[
{name:"About", href:"/about"},  
{name:"Client", href:"/client"},  
{name:"Seekers", href:"/seekers"},  
{name:"Contact U", href:"/contact-us"},  
]




export const TopAppBar=()=> {
  return (
    <>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative flex w-full  items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-white "
      >
        <p className="text-sm font-medium flex gap-3">
          Streamline your workflow and boost your productivity with our app.
          <Link href="#" className="inline-flex items-center">
            Get started now
            <span aria-hidden="true" className="ml-1 mx-auto">→</span>
          </Link>
        </p>
      </motion.div>


      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mr-4 flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Logo</span>
            </Link>
          </motion.div>

   
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-6 p-4 md:items-center md:space-x-6"
          >
            {items.map((item, index) => (
              <Link 
              key={index}
              href={item.href}
              className="text-md font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
             <span className="mr-2 text-blue-500">{index + 1}.</span> {item.name}
            </Link>
            ))}
            
         
          </motion.nav>

  
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <button
              className=" text-black hover:bg-blue-700 px-4 py-2 border-2 border-blue-500 rounded-full font-bold" 
            >
              Sign Up
            </button>
          </motion.div>
        </div>
      </header>
    </>
  );
}