const Banner = () => {
    return (
        
        // <div className="relative bg-no-repeat text-center bg-[url(/src/assets/Images/bg.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] ">
        //     <p className="absolute mb-6 mt-[129px] ml-[212px] text-[#FFF] text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</p>
        //     <p className="absolute mb-10 mt-[305px] ml-[194px] text-[#FFF] text-lg font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>

        //     <button className="absolute ml-[1px] mt-[405px] btn btn-success">Explore Now</button>

        //     <button className="absolute ml-[1px] mt-[405px] btn btn-outline text-white">Our Feedback</button>
            
        //    </div>
        
             <div className="text-center bg-no-repeat bg-[url(/src/assets/Images/bg.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
              <div>
                <p className="mb-6 text-[#FFF] text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</p>
                <p className="mb-10 text-[#FFF] text-lg font-normal">Get ready to unleash your inner chef and create unforgettable culinary masterpieces in the comfort of your own kitchen. <br /> Join us and discover the joy of cooking like never before!</p>

                <button className="p-2 rounded-3xl bg-[#0BE58A] text-[#150B2B] text-lg font-semibold mr-3 btn btn-success">Explore Now</button>

                <button className="p-2 text-lg font-semibold rounded-3xl btn btn-outline text-white">Our Feedback</button>
              </div>
            </div> 
            
            
        
        
    );
};

export default Banner;