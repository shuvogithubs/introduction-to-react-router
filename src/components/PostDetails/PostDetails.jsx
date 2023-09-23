import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    const {title,body,id }= post;
    const postStyle ={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
        marginTop:'10px',
        margin:'200px'
    }
const handleGoBack =()=>{
navigate(-1);
}
    return (
        <div style={postStyle}>
            <p>Id:{id}</p>
            <h2>Post details: {title}</h2>
            <p>Body:{body} </p>
<button onClick={handleGoBack}>Go back</button>

        </div>
    );
};

export default PostDetails;