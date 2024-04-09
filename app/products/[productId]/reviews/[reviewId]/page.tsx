"use client";

import { notFound } from "next/navigation";
//import  { Metadata } from "next";


// for custom error pages
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}


type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};






export default function ReviewDetail( { 
  params,
}: {
  params: {
    productId: string; 
    reviewId: string;
  };
} ) {
  const random = getRandomInt(2)

  if(random === 1) { 
    throw new Error('This is a random error') // will display the error page
  }


  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return <h1>Reviews {params.reviewId} for product {params.productId} </h1>;
}
