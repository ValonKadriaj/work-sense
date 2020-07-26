import React, { useState } from 'react';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ViewAnnouncment from '../view-announcment/view-announcments.component';
import Announcment from '../announcment/announcment.compnent';

const Home = () => {
  const [viewAnnouncment, setViewAnnouncment] = useState(false);
  const annoncmnets = [
    {
      id: 1,
      title: 'Title 1',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 2,
      title: 'Title 2',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 9,
      title: 'Title 3',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 8,
      title: 'Title 4',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 7,
      title: 'Title 5',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 3,
      title: 'Title 6',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 6,
      title: 'Title 7',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 4,
      title: 'Title 9',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
    {
      id: 5,
      title: 'Title 10',
      body:
        ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.',
      createdAt: '45 minutes ago by',
      createdBy: 'Arlind Jashari',
    },
  ];
  const handleClick = () => {
    setViewAnnouncment(true);
  };
  return (
    <div style={{ height: `calc(100vh - 70.5001px)` }} className="flex">
      <div className="px-8 mt-8 w-full overflow-y-scroll">
        <div className="flex items-center">
          <span className="text-gray-900 font-semibold uppercase text-sm">
            Home
          </span>
          <span className="mx-6 text-gray-900 font-semibold text-sm ">/</span>
          <span className="p-1 bg-blue-500 rounded-full mr-2"></span>{' '}
          <p className="text-gray-500 font-semibold uppercase text-sm">
            Announcments
          </p>
        </div>
        <h1 className=" text-2xl my-4 font-bold text-black">Announcments</h1>
        {annoncmnets.map((annoncmnet) => (
          <Announcment
            key={annoncmnet.id}
            handleClick={handleClick}
            {...annoncmnet}
          />
        ))}
      </div>
      <div
        style={{ borderTopLeftRadius: '80px' }}
        className="w-full bg-gray-400"
      >
        {viewAnnouncment ? (
          <ViewAnnouncment />
        ) : (
          <div className="flex items-center flex-col justify-center h-full text-gray-700">
            <AnnouncementIcon />
            <p>Select Announcments To Read </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
