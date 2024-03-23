'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({dentistName , imgSrc, onRating}:{ dentistName:string, imgSrc:string, onRating?:Function}) {
    let ratingName = dentistName + " Rating"

    const [value, setValue] = useState<number | null>(5);

    return (
        <InteractiveCard contentName={dentistName}>
                <div className='w-full h-[70%] relative rounded-t-lg'>
                    <Image src={imgSrc}
                    alt='Hospital picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    /> 
                </div>
                <div className='w-full h-[30%] text-black p-[10px] mb-0'>{dentistName}
                    <br />
                    {
                        onRating? <Rating id={ratingName} name={ratingName} data-testid={ratingName} className='mt-2' value={value} 
                        onChange={(event, newValue) => {setValue(newValue);onRating(dentistName,newValue);}}
                        onClick={(e) => {e.stopPropagation();}}/> : ''
                    }
                </div>
                
        </InteractiveCard>
    )
}