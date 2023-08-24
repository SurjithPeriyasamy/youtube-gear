import React from "react";

const InputForSign = ({
  value,
  setValue,
  labelName,
  placeholderName,
  typeName,
}) => {
  return (
    <div className="flex flex-col mt-3">
      <label className="font-medium text-sm">{labelName}</label>
      <input
        placeholder={placeholderName}
        className="text-gray-700 placeholder:text-sm border-b border-gray-500  bg-transparent focus:outline-none "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={typeName}
      />
    </div>
  );
};

export default InputForSign;
