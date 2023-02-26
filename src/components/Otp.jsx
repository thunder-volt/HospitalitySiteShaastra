import React, { useEffect, useState } from "react";
import "../styles/otp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useVerifyUserMutation } from "../generated/graphql.tsx";
// import { CircleCheck } from '@fortawesome/free-solid-svg-icons';
const Otp = () => {
  const [inputs, setInputs] = useState([0, 0, 0, 0, 0, 0]);

  const modifyInputs = (value, index) => {
    let arr = [...inputs];
    arr[index] = value;
    setInputs(arr);
  };

  const [verifyUserMutation, { data, loading, error }] =
    useVerifyUserMutation();
  useEffect(() => {
    const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

    // iterate over all inputs
    inputs.forEach((input, index1) => {
      input.addEventListener("keyup", (e) => {
        // This code gets the current input element and stores it in the currentInput variable
        // This code gets the next sibling element of the current input element and stores it in the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
        const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

        // if the value has more than one character then clear it
        if (currentInput.value.length > 1) {
          currentInput.value = currentInput.value[0];
          return;
        }
        // if the next input is disabled and the current value is not empty
        //  enable the next input and focus on it
        if (
          nextInput &&
          nextInput.hasAttribute("disabled") &&
          currentInput.value !== ""
        ) {
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }

        // if the backspace key is pressed
        if (e.key === "Backspace") {
          // iterate over all inputs again
          inputs.forEach((input, index2) => {
            // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
            // and the previous element exists, set the disabled attribute on the input and focus on the previous element
            if (index1 <= index2 && prevInput) {
              input.setAttribute("disabled", true);
              input.value = "";
              prevInput.focus();
            }
          });
        }
        //if the fourth input( which index number is 3) is not empty and has not disable attribute then
        //add active class if not then remove the active class.
        if (!inputs[5].disabled && inputs[5].value !== "") {
          button.classList.add("active");
          return;
        }
        button.classList.remove("active");
      });
    });
    console.log(inputs);

    //focus the first input which index is 0 on window load
    window.addEventListener("load", () => inputs[0].focus());
  }, []);

  return (
    <div className="body-otp">
      <div className="container-otp">
        <header className="header-otp">
          <i className="fa-regular fa-circle-check"></i>
        </header>
        <h4>Enter OTP Code</h4>
        <form action="#" className="form-otp">
          <div className="input-field-otp">
            <input
              onChange={(e) => modifyInputs(e.target.value, 0)}
              type="number"
            />
            <input
              onChange={(e) => modifyInputs(e.target.value, 1)}
              type="number"
              disabled
            />
            <input
              onChange={(e) => modifyInputs(e.target.value, 2)}
              type="number"
              disabled
            />
            <input
              onChange={(e) => modifyInputs(e.target.value, 3)}
              type="number"
              disabled
            />
            <input
              onChange={(e) => modifyInputs(e.target.value, 4)}
              type="number"
              disabled
            />
            <input
              onChange={(e) => modifyInputs(e.target.value, 5)}
              type="number"
              disabled
            />
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              await verifyUserMutation({
                variables: {
                  input: inputs.join(""),
                },
              });
            }}
          >
            Verify OTP
          </button>
          <a href="#" className="resend">
            Resend OTP
          </a>
        </form>
      </div>
    </div>
  );
};

export default Otp;
