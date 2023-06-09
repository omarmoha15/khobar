import React from 'react'
import Data from './Data'
import "./Destination.css"

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours favouret destination in al khobar</p>
        <Data
        className="first"
        heading ="1 - The Corniche – The heart of Khobar city"
        text="Corniche is a prominent and the most visited tourist attraction in Al Khobar. This seafront promenade is an expansion of Half Moon Bay through the Aziza ocean side, extending to the city of Dammam. Tourists enjoy the abundance of green spaces along the coastline, which is an ideal spot for families. The location has several playgrounds and seating areas perfect for enjoying a picnic with kids. People can ride their bicycles, take a walk or jog"
        img1="https://resizer.wafyapp.com/?source=https://prod-wafy-api.s3.eu-central-1.amazonaws.com/images/articles/909-20210817113624-2104214.jpg&width=900"
        img2="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/be/54/95/corniche.jpg?w=2000&h=-1&s=1"
        
        />
        <Data
        className="first-reverse"
        heading ="2 - Half Moon Beach"
        text="Half Moon Beach is one of the most prominent tourist attractions in the eastern region of Saudi Arabia, whose coast is the longest in the Gulf region, with an estimated length of about 700 km."
        img1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/93/4c/a7/half-moon-beach.jpg?w=2000&h=-1&s=1"
        img2="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/09/dd/ff/half-moon-beach.jpg?w=600&h=-1&s=1"
        
        />
        <Data
        className="first"
        heading ="3 - Khobar Water Tower – An iconic Khobar landmark"
        text="Khobar Water Tower is a 3-story building situated on an island encompassed by the water surrounding the island towards the north of the Khobar Corniche. It includes an international café situated at the highest point of the tower where families can partake in a tasty dinner with an astounding view of the city. Even though it is just a water tank, it is quite a sight. Over the years it has become an iconic Khobar landmark."
        img1="https://www.water-technology.net/wp-content/uploads/sites/28/2019/02/Khobar-Water-Tower.jpg"
        img2="https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/01/Khobar-water-tower.jpg"
        
        />

       <Data
        className="first-reverse"
        heading ="4 - Al Rashid Mall "
        text="Al Rashid Mall is one of the best places to visit in Al Khobar for shopping with family. It incorporates almost 650 shops and offers parking to 6,000 vehicles. It also has a huge number of cafés, bistros, and different entertainment centers."
        img1="https://imgproc.tjwlcdn.com/1920x600/http://cms-cdn.almosafer.com/drupal_cms/alm/files/public/cityguides-import/al_rashid_mall2_0.jpg"
        img2="https://cdn2.advanceinfotech.org/ksa.directory/800x450/business/1111/al-rashid-mega-mall-000000-1672126593.webp"
        
        />
        <Data
        className="first"
        heading ="5 - SciTech Khobar "
        text="The Sultan bin Abdulaziz Science and Technology Center (SciTech) is one of the most unique places to visit in Al-Khobar. It is a modern science center built in 2006 by Prince Sultan bin Abdulaziz to share knowledge and resources with students and researchers. The center has a pavilion with more than 350 scientific exhibitions related to science and technology."
        img1="https://live.staticflickr.com/5034/7170323866_d38abf3758_b.jpg"
        img2="https://imgproc.tjwlcdn.com/1920x600/http://cms-cdn.almosafer.com/drupal_cms/alm/files/public/cityguides-import/scitech_technology_center2_0.jpg"
        
        />
              <Data
        className="first-reverse"
        heading ="6 -  Escape The Room "
        text="Catering to the adventure enthusiasts, Escape The Room is a new concept in Saudi Arabia. In the activity, a small group of people has to solve the clues provided in a confined room and try to escape the room in 60 minutes."
        img1="https://fastly.4sqi.net/img/general/width960/73999409_HwmmJAIzuo-FpmTXxgcTStS80hcBgxopD7FtgakMN38.jpg"
        img2="https://fastly.4sqi.net/img/general/width960/1386691445_XpLxmceTrisdByZ3YHNa22gfs7U8mckM3nGOjiQH7xo.jpg"
        
        />
    </div>
  )
}

export default Destination