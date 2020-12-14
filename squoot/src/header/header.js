import logo from './images/logo.png'
import coffee from './images/coffee.svg'
import './header.css'
import Input from './input.js'

function Header() {
    return (
    <div className="header">
      <div>
        <div className="header__logobox">
          <img alt="squoot logo" src={logo} />
        </div>
        <Input /> 
        <a className="coffee" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/michaelkofron"><img alt="buy me a coffee" src={coffee}/></a>
      </div>
    </div>
    );
}

export default Header