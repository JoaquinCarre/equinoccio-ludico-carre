import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App () {
    return (
        <>
        <nav className='sticky-top'>
          <Navbar />
        </nav>
        <main className='container-fluid bg-warning m-0 p-0'>
          <div className='text-center'>
            <Outlet />
          </div>
        </main>
        </>
    );
}

export default App;