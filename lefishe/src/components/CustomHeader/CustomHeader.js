import fishlogo from '../../assets/fishlogo.png';
import './CustomHeader.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider';
export default function CustomHeader(){
  const {user} = useContext(UserContext);

  return(
    <div className='HeaderMain'>
      <img src={fishlogo} alt="fish logo" width="100" height="100"/>
    </div>
  )
}