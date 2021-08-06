import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async ()=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props : { blogs: data }
    }
}
const Blog = ({ blogs }) => {
    return (
    <>
        <Head>
            <title>Hamami | Blog</title>
            <meta name="keyword" content="hamami"/>
        </Head>
        <div>
            <h1>Blog</h1>
            { blogs.map(blog =>(
                <div key={blog.id} className="single">
                    <Link href={'/blog/'+blog.id}><a ><h2>{blog.title}</h2></a></Link>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    </>
    );
}

export default Blog;