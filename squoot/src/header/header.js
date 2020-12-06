import logo from './images/logo.png'
import coffee from './images/coffee.svg'
import './header.css'
import Input from './input.js'

function Header() {
    return (
    <div className="header">
      <img alt="squoot logo" src={logo} />
      <Input /> 
      <a className="coffee" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/michaelkofron"><img alt="buy me a coffee" src={coffee}/></a>
    </div>
    );
}

export default Header