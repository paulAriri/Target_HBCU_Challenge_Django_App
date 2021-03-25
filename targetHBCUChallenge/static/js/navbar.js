let items = document.querySelectorAll('.editdrop');

/*
Fetch Categories From "categories_sample.json()" File
*/

/* 
    Fetch sends a GET request... Negates Django Settings
*/
// fetch("categories_sample.json")
//     .then(response => response.json())
//     .then(data => {
//         for(let i = 0; i < 12; i += 1){
//             items[i].innerHTML = data[i + 2].displayText;
//         }
//     });

/*
    Copied object from JSON file manually into an array
*/
var data = [
    {
      "displayText": "What's New",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/New-200129-1580334809177?qlt=80",
        "accessibilityText": "What's New"
      },
      "node_id": "o9rnh"
    },
    {
      "displayText": "College",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/6-14_HB_OTC_HPICON_FINAL96x96image_upload-200610_1591804057125?qlt=80",
        "accessibilityText": "College"
      },
      "node_id": "5q0g0"
    },
    {
      "displayText": "Ready for School",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/CB-200622-1592858899711?qlt=80",
        "accessibilityText": "Ready for School"
      },
      "node_id": "5xtyp"
    },
    {
      "displayText": "Grocery",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Grocery190519-190910_1568137689491?qlt=80",
        "accessibilityText": "Grocery"
      },
      "node_id": "5xt1a"
    },
    {
      "displayText": "Household Essentials",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/HHE171675-190416_1555422913283?qlt=80",
        "accessibilityText": "Household Essentials"
      },
      "node_id": "5xsz1"
    },
    {
      "displayText": "Women",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Womens-200310-1583876490652?qlt=80",
        "accessibilityText": "Women"
      },
      "node_id": "5xtd3"
    },
    {
      "displayText": "Men",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Mens-200310-1583876534938?qlt=80",
        "accessibilityText": "Men"
      },
      "node_id": "18y1l"
    },
    {
      "displayText": "Young Adult",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/YA_homepage_pic-nav_328x328138565-180801_1533152365096image_upload-181008_1539020933738?qlt=80",
        "accessibilityText": "Young Adult"
      },
      "node_id": "qh1tf"
    },
    {
      "displayText": "Kids",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Kids-200310-1583876566645?qlt=80",
        "accessibilityText": "Kids"
      },
      "node_id": "xcoz4"
    },
    {
      "displayText": "Shoes",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/shoes144514-181003_1538601911912?qlt=80",
        "accessibilityText": "Shoes"
      },
      "node_id": "55b0t"
    },
    {
      "displayText": "Baby",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Baby-200310-1583876601463?qlt=80",
        "accessibilityText": "Baby"
      },
      "node_id": "5xtly"
    },
    {
      "displayText": "Home",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Home-200310-1583876768146?qlt=80",
        "accessibilityText": "Home"
      },
      "node_id": "5xtvd"
    },
    {
      "displayText": "Kitchen & Dining",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/KitchenDining-200310-1583876812310?qlt=80",
        "accessibilityText": "Kitchen & Dining"
      },
      "node_id": "hz89j"
    },
    {
      "displayText": "Furniture",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Furniture-200310-1583876853069?qlt=80",
        "accessibilityText": "Furniture"
      },
      "node_id": "5xtnr"
    },
    {
      "displayText": "Patio & Garden",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/PatioGarden_catnav161378-190103_1546550500720?qlt=80",
        "accessibilityText": "Patio & Garden"
      },
      "node_id": "5xtq9"
    },
    {
      "displayText": "Electronics",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Electronics-200310-1583876892218?qlt=80",
        "accessibilityText": "Electronics"
      },
      "node_id": "5xtg6"
    },
    {
      "displayText": "Movies, Music & Books",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/movies138098-180815_1534366586635?qlt=80",
        "accessibilityText": "Movies, Music & Books"
      },
      "node_id": "5xsxe"
    },
    {
      "displayText": "Video Games",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/video_games138097-180815_1534366695275?qlt=80",
        "accessibilityText": "Video Games"
      },
      "node_id": "5xtg5"
    },
    {
      "displayText": "Toys",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/toys97188-171025_1508966907610?qlt=80",
        "accessibilityText": "Toys"
      },
      "node_id": "5xtb0"
    },
    {
      "displayText": "Character Shop",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/CharacterShop_LogoTile_480x480_SW1_LoRes-200721-1595336444146?qlt=80",
        "accessibilityText": "Character Shop"
      },
      "node_id": "5oux8"
    },
    {
      "displayText": "Sports & Outdoors",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/SportsOutdoors204368-191210_1575997517186?qlt=80",
        "accessibilityText": "Sports & Outdoors"
      },
      "node_id": "5xt85"
    },
    {
      "displayText": "Luggage",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/luggage138095-180815_1534366837709?qlt=80",
        "accessibilityText": "Luggage"
      },
      "node_id": "5xtz1"
    },
    {
      "displayText": "School & Office Supplies",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/school_office138096-180815_1534366767484?qlt=80",
        "accessibilityText": "School & Office Supplies"
      },
      "node_id": "5xsxr"
    },
    {
      "displayText": "Beauty",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Beauty181103-190722_1563828945271?qlt=80",
        "accessibilityText": "Beauty"
      },
      "node_id": "55r1x"
    },
    {
      "displayText": "Personal Care",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/personal_care138101-180815_1534366139944?qlt=80",
        "accessibilityText": "Personal Care"
      },
      "node_id": "5xtzq"
    },
    {
      "displayText": "Health",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/health138101-180815_1534366146955?qlt=80",
        "accessibilityText": "Health"
      },
      "node_id": "5xu1n"
    },
    {
      "displayText": "Pets",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/328X328_NewDogChecklist_CatNav38899-191223_1577087966647?qlt=80",
        "accessibilityText": "Pets"
      },
      "node_id": "5xt44"
    },
    {
      "displayText": "Party Supplies",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/party_supplies138104-180815_1534365693085?qlt=80",
        "accessibilityText": "Party Supplies"
      },
      "node_id": "5xt3c"
    },
    {
      "displayText": "Musical Instruments",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Guitars157436-181212_1544613025473?qlt=80",
        "accessibilityText": "Musical Instruments"
      },
      "node_id": "5xswf"
    },
    {
      "displayText": "Halloween",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Halloween-app-200708-1594239270100?qlt=80",
        "accessibilityText": "Halloween"
      },
      "node_id": "5xt2o"
    },
    {
      "displayText": "Clearance",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/clearance97188-171020_1508525411214?qlt=80",
        "accessibilityText": "Clearance"
      },
      "node_id": "5q0ga"
    },
    {
      "displayText": "Gift Ideas",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/GiftIdeas_CBimage_upload-190122_1548181114388?qlt=80",
        "accessibilityText": "Gift Ideas"
      },
      "node_id": "96d2i"
    },
    {
      "displayText": "Gift Cards",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Target_GC_App_CatBrowse-200228-1582922316082?qlt=80",
        "accessibilityText": "Gift Cards"
      },
      "node_id": "5xsxu"
    },
    {
      "displayText": "Bullseye's Playground",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/BP_CatNav1143318-180907_1536352130859?qlt=80",
        "accessibilityText": "Bullseye's Playground"
      },
      "node_id": "tr36l"
    },
    {
      "displayText": "Top Deals",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/top_deals138104-180815_1534365595918?qlt=80",
        "accessibilityText": "Top Deals"
      },
      "node_id": "4xw74"
    },
    {
      "displayText": "RedCard",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/cat_plainimage_upload-191003_1570124693888?qlt=80",
        "accessibilityText": "RedCard"
      },
      "node_id": "https://www.target.com/redcard/about"
    },
    {
      "displayText": "Registry",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Registeryimage_upload-180502_1525277147172?qlt=80",
        "accessibilityText": "Registry"
      },
      "node_id": "https://www.target.com/gift-registry/"
    },
    {
      "displayText": "Pharmacy",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/Pharmacyimage_upload-180502_1525277652765?qlt=80",
        "accessibilityText": "Pharmacy"
      },
      "node_id": "54y52"
    },
    {
      "displayText": "Shipping & Order Services",
      "image": {
        "uri": "https://target.scene7.com/is/image/Target/free_shipping_03119531-180302_1520005016430?qlt=80",
        "accessibilityText": "Shipping & Order Services"
      },
      "node_id": "551st"
    }
];

for(let i = 0; i < 12; i += 1){
    items[i].innerHTML = data[i + 2].displayText;
}