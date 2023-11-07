import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import data from './api/products.json'
import Footer from "./components/Footer/Footer"
import SigueMercando from "./components/SigueMercando/SigueMercando"
import FiltrarButton from "./components/FiltrarButton/FiltrarButton"
import Modal from "./components/Modal/Modal"
import styles from './App.module.scss'
import { useState } from "react"

function App() {
  const { type, products } = data
  const [openModal, setOpenModal] = useState(false)
  const [filtros, setFiltros] = useState([])
  const [productsFiltered, setProductsFiltered] = useState(products)
  const filtrarAction = (filtros: string[]) => {
    if(filtros.length !== 0){
      const filtered = products.filter(producto => filtros.includes(String(producto.id)));
      setProductsFiltered(filtered)
    } else {
      setProductsFiltered(products)
    }
    setOpenModal(false)
  }
  const limpiarAction = () => {
    setProductsFiltered(products)
    setOpenModal(false)
  }
  return (
    <div className={styles.container}>
      <Header />
      <Content type={type} products={productsFiltered}/>
      <SigueMercando />
      <Footer />
      <FiltrarButton setOpenModal={setOpenModal}/>
      <Modal openModal={openModal} setOpenModal={setOpenModal} filtros={filtros} setFiltros={setFiltros} filtrarAction={filtrarAction} limpiarAction={limpiarAction}/>
    </div>
  )
}

export default App
