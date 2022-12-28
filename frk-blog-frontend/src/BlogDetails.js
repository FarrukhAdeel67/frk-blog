import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} =useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:4000/api/blogs/' + id);
    const history = useHistory();
    const handleClick = ()=>{
        fetch('http://localhost:4000/api/blogs/deleteBlog/'+ blog.id, {
            method:'DELETE',
        })
        .then(()=>{
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details" >
             {error && <div>{error}</div>}
             {isPending && <div>Loading....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;