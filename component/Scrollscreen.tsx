"use client"
import react from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Scrollscreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
      };

      const data = [
        {
            id: 1,
            name: "Terry",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "c:\Users\Ajebsanty\Pictures\Camera Roll\WIN_20240625_06_48_34_Pro.mp4",
          },
        {
            id: 2,
            name: "james",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
        {
            id: 3,
            name: "Fedora",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
        {
            id: 4,
            name: "Rashedat",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
        {
            id: 5,
            name: "Caleb",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
        {
            id: 6,
            name: "Zakky",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
        {
            id: 7,
            name: "David",
            prof: "Motion Artist",
            tools: ["VS Code", "NextJS", "Javascript"],
            image:
              "https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402",
          },
      ]

     
      
      return (
        <div className="overflow-hidden">
        <div className="slider-container w-[99%] ">
          <Slider {...settings}>
            {data?.map((props: any) => (
              <div key={props.id}>
                <section className=" mx-2 h-[450px] overflow-hidden rounded-md relative ">
                  <video
                    autoPlay
                    loop
                    muted
                    src={props?.image}
                    className="w-full h-full bg-slate-200 object-cover"
                  />
                  <div className="absolute w-full h-full top-0 opacity-90 bg-gradient-to-b from-transparent from-60% to-black " />
                  <div className=" text-white absolute bottom-0 p-4 ">
                    <p className="text-[18px] font-bold uppercase">
                      {props.name}{" "}
                    </p>
                    <p className=" text-[12px]">{props.prof} </p>
  
                    <div className="flex flex-wrap w-full gap-3 mt-4">
                      {props.tools.map((el: string, i: number) => (
                        <p
                          key={i}
                          className="border rounded-full px-4 py-2 text-[12px] font-semibold "
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      );
    
}

export default Scrollscreen;


