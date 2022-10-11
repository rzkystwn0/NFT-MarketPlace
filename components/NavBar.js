function NavBar() {
  return (
    // <div>
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex items-center my-8 justify-between px-6">
        <div className="sm:w-1/12">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="w-4/12 sm:block hidden">
          <ul className="DM-Sans flex justify-between font-medium text-lg text-white">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">how it works</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
          </ul>
        </div>
        <div className="w-7/12 sm:block hidden">
          <div className="flex justify-end mx-6 w-12/12">
            <button className="border border-white rounded-md text-white exo text-lg font-bold px-12 py-4">Connect Wallet</button>
          </div>
        </div>
        <img src="menu.png" className="sm:hidden" />
      </div>
    </div>
    // </div>
  );
}

export default NavBar;
