import Modal from 'react-modal';
import React from 'react';

import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';
import { GiBreadSlice } from 'react-icons/gi';
import { CgMenuLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoArrowRedo } from 'react-icons/io5'
import { IoMdAddCircle } from 'react-icons/io'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BsCheckCircleFill } from 'react-icons/bs'
import { GiFrenchFries } from "react-icons/gi";

import './style.css' 
import Imagem from '../../images/lanche-hamburger.jpg';
import porcaoBatata from '../../images/porcaoBatata.jpg';
import porcaoCalabresa from  '../../images/porcaoCalabresa.jpg';
import porcaoBatataCalabresa from '../../images/porcaoBatataCalabresa.png'

function Porcoes() {
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

    }}
    const customStylesItemAdcionado = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'none'
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
        <Link to='/'><FaPizzaSlice className='icons' size={40}/></Link>
         <Link to='/hamburger'><FaHamburger className='icons' size={40}/></Link>
         <Link to='/sucos' ><BiCoffeeTogo size={40}/></Link>
         <Link to='/pasteis'><GiBreadSlice size={40} /></Link>
         <Link to="/porcoes" className='link-porcoes'> <GiFrenchFries  id='icons-sucos' size={40} /></Link>

        </div>
      </div>
      <div className='menu-princial'>
      <div className='menu-comerce'>
          <IoFastFoodOutline id="icon" size={50} color="yellow" />

          <h2>Pizzaria e Lanchonete</h2>
          <h3>Brejo Grande</h3>
        </div>
       
        <IoArrowRedo class="arrow" size={30} color="white"/>
        <h1>Porções</h1></div>
        <div className='container'>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Batata</h3></div>
            <div className='bloco-body-container'><img src={porcaoBatata}></img></div>
            <div className='bloco-descricao'><p>Porção de batata 400g</p></div>
            <div className='bloco-add'>
              <h3>$ 15,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Batata com calabresa e cebola</h3></div>
            <div className='bloco-body-container'><img src={porcaoBatataCalabresa}></img></div>
            <div className='bloco-descricao'><p>Porção de batata com calabresa e cebola.</p></div>
            <div className='bloco-add'>
              <h3>$ 25,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Calabresa Acebolada</h3></div>
            <div className='bloco-body-container'><img src={porcaoCalabresa}></img></div>
            <div className='bloco-descricao'><p>Porção de mandioca e cebola.</p></div>
            <div className='bloco-add'>
              <h3>$ 15,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <footer className='rodape'>
             <h1>Emanuel Hitallo © 2023</h1>
             <h1>Engenheiro de Software</h1>
             <h1>{"(38) 99735-2319"}</h1>
          </footer>
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

export default Porcoes;
