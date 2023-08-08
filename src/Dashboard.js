import './Dashboard.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaIceCream } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { HiOutlineInbox } from 'react-icons/hi'

function Dashboard() {
  return (
    <div className="container-app">
      <div id='menu'> <CgMenuLeft color='white' size={50}/> </div>
      <div className='menu-lateral'>
        <div className='container-menu-lateral'>
         <Link to='/pizza' id="link"><a className='icone-pizza' id="pizza" href="#pizza"> <FaPizzaSlice className='icons' size={40}/></a></Link>
         <Link to='/hamburger' id="link"><a className='icone-pizza' id="hamburger" href="#hamburger"> <FaHamburger className='icons' size={40}/></a></Link>
         <Link to='/sucos' id="link"><a className='icone-pizza' id="togo" href="#togo"> <BiCoffeeTogo className='icons' size={40}/></a></Link>
         <Link to='/sorvetes' id="link"> <a className='icone-pizza' id="ice" href="#ice"> <HiOutlineInbox className='icons' size={40} /></a></Link>
     </div>
      </div>
    </div>
  );
}

export default Dashboard;
