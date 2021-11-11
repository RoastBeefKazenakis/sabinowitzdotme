import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
   <div class="min-h-screen bg-gradient-to-b from-red-500 to-pink-400 via-red-400 via-red-375 flex items-center justify-center">
    <button class="p-6 mt-44 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 ring-1 bg-indigo-200 active:bg-indigo-700">
    <div class="flex-shrink-0">
      <img class="h-40 w-40" src="/oorange.png" alt="me">
    </img></div> 
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </button>
  </div>
  )
}
