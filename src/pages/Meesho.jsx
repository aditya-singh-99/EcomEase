import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import PriceCards from "../components/PriceCards"

export default function Meesho() {
  return (
    <>
      <TitleBanner
        title="Meesho"
      />

      <BasicPage
        heading="Meesho Account Management Services"
        image="Meesho_Logo.png"
        className="w-56"
        content="Meesho is a dynamic marketplace that need careful planning and committed account management to navigate. In order to help you reach your sales targets and successfully expand your company, our knowledgeable Account Management staff is available to optimize your Meesho seller account. We prioritize optimizing the well-being of your account, resolving operational obstacles, and guaranteeing a smooth experience to avert any disturbances that can affect your earnings and expansion. We customize our services to meet the particular needs of Meesho vendors. From routine business operations to well-thought-out promotions, aggressive pricing, and efficient listing optimization, we handle it all. We take a proactive stance, keeping an eye on things constantly and taking care of problems quickly so you can focus on creating and marketing your goods. Join together with us to optimize Meesho operations and realize the full potential of your company. We offer the know-how and assistance you want to differentiate yourself in the crowded industry, guaranteeing the growth of your brand and explosive sales. Give your Meesho account administration to us so you can concentrate on what you do best, which is expanding your clientele and winning over new clients."
      />

      <PriceCards
        plan1={{
          planName: "Standard",
          monthlyPrice: "2999",
          quaterlyPrice: "7999",
          services: [
            "Full Account Management",
            "Listings Addition (up to 60)",
            "Safe-T Claim Filing (up to 20)",
            "Product Promotion",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 Ahm Protection",
            "Growth Suggestions",
            "Notice Boards",
          ],
        }}
        plan2={{
          planName: "Advance",
          monthlyPrice: "3999",
          quaterlyPrice: "11499",
          services: [
            "Full Account Management",
            "Listings Addition (up to 100)",
            "Safe-T Claim Filing (up to 85)",
            "Sales Boost Service",
            "Infographics Images (up to 5)",
            "Product Promotion",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 Ahm Protection",
            "Growth Suggestions",
            "Notice Boards",
          ],
        }}
        plan3={{
          planName: "Premium",
          monthlyPrice: "7999",
          quaterlyPrice: "15999",
          services: [
            "Full Account Management",
            "Listings Addition (up to 150)",
            "Safe-T Claim Filing (up to 100)",
            "Sales Boost Services",
            "Infographics Images (up to 15)",
            "Store Promotion",
            "Next-day Dispatch Enrollment",
            "Strengthening Case Follow Ups",
            "Advertisement Quality Dashboard Management",
            "Product Promotion",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 Ahm Protection",
            "Growth Suggestions",
            "Notice Boards",
          ],
        }}
      />
    </>
  );
}