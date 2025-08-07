import React, { useState, useEffect } from 'react'; // Removed useReducer
import { productData } from '../data/data';
import { Input, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { FiGrid } from "react-icons/fi";
import { BiSolidDownArrow } from 'react-icons/bi';
import { TbLayoutList } from "react-icons/tb";
import clsx from 'clsx';
import { filterData, featuredData } from '../data/data';
import LeafElement from "/images/leaf.png"
import StemElement from "/images/Stem-Element.png"
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Navigation, Grid } from 'swiper/modules'

interface Filter {
    id: number;
    option: string;
}

interface Feature {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    salePrice: string;
    actualPrice: string;
    imageURL: string;
}

// React.FC is used to define a functional component
const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(productData);
    const [filter, setFilter] = useState<Filter | null>(null);
    const [featured, setFeatured] = useState<Feature | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const productPerpage = 8;

    // Handle sorting based on filter selection
    useEffect(() => {
        if (filter) {
            let sortedProducts = [...productData];
            const option = filter.option;

            // pagination
            const indexOfLastProduct = currentPage * productPerpage;
            const indexOfFirstProduct = indexOfLastProduct - productPerpage;
            const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
            const totalPages = Math.ceil(sortedProducts.length / productPerpage);

            // Search Product
            if (searchTerm) {
                sortedProducts = sortedProducts.filter((product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Filter Product
            if (option === 'Low to High') {
                sortedProducts.sort((a, b) => parseInt(a.salePrice) - parseInt(b.salePrice));
            } else if (option === 'High to Low') {
                sortedProducts.sort((a, b) => parseInt(b.salePrice) - parseInt(a.salePrice));
            } else if (option === 'A-Z') {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (option === 'Z-A') {
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                sortedProducts = productData;
            }


            setProducts(sortedProducts);
        }

        // Featured Products
        if (featured) {
            const featuredProducts = productData.filter((product) =>
                product.name.toLowerCase().includes(featured.name.toLowerCase()));
            console.log(featuredProducts)
            setProducts(featuredProducts);
        }
    }, [filter, searchTerm, featured]);

    // Handle search functionality
    function handleSearch(formData: FormData): void {
        const item = formData.get('item');
        setSearchTerm(item as string);
    }

    const SearchBar: React.FC = () => (
        <div className="flex flex-col w-full gap-4">
            <form className='flex w-full gap-4' action={handleSearch}>
                <Input type="text" placeholder='Search' name='item' className='w-full p-2 text-md  text-gray-300 border-b-2 border-gray-300 bg-transparent placeholder:text-gray-300 focus:border-white' />
                <button type='submit' className='bg-gold text-white hover:bg-white hover:text-gold px-26 py-2 text-md font-medium transition duration-300 ease-in-out cursor-pointer whitespace-nowrap'>Search</button>
            </form>

            <div className='flex flex-col md:flex-row gap-4 items-center justify-end'>

                {/* Filter */}
                <div className='flex flex-col w-40 items-center gap-4 border-r-0 md:border-r-2 border-white'>
                    <Listbox value={filter} onChange={setFilter}>
                        <ListboxButton className={clsx('flex items-center justify-center gap-2 w-full p-2 cursor-pointer text-white  bg-transparent placeholder:text-gray-300 focus:border-white text-md')}>
                            {filter ? filter.option : 'Filter'}
                            <BiSolidDownArrow className="h-4 w-4 text-white" aria-hidden="true" />
                        </ListboxButton>

                        <ListboxOptions transition={true} anchor="bottom" className='w-[--button-width] p-2 text-sm text-gray-300 border-2 border-gray-300 bg-black placeholder:text-gray-300 focus:border-white z-10'>

                            {filterData.map((filterOption: Filter) => (
                                <ListboxOption key={filterOption.id} value={filterOption} className={clsx('flex items-center justify-center w-full p-2 text-sm border-b-1 border-white text-gray-300  placeholder:text-gray-300 focus:border-white cursor-pointer hover:border-white hover:bg-gray-100 hover:text-black')}>
                                    {filterOption.option}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>

                {/* Featured */}
                <div className='flex flex-col w-40 items-center gap-4 border-r-0 md:border-r-2 border-white'>
                    <Listbox value={featured} onChange={setFeatured}>
                        <ListboxButton className={clsx('flex items-center justify-center gap-2 w-full p-2 cursor-pointer text-white  bg-transparent placeholder:text-gray-300 focus:border-white text-md')}>
                            {featured ? featured.name : 'Featured'}
                            <BiSolidDownArrow className="h-4 w-4 text-white" aria-hidden="true" />
                        </ListboxButton>

                        <ListboxOptions transition={true} anchor="bottom" className='w-[--button-width] p-2 text-sm text-gray-300 border-2 border-gray-300 bg-black placeholder:text-gray-300 focus:border-white z-10'>

                            {featuredData.map((featuredName: Feature) => (
                                <ListboxOption key={featuredName.id} value={featuredName} className={clsx('flex items-center justify-center w-full p-2 text-sm capitalize border-b-1 border-white text-gray-300  placeholder:text-gray-300 focus:border-white cursor-pointer hover:border-white hover:bg-gray-100 hover:text-black')}>
                                    {featuredName.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>

                <div className='flex justify-center md:justify-start gap-4 mt-4 md:mt-0'>
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
            {products.map((product: Product) => (
                <div className='flex flex-col items-center border-2 border-gold bg-white relative h-fit' key={product.id}>
                    <div className='w-full h-full relative overflow-hidden flex-shrink-0'>
                        <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                        <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] pointer-events-none'></div>
                    </div>
                    <div className="p-6 mb-0 mt-auto flex flex-col items-center relative flex-grow">
                        <h3 className='text-gold text-xl text-center'>{product.name}</h3>
                        <p className='flex items-center gap-2 text-gold text-xl text-center mb-0 mt-auto'><s className='text-black text-sm'>${product.actualPrice}</s> ${product.salePrice}</p>
                    </div>

                </div>
            ))}

        </div>
    )

    return (
        <section>
            <div className="container mx-auto px-4 overflow-hidden">
                <div className="flex flex-col py-4">
                    {/* Product Heading */}
                    <div className='text-2xl text-white relative h-60 sm:h-80 md:h-96'>
                        <div className='absolute inset-0 h-full w-full z-0'>
                            <img src='/images/Product-Header.png' className='h-auto w-full object-cover' />
                        </div>
                        <div className='relative z-10 flex flex-col h-full justify-center'>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gold tracking-widest mb-4 text-center'>
                                CHEF MATT PRODUCTS
                            </h2>
                            <div className='w-80 md:w-96 lg:w-[500px] h-1 bg-yellow-600 mx-auto'></div>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className='flex flex-col gap-4 py-6 max-w-7xl mx-auto mt-10 relative'>

                        {/* Search / Filter */}
                        <SearchBar />

                        {/* Products Count Info */}
                        <div className='text-white text-sm mb-4'>
                            Total {products.length} products found
                        </div>

                        {/* Product Card */}
                        <ProductCard />

                        {/* Leaf Background Element */}
                        <div className='absolute top-0 right-0 translate-x-50 -translate-y-20 -rotate-40 -z-5'>
                            <img src={LeafElement} className='w-auto' />
                        </div>

                        {/* Stem Background Element */}
                        <div className='absolute top-0 left-0 -translate-x-1/2 translate-y-230 -z-5'>
                            <img src={StemElement} className='w-auto' />
                        </div>
                    </div>

                    <div className='relative h-80 md:h-auto w-full'>
                        <img src="/images/ProductPage-Footer.png" className='w-full h-full object-cover' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductPage