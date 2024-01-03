import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Home({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 mb-2 mt-2 object-contain"
          />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">ETB {product.price}</p>
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Home;
