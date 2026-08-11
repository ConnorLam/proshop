import { useEffect, useState } from 'react';
import { Form, Button, ListGroup, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetProductsQuery } from '../slices/productsApiSlice';

const SearchBox = () => {
  const navigate = useNavigate();

  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  const [showResults, setShowResults] = useState(false);

  // Debounce search by 300ms
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

    setShowResults(false);
  };

  const selectProductHandler = (productId) => {
    navigate(`/product/${productId}`);

    setShowResults(false);
  };

  return (
    <div className="position-relative w-100">
      <Form onSubmit={submitHandler} className="d-flex w-100">
        <Form.Control
          type="text"
          name="q"
          value={keyword}
          placeholder="Search Products..."
          onChange={(e) => {
            setKeyword(e.target.value);
            setShowResults(true);
          }}
        />

        <Button type="submit" variant="outline-light" className="ms-2 flex-shrink-0">
          Search
        </Button>
      </Form>

      {showResults && debouncedKeyword.length >= 2 && (
        <ListGroup className="search-results">
          {isLoading ? (
            <ListGroup.Item>Searching...</ListGroup.Item>
          ) : data?.products?.length > 0 ? (
            data.products.slice(0, 5).map((product) => (
              <ListGroup.Item
                key={product._id}
                action
                onClick={() => selectProductHandler(product._id)}
                className="d-flex align-items-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="me-2"
                  style={{
                    objectFit: 'contain',
                  }}
                />

                <div>
                  <div>{product.name}</div>

                  <small>${Number(product.price).toFixed(2)}</small>
                </div>
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
