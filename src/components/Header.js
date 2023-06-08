import { FaShoppingCart } from 'react-icons/fa';
import { useLocation, Link, Routes, Route } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="App-header">
      <nav>
        <div className='logo'>
          <p>Fake Amazon</p>
        </div>
        <Routes>
          {/* <Route path="/" element={<HomeHeader />} /> */}
          <Route path="/*" element={<DefaultHeader />} />
        </Routes>
        <div className='icone'>
          <FaShoppingCart />
        </div>
      </nav>
    </header>
  );
}

const DefaultHeader = () => {
  return (
    <div className='menu'>
      <Link to="/">Accueil</Link>
      <Link to="/produits">Produits</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
