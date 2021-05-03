import React from "react"

export default ({imageUrl, name, role, email}) =>
    <div class="teamMember">
        <div class="teamMember--photo"><img src={imageUrl}/></div>
        <div class="teamMember--name">{name}</div>
        <div class="teamMember--role">{role}</div>
        <a class="teamMember--icon" href={`mailto:${email}`}>
            <img src="/img/icons/mail.svg"/>
        </a>
    </div>
