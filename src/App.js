import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index/Index';
import ContactsPage from './pages/Contacts/Contacts';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/Product/Product';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
          <Route index element={<IndexPage/>} />
          <Route path={'contacts'} element={<ContactsPage/>} />
          <Route path={'products'}>
            <Route path={':userId'} element={<ProductPage/>} />
          </Route>
        </Route>  

      </Routes>
  );
}

export default App;
