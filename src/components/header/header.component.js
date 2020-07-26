import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
  return (
    <div className="flex justify-between items-center  border-b-2">
      <div className="">
        <div className="flex items-center">
          <img
            className="w-40 h-8 px-4  mr-2"
            src="https://assets.worksense.cloud/workspaces/default-logo.png"
            alt=""
          />
          <MenuIcon />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="bg-green-400 h-8 w-8 flex items-center justify-center  rounded-full text-white mr-2  text-xs">
          M
        </div>
        <div className="py-3">
          <h1 className="font-semibold text-normal text-black flex">
            <p>Mehmetali Shaqiri</p>
            <ExpandMoreIcon />
          </h1>
          <p className="text-sm">admin</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
