import { useParams } from "react-router-dom";

const User =()=>{
    const { userId } = useParams();
    return <p>Esto es el usuario {userId}</p>;
}
export default User