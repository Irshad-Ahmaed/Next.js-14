"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = [
  {name: "Register", href:"/Register"},
  {name: "Login", href:"/Login"},
]

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathName = usePathname();
    const [input, setInput] = useState("");
    
    return (
      <>
        {/* Content of input will preserved even if route to different page */}
        {/* Layout only mount children, not affect the common element */}

        {/* If you want to change the states of elements when routing to different
         page, just change the layout.tsx name to template.tsx 
        */}
        {/* In sort We use templates to change the state of all elements */}
        <input className="block mb-2 border border-gray-700 outline-none" value={input} onChange={e => setInput(e.target.value)} />
      {
        NavLinks.map((links)=>{
          const isActive = pathName.startsWith(links.href)

          return (
            <Link className={` outline-none ml-2 ${isActive ? 'font-bold mr-4' : 'text-blue-500'}`} href={links.href} key={links.name}>{links.name}</Link>
          )
        })
      }
        <h3 className="mt-2">Inner Layout</h3>
        {children}
      </>
  
    );
  }
  