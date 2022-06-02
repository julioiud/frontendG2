import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BarraNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{process.env.REACT_APP_NAME}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink 
                   className="nav-item nav-link"
                   to='/'
                >
                    Estados
                </NavLink>
                <NavLink 
                   className="nav-item nav-link"
                   to='/marcas'
                >
                    Marcas
                </NavLink>
                <NavLink 
                   className="nav-item nav-link"
                   to='/tipoequipos'
                >
                    Tipos Equipos
                </NavLink>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
