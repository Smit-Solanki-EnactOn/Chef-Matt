import React, { useState, useEffect } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface ProductCardProps {
    product: Product;
    openModal: (product: Product) => void;
}
interface Product {
    id: number;
    name: string;
    description: string;
    salePrice: string;
    actualPrice: string;
    imageURL: string;
}
const ProductCard = (props: ProductCardProps) => {

    const [isMobile, setIsMobile] = useState<boolean>(false);


    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);




    const { product } = props;
    const openModal = (product: Product) => {
        props.openModal(product);
    };
    return (

        <div className='flex flex-col items-center border-2 border-gold bg-white relative h-fit' key={product.id}>
            <div className='relative h-full w-full'>
                {/* Product Image */}
                <div className='h-full w-auto overflow-hidden shrink-0'>
                    <img src={product.imageURL} alt={product.name} className='h-full w-full object-cover' />
                    <div className='absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]'></div>
                </div>

                {/* Hidden/Hover content */}
                {!isMobile &&
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-overlay gap-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out z-15'>
                        <button className={'bg-white rounded-full px-8 py-2 cursor-pointer'}><HiOutlineShoppingBag className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></button>
                        <button type='button' onClick={() => openModal(product)} className={'bg-dark rounded-full px-8 py-2 cursor-pointer'}><IoEyeOutline className='h-7 w-7 text-gold hover:scale-110 smooth-transition' /></button>

                        <CiHeart className='absolute top-3 left-3 h-8 w-8 text-white hover:scale-110 smooth-transition cursor-pointer' />
                    </div>
                }
            </div>
            {/* Product Info */}
            <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full p-4 sm:p-6">
                {/* Product Info */}
                <div className="p-6 flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 relative w-full">
                    <h3 className='text-gold text-xl sm:text-2xl md:text-3xl text-center'>{product.name}</h3>
                    <p className='flex items-center gap-2 text-gold text-base sm:text-lg md:text-xl text-center mb-0 mt-auto'>${product.salePrice} <s className='text-black text-sm'>${product.actualPrice}</s></p>
                    <p className='text-sm sm:text-base md:text-lg text-center'>{product.description}</p>
                </div>
                {/* Action Buttons */}
                <div className='flex flex-row sm:flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full p-4 sm:p-6'>
                    <button className='bg-gold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium w-fit cursor-pointer'>
                        <HiOutlineShoppingBag className='h-4 sm:h-5 w-4 sm:w-5' />
                        <span className='font-medium'>Add to Cart</span>
                    </button>
                    <button
                        onClick={() => openModal(product)}
                        className='bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium w-fit cursor-pointer'
                    >
                        <IoEyeOutline className='h-4 sm:h-5 w-4 sm:w-5' />
                        <span className='font-medium'>View Details</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard