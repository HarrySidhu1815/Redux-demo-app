import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
  title: 'My first book',
  id: '1',
  price: 6,
  description: 'This is my first book I ever wrote'
},
{
  title: 'My second book',
  id: '2',
  price: 7,
  description: 'This is my second book I ever wrote'
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key= {product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
