import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import {GrUpdate} from 'react-icons/gr'
import {BiSolidEdit} from 'react-icons/bi'
import {MdDeleteForever} from 'react-icons/md'


function AdminPage() {

  // const [fetchElement,setFetchElement] = useState([]);
  //   const [nomProduit,setNomProduit] = useState();
  //   const [description,setDescription] = useState();
  //   const [prix,setPrix] = useState();
  //   const [image,setImage] = useState();
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  
    const toggleModalEdit = () => {
      setIsModalOpenEdit(!isModalOpenEdit);
    };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className='flex flex-col items-center w-full gap-20'>
      <header className="text-gray-600 body-font w-full">
        <div className=" w-full container shadow-lg  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             
            <span className="ml-3 text-xl font-bold">Admin Page.</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900">Tableau de nos données</Link>
          </nav>
          <Link to="/" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Visualiser mes produits
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>

      <div className=" p-5 relative overflow-x-auto w-[75%] shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <div>
          <button id="defaultModalButton"
          data-modal-toggle="defaultModal"
          className="block text-white font-bold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
          onClick={toggleModal}>
              Ajouter produit
          </button>

      {isModalOpen && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen"
          onClick={toggleModal}
        >
          <div className="relative p-4 w-full max-w-2xl md:h-auto">
          
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5" onClick={(e) => e.stopPropagation()}>
              
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ajouter Produit</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              
              <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nom Produit
                    </label>
                    <input
                      type="text"
                      name="nomproduit"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Nom du produit"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="prix" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Prix
                    </label>
                    <input
                      type="text"
                      name="prix"
                      id="prix"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Prix de ce produit"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <input
                      type="text"
                      name="Description"
                      id="Description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Ajouter nouveau produit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

            
          </div>
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-500 uppercase  bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nom du produit
              </th>
              <th scope="col" className="px-6 py-3">
                Prix
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                300000
              </td>
              <td className="px-6 py-4">
                Macbook taille 28pouces à vendre
              </td>
              <td className="px-6 py-4">
                image ici
              </td>
              <td className="px-6 py-4 flex items-center h-full gap-4">
              <div>
          <button id="defaultModalButton"
          data-modal-toggle="defaultModalEdit"
          className="block text-white font-bold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
          onClick={toggleModalEdit}>
              <BiSolidEdit/>
          </button>

      {isModalOpenEdit && (
        <div
          id="defaultModalEdit"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen"
          onClick={toggleModalEdit}
        >
          <div className="relative p-4 w-full max-w-2xl md:h-auto">
          
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5" onClick={(e) => e.stopPropagation()}>
              
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modifier Produit</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModalEdit}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              
              <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nom Produit
                    </label>
                    <input
                      type="text"
                      name="nomproduit"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Nom du produit"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="prix" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Prix
                    </label>
                    <input
                      type="text"
                      name="prix"
                      id="prix"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Prix de ce produit"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <input
                      type="text"
                      name="Description"
                      id="Description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit" 
                  className="text-white border-2 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {/* <GrUpdate size={20} className=''/> */}
                  Modifier le Produit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

            
          </div>
          <button 
          className="block text-white font-bold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
          type="button">
              <MdDeleteForever/>
          </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;