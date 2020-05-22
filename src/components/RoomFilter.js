import React ,{useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get unique types
const getunique = (items,value) =>{
 return [...new Set(items.map(items=>items[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
   const {handleChange,type,capacity,price,  minPrice ,
    maxPrice ,
    minSize ,
    maxSize ,
    breakfast ,
    pets} = context;

    //get unique types
    let types = getunique(rooms,'type');
    //get all
    types = ['all',...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    // get unique capacity
    let people = getunique(rooms, "capacity");
    people = people.map((item, index) => (
            <option key={index} value={item}>
            {item}
            </option>
    ));
    return (
        <section className="filter-container">
            <Title title='Search rooms'></Title>
            <form className="filter-form">
                    {/* select type */}
                            <div className="form-group">
                                    <label htmlFor="type">room type</label>
                                    <select name="type" id="type"
                                    onChange={handleChange} className="form-control" value={type}> 
                                    {types}
                                    </select>
                            </div>
                    {/* end select type */}
                     {/* select guest */}
                     <div className="form-group">
                                    <label htmlFor="capacity">guest</label>
                                    <select name="capacity" id="capacity"
                                    onChange={handleChange} className="form-control" value={capacity}> 
                                    {people}
                                    </select>
                            </div>
                    {/* end select type */}
                    {/* room price */}
                        <div className="form-group">
                        <label htmlFor="price">room price Rs.{price}</label>
                        <input
                                type="range"
                                name="price"
                                min={minPrice}
                                max={maxPrice}
                                id="price"
                                value={price}
                                onChange={handleChange}
                                className="form-control"
                                />
                        </div>
                    {/* end of room price*/}
                       {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
            </form>
        </section>
    )
}
