import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToPurchases } from '../features/slices/purchasesSlice';
import { removeFromCart } from '../features/slices/cartSlice';
import '../styles/Cart.css';

import CartsCard from './CartsCard';

function Items() {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [totalLength, setTotalLength] = useState(0);

  const paypalRef = useRef();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart.value);
  useEffect(() => {
    if (data.length !== 0) {
      const calculated = data.map((val) => val.data.cost);
      const sum = calculated.reduce((a, b) => a + b);
      setTotal(sum);
      const sets = data.map((val) => val.data.quantity);
      const setss = sets.reduce((a, b) => a + b);
      setTotalLength(setss);
    }
    if (data.length === 0) {
      setTotal(0);
      setTotalLength(0);
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const calculated = data.map((val) => val.data.cost);
      const sum = calculated.reduce((a, b) => a + b);
      window.paypal
        .Buttons({
          createOrder: (data, actions) => actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: (sum / 120).toFixed(2),
                },
              },
            ],
          }),
          onApprove: async (info, actions) => {
            await actions.order.capture();
            await setPaidFor(true);
            for (let i = 0; i < data.length; i++) {
              await dispatch(addToPurchases(data[i].data));
              await dispatch(removeFromCart(data[i].id));
            }
          },
          onError: (err) => {
            setError(err);
          },
        })
        .render(paypalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className="h-100 h-custom"
      style={{ 'background-color': '#d2c9ff' }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ 'border-radius': '15px' }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <p>{paidFor && 'Done'}</p>
                        <h6 className="mb-0 text-muted">
                          {data.length}
                          {' '}
                          items
                        </h6>
                      </div>
                      {data.map((item) => (
                        <CartsCard
                          key={item.id}
                          id={item.id}
                          name={item.data.itemName}
                          image={item.data.itemImage}
                          price={item.data.price}
                          cost={item.data.cost}
                          summary={item.data.summary}
                          description={item.data.description}
                          all={item.data.quantity}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          items
                          {totalLength}
                        </h5>
                        <h5>
                          Ksh.
                          {total}
                        </h5>
                      </div>
                      <hr className="my-4" />
                      {/* paypal */}
                      {data.length > 0 && <div ref={paypalRef} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;
