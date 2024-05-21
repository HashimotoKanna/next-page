// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import styles from '../styles/Home.module.css'; // 新しいCSSファイルをインポート

export default function Home() {
  const [pythonPercentage, setPythonPercentage] = useState(10);
  const [javascriptPercentage, setJavascriptPercentage] = useState(10);
  const [javaPercentage, setJavaPercentage] = useState(10);
  const [cPercentage, setCPercentage] = useState(10);
  const [mysqlPercentage, setMysqlPercentage] = useState(10);

  const pythonProgress = () => {
    setPythonPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  };
  const javascriptProgress = () => {
    setJavascriptPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  };
  const javaProgress = () => {
    setJavaPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  };
  const cProgress = () => {
    setCPercentage((prev) => (prev < 100 ? prev + 10 : 100));
  };
  const mysqlProgress = () => {
    setMysqlPercentage((prev) => (prev < 100 ? prev + 10 : 100));
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

          <p>生い立ち</p>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>2003年10月</td>
                <td>石川県誕生</td>
              </tr>
              <tr>
                <td>2004年8月</td>
                <td>富山県引っ越し</td>
              </tr>
              <tr>
                <td>2013年8月</td>
                <td>大阪府引っ越し</td>
              </tr>
              <tr>
                <td>2016年5月</td>
                <td>富山県引っ越し</td>
              </tr>
              <tr>
                <td>2022年4月</td>
                <td>金沢工業大学入学</td>
              </tr>
            </tbody>
          </table>
          <p>好きな食べ物:ぶどう</p>
          <p>趣味: 音楽鑑賞、旅行、ゲーム</p>
        </div>
        <div className="content">
          <h1>主な制作物</h1>
          <p>すれ違い合戦: Dis gassen</p>
          <div className='image-container'>
            <img src={"/static/screenshots/disgassen.png"} style={{ width: 500, height: 500 }} />
          </div>
          <p>採掘ゲーム: Ohana</p>
          <div className='image-container'>
            <img src={"/static/screenshots/ohana.png"} style={{ width: 500, height: 500 }} />
          </div>
          <p>ゲームアシスタントBot: Taoる</p>
          <div className='image-container'>
            <img src={"/static/screenshots/taoru.png"} style={{ width: 500, height: 500 }} />
          </div>
          <p>自宅のRaspberry Piサーバー</p>
          <div className='image-container'>
            <img src={"/static/screenshots/raspberryPi.png"} style={{ width: 700, height: 500 }} />
          </div>
        </div>

        <div className="content">
          <img src={"/static/techs/python_icon.png"} style={{ width: 50, height: 50 }} />
          <p>Python</p>
          <ProgressBar percentage={pythonPercentage} />
          <Button text="click me" onClick={pythonProgress} />
        </div>
        <div className="content">
          <img src={"/static/techs/javascript_icon.png"} style={{ width: 50, height: 50 }} />
          <p>JavaScript</p>
          <ProgressBar percentage={javascriptPercentage} />
          <Button text="click me" onClick={javascriptProgress} />
        </div>
        <div className="content">
          <img src={"/static/techs/java_icon.png"} style={{ width: 50, height: 50 }} />
          <p>Java</p>
          <ProgressBar percentage={javaPercentage} />
          <Button text="click me" onClick={javaProgress} />
        </div>
        <div className="content">
          <img src={"/static/techs/c_icon.png"} style={{ width: 50, height: 50 }} />
          <p>C</p>
          <ProgressBar percentage={cPercentage} />
          <Button text="click me" onClick={cProgress} />
        </div>
        <div className="content">
          <img src={"/static/techs/mysql_icon.png"} style={{ width: 50, height: 50 }} />
          <p>MySQL</p>
          <ProgressBar percentage={mysqlPercentage} />
          <Button text="click me" onClick={mysqlProgress} />
        </div>
      </div>
    </div >
  );
}
