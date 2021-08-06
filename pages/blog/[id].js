
export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map (blog => {
        return{
            params:{id: blog.id.toString()}
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' + id);
    const data = await res.json();

    return{
        props: {blog: data}
    }
}

const Details = ({ blog }) => {
    const data = blog;
    console.log(data);
    return (
        <div>
            <h1>Blog</h1>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
}

export default Details;