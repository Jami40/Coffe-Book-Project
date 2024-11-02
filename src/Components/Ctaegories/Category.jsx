import {  NavLink } from "react-router-dom";


const Category = ({categories}) => {
    console.log(categories)
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
              {
                categories.map(category=><NavLink
                     to={`/category/${category.category}`}
                      role="tab" 
                      className={({isActive})=>`tab text-2xl font-thin ${isActive?'tab-active':''}`}>
                    {category.category}</NavLink>)
              }
             
            </div>
            
        </div>
    );
};

export default Category;