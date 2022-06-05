
import './App.css';
import React, { Fragment } from 'react';
import voit4 from './voit1.jpg';
import voit3 from './voit2.jpg';
import voit2 from './voit3.jpg';
import voit1 from './voit4.jpg';
import voit5 from './voit5.jpg';
import voit6 from './voit6.jpg';
import voit7 from './voit7.jpg';
import voit8 from './voit8.jpg';






function App() {
  const categories = [
    {
      categoryName: 'Lamborgini',
      description: 'spead, Boutique & more',
      image: voit1,
    },
    {
      categoryName: 'Ferari',
      description: 'Activities hosted by locals',
      image: voit2,
    },
    {
      categoryName: 'Baugatti',
      description: 'Hosted trips including lodging',
      image: voit3,
    },
    {
      categoryName: 'porsche',
      description: 'Popular spots to eat & drink',
      image: voit4,
    },
    {
      categoryName: 'Jaguar',
      description: 'Popular spots to eat & drink',
      image: voit5,

    },
    {
      categoryName: 'Marcedess',
      description: 'Popular spots to eat & drink',
      image: voit6,
    },
    {
      categoryName: 'BMW',
      description: 'Popular spots to eat & drink',
      image: voit7,
    },
    {
      categoryName: 'Ford',
      description: 'Popular spots to eat & drink',
      image: voit8,
    }
  ];

  

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pt-4">
        <div className="row">
          {categories.map(category => (
            <div className="col-md-3 pb-3">
              <div className="card">
                <img
                  style={{ height: 200, objectFit: 'cover' }}
                  src={category.image}
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="text-primary">{category.categoryName}</h3>
                  <p className="card-text">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;