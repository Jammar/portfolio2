import React from "react"

const Icons = ({ details, ulStyle }) => {
  
  if (!ulStyle) ulStyle={animation: "fadein 2.1s"};
  const listedIcons = details.map(icon => {
    const { key, anchor, className, text, iconStyle } = icon;
      return (
        <li key={key} style={iconStyle}>
            <a href={ anchor } target="_blank" rel="noopener noreferrer" className={className}>
              <span className="label">{text}</span>
            </a>
        </li> 
    )});
return <div className="socials"><ul className="icons" style={ulStyle}>{ listedIcons }</ul></div>
}

export default Icons