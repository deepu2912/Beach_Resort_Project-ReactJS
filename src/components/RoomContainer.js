import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({context}){
   
    
    const {loading,sortedrooms,rooms} = context;  
     if(loading){
        return <Loading/> 
        }

    return(
        <>
             <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedrooms}></RoomList> 
        </>
    )
}

export default withRoomConsumer(RoomContainer);
// import React from 'react';
// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomContainer() {
//     return (
// <RoomConsumer>
//     {
     
//         (value) =>{
//             const {loading,sortedRooms,rooms} = value;  

//             if(loading){
//                 return <Loading></Loading>
//             }

//                 return <div>
//                             Hello From  RoomContainer
//                             <RoomFilter rooms={rooms}></RoomFilter>
//                             <RoomList rooms={sortedRooms}></RoomList>
//                        </div>
//         }
//     }
// </RoomConsumer>

       
//     )
// }
