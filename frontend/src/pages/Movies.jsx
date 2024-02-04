import React, { useState } from 'react'
import Navbar from './Navbar'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { MovieCard, BookCard } from "../components/CustomCard.jsx"
import data from '../assets/Data.jsx';

import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';


function Movies() {
  const [genre, setgenre] = useState();
  console.log(genre);
  

  return (
    <div className='bg-custom-10'>
      <Navbar />
      <div className='mt-20 p-2'>
        <div className='p-2'>
          <Select.Root>
            <Select.Trigger
              className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
              aria-label="Food"
            >
              <Select.Value placeholder="Filter content" />
              <Select.Icon className="text-custom-50">
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-[5px]">
                  <Select.Group>
                    <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                      Category
                    </Select.Label>
                    { 
                        TAGS.map((tag, index) => (
                          <SelectItem key={index} value={tag}>
                            {tag}
                          </SelectItem>
                        )) 
                    }
                  </Select.Group>

                  <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />

                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
      </div>
      <div className="p-3  gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 justify-around ">
          {data.map((movie, index) => (
            <MovieCard key={index} {...movie} />       
        ))} 
        </div>
      </div>
    </div>
      )
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-[13px] leading-none text-custom-50 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});


export default Movies

const TAGS = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
  "Documentary",
  "Family",
  "Musical",
  "War",
  "Western",
  "Crime",
  "Historical",
  "Biography",
  "Sports",
];
