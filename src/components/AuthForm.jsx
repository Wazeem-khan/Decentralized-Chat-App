import MetaMaskOnboarding from "@metamask/onboarding";
import { useState, useRef, useEffect } from "react";
import UserRegForm from "./UserRegForm";
import { motion } from "framer-motion";

const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect with MetaMask";

const AuthForm = () => {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleNewAccounts);
      window.ethereum.on("accountsChanged", handleNewAccounts);
      return () => {
        window.ethereum.removeListener("accountsChanged", handleNewAccounts);
      };
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
      <div className="mb-4">
        <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
        <p className="text-gray-500">Please sign in to your account.</p>
      </div>
      <div className="space-y-5">
        {isDisabled ? 
            <motion.div     
                animate={{x: 0 }}
                initial={{x: 100}}
                transition={{ type: "spring"}}
            >
               <UserRegForm />  
            </motion.div>

         : 
          <div className="pt-2">
            <button
              disabled={isDisabled}
              onClick={onClick}
              className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              <div className="pl-1 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 212 189"
                >
                  <g fill="none" filrule="evenodd">
                    <polygon
                      fill="#CDBDB2"
                      points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                    />
                    <polygon
                      fill="#CDBDB2"
                      points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                      transform="matrix(-1 0 0 1 256.5 0)"
                    />
                    <polygon
                      fill="#393939"
                      points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                    />
                    <polygon
                      fill="#F89C35"
                      points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                    />
                    <polygon
                      fill="#F89D35"
                      points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                    />
                    <polygon
                      fill="#D87C30"
                      points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                    />
                    <polygon
                      fill="#EA8D3A"
                      points="46.125 101.813 65.25 119.813 65.25 137.813"
                    />
                    <polygon
                      fill="#F89D35"
                      points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                    />
                    <polygon
                      fill="#EB8F35"
                      points="65.25 138.375 60.75 173.25 90.563 152.438"
                    />
                    <polygon
                      fill="#EA8E3A"
                      points="92.25 102.375 95.063 150.188 86.625 125.719"
                    />
                    <polygon
                      fill="#D87C30"
                      points="39.375 138.938 65.25 138.375 60.75 173.25"
                    />
                    <polygon
                      fill="#EB8F35"
                      points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                    />
                    <polygon
                      fill="#E8821E"
                      points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                    />
                    <polygon
                      fill="#DFCEC3"
                      points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                    />
                    <polygon
                      fill="#DFCEC3"
                      points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                      transform="matrix(-1 0 0 1 272.25 0)"
                    />
                    <polygon
                      fill="#393939"
                      points="70.313 112.5 64.125 125.438 86.063 119.813"
                      transform="matrix(-1 0 0 1 150.188 0)"
                    />
                    <polygon
                      fill="#E88F35"
                      points="12.375 .563 88.875 58.5 75.938 27"
                    />
                    <path
                      fill="#8E5A30"
                      d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                    />
                    <g transform="matrix(-1 0 0 1 211.5 0)">
                      <polygon
                        fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                      />
                      <polygon
                        fill="#D87C30"
                        points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                      />
                      <polygon
                        fill="#EA8D3A"
                        points="46.125 101.813 65.25 119.813 65.25 137.813"
                      />
                      <polygon
                        fill="#F89D35"
                        points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                      />
                      <polygon
                        fill="#EB8F35"
                        points="65.25 138.375 60.75 173.25 90 153"
                      />
                      <polygon
                        fill="#EA8E3A"
                        points="92.25 102.375 95.063 150.188 86.625 125.719"
                      />
                      <polygon
                        fill="#D87C30"
                        points="39.375 138.938 65.25 138.375 60.75 173.25"
                      />
                      <polygon
                        fill="#EB8F35"
                        points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                      />
                      <polygon
                        fill="#E8821E"
                        points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                      />
                      <polygon
                        fill="#393939"
                        points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)"
                      />
                      <polygon
                        fill="#E88F35"
                        points="12.375 .563 88.875 58.5 75.938 27"
                      />
                      <path
                        fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              {buttonText}
            </button>
          </div>
        }
      </div>
      <div className="pt-5 text-center text-gray-400 text-xs">
        <span>
          Copyright © 2021-2022
          <a
            href="#"
            rel=""
            target="_blank"
            title="Phyo Pyae Sone Han"
            className="text-green hover:text-green-500 ml-1"
          >
            Phyo Han
          </a>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
