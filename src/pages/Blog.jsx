import React, { useEffect, useState } from 'react'
import client from "../client"
import { Link } from 'react-router-dom'
import { urlFor } from '../client'

export const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        client
            .fetch(
                `*[_type == "post"] {
            title,
            slug,
        
            body,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            }
          }`
            )
            .then((data) => setPosts(data))
            .catch(console.error)
    }, [])


    return (
        <>
            <section className='px-5 mx-auto lg:max-w-6xl md:max-w-3xl 2xl:mx-auto'>
                <h1 className='text-3xl font-bold mt-5 mb-10 text-center tracking-widest md:text-5xl lg:text-6xl'>Blog page</h1>
                <div className=' grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {posts.map((post) => (
                        <article>
                            <img src={post.mainImage.asset.url} alt={post.title} />
                            <h4 className='text-xl mt-5'>{post.title}</h4>

                            <button className='mt-5 mb-10'>
                                <Link className='py-2 px-6 rounded shadow bg-black text-white hover:bg-transparent border-2 border-black transition-all durantion-500 hover:text-black font-bold' to={`/blog/${post.slug.current}`}>Read Full Article</Link>
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
