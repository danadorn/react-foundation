import React from 'react'
import ProfileComponent from './components/ProfileComponent/ProfileComponent'
import HeaderComponent from './components/HeaderFooter/HeaderComponent'
import ArticleComponent from './components/Article/ArticleComponent'

export default function App() {
  return (
    <>
      <HeaderComponent />
      <div className='container grid lg:grid-cols-3 gap-8 m-6 bg  -white '>
        <ProfileComponent />
        <ProfileComponent />
        <ProfileComponent />
      </div>
      <ArticleComponent />

       <div className="w-7xl mx-auto my-12 overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://placekitten.com/800/400')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
          <h1 className="text-3xl font-bold text-white mb-2">The Secret Lives of Cats</h1>
          <p className="text-white text-sm">Discover what your cat is really thinking...</p>
        </div>
      </div>
      <div className="bg-white p-6">
        <p className="text-gray-700 mb-4">
          Ever wondered why your cat randomly zooms across the room? Or stares into space as if it sees ghosts?
          Cats are mysterious creatures with behaviors both adorable and strange. 
        </p>
        <p className="text-gray-700">
          Learn about their instincts, their habits, and what makes them the internet’s favorite companion.
        </p>
        <div className="mt-4 text-right">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Read More
          </button>
        </div>
      </div>
    </div>  
    </>
    
  )
}
