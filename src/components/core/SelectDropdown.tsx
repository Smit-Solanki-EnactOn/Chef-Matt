import React from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { BiSolidDownArrow } from 'react-icons/bi';
import clsx from 'clsx';

// Using "T" as a generic type and can be used and has any type
interface SelectDropDownProps<T> {
    text: string;
    listData: T[];
    list: T | null;
    setList: React.Dispatch<React.SetStateAction<T | null>>;
}

interface Filter {
    id: number;
    option: string;
}

interface Feature {
    id: number;
    option: string;
}
const SelectDropdown = <T extends Filter | Feature>(props: SelectDropDownProps<T>) => {
    const { listData, list, setList, text } = props;

    return (
        <Listbox value={list} onChange={setList}>
            <ListboxButton className={clsx('flex items-center justify-center gap-2 w-full p-2 cursor-pointer text-white hover:text-gold bg-transparent placeholder:text-gray-300 focus:border-white text-md')}>
                {list ? list.option : text}
                <BiSolidDownArrow className="h-4 w-4 " aria-hidden="true" />
            </ListboxButton>

            <ListboxOptions transition={true} anchor="bottom" className='w-[--button-width] p-2 text-sm text-gray-300 border-2 border-gray-300 bg-black placeholder:text-gray-300 focus:border-white z-10'>

                {listData.map((listOption: Filter | Feature) => (
                    <ListboxOption key={listOption.id} value={listOption} className={clsx('flex items-center justify-center w-full p-2 text-sm border-b-1 border-white text-gray-300  placeholder:text-gray-300 focus:border-white cursor-pointer hover:border-white hover:bg-gray-100 hover:text-black')}>
                        {listOption.option}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    )
}

export default SelectDropdown