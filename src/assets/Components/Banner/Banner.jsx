const Banner = () => {
    return (
        
        <div className="relative bg-no-repeat text-center bg-[url(/src/assets/Images/bg.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] ">
            <p className="absolute mb-6 mt-[129px] ml-[212px] text-[#FFF] text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</p>
            <p className="absolute mb-10 mt-[305px] ml-[194px] text-[#FFF] text-lg font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>

            {/* <div class="flex items-center justify-center h-screen">
  <div>
    <!-- Content of the centered div goes here -->
  </div>
</div> */}
            
            <button className="absolute ml-[1px] mt-[405px] btn btn-success">Explore Now</button>

            <button className="absolute ml-[1px] mt-[405px] btn btn-outline text-white">Our Feedback</button>
            
           </div>
        
        
        
    );
};

export default Banner;