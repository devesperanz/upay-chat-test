import Faq from "../Faq/index";
function index() {
  const frequentQuestions = () => [
    {
      title: `Free cash transfer`,
      subtitle: `It's free to open a UpayChat account, send or request money from anyone using UpayChat account balance.`,
    },
    {
      title: `Bill payment`,
      subtitle: `Paying your bills is always fast and easy with Upaychat.`,
    },
    {
      title: `No monthly fee`,
      subtitle: `Upaychat has no monthly fee,no maintenance fee and no hidden fees or charges`,
    },
    {
      title: `Manage your privacy settings`,
      subtitle: `UpayChat enables you to choose who can see your payment you can set payment preference to "friends", "public", or "private"`,
    },
    {
      title: `Manage your Upaychat Balance`,
      subtitle: `Add money to your UpayChat account balance with your debit card, credit card or your existing bank account.`,
    },
    {
      title: `Live chat with Customer Care`,
      subtitle: `Click on setting & help in our mobile app to chat directly with our Customer Care at any time`,
    },
    {
      title: `Express yourself with a payment note`,
      subtitle: `Upaychat included a note section in the payment page which provides details about the transaction to avoid confusion.`,
    },
    {
      title: `Receiving/Withdrawing money`,
      subtitle: `You can receive money into your Upaychat or transfer your balance to your existing bank account`,
    },
    {
      title: `Security and Safety`,
      subtitle: `With UpayChat your payment information is always encrypted before Sending to our servers. Our goal is to protect your online safety, the confidentiallity of our customer account and personal data.`,
    },
  ];
  return (
    <div>
      <div className="text-center mx-auto">
        <h1 className="lg:text-5xl text-3xl font-bold mb-4 ">
          Why Use UpayChat?
        </h1>
        <hr className="border-[#79eb76] border-solid border-2 max-w-[130px] mx-auto  " />
      </div>
      <div className="mt-16">
        {frequentQuestions().map((faq, index) => (
          <div key={index}>
            <Faq title={faq.title} subtitle={faq.subtitle}>
              <p>{faq.answers}</p>
            </Faq>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
