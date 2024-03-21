'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({hospitalName , imgSrc, onRating}:{ hospitalName:string, imgSrc:string, onRating?:Function}) {
    let ratingName = hospitalName + " Rating"

    const [value, setValue] = useState<number | null>(5);

    return (
        <InteractiveCard contentName={hospitalName}>
                <div className='w-full h-[70%] relative rounded-t-lg'>
                    <Image src={imgSrc}
                    alt='Hospital picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                    /> 
                </div>
                <div className='w-full h-[30%] text-black p-[10px] mb-0'>{hospitalName}
                    <br />
                    {
                        onRating? <Rating id={ratingName} name={ratingName} data-testid={ratingName} className='mt-2' value={value} 
                        onChange={(event, newValue) => {setValue(newValue);onRating(hospitalName,newValue);}}
                        onClick={(e) => {e.stopPropagation();}}/> : ''
                    }
                </div>
                
        </InteractiveCard>
    )
}