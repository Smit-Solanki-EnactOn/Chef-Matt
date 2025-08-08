import React from 'react'
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Description } from '@headlessui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";


interface DialogBoxProps {
    activeProduct: Product | null;
    closeModal: () => void;
}
interface Product {
    id: number;
    name: string;
    salePrice: number;
    actualPrice: number;
    imageURL: string;
    description: string;
}

const DialogBox = (props: DialogBoxProps) => {
    const [quantity, setQuantity] = React.useState(1);
    const { activeProduct } = props;

    const closeModal = () => {
        props.closeModal();
    };

    if(!activeProduct) return null

    return (
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
    )
}

export default DialogBox