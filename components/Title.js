import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4  mb-14">
      <h3 className="text-sm uppercase font-light text-blue-600 tracking-wide">
       {title}
      </h3>
      <h1 className="text-x4l md:text-6xl text-gray-900 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title