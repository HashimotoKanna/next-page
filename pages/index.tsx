import Link from 'next/link';
import Image from 'next/image';
const Home = () => {
  return (
    <div>
      <h1>ようこそ next pageへ!</h1>
      <Image 
        src="/static/cat.jpg"
        alt="logo"
        width={150}
        height={50}
        />
      <Link href="/about" style={{ textDecoration: 'underline', color: 'red' }}>
        About Page
      </Link>
    </div>
  );
};

export default Home;
