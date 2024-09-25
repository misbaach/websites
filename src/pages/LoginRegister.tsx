import loginAssets from "@/assets/login_background.png";
import mobileApp from "@/assets/mobile_app.png";
import logo from "@/assets/smilearn_full_logo.png";
import LangDropdown from "@/components/LanguageDropdown";

function LoginPage() {
  return (
    <div className="flex h-[100svh]">
      <img
        src={loginAssets}
        alt="Learning illustration"
        className="h-full w-3/5 bg-[#E0A3A2] object-cover"
      />
      <div className="relative w-2/5">
        <div className="flex justify-between px-10 py-5">
          <img
            src={logo}
            className="logo w-[150px] object-contain md:w-[150px]"
            alt="Smilearn Full Logo"
          />
          <LangDropdown />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={mobileApp}
            alt="Mobile Ilustration"
            className="flex w-40 justify-center"
          />
          <h1 className="py-2 text-3xl font-bold">Let's Get Learning!</h1>
          <p className="px-10 text-center text-lg text-gray-500">
            Log in with your AgileTeknik account to start learning with
            SmiLearn.
          </p>
        </div>
        <div className="px-5 py-2 text-xl font-semibold">
          <h1>Email Address</h1>
        </div>
        <form>
          <label className="flex w-10 px-5">
            <input
              className="rounded-full outline outline-1 outline-gray-300"
              type="text"
            />
          </label>
        </form>
        <div className="px-5 py-2 text-xl font-semibold">
          <h1>Password</h1>
        </div>
        <form>
          <label className="flex w-10 px-5">
            <input
              className="rounded-full outline outline-1 outline-gray-300"
              type="text"
            />
          </label>
        </form>
        <div className="flex justify-end gap-1 px-5 text-lg text-gray-500">
          <h1>Belum punya akun?</h1>
          <a href="" className="font-semibold text-pink-300 underline">
            Daftar di sini
          </a>
        </div>
        <div>
          <div className="flex justify-center rounded-full py-2 outline outline-1 outline-gray-300">
            <button type="button" className="btn btn-primary btn-lg">
              Log In
            </button>
          </div>
          <div className="flex justify-center rounded-full py-2 outline outline-1 outline-gray-300">
            <button type="button" className="btn btn-primary btn-lg">
              Log In as a Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
