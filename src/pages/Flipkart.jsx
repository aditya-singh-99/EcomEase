import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import PriceCards from "../components/PriceCards"

export default function Flipkart() {
  return (
    <>
      <TitleBanner
        title="Flipkart"
      />

      <BasicPage
        heading="Flipkart Account Management Services"
        image="Flipkart_Logo.gif"
        className="w-[80%] max-h-72"
        content="Strategic planning and professional account management are essential for success on Flipkart, one of the biggest eCommerce platforms in India. By optimizing your Flipkart seller account, our committed Account Management staff makes sure you meet your sales goals and grow your company profitably. In order to avoid any interruptions that can have an impact on your revenue and growth, we put a lot of effort into keeping your account healthy, resolving operational issues, and offering a flawless experience. We offer specialized services for managing your Flipkart account in every way. We handle every aspect, from improving product listings and inventory control to executing powerful promotions and creating aggressive price plans. Our proactive approach lets you concentrate on providing your clients with high-quality items by keeping an eye on things constantly and resolving problems quickly. Join forces with us to optimize Flipkart operations and realize the maximum potential of your company. With the help of our experience, you may increase sales, draw in more clients, and stand out in the crowded market. Give us the details of managing your Flipkart account so you may focus on expanding your business and succeeding more."
      />

      <PriceCards
        plan1={{
          planName: "Standard",
          monthlyPrice: "3299",
          quaterlyPrice: "9499",
          services: [
            "Listings Addition (Up to 50)",
            "SPF Filing (Up to 45)",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Suggestion on Listings Ratings and Reviews",
            "Category Approval",
            "Filing Brand Approvals",
            "Growth Suggestions",
          ],
        }}
        plan2={{
          planName: "Advance",
          monthlyPrice: "4999",
          quaterlyPrice: "12999",
          services: [
            "Listings Addition (Up to 100)",
            "SPF Filing (Up to 85)",
            "Smart Fulfilment Enrollment",
            "Sales Boost Service",
            "Freebie Management",
            "2 Product Video",
            "Infographics Images (Up to 9)",
            "Pricing Recommendation",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Suggestion on Listings Ratings and Reviews",
            "Category Approval",
            "Filing FNSKU/Brand Approvals",
            "Growth Suggestions",
          ],
        }}
        plan3={{
          planName: "Premium",
          monthlyPrice: "8999",
          quaterlyPrice: "21999",
          services: [
            "Listings Addition (Up to 150)",
            "SPF Filing (Up to 100)",
            "F-assured Services",
            "Flipkart Fulfilment Enrollment and Services",
            "Sales Boost Services",
            "Freebie Management",
            "5 Product Video",
            "Infographics Images (Up to 15)",
            "Audit Reports (Every 15th Day)",
            "Sales Report Monthly",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Selling Approvals Management",
            "Negative Reviews and Rating Management",
            "Suggestion on Listings Ratings and Reviews",
            "Category Approval",
            "Filing FNSKU/Brand Approvals",
            "Growth Suggestions",
          ],
        }}
      />
    </>
  );
}