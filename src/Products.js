
import ItemDescription from './ItemDescription'

import styles from './Products.module.css'

function Product({ name, description, price }) {
  return(
    <div className={styles.product}>
      <ItemDescription name={name} description={description} />
      <h3 className={styles.error}>An error occurred</h3>
      <h3 className={styles.price}>{price}</h3>
    </div>
  )
}

export default Product