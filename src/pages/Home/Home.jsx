import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './Home.css';

const PagesHome = () => (
  <div className="pages-home">
    Logado com sucesso!
    <br />
    <Link to="/login"> <button type="button" className="ui-button">Sair</button> </Link>
  </div>
);

export default PagesHome;
