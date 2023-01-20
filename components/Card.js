import styles from '../styles/Home.module.css';
import Link from "next/link";

const Card = (props) => {
    return (
        <Link href={`.${props.prefix_record_url}${props.record_url}`} >
            <a className={styles.cardRoute}  data-testid="recordItem">
                <p>
                    {/*http://localhost:3000{props.prefix_record_url}{props.record_url}<br/>*/}
                    {props.record_url_title}<br/>
                    <span style={{fontStyle: "italic", fontFamily: "Comic Sans MS", lineHeight: "1.6rem"}}> {props.record_remark}</span>
                </p>
                <p>{props.record_text}</p>
            </a>
        </Link>
    )
}
export default Card;