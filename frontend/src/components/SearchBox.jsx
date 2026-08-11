import { useEffect, useState } from 'react';
import { Form, Button, ListGroup, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const SearchBox = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword.trim());
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const { data, isLoading } = useGetProductsQuery(
    {
      keyword: debouncedKeyword,
      pageNumber: 1,
    },
    {
      skip: debouncedKeyword.length < 2,
    }
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword.trim()}`);
    } else {
      navigate('/');
    }
  };

  const selectProductHandler = (productId) => {
    navigate(`/product/${productId}`);

    setKeyword('');
    setDebouncedKeyword('');
  };

  return (
    <div className="position-relative" style={{ width: '400px' }}>
      <Form onSubmit={submitHandler} className="d-flex">
        <Form.Control
          type="text"
          name="q"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
        />

        <Button type="submit" variant="outline-light" className="ms-2">
          Search
        </Button>
      </Form>

      {debouncedKeyword.length >= 2 && (
        <ListGroup
          className="position-absolute w-100"
          style={{
            zIndex: 1000,
            top: '100%',
          }}
        >
          {isLoading ? (
            <ListGroup.Item>Searching...</ListGroup.Item>
          ) : data?.products?.length > 0 ? (
            data.products.map((product) => (
              <ListGroup.Item
                key={product._id}
                action
                onClick={() => selectProductHandler(product._id)}
                className="d-flex align-items-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width="50"
                  height="50"
                  style={{
                    objectFit: 'contain',
                    marginRight: '10px',
                  }}
                />

                <span>{product.name}</span>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No products found</ListGroup.Item>
          )}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBox;
