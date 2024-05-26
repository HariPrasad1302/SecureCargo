// HorizontalScrollSection.js

import React from 'react';

const HorizontalScrollSection = () => {
  return (
    <div className="w-screen h-screen overflow-x-scroll flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex space-x-4">
          {/* Sample content */}
          <div className="w-80 h-80 bg-gray-300 rounded-xl flex-shrink-0">
            {/* Content for card 1 */}
            <h2 className="text-lg font-semibold">Card 1</h2>
            <p className="text-gray-600">This is some sample content for card 1.</p>
          </div>
          <div className="w-80 h-80 bg-gray-300 rounded-xl flex-shrink-0">
            {/* Content for card 2 */}
            <h2 className="text-lg font-semibold">Card 2</h2>
            <p className="text-gray-600">This is some sample content for card 2.</p>
          </div>
          <div className="w-80 h-80 bg-gray-300 rounded-xl flex-shrink-0">
            {/* Content for card 3 */}
            <h2 className="text-lg font-semibold">Card 3</h2>
            <p className="text-gray-600">This is some sample content for card 3.</p>
          </div>
          {/* End of example cards */}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
