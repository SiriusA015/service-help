"use client";
import React, { useState } from "react";
import exitBtn from "../../public/exitBtn.png";
import person from "../../public/person.jpeg";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AuthViaPass = (props) => {
  const { authIsOpen, setCheckAuth, name } = props;
  const [doubleCheck, setDouble] = useState(0);
  function closeModal() {
    setCheckAuth(false);
  }
  const handlewithContinue = () => {
    if (doubleCheck === 0) setDouble(doubleCheck + 1);
    console.log(doubleCheck);
  };
  return (
    <>
      <Modal
        isOpen={authIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="flex justify-between mb-[17px]">
            <h1 className="text-[24px] leading-[36px] text-[#212529]">
              Authentication Required
            </h1>
            <button onClick={() => setCheckAuth(false)}>
              <Image src={exitBtn} className="w-[20px] h-[20px]" alt="noImg" />
            </button>
          </div>
          <hr className="mb-[18px]" />
          <p className="text-base leading-6 text-[#65676b] mb-[22px]">
            Please authenticate by entering your password to submit this
            request.
          </p>
          <div className="flex space-x-[15px] self-center">
            <Image src={person} className="w-[110px] h-[90px]" alt="noImg" />
            <div className="justify-self-center space-y-[10px] ">
              <h2 className="text-[15px] text-[#65676b] leading-[22px] font-semibold">
                {name}
              </h2>
              <input
                type="password"
                name="passwords"
                id="passwords"
                placeholder="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>
          {doubleCheck == 1 && (
            <h1 className="text-[15px] text-[#a94442] leading-[22px] mt-[4px]">
              Your password was incorrect !
            </h1>
          )}

          <hr className="my-[18px]" />
          <div>
            <div class="flex flex-row-reverse">
              <div>
                {doubleCheck === 0 && (
                  <button
                    onClick={handlewithContinue}
                    class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Continue
                  </button>
                )}
                {doubleCheck === 1 && (
                  <Link
                    href="/verification"
                    class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Continue
                  </Link>
                )}
              </div>
              <div className="mr-2">
                <button
                  onClick={closeModal}
                  class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthViaPass;
