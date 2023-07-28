import React from 'react';
import { Link} from 'react-router-dom';



function Home() {
    return(
      <div  className='flex flex-col items-center w-full gap-20'>
      <header className='text-gray-600 body-font w-full'>
        <div className=" w-full container shadow-lg  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             
            <span className="ml-3 text-xl font-bold">Galsen Produits.</span>
          </Link>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Table de donnée</a>
          </nav> */}
          <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to='/login'>Admin Page
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
      
    </div>
    );
}

export default Home; 