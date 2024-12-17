import React from 'react';
import './Customers.scss';

const Custemors = () => {
  return (
    <>
      <section className="customers">
        <div className="container">
          <div className="wrap__cust">
            <div className="box__cust">
              <div>
                <h4>Sarah M.</h4>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <p>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
            <div className="box__cust">
              <div>
                <h4>Sarah M.</h4>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <p>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”x
              </p>
            </div>
            <div className="box__cust">
              <div>
                <h4>Sarah M.</h4>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <p>
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>

   <button className="btn">See More Reviews...</button>
          
        </div>
      </section>
    </>
  );
};

export default Custemors;
