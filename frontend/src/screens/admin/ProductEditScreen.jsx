import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetProductDetailsQuery, useUpdateProductMutation } from '../../slices/productsApiSlice';
import ProductEditForm from '../../components/ProductEditForm';

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="danger">{error?.data?.message || error.error || 'Unable to load product'}</Message>;
  }

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <ProductEditForm
        key={product._id}
        product={product}
        updateProduct={updateProduct}
        loadingUpdate={loadingUpdate}
      />
    </>
  );
};

export default ProductEditScreen;
