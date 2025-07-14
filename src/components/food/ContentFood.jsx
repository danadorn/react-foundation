import React from 'react';

const KhmerFoodList = () => {
  const khmerFoods = [
    {
      name: "Amok Trey",
      description: "A traditional Khmer steamed fish curry with coconut milk.",
      image: "https://example.com/amok-trey.jpg",
    },
    {
      name: "Bai Sach Chrouk",
      description: "Grilled pork served with rice and pickled vegetables.",
      image: "https://example.com/bai-sach-chrouk.jpg",
    },
    {
      name: "Nom Banh Chok",
      description: "Khmer noodles with green curry sauce and fresh herbs.",
      image: "https://example.com/nom-banh-chok.jpg",
    },
    {
      name: "Kuy Teav",
      description: "A savory rice noodle soup often eaten for breakfast.",
      image: "https://example.com/kuy-teav.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {khmerFoods.map((food, index) => (
        <div key={index} className="bg-white rounded-2xl shadow p-4">
          <img src={food.image} alt={food.name} className="w-full h-48 object-cover rounded-xl" />
          <h2 className="text-xl font-bold mt-3">{food.name}</h2>
          <p className="text-gray-600">{food.description}</p>
        </div>
      ))}
    </div>
  );
};

export default KhmerFoodList;
