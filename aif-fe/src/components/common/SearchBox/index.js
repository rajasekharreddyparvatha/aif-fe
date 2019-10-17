/**
 * Created by rajasekhar on 06-Mar-19.
 */
import './style.css';
import React from 'react'
export  default React.forwardRef((props, ref) => {
    return (<div className="searchPanel">
        <img onClick={props.onSearch} src={'/assets/Search.svg'}></img>
        <div>
            <input onChange={props.onChange} placeholder="Search Configurations" className="search-input" type="text" name="searchText"/>
        </div>
    </div>)
});