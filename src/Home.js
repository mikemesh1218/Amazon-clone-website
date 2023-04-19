import React from "react";
import Product from "./Product";
export default function Home(){
    return(
        <div className="home__container">
            <img src={require("./Components/Portfoilio img/Sheku_kuyate_cool_website_banner_design_for_tech_gadgets_shoppi_4d134f51-7db8-4696-924c-7858607beac4.png")} className="home_img"/>
            <div className="home_row">
               <Product id={1218}image={require("./Components/Portfoilio img/product-photo-water-bottle-hero.png")}title={"Pogo BPA-Free Plastic Water Bottle with Chug Lid, 32 Oz"} price={5.99} rating={4}/>
               <Product id={1221}image={require("./Components/Portfoilio img/blender.jpg")}title={"Hamilton Beach Electric Vegetable Chopper & Mini Food Processor"} price={22.99} rating={3}/>
            </div>
            <div className="home_row">
               <Product id={1219}image={require("./Components/Portfoilio img/smart watch.jpg")}title={"Amazfit Bip 3 Pro Smart Watch for Android iPhone, 4 Satellite Positioning Systems"} price={109.99} rating={4}/>
               <Product id={1220}image={require("./Components/Portfoilio img/Amazon-Product-Photography-Agency-UK-1.jpg")}title={"Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi"} price={399} rating={5}/>
               <Product id={1221}image={require("./Components/Portfoilio img/apple_new-ipad.jpg")}title={"Apple 2022 iPad Air (10.9-inch, Wi-Fi, 64GB) - Purple (5th Generation)"} price={506.92} rating={3}/>
            </div>
            <div className="home_row">
               <Product id={1222}image={require("./Components/Portfoilio img/lg-smart-tv-price.jpg")}title={"LG A2 Series 55-Inch Class OLED Smart TV OLED55A2PUA, 2022 - AI-Powered 4K TV, Alexa Built-in"} price={799} rating={4}/>
            </div>
        </div>
    )
}