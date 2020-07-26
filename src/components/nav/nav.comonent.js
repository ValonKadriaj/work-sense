import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ErrorIcon from '@material-ui/icons/Error';
import HelpIcon from '@material-ui/icons/Help';
const Nav = () => {
  return (
    <div
      style={{ height: `calc(100vh - 70.5001px)` }}
      className="flex flex-col w-48 bg-blue-900"
    >
      <div className="flex-1  text-white ">
        <div className="flex cursor-pointer my-1 px-3 py-2">
          <HomeIcon />
          <p className="ml-1 font-semibold">Home</p>
        </div>
        <div className="flex py-2 cursor-pointer my-1 px-3">
          <PeopleIcon />
          <p className="ml-1 font-semibold">Directory</p>
        </div>
        <div className="flex py-2 cursor-pointer my-1 px-3">
          <CalendarTodayIcon />
          <p className="ml-1 font-semibold">Calendar</p>
        </div>
        <div className="flex py-2 cursor-pointer my-1 px-3">
          <AnnouncementIcon />
          <p className="ml-1 font-semibold">Announcments</p>
        </div>
        <div className="flex py-2 cursor-pointer my-1 px-3">
          <ErrorIcon />
          <p className="ml-1 font-semibold">About</p>
        </div>
        <div className="flex py-2 cursor-pointer my-1 px-3">
          <HelpIcon />
          <p className="ml-1 font-semibold">Help</p>
        </div>
      </div>
      <div className="mb-2  w-full text-center border-t  border-black">
        <img
          className="w-8  mt-4 m-auto mb-2 "
          src="https://worksense.cloud/assets/images/logos/ws.png"
          alt="logo"
        />
        <p className="text-xs text-gray-600">&copy; Worksense</p>
        <p className="text-xs text-gray-600">All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Nav;
