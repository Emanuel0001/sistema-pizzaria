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

import './style.css' 
import Imagem from '../../images/lanche-hamburger.jpg';
import sucoGoiaba from '../../images/suco-Goiaba.jpeg';
import sucoAcerola from '../../images/Suco-de-acerola.jpg';
import sucoMaracuja from '../../images/Suco-Maracuja.jpg';
import sucoAbacaxi from '../../images/sucoAbacaxi.jpg';
import sucoCoquinho from '../../images/sucoCoquinho.jpg';
import sucoLimao from '../../images/sucoLimao.jpg';
import sucoLaranja from '../../images/sucoLaranja.jpg';

function Sucos() {
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
         <Link to='/sucos' className='link-sucos'><BiCoffeeTogo id='icons-sucos' size={40}/></Link>
         <Link to='/pasteis'><GiBreadSlice size={40} /></Link>
        </div>
      </div>
      <div className='menu-princial'>
      <div className='menu-comerce'>
          <IoFastFoodOutline id="icon" size={50} color="yellow" />

          <h2>Pizzaria e Lanchonete</h2>
          <h3>Brejo Grande</h3>
        </div>
       
        <IoArrowRedo class="arrow" size={30} color="white"/>
        <h1>Sucos</h1></div>
        <div className='container'>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>goiaba</h3></div>
            <div className='bloco-body-container'><img src={sucoGoiaba}></img></div>
            <div className='bloco-descricao'><p>Goiaba com leite - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>

          <div className='bloco'>
            <div className='bloco-title'> <h3>Acerola</h3></div>
            <div className='bloco-body-container'><img src={sucoAcerola}></img></div>
            <div className='bloco-descricao'><p>Acerola com leite - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
        </div>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Maracujá</h3></div>
            <div className='bloco-body-container'><img src={sucoMaracuja}></img></div>
            <div className='bloco-descricao'><p>Suco de Maracujá - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Abacaxi</h3></div>
            <div className='bloco-body-container'><img src={sucoAbacaxi}></img></div>
            <div className='bloco-descricao'><p>Suco de Abacaxi - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Coquinho do Mato</h3></div>
            <div className='bloco-body-container'><img src={sucoCoquinho}></img></div>
            <div className='bloco-descricao'><p>Suco de coquinho azedo - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Suco de Limão</h3></div>
            <div className='bloco-body-container'><img src={sucoLimao}></img></div>
            <div className='bloco-descricao'><p>Suco de limão - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Suco de Laranja</h3></div>
            <div className='bloco-body-container'><img src={sucoLaranja}></img></div>
            <div className='bloco-descricao'><p>Suco de Laranja azedo - 500ml</p></div>
            <div className='bloco-add'>
              <h3>$ 5,00</h3>
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

export default Sucos;
