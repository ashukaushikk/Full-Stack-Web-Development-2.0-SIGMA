import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ReactComponent as SigninSvg } from "../../assests/signin.svg";
import { ReactComponent as SignupSvg } from "../../assests/signup.svg";
import { ReactComponent as InstagramSVG } from "../../assests/instagram.svg";

const Form = () => {
  const [isSignInPage, setisSignInPage] = useState(true);
  return (
    <div className="bg-[#d2cfdf] h-screen w-full flex justify-center items-center">
      <div className="h-[700px] w-[1000px] bg-white flex justify-center items-center">
        <div className={`h-full w-full flex flex-col justify-center items-center ${ !isSignInPage && `order-2` }`}>
        <div><InstagramSVG/></div>
          <div className="text-4xl font-extrabold"> WELCOME {isSignInPage && `BACK`} </div>
          <div className="mb-[50px] font-light"> PLEASE {isSignInPage ? `SIGN IN` : `REGISTER`} TO CONTINUE </div>
          <form className="w-[350px]">
            {!isSignInPage && (
              <>
              <Input type="text" placeholder="Mobile Number or email" />
              <Input type="text" placeholder="Full Name" />
              </>
            )}
            <Input type="text" placeholder="Phone number, username or email" />
            <Input type="password" placeholder="Password" />
            <Button type={"submit"} label={isSignInPage ? `Sign in` : `Sign up`} className="my-5" />

            <div className=" text-center cursor-pointer text-lg text-blue-700 font-bold" onClick={() => setisSignInPage(!isSignInPage) } >
             {isSignInPage ? 
              ( <><span className="text-black text-base">Don't have account?</span> Sign up </>) :
              ( <><span className="text-black text-base">Have an account?</span> Sign in </>)}{" "}
            </div>
          </form>
        </div>
        <div className={`flex justify-center items-center h-full w-full bg-[#F2F5F8]  ${!isSignInPage && `order-1`}`} >
          {isSignInPage ? (
            <SigninSvg width={`300px`} height={`300px`} />
          ) : (
            <SignupSvg width={`300px`} height={`300px`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
