import JasonWood from "./img/JasonWood.png"
import KeepScrolling from "./img/KeepScrolling.png"

function aboutMe() {
    return (
        <div className = "aboutMe">
            <div className="sitebar aboutMe__menu">
                <div className = 'text'>
                    <ul>
                        <li className = "color-bebebe"><a href = "/#">HOME</a></li>
                        <li className = "color-bebebe"><a href = "/#">ABOUTE ME</a></li>
                        <li className = "color-bebebe"><a href = "/#">PORTFOLIO</a></li>
                        <li className = "color-bebebe"><a href = "/#">CONTACT</a></li> 
                    </ul>
                </div> 
            </div>
            <div className = "container">
                    <div className = "content">
                        <div className = "imgJasonWood">
                            <img src = {JasonWood} className = "jasonWood" alt = "Изображение не загрузилось"/>
                        </div>
                        <div className = "row">
                            <p className = "row1">ABOUTE ME</p>
                            <span className = "row2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                                    consequat. 
                            <p className = "row3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            </span>
                            <p className = "row4">jason Wood</p>
                        </div>
                    </div>
            </div>
                <div className = "keep-scrolling">
                    <p className = "keepScrollingText">KEEP SCROLLING THERE IS STILL MORE TO COME</p>
                    <img className = "DoubleArrow2" alt = "Изображение не загрузилось" src = {KeepScrolling} height = "34px" width = "32px"/>
                </div>
        </div>
    )
}

export default aboutMe;