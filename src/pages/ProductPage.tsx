import React, { useState, useEffect } from 'react'; // Removed useReducer
import { Button, Input } from '@headlessui/react';
import { FiGrid } from "react-icons/fi";
import { TbLayoutList } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import LeafElement from "/images/leaf.png"
import StemElement from "/images/Stem-Element.png"
import Pagination from '@mui/material/Pagination';
import DialogBox from '../components/core/DialogBox';
import SelectDropdown from '../components/core/SelectDropdown';
import { featuredData, filterData, productData } from '../data/data';

interface Filter {
    id: number;
    option: string;
}

interface Feature {
    id: number;
    option: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    salePrice: string;
    actualPrice: string;
    imageURL: string;
}

interface DialogBox {
    productData: Product | null;
    closeModal: () => void;
}

// React.FC is used to define a functional component
const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(productData);
    const [filter, setFilter] = useState<Filter | null>(null);
    const [featured, setFeatured] = useState<Feature | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(12);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // state for showing product in grid or list
    const [isListView, setIsListView] = useState<boolean>(false);

    // Pagination logic
    // lastPostIndex (12) =     2     *     6  
    const lastPostIndex = currentPage * postsPerPage;

    // firstPostIndex (6) =     12       -     6
    const firstPostIndex = lastPostIndex - postsPerPage

    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    // Calculating total pages
    // .ceil() is used to round up the total number of pages that is 12 products per page
    const totalPages = Math.ceil(products.length / postsPerPage);


    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);



    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // DialogBox Open/Close Function
    function openModal(product: Product) {
        // setQuantity(1)
        setActiveProduct(product)
    }

    function closeModal() {
        setActiveProduct(null)
    }

    // GRID Structure
    const GridStructure = () => (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {currentPosts.map((product: Product) => (
                <div className='flex flex-col items-center border-2 border-gold bg-white relative h-fit' key={product.id}>
                    <div className='relative h-full w-full'>
                        {/* Product Image */}
                        <div className='h-full w-auto overflow-hidden shrink-0'>
                            <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]'></div>
                        </div>

                        {/* Hidden/Hover content */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-overlay gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-15'>
                            <Button className={'bg-white rounded-full px-8 py-2 cursor-pointer'}><HiOutlineShoppingBag className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>
                            <Button type='button' onClick={() => openModal(product)} className={'bg-dark rounded-full px-8 py-2 cursor-pointer'}><IoEyeOutline className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>

                            <CiHeart className='absolute top-3 left-3 h-8 w-8 text-white hover:scale-110 smooth-transition cursor-pointer' />
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
            {activeProduct && <DialogBox productData={activeProduct} closeModal={closeModal} />}
        </div>
    )

    const ListStructure = () => (
        <div className='grid grid-cols-1 mx-auto gap-6'>
            {currentPosts.map((product: Product) => (
                <div className='flex place-items-center border-2 border-gold bg-white relative h-auto w-full max-w-4xl' key={product.id}>
                    <div className='relative h-full w-full'>
                        {/* Product Image */}
                        <div className='h-full w-full overflow-hidden'>
                            <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)] pointer-events-none'></div>
                        </div>

                        {/* Hidden/Hover content */}
                        {!isMobile &&
                            <div className='absolute inset-0 flex flex-col items-center justify-center bg-overlay gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-15'>
                                <Button className={'bg-white rounded-full px-8 py-2 cursor-pointer'}><HiOutlineShoppingBag className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>
                                <Button type='button' onClick={() => openModal(product)} className={'bg-dark rounded-full px-8 py-2 cursor-pointer'}><IoEyeOutline className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></Button>

                                <CiHeart className='absolute top-3 left-3 h-8 w-8 text-white hover:scale-110 smooth-transition cursor-pointer' />
                            </div>
                        }

                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full p-4 sm:p-6">
                        {/* Product Info */}
                        <div className="p-6 flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 relative w-full">
                            <h3 className='text-gold text-xl sm:text-2xl md:text-3xl text-center'>{product.name}</h3>
                            <p className='flex items-center gap-2 text-gold text-base sm:text-lg md:text-xl text-center mb-0 mt-auto'>${product.salePrice} <s className='text-black text-sm'>${product.actualPrice}</s></p>
                            <p className='text-sm sm:text-base md:text-lg text-center'>{product.description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 w-full p-4 sm:p-6'>
                            <button className='bg-gold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium'>
                                <HiOutlineShoppingBag className='h-4 sm:h-5 w-4 sm:w-5' />
                                <span className='font-medium'>Add to Cart</span>
                            </button>
                            <button
                                onClick={() => openModal(product)}
                                className='bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium'
                            >
                                <IoEyeOutline className='h-4 sm:h-5 w-4 sm:w-5' />
                                <span className='font-medium'>View Details</span>
                            </button>
                        </div>
                    </div>

                </div>
            ))
            }



            {/* Dialog/Modal Box */}
            {activeProduct && <DialogBox productData={activeProduct} closeModal={closeModal} />}
        </div >
    )


    // Handle sorting based on filter selection
    useEffect(() => {
        let sortedProducts = [...productData];

        // Search Product FIRST
        if (searchTerm) {
            sortedProducts = sortedProducts.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Featured Products SECOND
        if (featured) {
            sortedProducts = sortedProducts.filter((product) =>
                product.name.toLowerCase().includes(featured.option.toLowerCase())
            );
        }

        // Filter Product LAST
        if (filter) {
            const option = filter.option;
            if (option === 'Low to High') {
                sortedProducts.sort((a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice));
            } else if (option === 'High to Low') {
                sortedProducts.sort((a, b) => parseFloat(b.salePrice) - parseFloat(a.salePrice));
            } else if (option === 'A-Z') {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (option === 'Z-A') {
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            }
        }

        setProducts(sortedProducts);
        // Reset pagination when filtering/searching
        setCurrentPage(1);

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

            <div className='flex flex-row gap-4 items-center justify-center sm:justify-end'>

                {/* Filter */}
                <div className='flex flex-col w-40 items-center gap-4 border-r-0 md:border-r-2 border-white'>
                    <SelectDropdown<Filter> listData={filterData} list={filter} setList={setFilter} text='Filter' />
                </div>

                {/* Featured */}
                <div className='flex flex-col w-40 items-center gap-4 border-r-0 md:border-r-2 border-white'>
                    <SelectDropdown<Feature> listData={featuredData} list={featured} setList={setFeatured} text='Featured' />
                </div>

                <div className={` justify-center md:justify-start items-center gap-4 mt-0 ${isMobile ? 'hidden' : 'flex'}`}>
                    {/* Grid */}
                    <button className=' text-white hover:text-gold hover:scale-110 smooth-transition cursor-pointer' onClick={() => setIsListView(false)}><FiGrid className='h-6 w-6' /> </button>

                    {/* List */}
                    <button className=' text-white hover:text-gold hover:scale-110 smooth-transition cursor-pointer' onClick={() => setIsListView(true)}><TbLayoutList className='h-7 w-7' /></button>
                </div>

            </div>
        </div>

    )



    const ProductCard = () => (
        <>
            {isMobile || isListView ? <ListStructure /> : <GridStructure />}
        </>
    )

    return (
        <section>
            <div className="container mx-auto px-2 sm:px-4 overflow-hidden">
                <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 py-4">
                    {/* Product Heading */}
                    <div className='text-xl sm:text-2xl text-white relative h-40 sm:h-60 md:h-80 lg:h-96'>
                        <div className='absolute inset-0 h-auto w-full z-0'>
                            <img src='/images/Product-Header.png' className='h-full w-full object-cover' />
                        </div>
                        <div className='relative z-10 flex flex-col h-full justify-center px-4'>
                            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold tracking-wider sm:tracking-widest mb-2 sm:mb-4 text-center'>
                                CHEF MATT PRODUCTS
                            </h2>
                            <div className='w-80 md:w-96 lg:w-[500px] h-1 bg-yellow-600 mx-auto'></div>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className='flex flex-col gap-4 py-4 sm:py-6 w-full max-w-7xl mx-auto relative px-2 sm:px-0'>

                        {/* Search / Filter */}
                        <SearchBar />

                        {/* Products Count Info */}
                        <div className='text-white text-xs sm:text-sm mb-4'>
                            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                                <span>Total {products.length} products found</span>
                                {/* Showing number of products per page */}
                                {products.length > postsPerPage && (
                                    <span className='text-gray-300'>
                                        (Showing {firstPostIndex + 1}-{Math.min(lastPostIndex, products.length)} of {products.length})
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Product Card */}
                        <ProductCard />
                        {totalPages > 1 && (
                            <div className='flex justify-center mt-6 sm:mt-8'>
                                <Pagination
                                    page={currentPage}
                                    count={totalPages}
                                    onChange={handlePageChange}
                                    variant='outlined'
                                    color='primary'
                                    size={window.innerWidth < 640 ? 'small' : 'large'}
                                    sx={
                                        {
                                            '& .MuiPaginationItem-root': {
                                                color: 'white',
                                                borderColor: 'transparent',
                                            },
                                            '& .MuiPaginationItem-root.Mui-selected': {
                                                color: 'gold',
                                                borderColor: 'gold',
                                            }
                                        }
                                    }
                                />
                            </div>

                        )}


                        {/* Leaf Background Element */}
                        <div className='absolute top-0 right-0 translate-x-1/4 sm:translate-x-1/2 -translate-y-10 sm:-translate-y-20 -rotate-40 -z-5'>
                            <img src={LeafElement} className='w-16 sm:w-24 md:w-auto opacity-50 sm:opacity-100' />
                        </div>

                        {/* Stem Background Element */}
                        <div className='absolute top-0 left-0 -translate-x-1/4 sm:-translate-x-1/2 translate-y-40 sm:translate-y-60 md:translate-y-80 -z-5'>
                            <img src={StemElement} className='w-16 sm:w-24 md:w-auto opacity-50 sm:opacity-100' />
                        </div>
                    </div>

                    <div className='relative h-32 sm:h-48 md:h-64 lg:h-80 w-full'>
                        <img src="/images/ProductPage-Footer.png" className='w-full h-full object-cover' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductPage