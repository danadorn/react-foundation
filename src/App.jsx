// // import React from 'react';
// // import NavFood from './components/food/NavFood';
// // import FooterFood from './components/food/FooterFood';

// // export default function KhmerFoodList() {
// //   const foodCategories = [
// //     {
// //       title: "Traditional Khmer Food",
// //       foods: [
// //         {
// //           name: "Amok Trey",
// //           description: "A traditional Khmer steamed fish curry with coconut milk.",
// //           image: "https://i.pinimg.com/736x/ee/f4/89/eef489e703861c87705bbeb6e311d6d1.jpg",
// //         },
// //         {
// //           name: "Bai Sach Chrouk",
// //           description: "Grilled pork served with rice and pickled vegetables.",
// //           image: "https://i.pinimg.com/1200x/5b/13/82/5b138240db62abc03302affd5d2024f7.jpg",
// //         },
// //         {
// //           name: "Sach Ko Arng",
// //           description: "Khmer noodles with green curry sauce and fresh herbs.",
// //           image: "https://i.pinimg.com/1200x/72/f9/63/72f9634ecdf84e3bd9a0e679cafeff0d.jpg",
// //         },
// //         {
// //           name: "Kuy Teav",
// //           description: "A savory rice noodle soup often eaten for breakfast.",
// //           image: "https://i.pinimg.com/1200x/37/28/c2/3728c275d05a72798c136b1550febe75.jpg",
// //         },
// //       ]
// //     },
// //     {
// //       title: "Khmer Sweets & Desserts",
// //       foods: [
// //         {
// //           name: "Nom Kor",
// //           description: "Traditional Khmer rice cake with sweet coconut filling.",
// //           image: "https://i.pinimg.com/736x/94/6a/ae/946aae3ee6c61a52f71aa182b272d63f.jpg",
// //         },
// //         {
// //           name: "Sang Kya Lpov",
// //           description: "Sweet pumpkin custard steamed in coconut milk.",
// //           image: "https://i.pinimg.com/1200x/10/25/6c/10256ca9cba56042213d1cf351a2fb45.jpg",
// //         },
// //         {
// //           name: "Akor Thnoat",
// //           description: "Traditional sticky rice dessert with coconut cream.",
// //           image: "https://i.pinimg.com/1200x/4b/85/fe/4b85fe4f843631dd0961e978cfc25f3f.jpg",
// //         },
// //         {
// //           name: "Check Ktis",
// //           description: "Sweet banana cake wrapped in banana leaves.",
// //           image: "https://i.pinimg.com/736x/2e/34/7b/2e347bb68aa9cb799043915225b36375.jpg",
// //         },
// //       ]
// //     },
// //     {
// //       title: "Fresh Juices & Beverages",
// //       foods: [
// //         {
// //           name: "Palm Juice",
// //           description: "Fresh palm juice tapped directly from sugar palm trees.",
// //           image: "https://i.pinimg.com/736x/cd/3c/fb/cd3cfbac8f4104fbde6998f1b900d8a7.jpg",
// //         },
// //         {
// //           name: "Sugar Cane Juice",
// //           description: "Freshly pressed sugar cane juice, naturally sweet and refreshing.",
// //           image: "https://i.pinimg.com/1200x/f0/d6/ae/f0d6ae476540274dc08b950d6d8c0ef9.jpg",
// //         },
// //         {
// //           name: "Tirk Mean",
// //           description: "Traditional tamarind drink with palm sugar.",
// //           image: "https://i.pinimg.com/1200x/f1/c4/a9/f1c4a91b60758b94f81cb7effaf115d2.jpg",
// //         },
// //         {
// //           name: "Coconut Water",
// //           description: "Fresh coconut water served directly from young coconuts.",
// //           image: "https://i.pinimg.com/1200x/32/db/00/32db005f238638ab0193a2f9723b69fc.jpg",
// //         },
// //       ]
// //     }
// //   ];

// //   return (
// //     <>
// //     <NavFood />
// //     <section className="text-center py-12 bg-white shadow-md">
// //       <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Khmer Food Gallery</h1>
// //       <p className="text-lg text-gray-600 mb-6">
// //         Discover the rich flavors of traditional Cambodian dishes. Handpicked and loved by locals!
// //       </p>
// //       <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow">
// //         Browse Foods
// //       </button>
// //     </section>
    
// //     <div className="bg-gray-100 py-8">
// //       {foodCategories.map((category, categoryIndex) => (
// //         <div key={categoryIndex} className="mb-12">

// //           <div className="px-13 mb-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
// //           </div>
          
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
// //             {category.foods.map((food, foodIndex) => (
// //               <div key={foodIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
// //                 <img
// //                   src={food.image}
// //                   alt={food.name}
// //                   className="w-full h-55 object-cover"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-2">{food.name}</h3>
// //                   <p className="text-sm text-gray-600">{food.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
    
// //     <FooterFood />    
// //     </>
// //   );
// // }



// import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import { BsXLg } from "react-icons/bs";
// export default function ProductComponent() {
 

//   //declare state for products
//   //      state   setState      initail state
//   const [product, setProduct] = useState([]);
//   const [pagination, setPagination] = useState(1);
//   const limit = 4;
// //   console.log(`The initail value : ${product}`)
// //   setProduct(1); //setState to update
// //   console.log(`After initail value : ${product}`)

// //console log of pagination
// console.log("The pagination: ", pagination)

// const handleNextPage = () =>{
//   setPagination(pagination + 1)
//   console.log(`The pagination after click this: ${pagination}`)
// }


// //const for base url
//   const BASE_URL = `https://fakestoreapi.in/api/products?page=${pagination}& limit=${limit}`;

//   //using useEffect
  
//   useEffect(()=>{
//     const fetchData = async() =>{
//     const res = await fetch(BASE_URL);
//     const data = await res.json();
//     const productData = await data.products;

//     //set productData into setProduct
//     setProduct(productData);
//     console.log(`Product Data : `, productData);
//   }
//   fetchData();
//   },[pagination,limit])

  

//   return (
//     <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-5">
//       {product.map((item, index) => (
//         /* eslint-disable no-console */
//         <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
//             <img alt={item.title} src={item.image} className="h-56 w-full object-cover"
//             />

//             <div className="bg-white p-4 sm:p-6">
//                 <a href="#">
//                 <h3 className="mt-0.5 text-lg text-gray-900">{item.title.substring(1,15)}</h3>
//                 </a>

//                 <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
//                 {item.description}
//                 </p>
//             </div>
//         </article>
//       ))}
//     </div>
//   );
// }

// export  function SubmitionForm() {
//   return(
//     <>
//     <div>
//       <FormComponent />
//     </div>
//     </>
//   )
  
// }


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderFooter/HeaderComponent';
import CompanyPage from './pages/CompanyPage';
import FeaturePage from './pages/FeaturePage';
import MarketplacePage from './pages/MarketplacePage';
import ProductPage from './pages/ProductPage';
import FormComponent from './components/FormComponent/FormComponent';
import CreateProductComponent from './components/FormComponent/CreateProductComponent';
import ProductDetailPage from './pages/ProductDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderComponent />} />
        <Route path="/componentpage" element={<CompanyPage />} />
        <Route path="/featurepage" element={<FeaturePage />} />
        <Route path="/marketplacepage" element={<MarketplacePage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/createproduct" element={<CreateProductComponent />} />      </Routes>
    </BrowserRouter>

    
  );
}
