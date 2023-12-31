import React from 'react'
import Card from './Card'

const CardList = () => {
    const cardsData = [
      {
        description: '24/7 support for all your queries',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzneUGdvJkm1mpEe-RyZwDkccd3iw_Eny5WI0hKyV59lOrCT5rVprsmGaBOYQ-kQvXcE&usqp=CAU',
      },
      {
        description: 'Our Doctors are highly qualified and experienced',
        imageUrl: 'https://i.pinimg.com/736x/7c/46/d1/7c46d10a7ddd73cd773c44531ccc43a5.jpg',
      },
      {
        description: 'We provide the best medical services in the country',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRCgvgB1bB92n4IyFYYRr4ANODi7_mmvl-iaie2kSkrM2FVJTsTGCQUvTxwd9gOc67jI&usqp=CAU',
      },
      {
        description: 'Get Started in 3 easy steps',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/10/18/22/48/pie-chart-6722292_1280.png',
      },
      {
        description: 'Get Support from our team of experts',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgW5xL_C1ggme9w2IKVUF98mfx710PmxFeHQuTG75cM8ERBqO7Qw1TXwgE_mmbbmYqkE&usqp=CAU',
      },
      {
        description: 'Affordable prices for all our services',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUL2aD3j3SStUZRhW4lMLWIER4tT4Lg6IN7rpNsRf02gI3yn52MQHUlbbVIH-gMd8jag&usqp=CAU',
      },
    ];
  
    return (
      <div className="flex flex-row flex-wrap ml-8">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  export default CardList;