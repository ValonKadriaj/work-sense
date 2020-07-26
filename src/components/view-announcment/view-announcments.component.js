import React from 'react';

const ViewAnnouncment = () => {
  return (
    <div className="w-4/5 mt-10 bg-white m-auto rounded-lg">
      <div className="p-5">
        <div className="flex">
          <div className="h-10 w-10 bg-green-400 rounded-full flex justify-center items-center text-white  mr-2">
            A
          </div>
          <div>
            <h1 className="font-semibold">Collaboration Session</h1>
            <p className="text-gray-500 text-xs ">
              45 minutes ago by{' '}
              <span className="text-gray-700"> arlind jashari</span>
            </p>
          </div>
        </div>
        <div className="ml-12">
          <h1 className="font-semibold text-lg text-gray-900">Dears,</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            magni i Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius
          </p>

          <h2 className="text-black font-semibold mt-3">
            Nostrum magni i Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius, Lorem,
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ViewAnnouncment;
