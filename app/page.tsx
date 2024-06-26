import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link href="/login">
        Login
      </Link>
      <Link href="/products">
        Products
      </Link>
      <Link href="/blog">
        Blog
      </Link>
    </>
  );
}