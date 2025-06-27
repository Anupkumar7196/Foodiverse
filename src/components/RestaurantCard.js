

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div className="bg-transparent  mx-2 my-4  w-[190px] h-[250px]  transition duration-300 ease-in-out hover:scale-95 hover:bg-transparent-100 items-center cursor-pointer">
      {/* Image with discount tag */}
      <div className="relative">
        <img
          className="w-full h-[140px] object-cover rounded-xl"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-1  bg-gray-900 bg-opacity-70 text-white text-sm px-2 py-[2px] rounded-md font-bold">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader || ""}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="px-0 pt-2 pb-3">
        <h5 className="font-bold text-[15px] text-gray-900 mb-1 truncate">
          {name}
        </h5>

        <p className="text-[13px] text-gray-700 flex items-center gap-1">
          <span className="text-green-600 font-bold">⭐ {avgRating}</span>
          <span className="text-gray-600">
            • {sla?.slaString || "30-40 mins"}
          </span>
        </p>

        <p className="text-[13px] text-gray-600 truncate">
          {cuisines?.join(", ")}
        </p>

        <p className="text-[13px] text-gray-500 mt-[2px]">{areaName}</p>
      </div>
    </div>
  );
};

// ✅ Higher Order Component for "Promoted" Label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-[2px] rounded">
        PROMOTED
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
