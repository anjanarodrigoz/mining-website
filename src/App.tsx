import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Products } from '@/pages/Products';
import { ProductDetail } from '@/pages/ProductDetail';
import { Operations } from '@/pages/Operations';
import { Sustainability } from '@/pages/Sustainability';
import { Investors } from '@/pages/Investors';
import { News } from '@/pages/News';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
