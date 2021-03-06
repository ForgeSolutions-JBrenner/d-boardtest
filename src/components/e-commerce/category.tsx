import React, {useState} from "react";
import {FiChevronRight} from "react-icons/fi";

export type CategoryProps = {
  name: string;
  categories: string[];
  active: boolean;
};

const Category: React.FC<CategoryProps> = ({name, categories, active}) => {
  const [hidden, setHidden] = useState<boolean>(active);
  return (
    <div className="flex items-center justify-start py-2">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between">
          <button
            onClick={() => setHidden(!hidden)}
            className="bg-transparent text-left text-gray-900 flex flex-row items-center justify-start w-full">
            <span className="text-sm font-bold">{name}</span>
            <FiChevronRight
              className={`ml-auto stroke-current transition ease-in-out duration-150 transform ${
                hidden ? "rotate-0" : "rotate-90"
              }`}
            />
          </button>
        </div>
        <div className={`py-2 w-full ${hidden ? "hidden" : "block"}`}>
          {categories.map((category, i) => (
            <div
              className="flex flex-row items-center justify-between px-2 py-1"
              key={i}>
              <span className="text-sm">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
