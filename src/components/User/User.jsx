import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const User = ({user}) => {
    const  {id,name,email,phone} = user;
    const userStyle={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
        marginTop:'10px',
       
    }
    
    return (
        <div  style={userStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}> <button>Show Details</button></Link>
            
            
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object.isRequired,
}

export default User;