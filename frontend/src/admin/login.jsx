import React from 'react'
import bg from './images/bgadminlog.jpg';
import { useState,useEffect } from 'react';



function Connecter() {

    const [fetchElement,setFetchElement] = useState([]);

    
  return (
    <div class="overflow-hidden p-10 w-full h-screen md:items-center flex flex-row text-gray-600 body-font">

            <div className='hidden object-cover w-1/2  md:flex'>
                <img src={bg} alt=""/>
            </div>
            
            <div class=" md:w-1/2 justify-center bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Admin Connexion</h2>
                    
                    <div class="relative mb-4">
                        <label for="username" class="leading-7 text-sm text-gray-600">Nom d'utilisateur</label>
                        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                   
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Mot de Passe</label>
                        <input type="password" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Se connecter</button>
            </div>
        </div>
  );
}

export default Connecter;
    