import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function OurServices() {
  const services = [
    {
      title: "FBA/FBF Enrollment",
      desc: "We streamline the enrollment procedure for merchants to join Fulfilled by Flipkart (FBF) and Fulfilled by Amazon (FBA) by offering an enrolling option. Our solution guarantees a seamless setup, allowing you to take use of the platforms' shipping, packing, storage, and logistical capabilities to improve your business operations and customer base.",
      images: ["FBA.png", "FBF.png"]
    },
    {
      title: "Complete Account Management",
      desc: "For e-commerce platforms, we offer complete account management services. Our all-inclusive solutions take care of inventory management, order processing, account setup, listing optimization, and platform policy compliance. You may concentrate on expanding your company while we manage the operational challenges across several e-commerce platforms thanks to our experience.",
      images: ["Account_Management.png"]
    },
    {
      title: "Brand Store Creation",
      desc: "Our expertise lies in creating brand stores on e-commerce platforms, offering customized solutions to create a distinctive and captivating online identity for your company. Our services include creating unique shop designs, integrating your brand's identity seamlessly, creating product displays that are optimized, and managing inventory effectively. With our experience, we guarantee that your brand store works flawlessly, drawing and keeping clients, and increasing sales while you concentrate on your main business.",
      images: ["Brand_Store.png"]
    },
    {
      title: "Account Reinstatement",
      desc: "We provide professional e-commerce account reinstatement services, guiding you through the challenges of restoring your account to good standing. To address suspensions and deactivations, our team specializes in troubleshooting, writing thorough appeal letters, and corresponding with platform support. You can minimize downtime, recoup lost sales, and resume operations swiftly and effectively with our expert reinstatement service.",
      images: ["Reinstatement.png"]
    },
    {
      title: "Digital Advertising",
      desc: "For e-commerce companies, we offer specialist advertising options that are intended to increase your visibility and boost sales, maximizing your reach while crafting audience-specific ad campaigns. Our comprehensive services cover everything from conducting keyword research and managing bids to monitoring campaign effectiveness and maximizing return on investment. Together, we can increase the visibility of your brand and help you reach your sales targets by using smart and efficient advertising.",
      images: ["Digital_Advertisement.png"]
    },
    {
      title: "Google Ads & Meta Ads",
      desc: "We are experts at providing full-service advertising solutions that will help your e-commerce company grow by utilizing Google Ads and Meta Ads. Using intelligent keyword research, creative ad development, and accurate bid management, we can create audience-specific targeted ad campaigns. You may rely on us to leverage the potential of Google and Meta platforms to improve your brand's online visibility and generate noteworthy sales development.",
      images: ["Google_Ads.png", "Meta_Ads.png"]
    },
  ]

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((index + 1) % services.length)
    }, 3000);
    return () => {
      resetTimeout();
    };
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((index + 1) % services.length),
    onSwipedRight: () => setIndex((index - 1 + services.length) % services.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="bg-slate-900 pt-16 pb-20">
        <div className="animate-fade-down text-center mb-8">
          <div className="w-12 h-1 bg-two mx-auto mb-4"></div>
          <h1 className="text-4xl font-semibold text-white">TOP<span className="text-two ml-2 animate-pulse">SERVICES</span></h1>
        </div>

        <div className="w-full md:w-[90%] overflow-hidden mx-auto" {...handlers}>

          {/* Desktop */}
          <div
            className="hidden md:flex gap-[5%] ease-in-out duration-[1500ms]"
            style={{ transform: `translateX(${-(index - 1) * 35}%)` }}
          >
            {services.map((service, ind) => (
              <div key={ind} className={`min-w-[30%] [&:nth-child(3n+1)]:text-red-500 [&:nth-child(3n+2)]:text-green-500 [&:nth-child(3n+3)]:text-blue-500 p-4 rounded-lg shadow-2xl text-center transition-all duration-[1500ms] ${ind != index ? "scale-90" : ""}`}>
                <div>
                  {service.images.map((image, ind) => (
                    <img key={ind} src={"Services/" + image} alt="" className="mx-auto mb-4 w-1/3" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex ease-in-out duration-[1500ms]" style={{ transform: `translatex(${-index * 100}%)` }}>
            {services.map((service, ind) => (
              <div key={ind} className="min-w-[90%] mx-[5%] [&:nth-child(3n+1)]:text-red-500 [&:nth-child(3n+2)]:text-green-500 [&:nth-child(3n+3)]:text-blue-500 p-2 rounded-lg shadow-2xl text-center">
                <div className="flex justify-around mb-4">
                  {service.images.map((image, ind) => (
                    <img key={ind} src={"Services/" + image} alt="" className="w-2/5" />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 w-fit flex cursor-pointer">
          <div
            className="text-two text-3xl max-w-4 max-h-4 mx-2 flex justify-center items-center"
            onClick={() => setIndex((index - 1 + services.length) % services.length)}
          >
            &#8592;
          </div>
          {services.map((service, ind) => (
            <div
              key={ind}
              className={`w-4 h-4 mx-2 rounded-full ${index === ind ? "bg-two" : "bg-four"}`}
              onClick={() => setIndex(ind)}
            ></div>
          ))}
          <div
            className="text-two text-3xl max-w-4 max-h-4 mx-2 flex justify-center items-center"
            onClick={() => setIndex((index + 1) % services.length)}
          >
            &#8594;
          </div>
        </div>
      </div>
    </>
  )
}
