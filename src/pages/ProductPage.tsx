import React, { useState, useEffect } from 'react'; // Removed useReducer
import { productData } from '../data/data';
import { Button, Input, Listbox, ListboxButton, ListboxOption, ListboxOptions, Dialog, DialogPanel, DialogTitle, Description, DialogBackdrop } from '@headlessui/react';
import { FiGrid } from "react-icons/fi";
import { BiSolidDownArrow } from 'react-icons/bi';
import { TbLayoutList } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import clsx from 'clsx';
import { filterData, featuredData } from '../data/data';
import LeafElement from "/images/leaf.png"
import StemElement from "/images/Stem-Element.png"

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

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
    description: string;
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
    const [quantity, setQuantity] = useState<number>(1);
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);

    // Model Function
    function openModal(product: Product) {
        setQuantity(1)
        setActiveProduct(product)
    }

    function closeModal() {
        setActiveProduct(null)
    }


    // Handle sorting based on filter selection
    useEffect(() => {
        if (filter) {
            let sortedProducts = [...productData];
            const option = filter.option;

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
                    <div className='relative h-full w-full'>
                        {/* Product Image */}
                        <div className='w-full h-full overflow-hidden '>
                            <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] pointer-events-none'></div>
                        </div>

                        {/* Hidden/Hover content */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-overlay gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-15'>
                            <Button className={'bg-white rounded-full px-8 py-2 cursor-pointer'}><HiOutlineShoppingBag className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>
                            <Button type='button' onClick={() => openModal(product)} className={'bg-dark rounded-full px-8 py-2 cursor-pointer'}><IoEyeOutline className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>

                            <CiHeart className='absolute top-3 left-3 h-8 w-8 text-white hover:scale-110 smooth-transition cursor-pointer' />

                            {/* {likedProducts 
                            ?
                            <CiHeart className='absolute top-3 left-3 h-8 w-8 text-gold hover:scale-110 smooth-transition cursor-pointer' />
                            :
                            <FaHeart  className='absolute top-3 left-3 h-8 w-8 text-white hover:scale-110 smooth-transition cursor-pointer' />
                            } */}
                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="p-6 mb-0 mt-auto flex flex-col items-center relative flex-grow">
                        <h3 className='text-gold text-xl text-center'>{product.name}</h3>
                        <p className='flex items-center gap-2 text-gold text-xl text-center mb-0 mt-auto'><s className='text-black text-sm'>${product.actualPrice}</s> ${product.salePrice}</p>
                    </div>




                </div>
            ))}

            {/* Dialog/Modal Box */}
            {activeProduct &&
                <Dialog open={!!activeProduct} onClose={closeModal} as="div" transition={true} className="relative z-50">
                    <DialogBackdrop className="fixed inset-0 bg-black/20" />
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                        <DialogPanel className="max-w-5xl space-y-4 border bg-dark/90 flex flex-col">
                            <div className='w-full'>
                                <img src='/images/dialog-header.png' alt='dialog header' className='w-full h-auto object-cover' />
                            </div>
                            <div className='flex gap-10 p-12'>
                                <div className='flex flex-col  gap-4'>
                                    <div className='aspect-square h-40 sm:h-48 md:h-56 lg:h-96 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-gold'>
                                        <img src={activeProduct.imageURL} alt={activeProduct.name} className='h-full w-full object-cover' />
                                    </div>
                                    <div>
                                        <p className='text-white text-lg sm:text-xl text-start'>Share this products</p>
                                        <div className='flex justify-center gap-3 sm:gap-4 mt-4'>
                                            <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaFacebook /></a>
                                            <a href='https://www.twitter.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaTwitter /></a>
                                            <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaInstagram /></a>
                                            <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaYoutube /></a>
                                            <a href='https://www.pinterest.com' target='_blank' rel='noreferrer' className='text-white text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaPinterest /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center gap-7'>
                                    <DialogTitle className="text-white text-4xl border-b-4 border-gold">{activeProduct.name}</DialogTitle>
                                    <p className="text-gold text-2xl flex items-center">${activeProduct.salePrice} &nbsp; <s className='text-white text-lg'>${activeProduct.actualPrice}</s></p>
                                    <Description className="text-white">{activeProduct.description}</Description>
                                    {/* Quantity Range */}
                                    <div className='flex gap-4'>
                                        <label className='text-white'>Quantity</label>
                                        <div className="inline-flex gap-4 px-4 py-1 justify-center border-2 border-gold rounded-2xl bg-white">
                                            <button className='text-black hover:scale-125 smooth-transition cursor-pointer ' onClick={() => setQuantity(quantity - 1)}><FaMinus /></button>
                                            <input className='w-16 text-center text-black' type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min={1} />
                                            <button className='text-black hover:scale-125 smooth-transition cursor-pointer' onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 ">
                                        <button className=' px-14 py-2 text-center font-semibold border-2 border-transparent bg-gold text-white hover:bg-white hover:text-gold hover:border-gold text-sm sm:text-base md:text-lg whitespace-nowrap'>Add to cart</button>
                                        <button className=' px-14 py-2 text-center font-semibold border-2 border-transparent bg-gold text-white hover:bg-white hover:text-gold hover:border-gold text-sm sm:text-base md:text-lg whitespace-nowrap'>Add to wishlist</button>
                                    </div>
                                </div>

                            </div>
                            <div className='w-full'>
                                <img src='/images/dialog-footer.png' alt='dialog header' className='w-full h-auto object-cover' />
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            }



        </div>
    )

    return (
        <section>
            <div className="container mx-auto px-4 overflow-hidden">
                <div className="flex flex-col space-y-10 py-4">
                    {/* Product Heading */}
                    <div className='text-2xl text-white relative h-60 sm:h-80 md:h-96 '>
                        <div className='absolute inset-0 h-auto w-full z-0'>
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
                    <div className='flex flex-col gap-4 py-6 max-w-7xl mx-auto relative'>

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