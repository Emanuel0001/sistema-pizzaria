import React from 'react';
import Modal from 'react-modal';
/*importando icons */
import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaIceCream } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoArrowRedo } from 'react-icons/io5'
import { IoMdAddCircle } from 'react-icons/io'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckCircleFill } from 'react-icons/bs'

import Imagem from '../../images/pizza-Bolonhesa.jpg'
import pizzaBolonhesa from '../../images/pizza-Bolonhesa.jpg'
import pizzaCalabresa from '../../images/pizza-Calabresa.jpg'
import pizzaChocolate from '../../images/pizza-Chocolate.jpg'
import pizzaBanana from '../../images/pizza-banana.jpeg'

import './style.css'
function Pizza() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalAddOpen, setIsModalAddOpen] = React.useState(false);

  function openModalAddItem() {
    setIsModalAddOpen(true);
    setTimeout(function() {
      setIsModalAddOpen(false);

    }, 3000)
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'none'
    },
    content: {
      top: '55%',
      left: '80%',
      width: '400px',
      height: '400px',
      right: 'auto',
      bottom: 'auto',
      background: 'white',
      border: 'solid 1px white',
      borderRadius: '0',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

    }
  }

  const customStylesItemAdcionado = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'none',
       '@media (max-width: 550px)': {
        left: '0px',
        background: 'black',

        height: '100%'
      }
    },
    content: {
      top: '25%',
      left: '80%',
      width: '150px',
      height: '35px',
      right: 'auto',
      bottom: 'auto',
      background: 'white',
      border: 'solid 1px white',
      borderRadius: '10px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zindex: 2,
     
    }

    
  }
  return (
    <div className="container-app">
      <div id='menu'> <CgMenuLeft color='white' size={40} /> </div>

      <Modal
        isOpen={modalAddOpen}
        style={customStylesItemAdcionado}
        contentLabel="Example Modal"
      >
        <table id='tabela-item-adcionado'>
          <tbody>
            <td ><AiOutlineShoppingCart className='imagem-item-adcionado' size={50} color="green" /></td>
            <td><BsCheckCircleFill className='check-item' size={30} /></td>
          </tbody>
        </table>
        <div class="container-item-adcionado">
          <div class="progress-bar"></div>
        </div>
      </Modal>

      <div className='menu-lateral'>
        <div className='container-menu-lateral'>
          <Link to='/' className='link-pizza'><FaPizzaSlice id='icons-pizza' size={40} /></Link>
          <Link to='/hamburger'><FaHamburger size={40} /></Link>
          <Link to='/sucos'><BiCoffeeTogo size={40} /></Link>
          <Link to='/sorvetes'><FaIceCream size={40} /></Link>
        </div>
      </div>
      <div className='menu-princial'>
        <div className='menu-comerce'>
          <IoFastFoodOutline size={50} color="yellow" />

          <h2>Food</h2>
          <h3>Commerce</h3>
        </div>
        <div className='shopping'>
          <h2>Meus Pedidos</h2>
          <h3> 03 lanches</h3>
          <button id="close" onClick={openModal}><AiOutlineShoppingCart class="svg" size={50} /></button>

        </div>
        <IoArrowRedo class="arrow" size={30} color="white" />
        <h1>Pizzas</h1></div>
      <div className='container'>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Frango</h3></div>
            <div className='bloco-body-container'><img src={pizzaBolonhesa}></img></div>
            <div className='bloco-descricao'><p>pizza frango com 400g de catupiry,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 43,25</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>

          <div className='bloco'>
            <div className='bloco-title'> <h3>Calabresa</h3></div>
            <div className='bloco-body-container'><img src={pizzaCalabresa}></img></div>
            <div className='bloco-descricao'><p>pizza calabresa, queijo, catupiry ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 38,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
        </div>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Chocolate</h3></div>
            <div className='bloco-body-container'><img src={pizzaChocolate}></img></div>
            <div className='bloco-descricao'><p>pizza chocolate com morango e discates,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 40,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>banana</h3></div>
            <div className='bloco-body-container'><img src={pizzaBanana}></img></div>
            <div className='bloco-descricao'><p>pizza banana com leite ninho ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,25</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='modal-body'>
            <table>
              <tr></tr>
              <tr>
                <td><img class="imagem-modal-item" src={Imagem}></img></td>
                <td>6</td>
                <td>R$ 500,00</td>
                <td><RiDeleteBin5Fill className='delet-modal-item' size={30} /></td>
              </tr>

              <tr>
                <td><img class="imagem-modal-item" src={Imagem} /></td>
                <td>6</td>
                <td>R$ 1200,00</td>
                <td><RiDeleteBin5Fill className='delet-modal-item' size={30} /></td>
              </tr>

              <tr>
                <td><img class="imagem-modal-item" src={Imagem} /></td>
                <td>6</td>
                <td>R$ 800,00</td>
                <td><RiDeleteBin5Fill className='delet-modal-item' size={30} /></td>
              </tr>

              <tr>
                <td><img class="imagem-modal-item" src={Imagem} /></td>
                <td>6</td>
                <td>R$ 3000,00</td>
                <td><RiDeleteBin5Fill className='delet-modal-item' size={30} /></td>
              </tr>
            </table>
            <div className='total-modal-itens'>total $300.00</div>
          </div>
          <button class="close-modal" onClick={closeModal}>Finalizar Pedido</button>
        </Modal>
      </div>
    </div>
  );
}

export default Pizza;
