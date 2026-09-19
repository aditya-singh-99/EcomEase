import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import SinglePriceCard from "../components/SinglePriceCard"

export default function JioMart() {
  return (
    <>
      <TitleBanner
        title="JioMart"
      />

      <BasicPage
        heading="JioMart Account Management Services"
        image="JioMart_Logo.png"
        className="w-56"
        content="As one of the premier eCommerce platforms, JioMart offers immense opportunities, but navigating its stringent guidelines and standing out in a competitive market can be challenging. Effective account management is crucial to achieving your sales goals. Our Account Management team specializes in managing your JioMart account to help you reach your sales targets and grow your business. We assist you in maintaining a healthy seller account on Jiomart, ensuring smooth operations and preventing disruptions that can lead to lost revenue and missed opportunities. Our team streamlines processes and workflows, allowing you to focus on what you do best—running your business. We handle everyday operations, account health management, deals, promotions, and pricing strategies to help you thrive on Jiomart. Let us manage your JioMart account so you can maximize your potential and revenue."
      />

      <SinglePriceCard
        planName="Standard"
        planPrice="4000"
        services={[
          "Account Launch",
          "Brand Approval (upto 2)",
          "Category Approval (upto 3)",
          "Listing (upto 50)",
          "Inventory Management",
          "Safe-T Claim",
          "New Product Suggestion",
        ]}
      />
    </>
  )
}