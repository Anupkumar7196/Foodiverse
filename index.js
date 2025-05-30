{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> 

ReactElement(Object)=>  Html(Browser Understands)

*/}

import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => Object => render  => HTML
//  const heading = React.createElement("h1", {id: "heading"}, "Hello Anup!");
 
//  //JSX is not html in JS, JSX is html like syntax
//  //JSX (transiled before it reaches the JS)- PARCEL - Babel
//  // JSX => Babbel transpiles it to React.createElement => ReactElement-JS  =>HTMLElement(render)

// // React Element  
//  const jsxHeading = <h1 id="heading" className="Head">Namaste React using JSX </h1>

//     console.log(jsxHeading);
//     // React Component: Two types of component:
//     // Class based component: OLD
//     // Functional Component: NEW
//     const Title = () => (
//         <h1 >Namaste React using JSX</h1>
//     )

//     // Component Composion
//     const Heading = () =>(
//         <div id="component">
//             {"Anup Kumar"}
//             {Title()}
//             <Title></Title>
//             <Title/>
//         <h1 className="heading">Namaste React is going on </h1>
//         </div>
//     )

//     // const Greet = () => (
//     //     <h1 id="greet" > Good Morning!</h1>
//     // )

//     // const Intro = () =>(
//     //     <div id="composition">
//     //         <Greet/>
//     //         <h1 id="intro">Hii, I am Anup Kumar</h1>
//     //     </div>
//     // )


//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<Heading/>);
 

// ----------------------Episode-2------------------------

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *  -Image
 *  -Name of Res, Star Rating, Cuisine, Dilevery time
 * 
 * 
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

const Header  = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//Body
const resList = [
    {
    "info": {
    "id": "651212",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/ba3c93cd-2af9-488a-acea-c833fdf5a342_651212.JPG",
    "locality": "ECE House",
    "areaName": "Kasturba Gandhi Marg",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American",
    "Fast Food"
    ],
    "avgRating": 4.5,
    "parentId": "630",
    "avgRatingString": "4.5",
    "totalRatingsString": "1.8K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹49"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/mcdonalds-ece-house-kasturba-gandhi-marg-rest651212",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "805983",
    "name": "FreshMenu",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/9c575026-99b6-429b-a5d8-22a5a0e78068_805983.jpg",
    "locality": "SHAKARPUR",
    "areaName": "NEHRU ENCLAVE",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Continental",
    "Chinese",
    "Oriental",
    "Asian",
    "Healthy Food",
    "Fast Food",
    "Indian",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "398",
    "avgRatingString": "4.1",
    "totalRatingsString": "4.1K+",
    "sla": {
    "deliveryTime": 45,
    "lastMileTravel": 7.5,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "7.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹49"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/freshmenu-shakarpur-nehru-enclave-rest805983",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "90566",
    "name": "Chaayos Chai+Snacks=Relax",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_90566.JPG",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Beverages",
    "Chaat",
    "Snacks",
    "Bakery",
    "Street Food",
    "healthy",
    "Home Food",
    "Maharashtrian",
    "Italian",
    "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "281782",
    "avgRatingString": "4.6",
    "totalRatingsString": "8.7K+",
    "sla": {
    "deliveryTime": 12,
    "lastMileTravel": 0.1,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "0.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/rx_5_10_min.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/rx_5_10_min.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹114"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.1",
    "ratingCount": "425"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-connaught-place-rest90566",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "8614",
    "name": "Burger King",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/2d2383cf-fab7-4413-917e-ad2a1c41e250_8614.jpg",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.4,
    "parentId": "166",
    "avgRatingString": "4.4",
    "totalRatingsString": "42K+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 0.3,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "0.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹39"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "9.0K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/burger-king-connaught-place-rest8614",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "96094",
    "name": "Wow! Momo",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/46570b74-8151-40e2-8062-7244acec9a95_96094.jpg",
    "locality": "Connaught Place",
    "areaName": "Rajiv Chowk Metro Station",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Momos",
    "Chinese",
    "fastfood",
    "Asian",
    "Beverages"
    ],
    "avgRating": 4.1,
    "parentId": "1776",
    "avgRatingString": "4.1",
    "totalRatingsString": "1.1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 0.4,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "0.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Chinese.png",
    "description": "Delivery!"
    },
    {
    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Chinese.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "3.4",
    "ratingCount": "69"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/wow-momo-connaught-place-rajiv-chowk-metro-station-rest96094",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "40414",
    "name": "Bikanervala",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/14d68c58-764f-40fe-8fb4-f93e6e71ea00_40414.jpg",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Snacks",
    "Chaat",
    "Sweets"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "45936",
    "avgRatingString": "4.4",
    "totalRatingsString": "18K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 21:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    },
    {
    "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "3.7",
    "ratingCount": "4.8K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/bikanervala-connaught-place-rest40414",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "62965",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/a01e18fe-fb09-4548-af10-f9adadfff0ee_62965.jpg",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Thalis",
    "North Indian",
    "Biryani"
    ],
    "avgRating": 4.4,
    "parentId": "4925",
    "avgRatingString": "4.4",
    "totalRatingsString": "11K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/lunchbox-meals-and-thalis-minto-road-connaught-place-rest62965",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "336595",
    "name": "Cafe Coffee Day",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/a5ee82cc-321b-43b8-a977-a4c771bb726e_336595.JPG",
    "locality": "B Block",
    "areaName": "Connaught Place",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Beverages",
    "Cafe",
    "Snacks",
    "Desserts",
    "Burgers",
    "Ice Cream",
    "Bakery",
    "Fast Food"
    ],
    "avgRating": 4.7,
    "parentId": "1",
    "avgRatingString": "4.7",
    "totalRatingsString": "51",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 0.5,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹166 OFF",
    "subHeader": "ABOVE ₹399",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/cafe-coffee-day-b-block-connaught-place-rest336595",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "467130",
    "name": "Cheesecake & Co.",
    "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
    "locality": "Khan Market",
    "areaName": "Asaf Ali Road",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "387417",
    "avgRatingString": "4.7",
    "totalRatingsString": "2.6K+",
    "sla": {
    "deliveryTime": 16,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    },
    {
    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹166 OFF",
    "subHeader": "ABOVE ₹599",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.4",
    "ratingCount": "669"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/cheesecake-and-co-khan-market-asaf-ali-road-rest467130",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "186222",
    "name": "The Biryani Life",
    "cloudinaryImageId": "iatzastkg2qb2cwilcyu",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Biryani",
    "Mughlai",
    "Lucknowi",
    "Hyderabadi",
    "Kebabs",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "8496",
    "avgRatingString": "4.2",
    "totalRatingsString": "1.2K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹159"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/the-biryani-life-minto-road-connaught-place-rest186222",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "336057",
    "name": "Wendy's Burgers",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/f414a673-f5db-4601-9cd6-ad9d10b26d38_336057.JPG",
    "locality": "DDA Market",
    "areaName": "Rajendra Place",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Burgers",
    "American",
    "Fast Food",
    "Snacks"
    ],
    "avgRating": 4.2,
    "parentId": "972",
    "avgRatingString": "4.2",
    "totalRatingsString": "2.3K+",
    "sla": {
    "deliveryTime": 47,
    "lastMileTravel": 6,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "6.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "66% OFF",
    "subHeader": "UPTO ₹126",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/wendys-burgers-dda-market-rajendra-place-rest336057",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "19989",
    "name": "Dunkin' - Donuts & Coffee",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/12/96535a87-6762-4a00-a7d7-091b19375c04_19989.jpg",
    "locality": "K.G. Marg",
    "areaName": "Kapashera",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Desserts",
    "Cafe",
    "Bakery",
    "Beverages",
    "Fast Food"
    ],
    "avgRating": 4.5,
    "parentId": "2276",
    "avgRatingString": "4.5",
    "totalRatingsString": "12K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹166 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.1",
    "ratingCount": "876"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/dunkin-donuts-and-coffee-k-g-marg-kapashera-rest19989",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "47853",
    "name": "The Burger Club",
    "cloudinaryImageId": "x7bcibhxfnrupph6bcft",
    "locality": "Karol Bagh",
    "areaName": "Karol Bagh",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "American",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4,
    "parentId": "2285",
    "avgRatingString": "4.0",
    "totalRatingsString": "31K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "66% OFF",
    "subHeader": "UPTO ₹156",
    "discountTag": "SAVE BIG",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "2.1K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/the-burger-club-karol-bagh-rest47853",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "378311",
    "name": "Blue Tokai Coffee Roasters",
    "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
    "locality": "Chanakyapuri",
    "areaName": "Connaught Place",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Cafe",
    "Coffee",
    "Beverages"
    ],
    "avgRating": 4.5,
    "parentId": "2682",
    "avgRatingString": "4.5",
    "totalRatingsString": "1.2K+",
    "sla": {
    "deliveryTime": 16,
    "lastMileTravel": 0.5,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹50 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-chanakyapuri-connaught-place-rest378311",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "279866",
    "name": "Ghar ka Khana by EatFit",
    "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
    "locality": "BHAGAT SINGH MARKET",
    "areaName": "GOLE MARKET",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Home Food",
    "Healthy Food",
    "Indian",
    "Punjabi",
    "South Indian",
    "Rajasthani",
    "Maharashtrian",
    "Snacks",
    "Desserts"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "422576",
    "avgRatingString": "4.2",
    "totalRatingsString": "2.9K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹166 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/ghar-ka-khana-by-eatfit-bhagat-singh-market-gole-market-rest279866",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "58217",
    "name": "Theobroma",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e7609212-5025-4618-a6fa-c3f5524190b2_58217.jpg",
    "locality": "Mezzanine",
    "areaName": "Connaught Place",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "1040",
    "avgRatingString": "4.6",
    "totalRatingsString": "13K+",
    "sla": {
    "deliveryTime": 11,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Desserts.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Desserts.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "3.0K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/theobroma-mezzanine-connaught-place-rest58217",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "16418",
    "name": "Subway",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/5f095808-a776-49b6-bc9c-58ecbbefdc76_16418.JPG",
    "locality": "M Block",
    "areaName": "Connaught Place",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "sandwich",
    "Salads",
    "wrap",
    "Healthy Food"
    ],
    "avgRating": 4.3,
    "parentId": "2",
    "avgRatingString": "4.3",
    "totalRatingsString": "18K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 0.6,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "0.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/big_rx.png",
    "description": "bolt!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/big_rx.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/subway-m-block-connaught-place-rest16418",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "152971",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Rolls & Wraps",
    "Fast Food"
    ],
    "avgRating": 4.6,
    "parentId": "547",
    "avgRatingString": "4.6",
    "totalRatingsString": "6.3K+",
    "sla": {
    "deliveryTime": 14,
    "serviceability": "SERVICEABLE",
    "slaString": "10-15 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "android/static-assets/icons/rx_5_10_min.png",
    "description": "bolt!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "bolt!",
    "imageId": "android/static-assets/icons/rx_5_10_min.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "6.3K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/kfc-connaught-place-rest152971",
    "type": "WEBLINK"
    }
    },
    { 
    "info": {
    "id": "558793",
    "name": "HRX by EatFit",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/576337c9-94ee-421e-b603-542e5594f659_558793.jpg",
    "locality": "BHAGAT SINGH MARKET",
    "areaName": "GOLE MARKET",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Healthy Food",
    "Salads",
    "Burgers"
    ],
    "avgRating": 4.6,
    "parentId": "335529",
    "avgRatingString": "4.6",
    "totalRatingsString": "272",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-30 23:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹166 OFF",
    "subHeader": "ABOVE ₹599",
    "discountTag": "FLAT DEAL",
    "headerTypeV2": 12
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-356d22ec-6a90-4148-9af0-5ebec3de82e7"
    },
    "cta": {
    "link": "https://www.swiggy.com/city/delhi/hrx-by-eatfit-bhagat-singh-market-gole-market-rest558793",
    "type": "WEBLINK"
    }
    }
    ];

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId}></img>
           <h5>{name}</h5>
           <p>{cuisines.join(", ")}</p>
           <p>{avgRating} stars</p>
           <p>{costForTwo}</p>
           <p>{deliveryTime} minutes</p>
        </div>
    )
}
// const RestaurantCard2 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG"></img>
//             <h5>KFC</h5>
//             <p>Burgers, Rolls & Wraps, Fast Food</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard3 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/264a0803-7875-4806-bf25-93bad4586776_16865.JPG"></img>
//             <h5>Pizza Hut</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard4 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/e1298579-f12b-4e04-9fb3-b32913b38201_621466.jpg"></img>
//             <h5>WOW MoMos!</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard5 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/2d2383cf-fab7-4413-917e-ad2a1c41e250_8614.jpg"></img>
//             <h5>Burger King</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard6 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e7609212-5025-4618-a6fa-c3f5524190b2_58217.jpg"></img>
//             <h5>Theobroma</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard7 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/06da481c-0cdf-4978-8209-f765637809da_24207.JPG"></img>
//             <h5>Domino's Pizza</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard8 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
//             <h5>Chinese Wok</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard9 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/f414a673-f5db-4601-9cd6-ad9d10b26d38_336057.JPG"></img>
//             <h5>Wendy's Burgers</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard10 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/40cb7f19-6a78-424c-8d4b-0163bc4f42b8_8619.jpg"></img>
//             <h5>Bikkgane Biryani</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard11 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/6d078ea1-62dd-4016-a4cc-2a0f2edcd441_836075.jpg"></img>
//             <h5>California Burrito</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard12 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/a88247b8-0e4b-4634-9427-a95c13a2447e_659837.jpg"></img>
//             <h5>Bakingo</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard13 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/12/b7e9605c-23c3-4268-85ec-25ea8db50418_512981.jpg"></img>
//             <h5>Mad Over Donuts</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard14 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/52818bb7-73c1-4aea-8161-40b3701b1513_169835.jpg"></img>
//             <h5>NIC Ice Creams</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard15 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/e5737bd4-7a8e-4f02-a23a-2ec4099f3889_752411.jpg"></img>
//             <h5>Olio-The Wood Fired Pizzeria</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard16 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/d350082f-0ec3-4cf2-a660-9c359a7f9c6c_143144.jpg"></img>
//             <h5>Kwality Wall Ice Cream</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard17 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/a01e18fe-fb09-4548-af10-f9adadfff0ee_62965.jpg"></img>
//             <h5>LunchBox- Meals and Thalis</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard18 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/733b2c7f-4667-4112-a242-42042f1fab26_443497.jpg"></img>
//             <h5>EatFit</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard19 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xu7sap0qvebscahdtxc2"></img>
//             <h5>Hotel Saravana Bhavan</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }
// const RestaurantCard20 = () =>{
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bu5uf5s2lj22mzu6tkre"></img>
//             <h5>Cafe Delhi Heights</h5>
//             <p>Pizza, Bread Pizza etc.</p>
//             <p>4.4 stars</p>
//             <p>39 minutes</p>
//         </div>
//     )
// }


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout =()=>{
    return (
        <div  className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);