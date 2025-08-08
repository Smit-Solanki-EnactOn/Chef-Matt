import React from 'react'
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Description } from '@headlessui/react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaTimes } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface DialogBoxProps {
    productData: Product | null;
    closeModal: () => void;
}

interface Product {
    id: number;
    name: string;
    salePrice: string;
    actualPrice: string;
    imageURL: string;
    description: string;
}

const DialogBox = (props: DialogBoxProps) => {
    const [quantityCount, setQuantityCount] = React.useState(1);

    // Destructure props
    const { productData } = props;
    const closeModal = () => {
        props.closeModal();
    };

    // Checking if productData is null
    if (!productData) return null

    return (
        <Dialog open={!!productData} onClose={closeModal} as="div" transition={true} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/20" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-2 sm:p-4">
                <DialogPanel className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-2 sm:mx-4 space-y-2 sm:space-y-4 border bg-dark/90 flex flex-col max-h-[95vh] overflow-y-auto">

                    <div className='w-full'>
                        <img src='/images/dialog-header.png' alt='dialog header' className='w-full h-auto object-cover' />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 md:p-8 lg:p-12 relative'>
                        <div className='flex flex-col gap-4 flex-shrink-0 items-center lg:items-start'>
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-white hover:text-gold text-2xl md:text-3xl lg:text-4xl smooth-transition cursor-pointer"
                                aria-label="Close"
                            >
                                <FaTimes />
                            </button>
                            <div className='aspect-square w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-gold'>
                                <img src={productData.imageURL} alt={productData.name} className='h-full w-full object-cover' />
                            </div>
                            <div className='text-center lg:text-left'>
                                <p className='text-white text-sm sm:text-base lg:text-lg xl:text-xl'>Share this products</p>
                                <div className='flex justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-4'>
                                    <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className='text-white text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaFacebook /></a>
                                    <a href='https://www.twitter.com' target='_blank' rel='noreferrer' className='text-white text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaTwitter /></a>
                                    <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className='text-white text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaInstagram /></a>
                                    <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className='text-white text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaYoutube /></a>
                                    <a href='https://www.pinterest.com' target='_blank' rel='noreferrer' className='text-white text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-gold smooth-transition scale-up'><FaPinterest /></a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 flex-1 min-w-0'>
                            <DialogTitle className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-2 sm:border-b-3 lg:border-b-4 border-gold break-words">{productData.name}</DialogTitle>
                            <p className="text-gold text-lg sm:text-xl md:text-2xl flex flex-wrap items-center gap-2">${productData.salePrice} <s className='text-white text-sm sm:text-base lg:text-lg'>${productData.actualPrice}</s></p>
                            <Description className="text-white text-sm sm:text-base leading-relaxed">{productData.description}</Description>
                            {/* Quantity Range */}
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center'>
                                <label className='text-white text-sm sm:text-base whitespace-nowrap'>Quantity</label>
                                <div className="inline-flex gap-2 sm:gap-4 px-3 sm:px-4 py-1 sm:py-1 justify-center border-2 border-gold rounded-2xl bg-white">
                                    <button
                                        className='text-black hover:scale-125 smooth-transition cursor-pointer text-sm sm:text-base'
                                        onClick={() => setQuantityCount(Math.max(1, quantityCount - 1))}
                                    >
                                        <FaMinus />
                                    </button>
                                    <input
                                        className='w-12 sm:w-16 text-center text-black text-sm sm:text-base'
                                        type="number"
                                        name='quantity'
                                        value={quantityCount}
                                        onChange={(e) => setQuantityCount(Math.max(1, parseInt(e.target.value) || 1))}
                                        min={1}
                                    />
                                    <button
                                        className='text-black hover:scale-125 smooth-transition cursor-pointer text-sm sm:text-base'
                                        onClick={() => setQuantityCount(quantityCount + 1)}
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button className='w-full sm:w-auto px-6 sm:px-10 md:px-14 py-2 sm:py-2 text-center font-semibold border-2 border-transparent bg-gold text-white hover:bg-white hover:text-gold hover:border-gold text-sm sm:text-base md:text-lg whitespace-nowrap'>Add to cart</button>
                                <button className='w-full sm:w-auto px-6 sm:px-10 md:px-14 py-2 sm:py-2 text-center font-semibold border-2 border-transparent bg-gold text-white hover:bg-white hover:text-gold hover:border-gold text-sm sm:text-base md:text-lg whitespace-nowrap'>Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src='/images/dialog-footer.png' alt='dialog header' className='w-full h-auto object-cover' />
                    </div>
                </DialogPanel>
            </div>
        </Dialog >
    )
}

export default DialogBox