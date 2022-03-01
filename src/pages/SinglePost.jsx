import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(


            `*[slug.current == "${slug}"] {
            
        title,
        body,
        publishedAt,
        "name": author -> name,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
        )
            .then((data) => setSinglePost(data[0]))
        setIsLoading(false)
    }, [slug])

    return (
        <>
            {isLoading ? (
                <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
                    Loading...
                </h1>
            ) : (
                <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
                    <h1 className="uppercase font-bold text-2xl tracking-wide mb-10 md:text-4xl lg:text-6xl text-center mt-5">
                        {singlePost.title}
                    </h1>
                    {singlePost.mainImage && singlePost.mainImage.asset && (
                        <img
                            src={singlePost.mainImage.asset.url}
                            alt={singlePost.title}
                            title={singlePost.title}
                            className="blog__image"
                        />
                    )}
                    <p className="p-text">By {singlePost.name}</p>
                    <p className="text-right p-text">{singlePost.publishedAt}</p>
                    <div className="block__content p-text">
                        <BlockContent
                            blocks={singlePost.body}

                        />
                    </div>

                    <button className="mt-5 py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold ">
                        <Link
                            to="/blog"
                            className=""
                        >
                            Read more articles
                        </Link>
                    </button>
                </section>
            )}
        </>
    )
}