import Item from '../item/Item'
import styles from './Products.module.css'

const Products = ({ productsData }) => {
  // console.log('productsData', productsData)
  return (
    <>
      <div className={styles.filter}>
        <div>
          <ol>
            <li>
              <h1 className={styles.h1}>
                <a href="view all">View All</a>
              </h1>
            </li>
          </ol>
        </div>
        <div className={styles.sort}>
          <div><select name="tt" id=""><option value="">sort by</option></select></div>
          <div><select name="" id=""><option value="">Items per page</option></select></div>
        </div>
      </div>
      <div className={styles.products}>
        {
          productsData.map(item => {
            const { image, name, price, id } = item
            return <Item key={id} imageData={image} titleData={name} priceData={price} />
          })
        }
      </div>
    </>
  );
}

export default Products;