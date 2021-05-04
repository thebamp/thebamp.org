import React from "react"

export default ({imageUrl, name, role, email}) =>
    <div className="teamMember">
        <div className="teamMember--photo"><img src={imageUrl}/></div>
        <div className="teamMember--name">{name}</div>
        <div className="teamMember--role">{role}</div>
        <a className="teamMember--icon" href={`mailto:${email}`}>
            <img src="/img/icons/mail.svg"/>
        </a>
    </div>
