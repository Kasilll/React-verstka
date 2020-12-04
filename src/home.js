import DoubleArrow from "./img/DoubleArrow.png"
import Menu from "./img/MENU.png"

function Home() {
  return (
      <div className = "home">
        <div className = "MENU">
            <img src ={Menu} alt = "Изображение не загрузилось"/>
        </div>
        <div className="sitebar home__menu">
            <div className = 'text'>
                <ul>
                  <li className = "white"><a href = "#">HOME</a></li>
                  <li className = "white"><a href = "#">ABOUTE ME</a></li>
                  <li className = "white"><a href = "#">PORTFOLIO</a></li>
                  <li className = "white"><a href = "#">CONTACT</a></li> 
                </ul>
            </div> 
        </div>
        <p    className = "scroll-down">SCROLL DOWN TO SEE MORE</p>
        <img  className = "DoubleArrow" src = {DoubleArrow} height = "34px" width = "32px" alt = "Изображение не загрузилось" />
      </div>
  );
}

export default Home;
