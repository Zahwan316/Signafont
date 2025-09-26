import { PRIMARY_COLOR } from "../../constant/color";
import ButtonComponent from "../../component/button";
import RegisterSectionComponent from "./RegisterComponent";
import RoundedProgress from "../../component/rounded_progress";
import { useState } from "react";
import LoginSectionComponent from "./LoginComponent";
import { useNavigate } from "react-router-dom";
import useFormStore from "../../state/form";
import Swal from "sweetalert2";

const LoginSection = () => {
  const textStyle = "font-bold text-[24px]";
  const [menu, setMenu] = useState<string>("Login");
  const navigate = useNavigate();
  const formData = useFormStore((state) => state.userdata);

  const handleMenu = (id: string) => {
    setMenu(id);
  };

  const handleRegister = async () => {
    localStorage.setItem("userdata", JSON.stringify(formData));

    await Swal.fire({
      icon: "success",
      title: "Registrasi Berhasil!",
      text: "Akun kamu sudah terdaftar.",
      confirmButtonColor: PRIMARY_COLOR,
    });

    handleMenu("Login");
  };

  const handleLogin = async () => {
    const data = localStorage.getItem('userdata')
    const userData = JSON.parse(data)

    if(formData === null || Object.keys(formData).length === 0){
      await Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: "Username atau password tidak boleh kosong",
        confirmButtonColor: PRIMARY_COLOR,
      });

      return;
    }

    const checkLogin = (userData?.email === formData?.email && userData?.password === formData?.password)

    console.log(checkLogin )


    if(!checkLogin){
      await Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: "Username atau password salah",
        confirmButtonColor: PRIMARY_COLOR,
      });

      return;
    }

    await Swal.fire({
      icon: "success",
      title: "Login Berhasil!",
      text: "Selamat datang kembali!",
      confirmButtonColor: PRIMARY_COLOR,
    });

   navigate("/profile"); // ganti sesuai rute setelah login
  };

  return (
    <div
      className="w-full min-h-full p-6 pt-12 flex flex-col justify-between border"
      style={{ minHeight: "100vh" }}
    >
      {/* Title */}
      <div className="w-full h-16 flex flex-row gap-4">
        <div>
          <p
            className={`${textStyle} ${menu === "Login" && "border-b-3"}`}
            style={{ color: PRIMARY_COLOR }}
            onClick={() => handleMenu("Login")}
          >
            Login
          </p>
        </div>
        <div>
          <p
            className={`${textStyle} ${menu === "Register" && "border-b-3"}`}
            style={{ color: PRIMARY_COLOR }}
            onClick={() => handleMenu("Register")}
          >
            Register
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="h-[70vh] mb-4">
        {menu === "Login" ? <LoginSectionComponent /> : <RegisterSectionComponent />}
      </div>

      {/* Button */}
      <div>
        <RoundedProgress />
        <ButtonComponent
          onClick={menu === "Register" ? handleRegister : handleLogin}
          title={menu === "Login" ? "Login" : "Sign Up"}
        />
      </div>
    </div>
  );
};

export default LoginSection;
