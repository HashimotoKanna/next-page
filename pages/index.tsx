// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button'
export default function Home() {
  const [percentage, setPercentage] = useState(10); // 初期値を10%に設定

  const increaseProgress = () => {
    setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div>
      <Head>
        <title>My Discord Style Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="header">
          <h1>Welcome to My Portfolio</h1>
        </div>
        <div className="content">
          <p>This is a simple portfolio site styled like Discord.</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
      </div>
    </div>
  );
}