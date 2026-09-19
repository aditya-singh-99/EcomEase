import TitleBanner from "../components/TitleBanner"
import BasicPage from "../components/BasicPage"
import SinglePriceCard from "../components/SinglePriceCard"

export default function Myntra() {
  return (
    <>
      <TitleBanner
        title="Myntra"
      />

      <BasicPage
        heading="Myntra Account Management Services"
        image="Myntra_Logo.png"
        className="w-56"
        content="Expert account management and a calculated strategy are necessary to stand out in the cutthroat world of fashion eCommerce on Myntra. In order to help you meet your sales targets and grow your company, our professional Account Management staff is committed to improving your Myntra seller account. Our primary goals are to maintain the health of your account, manage operational difficulties, and avoid any interruptions that can lower your income. Our all-inclusive offerings encompass overseeing day-to-day operations, improving account wellness, crafting compelling offers and promotions, and formulating efficient pricing plans. By streamlining these procedures, we give you more time to concentrate on creating and selecting your line of clothing. We guarantee that your company prospers on Myntra thanks to our experience, enabling you to reach its full potential and increase sales. Let us manage your Myntra account so you can maximize your potential and revenue."
      />

      <SinglePriceCard
        planName="Standard"
        planPrice="3000"
        services={[
          "lorem epsum",
          "lorem epsum",
          "lorem epsum",
          "lorem epsum",
          "lorem epsum",
          "lorem epsum",
          "lorem epsum",
        ]}
      />
    </>
  )
}