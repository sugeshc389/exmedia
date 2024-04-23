const Banner = () => {
    return (
      <section className=" relative  flex flex-col w-full  pb-32 md:gap-28 lg:py-1 xl:flex-row ">
        <video className="w-full flex-1 object-cover" autoPlay loop muted>
          <source
            src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-red-500 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">Banner</h1>
        </div>
      </section>
    );
  };
  
  export default Banner;
  
