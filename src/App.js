 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import './css/main.scss';
import './css/sub.scss';
import './css/common.scss';
import Header from './common/header';
import MainPage from './main';
import SubPage1 from './sub/sub1';
import FooterPage from './common/footer';
 



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />      
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/sub/sub1' element={<SubPage1 />}/>
        </Routes>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
