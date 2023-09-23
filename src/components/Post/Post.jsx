
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id,title,body} = post;
    const userStyle={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
        marginTop:'10px',
       
    }
    const handleShowDetails = () =>{
navigate(`/post/${id}`)
    };
    return (
        <div  style={userStyle
            
        }>
            <h2>Id: {id} </h2>
            <p>Title:{title} </p>
            <p>Body {body} </p>
            {/* <Link to={`/post/${id}`}> <button>Show Details</button></Link> */}
            <button onClick={handleShowDetails}>Click to show details</button>
        </div>
    );
 
};   
Post.propTypes ={
        post:PropTypes.object.isRequired,
    }

export default Post;