import Topbar from "./components/Topbar";
import Hero from "./components/Hero/Index";
import Details from "./components/Details/index";
import Card from "./components/Card";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  const cardProducts = [
    {
      title: "Gold Card",
      cardType: "Credit Card",
      benefits: [
        "Cashback on purchases",
        "Travel insurance coverage",
        "Exclusive rewards program",
      ],
      features: [
        "Low interest rate",
        "No annual fee for the first year",
        "24/7 customer support",
      ],
      applyLink: "https://example.com/apply/gold-card",
    },
    {
      title: "Platinum Card",
      cardType: "Credit Card",
      benefits: [
        "Luxury travel perks",
        "Dining discounts at top restaurants",
        "Concierge service",
      ],
      features: [
        "Higher credit limit",
        "Priority customer support",
        "Access to airport lounges",
      ],
      applyLink: "https://example.com/apply/platinum-card",
    },
    {
      title: "Silver Card",
      cardType: "Debit Card",
      benefits: [
        "No monthly maintenance fees",
        "Free ATM withdrawals",
        "Instant card replacement",
      ],
      features: [
        "Easy fund transfers",
        "24/7 account access",
        "Fraud protection",
      ],
      applyLink: "https://example.com/apply/silver-card",
    },
  ];
  return (
    <div className=" px-16 py-5">
      <Topbar className="fixed top-0 w-full z-50" />
      <Hero />

      <div className="my-40">
        <div className="mx-auto text-center pb-16">
          <h1 className=" mb-4 font-bold lg:text-5xl text-3xl">
            Our Exclusive Card Offers
          </h1>
          <hr className="border-[#79eb76] border-solid border-2 max-w-[130px] mx-auto  " />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container ">
          {cardProducts.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              cardType={card.cardType}
              benefits={card.benefits}
              features={card.features}
              applyLink={card.applyLink}
            />
          ))}
        </div>
      </div>
      <Details />
      <Footer />
    </div>
  );
}

export default App;
