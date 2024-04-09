"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./styles.css";
import { use, useState } from 'react';


const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "ForgotPassword", href: "/forgot-password" }
    ];

export default function  Authlayout ({
    children
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();
    const [input, setInput] = useState("")
  
    
    return (
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            
            return (
              <Link key={link.name} href={link.href}
              // style if active Link (the page you see)
              className={isActive ? "fond-bold mr-4" : " font-bold text-green-500 mr-5"}>
                {link.name}
              </Link>
            );
            })}
        {children}
      </div>

    );
    }