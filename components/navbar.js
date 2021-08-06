
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (

    <nav>
        <div className="logo">
            <Image src="/logo.png" width={200} height={50}/>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/about"><a>About</a></Link>

    </nav>
    );
}


export default Navbar;