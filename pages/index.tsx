// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button'
export default function Home() {
  const [percentage, setPercentage] = useState(10); 

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
          <p>誕生日: 10月10日</p>
          <p>生い立ち: 石川県誕生 → 富山県引っ越し → 大阪府引っ越し → 富山引っ越し → 金沢工業大学入学</p>
          <p>好きな食べ物:ぶどう</p>
          <p>趣味: 音楽鑑賞、旅行、ゲーム</p>
        </div>
        <div className="content">
          <h1>主な制作物</h1>
          <p>すれ違い合戦: Dis gassen</p>
          <div className='image-container'>
            <img src= {"/static/screenshots/disgassen.png"} style={{ width: 500, height: 500 }} />
          </div>
          <p>採掘ゲーム: Ohana</p>
          <div className='image-container'>
            <img src= {"/static/screenshots/ohana.png"} style={{ width: 500, height: 500 }} />
          </div>
          <p>ゲームアシスタントBot: Taoる</p>
          <div className='image-container'>
            <img src= {"/static/screenshots/taoru.png"} style={{ width: 500, height: 500 }} />
          </div>
        </div>
        <div className="content">
          <img src= {"/static/techs/python_icon.png"} style={{ width: 50, height: 50 }} />
          <p>Python</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
        <div className="content">
          <img src= {"/static/techs/python_icon.png"} style={{ width: 50, height: 50 }} />
          <p>Python</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
        <div className="content">
          <img src= {"/static/techs/javascript_icon.png"} style={{ width: 50, height: 50 }} />
          <p>JavaScript</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
        <div className="content">
          <img src= {"/static/techs/java_icon.png"} style={{ width: 50, height: 50 }} />
          <p>Java</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
        <div className="content">
          <img src= {"/static/techs/c_icon.png"} style={{ width: 50, height: 50 }} />
          <p>C</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
        <div className="content">
          <img src= {"/static/techs/mysql_icon.png"} style={{ width: 50, height: 50 }} />
          <p>MySQL</p>
          <ProgressBar percentage={percentage} />
          <Button text="click me" onClick={increaseProgress}/>
        </div>
      </div>
    </div>
  );
}