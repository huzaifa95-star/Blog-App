import React from 'react'
import { Link } from 'react-router-dom'

export const Homepage = () => {
    return (
        <div>
            <section className='flex flex-col item-center justify-center h-screen text-center'>
                <h1 className='uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl'>My Blog</h1>
                <button><Link className='py-2 px-6 rounded shadow bg-black text-white hover:bg-transparent border-2 border-black transition-all durantion-500 hover:text-black font-bold' to="/blog">Read my blog post</Link></button>
            </section>
        </div>
    )
}
