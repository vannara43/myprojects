import React from 'react'
import "./menu.css"

function Menu() {
    return (
        <React.Fragment>
            <ul>
                <li style={{ '--clr': '#00ade1' }}>
                    <a href="# " data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
                </li>
                <li style={{ '--clr': "#ff1413" }}>
                    <a href="# " data-text="&nbsp;About">&nbsp;About&nbsp;</a>
                </li>
                <li style={{ '--clr': "#ffdd1c" }}>
                    <a href="# " data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>
                </li>
                <li style={{ '--clr': "#00dc82" }}>
                    <a href="# " data-text="&nbsp;Team">&nbsp;Team&nbsp;</a>
                </li>
                <li style={{ '--clr': "#dc00d4" }}>
                    <a href="# " data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>
                </li>
            </ul>
        </React.Fragment >
    )
}

export default Menu