import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import data from './api/products.json'
import Footer from "./components/Footer/Footer"
import SigueMercando from "./components/SigueMercando/SigueMercando"

function App() {
  const { type, products } = data
  return (
    <>
      <Header />
      <Content type={type} products={products}/>
      <SigueMercando />
      <Footer />
    </>
  )
}

export default App
