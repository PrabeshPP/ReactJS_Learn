import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Product = [
  {
    id: 1,
    title: "Asus",
    description: "Asus ZenBook!",
    price:1600,
  },
  {
    id: 2,
    title: "Apple",
    description: "Iphone 12 Pro Max!",
    price: 1200,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {Dummy_Product.map((item)=><ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
