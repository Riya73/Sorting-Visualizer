import React,{useState} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Riya Mishra</h3>
        <div className="header__bar__icons">
          <a href="https://github.com/Riya73" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a href="https://www.linkedin.com/in/riya-mishra-1112b9213/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      <div className="header-logo">S<span>orting</span> V<span>isualizer</span></div>
      <div className="header__options">
          <h3 className="header__option" onClick = {contactHandler}>Contact Me</h3>
      </div>
   </div>
  )
}

export default Header;