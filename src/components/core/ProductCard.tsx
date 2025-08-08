import { Button } from '@headlessui/react';
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
    const { product } = props;
    const openModal = (product: Product) => { 
        props.openModal(product);
    };
    return (

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
                </div>
            </div>
            {/* Product Info */}
            <div className="p-6 mb-0 mt-auto flex flex-col items-center relative flex-grow">
                <h3 className='text-gold text-xl text-center'>{product.name}</h3>
                <p className='flex items-center gap-2 text-gold text-xl text-center mb-0 mt-auto'><s className='text-black text-sm'>${product.actualPrice}</s> ${product.salePrice}</p>
            </div>
        </div>

    )
}

export default ProductCard