import React from 'react';
import Modal from 'react-modal';
/*importando icons */
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

import Imagem from '../../images/pizza-Bolonhesa.jpg'
import pizzaBolonhesa from '../../images/pizza-Bolonhesa.jpg'
import pizzaCalabresa from '../../images/pizza-Calabresa.jpg'
import pizzaChocolate from '../../images/pizza-Chocolate.jpg'
import pizzaBanana from '../../images/pizza-banana.jpeg'
import pizzaMussarela from '../../images/pizza-mussarela.jpg'
import pizzaMilho from '../../images/pizza-milho-verde.jpg'
import pizzaModaChef from '../../images/moda-do-chef.jpg'
import pizzaNobre from '../../images/pizza-nobre.jpg'
import pizzaPortuguesa from '../../images/pizza-a-portuguesa.jpeg'
import pizzaNordestina from '../../images/carne-seca-9-1.jpeg'
import pizzaVegetariana from '../../images/pizza-vegetariana-00.jpeg'
import pizzaOba from '../../images/pizza-calabresa.jpeg'
import pizzaCamponesa from '../../images/camponesa.jpeg'
import pizzaBauru from '../../images/pizza-bauru.jpeg'
import pizzaToscana from '../../images/pizzaCalabresa.jpeg'
import pizzaBananaChocolate from '../../images/pizza-de-chocolate-e-banana.jpeg'
import pizzaPrestigio from '../../images/pizza-prestigio.jpeg'
import pizzaRomeuJulieta from '../../images/Pizza-de-Roemu-e-Julieta-Imagem-por-Pizzatec.jpeg'

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
          <Link to='/pasteis'><GiBreadSlice size={40} /></Link>
        </div>
      </div>
      <div className='menu-princial'>
        <div className='menu-comerce'>
          <IoFastFoodOutline id="icon" size={50} color="yellow" />

          <h2>Pizzaria e Lanchonete</h2>
          <h3>Brejo Grande</h3>
        </div>
        
        <IoArrowRedo class="arrow" size={30} color="white" />
        <h1>Pizzas</h1></div>
      <div className='container'>
        <div className='container-blocos'>
            <div className='bloco'>
            <div className='bloco-title'> <h3>Frango com Catupiry</h3></div>
            <div className='bloco-body-container'><img src={pizzaBolonhesa}></img></div>
            <div className='bloco-descricao'><p>Queijo Mussarela e tomate, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $43,00 & P: $33,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Mussarela</h3></div>
            <div className='bloco-body-container'><img src={pizzaMussarela}></img></div>
            <div className='bloco-descricao'><p>Queijo Mussarela e tomate, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $40,00 & P: $30,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
       <div className='bloco'>
            <div className='bloco-title'> <h3>Milho</h3></div>
            <div className='bloco-body-container'><img src={pizzaMilho}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela,milho e catupiry, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $42,00 & P: $32,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>

          <div className='bloco'>
            <div className='bloco-title'> <h3>A Moda do Chefe</h3></div>
            <div className='bloco-body-container'><img src={pizzaModaChef}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, frango desfiado, catupiry e bacon,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $43,00 & P: $33,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Nobre</h3></div>
            <div className='bloco-body-container'><img src={pizzaNobre}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, parmesão, peito de peru defumado e catupiry, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Americana</h3></div>
            <div className='bloco-body-container'><img src={pizzaCalabresa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, presunto, ovo, milho e catupiry, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Portuguesa</h3></div>
            <div className='bloco-body-container'><img src={pizzaPortuguesa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, Presunto, milho, palmito, ovo azeitona e cebola, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>nordestina</h3></div>
            <div className='bloco-body-container'><img src={pizzaNordestina}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, carne seca desfiada e cebola, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Vegetariana</h3></div>
            <div className='bloco-body-container'><img src={pizzaVegetariana}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, milho, ovo, palmito, catupiry, cebola e pimentão, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Oba Oba</h3></div>
            <div className='bloco-body-container'><img src={pizzaOba}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, presunto, calabresa  moída, ovo, bacon e pimentão, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>A moda da casa</h3></div>
            <div className='bloco-body-container'><img src={pizzaModaChef}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, presunto, milho, frango desfiado, bacon, catupiry e calabresa , uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $48,00 & P: $38,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Camponesa</h3></div>
            <div className='bloco-body-container'><img src={pizzaCamponesa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, milho, ovo, bacon, tomate e pimentão, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Calabresa</h3></div>
            <div className='bloco-body-container'><img src={pizzaCalabresa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, calabresa e cabola, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $42,00 & P: $32,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Bauru</h3></div>
            <div className='bloco-body-container'><img src={pizzaBauru}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, presunto e tomate, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $42,00 & P: $32,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Franciele</h3></div>
            <div className='bloco-body-container'><img src={pizzaBolonhesa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, calabresa, bacon e catupiry, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Toscana</h3></div>
            <div className='bloco-body-container'><img src={pizzaToscana}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, calabresa moída, milho e catupiry, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Romana</h3></div>
            <div className='bloco-body-container'><img src={pizzaCalabresa}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, presunto, milho, calabresa e bacon, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $45,00 & P: $35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Baiana</h3></div>
            <div className='bloco-body-container'><img src={pizzaOba}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, cebola, calabresa moída, pimenta, milho e pimentão, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>G: $44,00 & P: $34,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
        </div>

        <div className='menu-comerce'>
          
        <IoArrowRedo class="arrow" size={30} color="white" />
        <h1 id='doces'>Pizzas doces</h1></div>
        <div className='container-blocos'>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Brigadeiro</h3></div>
            <div className='bloco-body-container'><img src={pizzaChocolate}></img></div>
            <div className='bloco-descricao'><p>pizza chocolate com brigadeiro, uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>banana</h3></div>
            <div className='bloco-body-container'><img src={pizzaBanana}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, banana, leite condensado e canela ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>ChocoBanana</h3></div>
            <div className='bloco-body-container'><img src={pizzaBananaChocolate}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarela, banana, leite condensado e canela ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Romeu e Julieta</h3></div>
            <div className='bloco-body-container'><img src={pizzaRomeuJulieta}></img></div>
            <div className='bloco-descricao'><p>Queijo mussarena e Goiabada ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,00</h3>
              <IoMdAddCircle class="icone-add" onClick={openModalAddItem} size={50} color="yellow" />
            </div>
          </div>
          <div className='bloco'>
            <div className='bloco-title'> <h3>Prestigio</h3></div>
            <div className='bloco-body-container'><img src={pizzaPrestigio}></img></div>
            <div className='bloco-descricao'><p>Chocolate, coco ralado e leite condensado ,uma delicia!</p></div>
            <div className='bloco-add'>
              <h3>$ 35,00</h3>
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

export default Pizza;
