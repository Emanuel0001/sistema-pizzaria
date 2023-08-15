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
import pastelQueijo from '../../images/pastelQueijo.jpg';
import sorveteChocolate from '../../images/sorvete-chocolate.jpg';
import pastelQueijoMilho from '../../images/queijoCatupiryMilho.jpeg';
import pastelCarne from '../../images/pastel-de-carne1.jpg';
import pastelCarneCatupiry from '../../images/pastelCarneCatupiry.jpg';
import pastelFrango from '../../images/pastel-frango.jpg';
import pastelFrangoCatupiry from '../../images/pastel-frango-catupiry.jpg';
import pastelFrangoQueijo from '../../images/pastelFrangoQueijo.jpg';
import pastelFrangoMilho from '../../images/pastelFrangoMilho.jpg';
import pastelBacon from '../../images/pastelBacon.jpg';
import pastelPizza from  '../../images/pastelPizza.jpg';
import pastelCalabresa from  '../../images/pastel-de-calabresa-com.jpg';
import pastelPeru from '../../images/pastelPeru.jpg'
import pastelCarneSeca from '../../images/pastelCarneSeca.jpg'
function Sorvetes() {
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
          <Link to='/'><FaPizzaSlice size={40} /></Link>
          <Link to='/hamburger' ><FaHamburger size={40} /></Link>
          <Link to='/sucos'><BiCoffeeTogo size={40} /></Link>
          <Link to='/sorvetes' className='link-sorvetes'><GiBreadSlice id='icons-sorvetes' size={40} /></Link>
        </div>
      </div>
      <div className='menu-princial'>
        <div className='menu-comerce'>
        <IoFastFoodOutline id="icon" size={50} color="yellow" />

        <h2>Pizzaria e Lanchonete</h2>
        <h3>Brejo Grande</h3>
        </div>
        <IoArrowRedo class="arrow" size={30} color="white"/>
        <h1>Pasteis</h1></div>
        <div className='container'>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Queijo</h3></div>
            <div className='bloco-body-container'><img src={pastelQueijo}></img></div>
            <div className='bloco-descricao'><p>Quejo mussarela, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Queijo com Catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelQueijo}></img></div>
            <div className='bloco-descricao'><p>Quejo mussarela com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Queijo com Catupiry e Milho</h3></div>
            <div className='bloco-body-container'><img src={pastelQueijoMilho}></img></div>
            <div className='bloco-descricao'><p>Quejo mussarela com catupiry e milho, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 8,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Carne</h3></div>
            <div className='bloco-body-container'><img src={pastelCarne}></img></div>
            <div className='bloco-descricao'><p>Pastel de carne moída, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Carne com catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelCarneCatupiry}></img></div>
            <div className='bloco-descricao'><p>Pastel de carne moída com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Carne com queijo e milho</h3></div>
            <div className='bloco-body-container'><img src={pastelCarneCatupiry}></img></div>
            <div className='bloco-descricao'><p>Pastel de carne moída com queijo e milho, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 8,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Frango</h3></div>
            <div className='bloco-body-container'><img src={pastelFrango}></img></div>
            <div className='bloco-descricao'><p>Pastel de frango desfiado, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Frango Catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelFrangoCatupiry}></img></div>
            <div className='bloco-descricao'><p>Pastel de frango desfiado com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Frango Queijo</h3></div>
            <div className='bloco-body-container'><img src={pastelFrangoQueijo}></img></div>
            <div className='bloco-descricao'><p>Pastel de frango desfiado com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Frango com catupiry e milho</h3></div>
            <div className='bloco-body-container'><img src={pastelFrangoMilho}></img></div>
            <div className='bloco-descricao'><p>Pastel de frango desfiado com catupiry e milho, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 8,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>bacon com queijo</h3></div>
            <div className='bloco-body-container'><img src={pastelBacon}></img></div>
            <div className='bloco-descricao'><p>Pastel de bacon com queijo, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>bacon com Catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelBacon}></img></div>
            <div className='bloco-descricao'><p>Pastel de bacon com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Pizza</h3></div>
            <div className='bloco-body-container'><img src={pastelPizza}></img></div>
            <div className='bloco-descricao'><p>Pastel de Presunto, queijo e orégano e tomate, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>calabresa com queijo</h3></div>
            <div className='bloco-body-container'><img src={pastelCalabresa}></img></div>
            <div className='bloco-descricao'><p>Pastel de calabresa e queijo, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>calabresa com catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelCalabresa}></img></div>
            <div className='bloco-descricao'><p>Pastel de calabresa com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Peito de peru com Queijo</h3></div>
            <div className='bloco-body-container'><img src={pastelPeru}></img></div>
            <div className='bloco-descricao'><p>Pastel de Peito de peru com queijo, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 8,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Peito de peru com Catupiry</h3></div>
            <div className='bloco-body-container'><img src={pastelPeru}></img></div>
            <div className='bloco-descricao'><p>Pastel de Peito de peru com catupiry, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 8,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Carne seca com queijo e cebola</h3></div>
            <div className='bloco-body-container'><img src={pastelCarneSeca}></img></div>
            <div className='bloco-descricao'><p>Pastel de carne seca com queijo e cebola, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Carne seca com catupiry e cebola</h3></div>
            <div className='bloco-body-container'><img src={pastelCarneSeca}></img></div>
            <div className='bloco-descricao'><p>Pastel de carne seca com catupiry e cebola, uma delícia!</p></div>
            <div className='bloco-add'>
              <h3>$ 7,00</h3>
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

export default Sorvetes;
