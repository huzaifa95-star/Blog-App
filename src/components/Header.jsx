import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className=" w-full flex item-center justify-between bg-blue-900 text-white p-5 bg-opacity-90  ">
                <div className="logo">
                    <Link to="/">
                        <h2 className="font-bold text-xl md:text-2xl lg:text:3xl hover:text-black hover:scale-50">
                            Share It
                        </h2>
                    </Link>
                </div>

                <nav>
                    <ul className="flex lg:text-lg ">
                        <li className="mr-5 hover:text-black">
                            <button>
                                <Link to="/">Home</Link>
                            </button>
                        </li>
                        <li className="hover:text-black">
                            <button>
                                <Link to="/blog">Blog</Link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}