import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Loader from './Loader';
import FormContainer from './FormContainer';

const ProductEditForm = ({ product, updateProduct, loadingUpdate }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [brand, setBrand] = useState(product.brand);
  const [category, setCategory] = useState(product.category);
  const [countInStock, setCountInStock] = useState(product.countInStock);
  const [description, setDescription] = useState(product.description);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await updateProduct({
        _id: product._id,
        name,
        price: Number(price),
        image,
        brand,
        category,
        countInStock: Number(countInStock),
        description,
      }).unwrap();

      toast.success('Product updated');
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error || 'Unable to update product');
    }
  };

  return (
    <FormContainer>
      <h1>Edit Product</h1>

      {loadingUpdate && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="my-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="price" className="my-2">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="image" className="my-2">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="brand" className="my-2">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="countInStock" className="my-2">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control type="number" value={countInStock} onChange={(e) => setCountInStock(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="category" className="my-2">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="description" className="my-2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2" disabled={loadingUpdate}>
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProductEditForm;
