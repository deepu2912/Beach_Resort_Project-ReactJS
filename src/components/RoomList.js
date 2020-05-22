import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
     
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
// import React from 'react'
 
// import Room from './Room'

// export default function RoomList({rooms}) {

//     if(rooms.length === 0){
//         return(
//             <div className="empty-search">
//                 <h3>
//                     Unfortunately no rooms found matched your search parameters.
//                 </h3>
//             </div>
//         )
//     }

//     return (
//        <section className="roomsList">
//            <div className="roomsList-center">
// {
//     rooms.map(item=>{
//         return <Room key={item.id} room={item}></Room>;
//     })
// }
//            </div>
//        </section>
//     )
// }
