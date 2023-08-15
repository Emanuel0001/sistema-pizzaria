import { Link } from "react-router-dom";
import Modal from "react-modal";
import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import { GiBreadSlice } from "react-icons/gi";
import { CgMenuLeft } from "react-icons/cg";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowRedo } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";

import "./style.css";
import Imagem from "../../images/lanche-hamburger.jpg";
import hamburger from "../../images/lanche-hamburger.jpg";
import xFrango from "../../images/x-frango-1564805822.jpg";
import Xbacon from "../../images/lanche-xbacon.jpg";
import Misto from "../../images/lanche-misto.jpeg";
import xCalabresa from '../../images/x-calabresa.jpg'
import Bauru from '../../images/lanche-xburguer.png'
import Xtudo from '../../images/x-tudo.jpg';
import Xsalada from '../../images/x-salada-classico.jpeg'
function Hamburger() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalAddOpen, setIsModalAddOpen] = React.useState(false);

  function openModalAddItem() {
    setIsModalAddOpen(true);
    setTimeout(function () {
      setIsModalAddOpen(false);
    }, 3000);
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
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "none",
    },
    content: {
      top: "55%",
      left: "80%",
      width: "400px",
      height: "400px",
      right: "auto",
      bottom: "auto",
      background: "white",
      border: "solid 1px white",
      borderRadius: "0",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const customStylesItemAdcionado = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "none",
    },
    content: {
      top: "25%",
      left: "80%",
      width: "150px",
      height: "35px",
      right: "auto",
      bottom: "auto",
      background: "white",
      border: "solid 1px white",
      borderRadius: "10px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="container-app">
      <div id="menu">
        <CgMenuLeft color="white" size={40} />{" "}
      </div>
      <Modal
        isOpen={modalAddOpen}
        style={customStylesItemAdcionado}
        contentLabel="Example Modal"
      >
        <table id="tabela-item-adcionado">
          <tbody>
            <td>
              <AiOutlineShoppingCart
                className="imagem-item-adcionado"
                size={50}
                color="green"
              />
            </td>
            <td>
              <BsCheckCircleFill className="check-item" size={30} />
            </td>
          </tbody>
        </table>
        <div class="container-item-adcionado">
          <div class="progress-bar"></div>
        </div>
      </Modal>
      <div className="menu-lateral">
        <div className="container-menu-lateral">
          <Link to="/">
            <FaPizzaSlice size={40} />
          </Link>
          <Link to="/hamburger" className="link-hamburger">
            <FaHamburger id="icons-hamburger" size={40} />
          </Link>
          <Link to="/sucos">
            <BiCoffeeTogo size={40} />
          </Link>
          <Link to="/pasteis">
            <GiBreadSlice size={40} />
          </Link>
        </div>
      </div>
      <div className="menu-princial">
        <div className="menu-comerce">
          <IoFastFoodOutline id="icon" size={50} color="yellow" />
          <h2>Pizzaria e Lanchonete</h2>
          <h3>Brejo Grande</h3>
        </div>
        <IoArrowRedo class="arrow" size={30} color="white" />
        <h1>Lanches</h1>
      </div>
      <div className="container">
        <div className="container-blocos">
        <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Salada</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Xsalada}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, Hamburguer, Presunto, Queijo Mussarela, presunto, ovo, milho, alface, tomate, batata palha e Maionese.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 12,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
        <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Tudo</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Xtudo}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, Hamburguer, Presunto, Queijo Mussarela, calabresa, bacon, frango, milho, catupiry, ovo, alface, tomate, batata palha e Maionese.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 18,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
         
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Especial</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Xtudo}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, 2 Hamburguer, 2 ovo, Queijo mussarela, presunto, calabresa, frango, bacon, catupiry, milho, alface, tomate, batata palha e Maionese.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 20,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-burger</h3>
            </div>
            <div className="bloco-body-container">
              <img src={hamburger}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, Hamburguer, Presunto, Queijo, Mussarela, Alface, Tomate, Batata e palha e Maionese.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 12,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>

          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Frango</h3>
            </div>
            <div className="bloco-body-container">
              <img src={xFrango}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, File de peito, Ovo, Queijo mussarela, Alface, Queijo mussarela, tomate, Batata palha e maionese</p>
            </div>
            <div className="bloco-add">
              <h3>$ 15,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Calabresa</h3>
            </div>
            <div className="bloco-body-container">
              <img src={xCalabresa}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão Hamburguer, Hamburger, Queijo mussarela, Presunto, Ovo, Calabresa, Alface, tomate, Batata palha e maionese</p>
            </div>
            <div className="bloco-add">
              <h3>$ 15,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
        </div>
        <div className="container-blocos">
        <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>Bauru de Carne</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Bauru}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão de Hamburger, Carne, Queijo mussarela, presunto, Alface, Tomate, Batata Palha e Maionese. </p>
            </div>
            <div className="bloco-add">
              <h3>$ 17,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X-Churrasco</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Bauru}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão de Hamburger, Carne, Queijo mussarela, presunto, Ovo, Bacon, Milho, Alface, Tomate, Batata Palha e Maionese. </p>
            </div>
            <div className="bloco-add">
              <h3>$ 18,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>X bacon</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Xbacon}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão de Hamburger, Hamburger, queijo mussarela, Presunto, bacon, ovo, alface, tomate, batata palha e Maionese.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 15,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
            </div>
          </div>
          <div className="bloco">
            <div className="bloco-title">
              {" "}
              <h3>MISTO</h3>
            </div>
            <div className="bloco-body-container">
              <img src={Misto}></img>
            </div>
            <div className="bloco-descricao">
              <p>Pão de Hamburger, Queijo mussarela, presunto e Catupiry.</p>
            </div>
            <div className="bloco-add">
              <h3>$ 15,00</h3>
              <IoMdAddCircle
                class="icone-add"
                onClick={openModalAddItem}
                size={50}
                color="yellow"
              />
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
          <div className="modal-body">
            <table>
              <tr></tr>
              <tr>
                <td>
                  <img class="imagem-modal-item" src={Imagem}></img>
                </td>
                <td>6</td>
                <td>R$ 500,00</td>
                <td>
                  <RiDeleteBin5Fill className="delet-modal-item" size={30} />
                </td>
              </tr>

              <tr>
                <td>
                  <img class="imagem-modal-item" src={Imagem} />
                </td>
                <td>6</td>
                <td>R$ 1200,00</td>
                <td>
                  <RiDeleteBin5Fill className="delet-modal-item" size={30} />
                </td>
              </tr>

              <tr>
                <td>
                  <img class="imagem-modal-item" src={Imagem} />
                </td>
                <td>6</td>
                <td>R$ 800,00</td>
                <td>
                  <RiDeleteBin5Fill className="delet-modal-item" size={30} />
                </td>
              </tr>

              <tr>
                <td>
                  <img class="imagem-modal-item" src={Imagem} />
                </td>
                <td>6</td>
                <td>R$ 3000,00</td>
                <td>
                  <RiDeleteBin5Fill className="delet-modal-item" size={30} />
                </td>
              </tr>
            </table>
            <div className="total-modal-itens">total $300.00</div>
          </div>
          <button class="close-modal" onClick={closeModal}>
            Finalizar Pedido
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default Hamburger;
