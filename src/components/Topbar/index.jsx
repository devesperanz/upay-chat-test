import logo from "../../assets/logo.png";
function index() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 py-4 px-6 ">
      <div className="flex justify-between items-center container  ">
        <div className="flex items-center">
          <img
            src={logo}
            className="upay-logo mr-3"
            alt="upay logo"
            width={50}
          />
          <p className="text-[#4ee54a] text-2xl"> UpayChat</p>
        </div>

        <div>
          <a
            href="/login"
            className="hover:text-[#4ee54a] text-gray-500 mr-5 text-base font-semibold"
          >
            Log in
          </a>
          <a
            href="/login"
            className="hover:text-[#4ee54a] text-gray-500 text-base font-semibold"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default index;
