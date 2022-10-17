import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import "./ProfileBox.css";
import { useNavigate } from "react-router";
export default function ProfileBox(){
    const {user, logout} = useContext(UserContext);
    return (
        <div className='ProfileBox'>
            {user ? (
            <div className="auth">
                <h1>Welcome {user.name}</h1>
                <div onClick={() => logout()} className="SignoutBox">
                    <p>Sign out</p>
                </div>
            </div>
                ):(
                    <div className="LoginBox">
                        <a href="/login">Login</a>
                    </div>
            )}
        </div>
    )
}