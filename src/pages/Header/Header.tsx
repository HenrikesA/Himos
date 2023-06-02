const Header = () => {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-center h-24 w-screen px-10 z-50">
      <div>
        <img src="src/assets/Himos_LumiSuomi_logo.png" alt="Himos logo"/>
      </div>

      <div className="flex">
        <p>sunny</p>
        <div>

        </div>
        <p>winter</p>
      </div>

      <nav className="flex items-center gap-36">
        <ul className="flex justify-end gap-20 list-none">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Rentals</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>

        <span className="hover:cursor-pointer">
          <img src="src/assets/Hamburger.png" alt="Hamburger"/>
        </span>
      </nav>
    </header>
  )
}

export default Header