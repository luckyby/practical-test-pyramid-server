import styles from "../styles/Home.module.css";
import Card2API from "../components/Card2API";
import Card2Page from "../components/Card2Page";
import Head from "next/head";

function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
                <link rel="manifest" href="/public/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"  />
            </Head>
            <div className={styles.mainWrapper} data-testid="mainWrapper">
                <main className={styles.main} data-testid="main">
                    <div className={styles.pagetitle} data-testid="pagetitle">
                        {/*<h2>Main page</h2>*/}
                    </div>

                    <div className={styles.routesBlock} data-testid="routesBlock">

                        <div className={styles.routes} data-testid="routesApi">

                            <div className={styles.routesTitle} data-testid="routesApiTitle">
                                <h3>API endpoints:</h3>
                            </div>

                            <div className={styles.routesSubtitleAPI} data-testid="routesApiSubtitle">
                                <div className={styles.routesSubtitleMethod} data-testid="routesApiSubtitleMethod"> <h4> method</h4></div>
                                <div className={styles.routesSubtitleEndpoint} data-testid="routesApiSubtitleEndpoint">
                                    <h4>end point:</h4>
                                </div>
                                <div className={styles.routesSubtitleDescription} data-testid="routesApiSubtitleDescription">
                                    <h4>description:</h4>
                                </div>
                            </div>

                            <div className={styles.recordBlock} data-testid="recordBlockApi">

                                <Card2API
                                    cardid="card1"
                                    path = "/api/users/restore"
                                    id = ""
                                    record_method = "POST"
                                    record_remark = ""
                                    record_text='restore table "person" to original state'
                                    cardReqUrl="http://localhost:3010/api/users/restore"
                                    cardReqMethod="POST"
                                    cardReqHeaders={{'Content-Type': 'application/json'}}
                                    cardReqBody={{"login": "admin","password": "5678"}}
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card2"
                                    path = "/api/users"
                                    id = ""
                                    record_method = "POST"
                                    record_remark = ""
                                    record_text='create one user with firstname, lastname, and role'
                                    cardReqUrl="http://localhost:3010/api/users"
                                    cardReqMethod="POST"
                                    cardReqHeaders={{'Content-Type': 'application/json'}}
                                    cardReqBody={{"firstname":"Ben","lastname":"Rogers","role":"captain"}}
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card3"
                                    path = "/api/users"
                                    id = ""
                                    record_method = "GET"
                                    record_remark = ""
                                    record_text='return json object of all users in database'
                                    cardReqUrl="http://localhost:3010/api/users"
                                    cardReqMethod="GET"
                                    cardReqHeaders=""
                                    cardReqBody=""
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card4"
                                    path = "/api/users/id/[id]"
                                    id = "1"
                                    record_method = "GET"
                                    record_remark = ""
                                    record_text='return json object with data of one user selected by id'
                                    cardReqUrl="http://localhost:3010/api/users/id/1"
                                    cardReqMethod="GET"
                                    cardReqHeaders=""
                                    cardReqBody=""
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card5"
                                    path = "/api/users/id/[id]"
                                    id = "1"
                                    record_method = "PUT"
                                    record_remark = ""
                                    record_text='update one user by id'
                                    cardReqUrl="http://localhost:3010/api/users/id/1"
                                    cardReqMethod="PUT"
                                    cardReqHeaders={{'Content-Type': 'application/json'}}
                                    cardReqBody={{"firstname":"Peter","lastname":"Parker","role":"spider-man"}}
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card6"
                                    path = "/api/users/id/[id]"
                                    id = "1"
                                    record_method = "DELETE"
                                    record_remark = ""
                                    record_text='delete one user by id'
                                    cardReqUrl="http://localhost:3010/api/users/id/1"
                                    cardReqMethod="DELETE"
                                    cardReqHeaders=""
                                    cardReqBody=""
                                    cardReqRedirect="follow"
                                />

                                <Card2API
                                    cardid="card7"
                                    path = "/api/users"
                                    id = ""
                                    record_method = "DELETE"
                                    record_remark = ""
                                    record_text='delete all users'
                                    cardReqUrl="http://localhost:3010/api/users"
                                    cardReqMethod="DELETE"
                                    cardReqHeaders=""
                                    cardReqBody=""
                                    cardReqRedirect="follow"
                                />

                            </div>

                        </div>
                        <div className={styles.routes} data-testid="routesPages">

                            <div className={styles.routesTitle} data-testid="routesPagesTitle">
                                <h3>server has the pages:</h3>
                            </div>
                            <div className={styles.routesSubtitlePages} data-testid="routesPagesSubtitle">
                                <div className={styles.routesSubtitleEndpoint} data-testid="routesPagesSubtitleEndpoint">
                                    <h4>link:</h4>
                                </div>
                                <div className={styles.routesSubtitleDescription} data-testid="routesPagesSubtitleDescription">
                                    <h4>description:</h4>
                                </div>
                            </div>

                            <div className={styles.recordBlock} data-testid="recordBlockPages">

                                <Card2Page
                                    cardid="card10"
                                    prefix_record_url=""
                                    record_url = "/about"
                                    record_url_title = 'http://localhost:3010/about'
                                    record_remark = ''
                                    record_text='page "About this server"'
                                    data-testid="card2"
                                />

                                <Card2Page
                                    cardid="card11"
                                    prefix_record_url=""
                                    record_url = "/exchange"
                                    record_url_title = 'http://localhost:3010/exchange'
                                    record_remark = ''
                                    record_text='page "Exchange rate USD to UAH by National Bank of Ukraine"'
                                    data-testid="card3"
                                />

                            </div>

                        </div>

                    </div>

                </main>
            </div>
        </>
    );


}


export default Home