import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import data from './api/products.json'
import Footer from "./components/Footer/Footer"

function App() {
  const { type, products } = data
  return (
    <>
      <Header />
      <Content type={type} products={products}/>
      <Footer />
    </>
  )
}

export default App
