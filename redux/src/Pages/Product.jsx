import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Components/Modal'
import Input from '../Components/Input'
import Button from '../Components/Button'
import {useState} from 'react'
import {createDataFunc, updateDataFunc, clearUpdateItem} from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'

const Product = () => {

  const dispatch = useDispatch()
  const {modal} = useSelector(state => state.modal)
  const {data, updateItem } = useSelector(state => state.data)
  const [productInfo,setProductInfo] = useState({name: "", price: "", url: ""})

  useEffect(() => {
    if(updateItem){
      setProductInfo({
        name: updateItem.name,
        price: updateItem.price,
        url: updateItem.url,
        id: updateItem.id
      })
    }
  },[updateItem])
  

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
    }else {
      setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  }

  const buttonFunc = () => {
    if(updateItem){
      dispatch(updateDataFunc(productInfo))
      dispatch(clearUpdateItem())
    } else {
      const newProduct = {...productInfo, id: Date.now()}
      dispatch(createDataFunc(newProduct))
    }
    dispatch(modalFunc())
    setProductInfo({name: "", price: "", url: ""})
  }

  const contentModal = () => (
    <>
       <Input type={"text"} value={productInfo.name} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")}></Input>
       <Input type={"number"} value={productInfo.price} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")}></Input>
       <Input type={"text"}  placeholder={"Resim Ekle"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "file")}></Input>
       <Button btnText={updateItem ? "Güncelle" : "Ürün Ekle"} onClick={buttonFunc}/>
    </>
  )

  return (
    
    <div className=''>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            data?.map((dt,i) => (
              <ProductCard key={i} dt={dt}/>
            ))
          }
        </div>
        
        {modal && <Modal content={contentModal()} title={updateItem ? 'Ürünü Güncelle' : 'Ürün Ekle'} />}
    </div>
  )
}

export default Product