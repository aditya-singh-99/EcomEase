import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import PriceCards from "../components/PriceCards"

export default function Amazon() {
  return (
    <>
      <TitleBanner
        title="Amazon"
      />

      <BasicPage
        heading="Amazon Account Management Services"
        image="Amazon_Logo.gif"
        className="w-[90%]"
        content="It takes skill and a calculated approach to negotiate the vast and cutthroat Amazon marketplace. Our committed staff of account managers is here to improve your Amazon seller account, assisting you in hitting your sales goals and expanding your company. To optimize your revenue and growth potential, we concentrate on addressing operational difficulties, maintaining uninterrupted operations, and enhancing the health of your account. We offer all-inclusive services that address every facet of managing your Amazon account. We handle everything, from optimizing product listings with content that is optimized for search engines to maintaining inventory, launching focused advertising campaigns, and putting dynamic pricing strategies into place. We monitor your account proactively to ensure that any difficulties are resolved quickly and that it remains in good condition. When you work with us, you can concentrate on locating and producing top-notch products, and we'll take care of the intricate Amazon platform operations. Our experience guarantees that your brand sticks out in the congested industry, drawing in more clients and increasing revenue. Give us control of your Amazon account so you can focus on growing your company and hitting new milestones."
      />

      <PriceCards
        plan1={{
          planName: "Standard",
          monthlyPrice: "3999",
          quaterlyPrice: "10999",
          services: [
            "Buyer Seller Message Response",
            "Listings Addition (up to 50)",
            "Safe-T Claim Filing (up to 45)",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Category Approval",
            "Filing Selling Application",
            "FBA Registration & Management",
            "Growth Suggestions",
          ],
        }}
        plan2={{
          planName: "Advance",
          monthlyPrice: "5599",
          quaterlyPrice: "15999",
          services: [
            "Buyer Seller Message Response",
            "Listings Addition (up to 100)",
            "Safe-T Claim Filing (up to 85)",
            "Prime Enrollment",
            "A+ Content Addition (up to 6)",
            "Infographics Images (up to 6)",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Category Approval",
            "Filing Selling Application",
            "FBA Registration & Management",
            "Growth Suggestions",
          ],
        }}
        plan3={{
          planName: "Premium",
          monthlyPrice: "9499",
          quaterlyPrice: "24449",
          services: [
            "Buyer Seller Message Response",
            "Listings Addition (up to 150)",
            "Safe-T Claim Filing (up to 100)",
            "Prime Enrollment",
            "A+ Content Addition (up to 10)",
            "Infographics Images (up to 15)",
            "Promotions and Deals",
            "Brand Store Creation",
            "Brand Registry/Protection",
            "Audit Reports (every 10th Day)",
            "Reconciliation Report Monthly",
            "Strengthening Case Follow Ups",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Category Approval",
            "Filing Selling Application",
            "FBA Registration & Management",
            "Growth Suggestions",
          ],
        }}
      />
    </>
  );
}