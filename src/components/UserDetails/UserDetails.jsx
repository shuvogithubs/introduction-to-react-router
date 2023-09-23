import { useLoaderData, useNavigate } from "react-router-dom";



const UserDetails = () => {
    const navigate =useNavigate();
    const user = useLoaderData();
    const {name,email,phone,website,address,id,}= user;
    const userStyle={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
        marginTop:'10px',
       
    }
    const handleGoBack =()=>{
        navigate(-1);
    }
    return (
        <div style={userStyle}>
            <h2>User Name :{name} </h2>
            <p>User email:{email} </p>
            <p>Phone:{phone} </p>
            <p>Website:{website} </p>
            <p>Address:{address.street} </p>
            <p>Id: {id} </p>
           
            <button onClick={handleGoBack}>Go back</button>
            
           
            
                
            
        </div>
    );
};

export default UserDetails;