"use client"

import Image from 'next/image'
import dynamic from "next/dynamic";

const MyHome = dynamic(() => import("./home"), {
  ssr: false,
});

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <MyHome/>
    </main>
  )
}
