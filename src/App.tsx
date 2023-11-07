import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import data from './api/products.json'
import Footer from "./components/Footer/Footer"
import SigueMercando from "./components/SigueMercando/SigueMercando"
import FiltrarButton from "./components/FiltrarButton/FiltrarButton"
import Modal from "./components/Modal/Modal"
import styles from './App.module.scss'

function App() {
  const { type, products } = data
  return (
    <div className={styles.container}>
      <Header />
      <Content type={type} products={products}/>
      <SigueMercando />
      <Footer />
      <FiltrarButton />
      <Modal />
    </div>
  )
}

export default App
