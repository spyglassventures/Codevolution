import Link from "next/link";

export default function ProductsDetails( { 
  params,
}: {
  params: {productId: string };
} ) {
  return 
  (
    <>
  <Link href="/home">Home</Link>
  <h1>Details about product {params.productId} </h1>
  </>
  );
}
