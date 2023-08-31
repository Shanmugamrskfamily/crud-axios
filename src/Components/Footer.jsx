import React from "react";

function Footer(props) {
  return (
    <footer className=" d-flex justify-content-center">
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>
          © 2023 All rights reserved By <span className="span">SHANMUGAM</span>.
        </p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <svg className="bi" width="24" height="24"></svg>
          </li>
          <li className="ms-3">
            <svg className="bi" width="24" height="24"></svg>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;