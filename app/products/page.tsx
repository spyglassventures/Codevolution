import Link from 'next/link';
export default function Products() {
const productId = 100

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link href="/home">
        Home
      </Link>
      <Link href="/products/1">
        Product 1
      </Link>
      <Link href={`products/${productId}`}>
        Product {productId}
      </Link>
    </>
  );
}