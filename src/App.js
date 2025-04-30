import axios from 'axios';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';
import Navbar from './nav';


function App() {

  let [categories, setCategories] = useState([])

  let [productItems, setProductItems] = useState([])

  let [catName, setCatName] = useState('')

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalres) => {
        // console.log(finalres);
        setCategories(finalres);
      })
  }

  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalres) => {
        // console.log(finalres);
        setProductItems(finalres.products);
      })
  }

  useEffect(() => {
    getCategory();
    getProduct();
  }, [])

  useEffect(() => {
    if (catName !== '') {
      // console.log(catName);
      axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((res) => res.data)
        .then((finalres) => {
          // console.log(finalres);
          setProductItems(finalres.products);
        })

    }
  }, [catName])

  let Pitems = productItems.map((product, index) => {
    return (
      <ProductItems product={product} key={index} />
    )
  })

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='py-[2px]'>
          <div className='max-w-[1320px] mx-auto'>
            {/* {categories.length} */}
            <div className="flex justify-between items-center mb-[30px]">
              <h3 className="text-[20px] font-bold text-left py-3 ">Product Category</h3>
              <h1 className="text-[30px] font-bold text-center mx-auto">Our Products</h1>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-[20%_auto] gap-[20px] h-[calc(100vh-80px)]'>
              <div className='overflow-y-auto pr-2'>
                <Category categories={categories} setCatName={setCatName} />
              </div>

              <div className='overflow-y-auto pr-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                  {
                    productItems.length >= 1 ? Pitems : <h1>No Product Found</h1>
                  }
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;

function ProductItems({ product }) {
  return (
    <div className='shadow-lg  text-center pb-4'>
      <img src={product.thumbnail} className='w-[100%] h-[200px]' alt={product.title}></img>
      <h4>{product.title}</h4>
      <b>RS {product.price}</b>
    </div>
  )
}






