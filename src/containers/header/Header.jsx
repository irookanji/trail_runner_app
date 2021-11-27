import React from "react";
import "./header.css";
import { Button } from "antd";

const Header = () => {
  return (
    <div className="header">
      <div className="header_poster">
        <div className="header_text">
          <h1>The Trail Runner SWT Is Here.</h1>
          <p>Durable. Comfortable. Ready to get dirty.</p>
        </div>
        <div className="header_btn">
          <Button className="header_btn-button" type="primary">
            SHOP MEN
          </Button>
          <Button className="header_btn-button" type="primary">
            SHOP WOMEN
          </Button>
        </div>
      </div>

      {/* <div className="header_poster">
                <img src={Rectangle} alt="Runners poster" />
            </div> */}
    </div>
  );
};

export default Header;
