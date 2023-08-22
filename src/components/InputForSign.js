import React from "react";

const InputForSign = ({
  value,
  setValue,
  labelName,
  placeholderName,
  typeName,
}) => {
  return (
    <div>
      <label className="font-medium text-sm">{labelName}</label>
      <input
        placeholder={placeholderName}
        className="placeholder:text-sm w-[94%] border-b-2 border-blue-300 mx-1  bg-transparent focus:outline-none "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={typeName}
      />
    </div>
  );
};

export default InputForSign;
