import { useContext } from 'react'
import { CreateProduct } from '../components/CreateProduct'
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal'
import { ModalContext } from '../context/ModalContext'
import { IProduct } from '../models'
import { Products } from '../components/Products'
import { Error } from '../components/Error'
import { useHooks } from '../hooks/hooks'

export function App() {
  const {loading, error, products, addProduct} = useHooks()
  const {modal, open, close} = useContext(ModalContext)


  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <Error error={error} /> }
      { products.map(product => <Products product={product} key={product.id} />) }

      {modal && <Modal title="Create new product" onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >+</button>
    </div>
  )
}