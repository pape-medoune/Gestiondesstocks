import React from 'react'
import Logo from '../assets/images/logo.png'

function Products() {
    const productItem = [
        {
            'image' : Logo,
            'title' : 'Détails du produit',
            'modele' : 'Modèle',
            'description' : 'Description',
            'prix' : 'Prix',
            'disponibilite' : 'Disponibilité'
        }
    ]
    return (
        <div className='w-full py-[5rem] px-4 bg-slate-50 '>
            <div className='flex justify-center m-20 underline font-bold mt-[-20px]'>
                <h1>Voici la liste des produits disponibles en stock</h1>
            </div>
            <div className='max-w-[1248px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-slate-50 rounded-full'
                        src={Logo}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col bg-gray-100 md:my-0 my-8 p-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-full'
                        src={Logo}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-slate-50 rounded-full'
                        src={Logo}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div>

                {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {
                        productItem.map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt="" className='w-20 mx-auto mt-[-3rem] bg-slate-50' />
                                <h2 className="text-2xl font-fold text-center py-8 underline">{item.title}</h2>
                                <p className="py-2 border-b mx-8">{item.modele}</p>
                                <p className="py-2 border-b mx-8">{item.description}</p>
                                <p className="py-2 border-b mx-8">{item.prix}</p>
                                <p className="py-2 border-b mx-8">{item.disponibilite}</p>
                            </div>
                        ))
                    }
                    
                </div> */}
                {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-slate-50'
                        src={Laptop}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-slate-50'
                        src={Laptop}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img
                        className='w-20 mx-auto mt-[-3rem] bg-slate-50'
                        src={Laptop}
                        alt='Image du produit'
                    />
                    <h2 className='text-2xl font-bold text-center py-8 underline'>Détails du produit</h2>
                    <div className='font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Modèle : </p>
                        <p className='py-2 border-b mx-8'>Description : </p>
                        <p className='py-2 border-b mx-8'>Prix : </p>
                        <p className='py-2 border-b mx-8'>Disponibilité : </p>
                        <button className="flex mx-auto bg-indigo-600 text-white w-[200px] rounded-md font-medium uppercase my-6 py-3 px-6 hover:bg-indigo-500">
                        Commander
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Products    