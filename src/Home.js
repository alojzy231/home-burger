import burger from './img/Craft-beef-burger-with-cheese-png.png'

export default function Home (){
    return(
        <div className="container">
        <div className="main-card">
          <div className="left-content">
              <h1>
                Welcome to Home Burger,
              </h1>
              <p>where all burgers feel like in their own place.</p>
          </div>
          <img src={burger} alt="https://similarpng.com/craft-beef-burger-with-cheese-png/"/>
        </div>
      </div>
    );
}