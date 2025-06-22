import { CDN_IMG } from "../utils/constants";

const ItemList = ({items, dummy}) => {
    console.log(dummy);
    return(
    
        <div className="grid gap-2 p-4">
            {items.map((item) => (
            <div
                key={item.card.info.id}
                className="flex justify-between items-start p-4 m-2 border-b-2 border-gray-200 hover:shadow-md transition-shadow bg-white"
            >
            {/* Left Section - Text Content */}
            <div className="flex-1 pr-4">
            {/* Bestseller tag */}
                {item.card.info.ribbon?.text && (
                <p className="text-[10px] text-red-500 font-semibold">
                <span className="text-red-400">⭐</span> {item.card.info.ribbon.text}
                </p>
        )}

            {/* Name */}
            <h3 className="text-[16px] text-left font-semibold text-gray-800">
                {item.card.info.name}
            </h3>

            {/* Price and discount */}
            <div className="flex items-left gap-2 mt-1">
                <span className="text-[14px] font-medium text-green-600">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                </span>
            </div>

            {/* Rating */}
                {item.card.info.ratings?.aggregatedRating?.rating && (
                <p className="mt-1 text-[12px] text-green-600 text-left font-semibold">
                ⭐ {item.card.info.ratings.aggregatedRating.rating}
                <span className="text-gray-500 font-normal text-[11px] ml-1">
                ({item.card.info.ratings.aggregatedRating.ratingCount})
                </span>
                </p>
                )}

            {/* Description */}
            <p className="mt-2 text-[12px] text-left text-gray-600 line-clamp-2">
            {item.card.info.description}
            </p>
      </div>

            {/* Right Section - Image and Add Button */}
        <div className="w-24 text-center">
            <img
              src={CDN_IMG + item.card.info.imageId}
              className="w-full h-20 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            <button className="mt-2 text-green-600 font-bold border border-gray-300 px-3 py-1 rounded shadow-sm hover:shadow-md text-[12px] cursor-pointer">
            ADD
            </button>
            <p className="text-[10px] text-gray-500 mt-1">Customisable</p>
      </div>
    </div>
  ))}
</div>


    )
}
export default ItemList;