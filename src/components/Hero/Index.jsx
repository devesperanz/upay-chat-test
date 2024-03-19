import Phone from "../../assets/phone.png";
import People from "../../assets/people-group.png";
import Role from "../../assets/role.png";
function Index() {
  return (
    <div className="mt-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:max-w-[360px]">
          <h1 className="mb-2 md:text-6xl text-5xl lg:text-7xl xl:text-[90px] font-bold text-[#4ee54a] ibm-plex mono-regular">
            UpayChat
          </h1>
          <div className="max-w-[360px] lg:max-w-[400px] xl:max-w-[480px] mb-4">
            <p className="text-lg lg:text-2xl xl:text-3xl leading-normal lg:leading-[45px] font-medium mb-6">
              Quick, Safe way to send and receive social payments online.
            </p>
            <p className="font-bold text-lg">Download the app</p>
            <div className="flex mt-2">
              <img
                src="https://bento-resources.s3.amazonaws.com/google-play-badge.png"
                width={121.87}
                height={48}
                className="mb-4"
              />
              <img
                src="https://bento-resources.s3.amazonaws.com/app-store-badge.png"
                width={121.87}
                height={48}
                className="mb-4"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-8 flex justify-center items-center">
          <img
            src={Phone}
            alt=""
            className="max-w-full lg:w-[800px] w-[600px]"
          />
        </div>
      </div>

      <div className="my-20">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center justify-around lg:items-center container">
          <div className="lg:mt-5 lg:mr-10">
            <img
              src={People}
              alt=""
              className="max-w-full lg:w-[500px] w-[400px]"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="mb-2 text-3xl lg:text-5xl font-bold">
              Send money instantly
            </h1>
            <div className="max-w-lg lg:max-w-xl mb-4">
              <p className="text-lg lg:text-xl leading-relaxed">
                With UpayChat you can send, request money from friends quickly
                and easily, with just a mobile number or email address using
                money in your UpayChat account balance for free!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-20 container">
        <div className="text-center lg:text-left lg:mr-10">
          <h1 className="mb-2 text-3xl lg:text-5xl font-bold">Bill payments</h1>
          <div className="max-w-full lg:max-w-[490px] mb-4">
            <p className="text-lg lg:text-xl leading-relaxed">
              Easiest and quickest way to pay bills Airtime electricity bills,
              data subscription, cable TV and whatever it is.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <img
            src={Role}
            alt=""
            className="max-w-full lg:w-[500px] w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
