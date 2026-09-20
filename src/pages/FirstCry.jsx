import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import SinglePriceCard from "../components/SinglePriceCard"

export default function FirstCry() {
  return (
    <>
      <TitleBanner
        title="FirstCry"
      />

      <BasicPage
        heading="FirstCry Account Management Services"
        image="FirstCry_Logo.png"
        className="w-56"
        content="A precise and planned approach is necessary to develop a successful presence on FirstCry in the competitive market of baby and kids' items. Our dedicated Account Management staff works hard to help your business not just reach but surpass its sales goals by navigating the intricacies of FirstCry. We place a high priority on keeping your seller account spotless, taking care of all the details to ensure your business runs smoothly and continuously. Our offerings are intended to be both focused and all-encompassing. We handle every aspect, from improving your product listings to developing successful marketing campaigns and fine-tuning pricing schemes. In addition, our staff actively manages the health of your account by continuously checking it and taking care of any difficulties before they become bigger ones. When you work with us, you can concentrate on finding and producing excellent items for kids, and we'll take care of the day-to-day management and strategic planning that will propel your company ahead on FirstCry. Allow us to improve your visibility on FirstCry so that we can maximize your sales potential and open up new business options for you."
      />

      <SinglePriceCard
        planName="Standard"
        planPrice="3000"
        services={[
          "Baby & Kids Catalog Uploads (up to 50)",
          "Age Group & Size Variation Mapping",
          "Brand Approval & Certification Support",
          "FirstCry Sponsored Promotions",
          "Inventory & Order Synchronization",
          "Safe-T & Return Dispute Claims",
          "Monthly Performance & Rating Audit",
        ]}
      />
    </>
  )
}