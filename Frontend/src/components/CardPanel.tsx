// 'use client'
// import Card from "./Card"
// import { useReducer } from "react"
// import Link from "next/link"

// export default function CardPanel() {

//     const ratingReducer = ( ratingList:Map<string,number>, action:{hospitalName:string,rating:number,type:string}) => {
//         if (action.type == 'delete') {
//             ratingList.delete(action.hospitalName)
//             return new Map(ratingList)
//         }
//         ratingList.set(action.hospitalName, action.rating)
//         return new Map(ratingList)
//     }

//     const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,number>([
//         ['Chulalongkorn Hospital', 5],
//         ['Rajavithi Hospital', 5],
//         ['Thammasat University Hospital', 5],
//         ]))

//     //Mock Data
//     const mockHosiptal = [
//         {hid:"001", name:'Chulalongkorn Hospital', image:'/img/chula.jpg'},
//         {hid:"002", name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'},
//         {hid:"003", name:'Thammasat University Hospital', image:'/img/thammasat.jpg'}
//     ]

//     return (
//         <div>
//             <div style={{margin:"20px",display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"space-around", flexWrap:"wrap"}}>
//                 {mockHosiptal.map( (hospitalItem) => 
//                     <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
//                         <Card key={hospitalItem.hid} hospitalName={hospitalItem.name} imgSrc={hospitalItem.image} onRating={ (hospital:string,rate:number)=>dispatchRating({hospitalName:hospital,rating:rate,type:'change'})}/>
//                     </Link>
//                     )
//                 }
//             </div>
//             { Array.from(ratingList).map( ([hospital, rating]) => <div data-testid={hospital} onClick={()=>dispatchRating({hospitalName:hospital,rating:0,type:'delete'})} className="text-center" >
//                 {hospital + " Rating : " + rating}
//             </div>)}
//         </div>
//     )
// }