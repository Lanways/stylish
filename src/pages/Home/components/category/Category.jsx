import styles from './Category.module.css'
function Category() {
  return (
    <div className={styles.categoryContainer}>
      <input type="text" />
      <p>category</p>
      <ul className={styles.list}>
        <li className={styles.listItem}><a href="" className={styles.link}>所有商品</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>本月新品</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>連線商品</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>熱銷商品</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>現貨商品區</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>鞋子 配件等</a><span className={styles.counter}>2</span></li>
        <li className={styles.listItem}><a href="" className={styles.link}>限時優惠</a><span className={styles.counter}>2</span></li>
      </ul>
    </div>
  );
}

export default Category;