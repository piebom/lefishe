import fishlogo from '../assets/fishlogo.png';
import './CustomHeader.css';
export default function CustomHeader(){
  return(
    <div className='HeaderMain'>
      <img src={fishlogo} alt="fish logo" width="100" height="100"/>
    </div>
  )
}