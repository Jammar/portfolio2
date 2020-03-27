import React from "react"

const Icons = ({ details, style }) => {
  const listedIcons = details.map(icon => {
    const { key, anchor, className, text } = icon;
      return (
        <li key={key} style={style}>
            <a href={ anchor } className={className}>
              <span className="label">{text}</span>
            </a>
        </li> 
    )});
return <div className="socials"><ul className="icons">{ listedIcons }</ul></div>
}

export default Icons