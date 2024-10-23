"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    introJs: any;
  }
}

export default function Home() {

  const router = useRouter()

  const startTour = () => {
    const intro = window.introJs();

    intro.setOptions({
      steps: [
        {
          intro: "Welcome to the OSTicket System Login Page"
        },
        {
          element: document.querySelector('#emailDiv'),
          title: 'Email Address',
          intro: 'Please input your account email address. This is the email associated with your OSTicket account.'
        },
        {
          element: document.querySelector('#passwordDiv'),
          title: 'Password',
          intro: 'Enter your secure password here. Make sure to keep it confidential to protect your account.'
        },
        {
          element: document.querySelector('#loginButton'),
          title: 'Login Button',
          intro: "Once you've entered your email and password, click this button to log in and start managing your tickets."
        },
        {
          element: document.querySelector('#forgotPassword'),
          title: 'Forgot Password?',
          intro: "Click here if you've forgotten your password. We'll guide you through the steps to reset it."
        },
        {
          element: document.querySelector('#signInWithGoogle'),
          title: 'Sign in with Google',
          intro: "You can also log in using your Google account. Click here to sign in quickly and securely with Google."
        },
      ]
    }).start();
  }

  useEffect(() => {
    startTour();
    window.introJs().addHints();
  }, [])

  return (
    <div className="bg-[#0066ff] min-h-screen flex items-center py-[5%] justify-center">
      <div className="w-[60%] bg-white p-[5%] rounded-[10px]">

        <div className="flex justify-between">
          <p>Welcome back!</p>

          <button
            className="bg-[#939393] text-white font-bold rounded-full h-[25px] w-[25px] text-[20px] flex items-center justify-center"
            onClick={() => startTour()} data-hint="Click here to restart the guided tour of this page."
            data-hint-position="middle-right">
            ?
          </button>
        </div>

        <p className="font-bold text-[28px]">Login to your account</p>

        <div id="emailDiv" className="mt-[30px]">
          <p>Email</p>
          <input type="text" className="bg-[#f8f8f8] w-full p-[10px] rounded-[5px] border-[#939393] border-2" />
        </div>

        <div id="passwordDiv" className="mt-[20px]">
          <p>Password</p>
          <input type="password" className="bg-[#f8f8f8] w-full p-[10px] rounded-[5px] border-[#939393] border-2" />
        </div>

        <button id="loginButton" className="bg-[#0066ff] text-white rounded-[5px] w-full mt-[30px] p-[15px] font-semibold"
          onClick={() => window.location.href = 'dashboard.html'}>Login</button>

        <button id="forgotPassword" className="underline mt-[20px] text-[#0066ff]">Forgot Password?</button>

        <div className="flex items-center gap-[10px] mt-[20px]">
          <div className="w-full h-[1px] bg-[#939393]"></div>
          <p>Or</p>
          <div className="w-full h-[1px] bg-[#939393]"></div>
        </div>

        <button
          className="border-[#939393] border-2 rounded-[5px] w-full mt-[20px] p-[15px] flex items-center justify-center gap-[20px]"
          id="signInWithGoogle">

          <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png"
            className="h-[2em] w-[2em]" />

          <p className="font-semibold">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
