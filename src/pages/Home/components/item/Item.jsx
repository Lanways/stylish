import styles from './Item.module.css'
import { Link } from 'react-router-dom';

const Item = ({ id, imageData, titleData, priceData }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`}>
        <img src={imageData} alt="" className={styles.cardImage} />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{titleData}</h5>
        </div>
      </Link>
      <p className={styles.cardPrice}>NT${priceData}</p>
    </div>
  );
}

export default Item