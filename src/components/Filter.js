import React,{useState} from 'react'

function Filter(props) {

    const [classTitle,setClassTitle] = useState("active-filter-btn");
    const [classFilter,setClassFilter] = useState("");

    const handleFilter = (e) => {
        if(e.target.innerHTML==="Title"){
            setClassTitle("active-filter-btn")
            setClassFilter("")
            props.handleFiltered("title")
        }else{
            setClassTitle("")
            setClassFilter("active-filter-btn")
            props.handleFiltered("rating")
        }
        
    }

    return (
        <div className="filter">
            <div className="filter-title">Filter :</div>
            <button onClick={(e)=>handleFilter(e)} className={`filter-btn ${classTitle}`}>Title</button>
            <button onClick={(e)=>handleFilter(e)} className={`filter-btn ${classFilter}`}>Rating</button>
        </div>
    )
}

export default Filter
