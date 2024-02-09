import Header from '../components/Header'
import './App.css'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Fetchitems from '../components/Fetchitems';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';
function App() {
    const fetchStatus=useSelector(store=>store.fetchStatus)
    

return (
    <>
        <Header />
        <Fetchitems />
        {fetchStatus.currentlyFetching ?<LoadingSpinner/>   : <Outlet />}
        <Footer />
        
    </>
)
}

export default App
