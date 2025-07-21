import React, { useState } from 'react'
import {Card, CardBody, CardFooter, Image} from "@heroui/react";


 

export default function ProductComponent() {
    // declare state for product
    // 
    const [product, setProduct] = useState(0);
    console.log(`The initial value:  ${product}`)
    setProduct(1), // setState to update
    console.log(`After initial value: " ${product}`)

    const BASE_URL = "https://fakestoreapi.in/api/products?page="
    const fetchData = async() =>{
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const productData = await data.products;

        setProduct(productData);
        console.log('Product Data: ', productData);
    }
    fetchData();

   
  return (
    <>
     <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {product.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
              height={350}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  )
}
