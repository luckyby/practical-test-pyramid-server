import styles from "../styles/Home.module.css";

// import fs from "fs";

function Exchange(props) {

  const rateUSD = props.rateUSD
  const exchangeDate = props.exchangeDate

  return (
    <div className={styles.mainWrapper}>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h3>
            <a href="https://bank.gov.ua" className={styles.card2PagesLink}>National Bank of Ukraine</a> exchange rate on {exchangeDate}&nbsp;
          </h3>
        </div>
        <div className={styles.routesBlock}>
          <div className={styles.routes}>
            <div className={styles.mainList}>
              <h2>1 USD = {rateUSD} UAH</h2>
            </div>
          </div>
        </div>
        <div className={styles.mainLink}>
          <a href="http://localhost:3010/" className={styles.card2PagesLink}>
            <h4>Go to main page</h4>
          </a>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {

  const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

  const res = await fetch(url);
  const json = await res.json();
  const jsonUSD = json["25"]
  const rateUSD = jsonUSD.rate
  const exchangeDate = jsonUSD.exchangedate

  // async function readJsonFile(fileName) {
  //   const fsPromises = require('fs').promises;
  //   const data = await fsPromises.readFile(fileName)
  //       .catch((err) => console.error('Failed to read file', err));
  //
  //   return data
  // }
  // let jsonData
  // fs.readFile('./pages/exchange.json', (err, data)=>{
  //   if (err) throw err;
  //   // console.log(data);
  //
  //   jsonData = JSON.parse(data.toString());
  //   // console.log(jsonData);
  // })
  async function getData ( ) {
    const fsPromise = require('fs/promises');
    try {
      const data = await fsPromise.readFile('./pages/exchange.json');
      // console.log('data:', data)
      return JSON.parse(data.toString())
    } catch (err) {
      console.log(err)
    }
  }
  //   const fs = require('fs/promises');
  //   // const fsPromises = require('fs').promises;
  //
  //       .catch((err) => console.error('Failed to read file', err));
  //
  //   return data
  // }
  let jsonData = await getData()
  // console.log('jsonData = ', jsonData)
  //
  return {
    props: {
      "rateUSD": rateUSD,
      "exchangeDate": exchangeDate
    },
  };
}

export default Exchange;
