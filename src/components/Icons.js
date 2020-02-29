import React from "react"

function Icons({ props }) {

    let listedIcons = props.map(prop => {
        return (
            <li key={prop.key}>
                <a href={ prop.anchor } className={prop.iconClass} alt={prop.text}>
                <span className="label">{prop.text}</span>
                </a>
            </li> 
    )});
    

return (
    
    <div className="socials">
    <ul className="icons">
        { listedIcons }
    </ul>
  </div>
)
}

export default Icons