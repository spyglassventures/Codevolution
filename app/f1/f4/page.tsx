import Link from 'next/link';

export default function F4() {
    return (
        <div>
        <h1>F4 subfolder hard coded</h1>
        <Link href="/f1/f3">Go to F3</Link>
        <Link href="/about">Go to About</Link>
       
        </div>
    );
    }