const Header = () => {
  return (
    <div className="h-16 bg-purple-600 text-white">
      <nav className="mx-5 h-full">
        <div className="flex justify-between h-full items-center">
          <h1 className="font-bold text-xl">
            <a href="#">UserCardHub</a>
          </h1>
          <ul className="flex">
            <li className="mx-3">
              <a href="#">
                <i className="fab fa-github text-xl"></i>
              </a>
            </li>
            <li className="mx-3">
              <a href="#">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
