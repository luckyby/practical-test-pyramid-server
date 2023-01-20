import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    <div className={styles.mainWrapper}>

      <main className={styles.main}>

        <div className={styles.pagetitle}>

          <h2>About this server</h2>
        </div>
        <div className={styles.routesBlock}>
          <div className={styles.routes}>
            <div className={styles.routesTitle}>For What?</div>
            <div className={styles.mainList}>
              <p>This server was created to study the testing principles described by Martin Flower in his article&nbsp;
                <a href="https://martinfowler.com/articles/practical-test-pyramid.html" className={styles.card2PagesLink}>
                  &quot;The Practical Test Pyramid&quot;
                </a>
              </p>
            </div>
            <div className={styles.routesTitle}>How it works?</div>
            <div className={styles.mainList}>
              <p>
                For fetch data server calls API of the <a href="http://localhost:4003/" className={styles.card2PagesLink}>users database server</a>  and
                API of <a href="https://bank.gov.ua/ua/open-data/api-dev" className={styles.card2PagesLink}>National Bank of Ukraine server</a>
              </p>
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
