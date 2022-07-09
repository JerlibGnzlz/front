import React from "react";
import logo from "../../img/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";


function SideBar() {
  return (
    <>
      <div className="abosolute">
        <div>
          <img className="bg-black w-48 p-4" src={logo} alt="Pic not found" />
        </div>
        <div className="flex-1 w-48 bg-gray-800 h-screen">
          <ul className="text-white font-semibold ml-2">
            <li className="pt-8">
              <AccountCircleIcon /> <button>Profile</button>
            </li>
            <li className="pt-8">
              <FavoriteIcon /> <button>Favorites</button>
            </li>
            <li className="pt-8">
              <LibraryBooksIcon /> <button>History</button>
            </li>
            <li className="pt-8">
              <SettingsIcon /> <button>Settings</button>
            </li>
            <li className="pt-8">
              <CallIcon /> <button>Contact us</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
