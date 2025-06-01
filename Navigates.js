import { Link, Outlet } from "react-router-dom";
function Navigates() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/contact">call</Link>
          </li>
          <li>
            <Link to="/Namutebi">take</Link>
          </li>
          <li>
            <Link to="/about">know</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigates;
