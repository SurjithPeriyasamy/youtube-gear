import React from "react";
const FakeCard = () => {
  return (
    <div className="h-fit w-72 shadow-2xl rounded-lg p-2">
      <div className="h-32 bg-gray-300 m-2 rounded-lg"></div>
      <div className="h-3 bg-gray-300 m-2 "></div>
      <div className="h-3 bg-gray-300 m-2 "></div>
      <div className="h-4 bg-gray-300 m-2 "></div>
    </div>
  );
};

const FakeButton = () => {
  return <div className="m-2 bg-gray-200 h-8 w-[90px] rounded-lg"></div>;
};

const ShimmerUi = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-wrap">
        {[...Array(20)].map((x, i) => (
          <FakeButton key={i + 1} index={i + 1} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {[...Array(30)].map((x, i) => (
          <FakeCard key={i + 1} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerUi;
