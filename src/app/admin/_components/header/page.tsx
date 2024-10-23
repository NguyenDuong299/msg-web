import React, { useEffect, useState } from "react";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Popover } from "antd";

const AdminHeader = () => {
  const content = (
    <div>
      <div className="dropdown-item">
        <UserOutlined className="mr-2 text-gray-400" />
        Profile
      </div>
      <div className="dropdown-item">
        <SettingOutlined className="mr-2 text-gray-400" />
        Settings
      </div>
      <div className="dropdown-divider" style={{ margin: "8px 0" }} />
      <div className="dropdown-item">
        <LogoutOutlined className="mr-2 text-gray-400" />
        Logout
      </div>
    </div>
  );

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-0 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block" />
        <li className="nav-item dropdown no-arrow">
          <Popover content={content} trigger="click" placement="bottomRight">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
              <Avatar
                size="large"
                icon={
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="profile"
                  />
                }
                className="img-profile rounded-circle"
              />
            </a>
          </Popover>
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;
AdminHeader.displayName = "AdminHeader";