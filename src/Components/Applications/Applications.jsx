import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Applications() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <ul>
            <li>
              <Link to="">Web</Link>
            </li>
            <li>
              <Link to="ios">Ios</Link>
            </li>
            <li>
              <Link to="it">It</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
