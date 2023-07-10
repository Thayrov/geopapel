import './App.css';

import {
    Banner,
    ContactInfo,
    Footer,
    InstagramInfo,
    Navbar,
    Newsletter,
    Products,
    RecyclingInfo,
    Testimonials,
} from './components';

function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Testimonials />
            <Products />
            <RecyclingInfo />
            <ContactInfo />
            <Newsletter />
            <InstagramInfo />
            <Footer />
        </div>
    );
}

export default App;
