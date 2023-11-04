import Content from "./components/Content/Content"
import Header from "./components/Header/Header"
import data from './api/products.json'

function App() {
  const { type, products } = data
  return (
    <>
      <Header />
      <Content type={type} products={products}/>
    </>
  )
}

export default App
