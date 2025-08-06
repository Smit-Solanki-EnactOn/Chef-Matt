import React, { useState, useEffect, useReducer } from 'react'; // Corrected line
import { productData } from '../data/data';
import { Input, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FiGrid } from "react-icons/fi";
import { BiSolidDownArrow } from 'react-icons/bi';
import { TbLayoutList } from "react-icons/tb";
import clsx from 'clsx';
import { filterData } from '../data/data';
// import { featuredData } from '../data/data'


const initialState = {
    products: productData,
    filter: filterData[0]
0};

const reducer = ({state, action}: {state: string[], action: string}) => {
    let sortedProducts = [...state.products];
    const option = action.payload;
    const searchTerm = action.payload;
    switch (action) {
        case 'SORT':

            if (option === 'Low to High') {
                sortedProducts.sort((a, b) => parseInt(a.salePrice) - parseInt(b.salePrice));
            } else if (option === 'High to Low') {
                sortedProducts.sort((a, b) => parseInt(b.salePrice) - parseInt(a.salePrice));
            } else if (option === 'A-Z') {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (option === 'Z-A') {
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            }
            return { ...state, products: sortedProducts };
        
        case 'SEARCH':
            if (searchTerm === '') {
                return { ...state, products: productData };
            }
            const filteredProducts = productData.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return { ...state, products: filteredProducts };

        default:
            return state;
    }

};

const ProductPage = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [filter, setFilter] = useState(filterData[0]);

    function handleSearch(formData) {
        const item = formData.get('item');
        dispatch({ type: 'SEARCH', payload: item });
    }

    useEffect(() => {
        if (filter) {
            dispatch({ type: 'SORT', payload: filter.option });
        }
    }, [filter]);

    const SearchBar = () => (
        <div className="flex flex-col gap-4">
            <form className='flex w-full gap-4' action={handleSearch}>
                <Input type="text" placeholder='Search' name='item' className='w-full p-2 text-md  text-gray-300 border-b-2 border-gray-300 bg-transparent placeholder:text-gray-300 focus:border-white' />
                <button type='submit' className='bg-gold text-white hover:bg-white hover:text-gold px-26 py-2 text-md font-medium transition duration-300 ease-in-out cursor-pointer whitespace-nowrap'>Search</button>
            </form>

            <div className='flex justify-end'>

                {/* Filter */}
                <div className='flex flex-col w-40 items-center gap-4 border-r-2 border-white'>
                    <Listbox value={filter} onChange={setFilter}>
                        <ListboxButton className={clsx('flex items-center justify-center gap-2 w-full p-2 cursor-pointer text-white  bg-transparent placeholder:text-gray-300 focus:border-white text-md')}>
                            {filter ? filter.option : 'Filter'}
                            <BiSolidDownArrow className="h-4 w-4 text-white" aria-hidden="true" />
                        </ListboxButton>

                        <ListboxOptions transition={true} anchor="bottom" className='w-[--button-width] p-2 text-sm text-gray-300 border-2 border-gray-300 bg-black placeholder:text-gray-300 focus:border-white'>

                            {filterData.map((filter) => (
                                <ListboxOption key={filter.id} value={filter} className={clsx('flex items-center justify-center w-full p-2 text-sm border-b-1 border-white text-gray-300  placeholder:text-gray-300 focus:border-white cursor-pointer hover:border-white hover:bg-gray-100 hover:text-black')}>
                                    {filter.option}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>

                <div className='flex gap-4 ml-4'>
                    {/* Grid */}
                    <button className=' text-white hover:text-gold hover:scale-110 smooth-transition cursor-pointer'><FiGrid className='h-6 w-6' /> </button>

                    {/* List */}
                    <button className=' text-white hover:text-gold hover:scale-110 smooth-transition cursor-pointer'><TbLayoutList className='h-7 w-7' /></button>
                </div>


            </div>
        </div>

    )

    const ProductCard = () => (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {state.products.map((product) => (
                <div className='flex flex-col items-center border-2 border-gold bg-white' key={product.id}>
                    <div className='aspect-auto w-full h-full relative overflow-hidden'>
                        <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                        <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] pointer-events-none'></div>
                    </div>
                    <div className="p-6 mb-0 mt-auto flex flex-col items-center">
                        <h3 className='text-gold text-xl text-center'>{product.name}</h3>
                        <p className='flex items-center gap-2 text-gold text-xl text-center mb-0 mt-auto'><s className='text-black text-sm'>${product.actualPrice}</s> ${product.salePrice}</p>
                    </div>

                </div>
            ))}
        </div>
    )

    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="flex flex-col py-4">
                    {/* Product Heading */}
                    <div className='text-2xl text-white relative h-80 md:h-96 '>
                        <div className='absolute inset-0 h-full w-full z-0'>
                            <img src='/images/Product-Header.png' className='h-full w-full object-cover' />
                        </div>
                        <div className='relative z-10 flex flex-col h-full justify-center'>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-widest mb-4 text-center'>
                                CHEF MATT PRODUCTS
                            </h2>
                            <div className='w-80 md:w-96 lg:w-[500px] h-1 bg-yellow-600 mx-auto'></div>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className='flex flex-col gap-4 py-6 max-w-7xl mx-auto'>

                        {/* Search / Filter */}
                        <SearchBar />
                        {/* Product Card */}
                        <ProductCard />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage