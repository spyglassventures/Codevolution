import { notFound } from "next/navigation";
import  { Metadata } from "next";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};


export const generateMetadata = ( { params }: Props): Metadata => {
  return {
    title: `Review ${params.reviewId} for product ${params.productId}`,
  };
}



export default function ReviewDetail( { 
  params,
}: {
  params: {
    productId: string; 
    reviewId: string;
  };
} ) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return <h1>Reviews {params.reviewId} for product {params.productId} </h1>;
}
