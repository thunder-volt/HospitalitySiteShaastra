import React, { useState } from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import aws from "aws-sdk";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    // Select,
    useDisclosure,
  } from "@chakra-ui/react";

import {
    useRegisterUserMutation,
    useCapturePaymentMutation,
} from "../generated/graphql.tsx";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const Signup = () => {
    const navigate = useNavigate();

    const s3 = new aws.S3({
        endpoint: "https://sfo3.digitaloceanspaces.com/",
        accessKeyId: "DO009DR9PPMJJQXKRN2R",
        secretAccessKey: "Zn6p96YD6E7Xa9F7mRdaw6p+Cx6sSYHDpYzXKNL0c+Q",
    });

    const [registerUserMutation, { data, loading, error }] =
        useRegisterUserMutation({
            async onCompleted(data) {
                console.log("helo")
                if (data.registerUser) {
                    await loadRazorpay(data);
                }
            },
        });
    const [
        capturePaymentMutation,
        { data: captureData, loading: captureLoading, error: captureError },
    ] = useCapturePaymentMutation();

    const loadRazorpay = async (data) => {
        /******** Load Razorpay Script ********/
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load");
            return;
        }

        /******** Razorpay Options ********/
        const options = {
            key: "rzp_live_WQ7VB5TIMbvijH",
            amount: data?.registerUser.amount,
            currency: "INR",
            name: "Accommodation",
            image: "", //TODO: Add the shaastra link here
            order_id: data?.registerUser.orderId,

            handler: async function (response) {
                console.log(response);
                try {
                    await capturePaymentMutation({
                        variables: {
                            input: {
                                orderId: response?.razorpay_order_id,
                                payementId: response?.razorpay_payment_id,
                                paymentSignature: response?.razorpay_signature,
                            },
                        },
                    });
                    console.log("capture done");
                } catch (e) {
                    console.log(e);
                }
            },
            prefill: {
                name: data?.registerUser.name,
                email: data?.registerUser.email,
                contact: data?.registerUser.phone,
            },
            notes: {
                address: data?.registerUser.address,
                type: "ACCO",
            },
            theme: {
                color: "#3399cc",
            },
        };
        /******** Open Razorpay ********/
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    // if (loading || captureLoading){
    //     window.alert("Loading")
    // }
    // if (error || captureError){
    //     console.log(error, captureError)
    //     window.alert(error ? error.message : captureError?.message)
    // }
    // if(captureData){
    //     window.alert("Registered")
    // }
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [college, setCollege] = useState("");
    const [personalIdType, setPersonalIdType] = useState("PAN");
    const [personalIdFile, setPersonalIdFile] = useState();
    const [personalId, setPersonalId] = useState("");
    const [year, setYear] = useState("2023");
    const [accomodation, setAccomodation] = useState("Inside Campous");
    const [accomodationFrom, setAccomodationFrom] = useState("2023-01-26");
    const [accomodationTo, setAccomodationTo] = useState("2023-01-29");
    const [noOfDays, setNoOfDays] = useState("4");
    const [noOfMen, setNoOfMen] = useState("0");
    const [noOfWomen, setNoOfWomen] = useState("0");

    var {isOpen, onOpen, onClose} = useDisclosure();

    if (loading || captureLoading) {
        return (
          <Modal isOpen={true}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Loading</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Please wait a minute...loading...
                Do not press back or exit the page.
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }
      if (error) {
        // onClose = () => {
        //   navigate("/signup");
        // };
    
        return (
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Error</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Some Error occured during registration...please try again.</ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }
      if (captureData) {
        onClose = () => {
            navigate("/")
        }
        return (
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Success</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Registration  and Payment success.
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }
      if (captureError) {    
        return (
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Error</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                There was an error in Payment capture.<br></br>
                Check mail for payment link.
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }
    return (
        <div className="body-signup">
            <div className="container">
                <header className="header-signup">Registration</header>
                <form action="#">
                    <div className="form first">
                        <div className="details personal">
                            <span className="title">Personal Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        placeholder="Enter birth date"
                                        onChange={(e) => setDob(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Mobile Number</label>
                                    <input
                                        type="number"
                                        placeholder="Enter mobile number"
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* <div className="input-field">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div> */}

                                <div className="input-field">
                                    <label>Gender</label>
                                    <select required onChange={(e) => setGender(e.target.value)}>
                                        <option disabled defaultValue="Select Gender">
                                            Select gender
                                        </option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label>College</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your College"
                                        onChange={(e) => setCollege(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="details ID">
                            <span className="title">Other Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>ID Type</label>
                                    <select
                                        onChange={(e) => setPersonalIdType(e.target.value)}
                                        required
                                    >
                                        {/* <option disabled defaultValue="Select Gender">Select Type</option> */}
                                        <option>Pan</option>
                                        <option>College ID</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <label className="extra-label">
                                        College/PAN ID{" "}
                                        <div className="extra">{personalId || "Select File"}</div>{" "}
                                        <input
                                            type="file"
                                            placeholder="Enter College ID"
                                            required
                                            onChange={(e) => {
                                                setPersonalIdFile(e.target.files[0]);
                                                setPersonalId(e.target.files[0].name);
                                            }}
                                            className="file-input"
                                        />
                                    </label>
                                </div>
                                <div className="input-field">
                                    <label>Year of Study</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Year of Study"
                                        onChange={(e) => setYear(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* <div className="input-field">
                                    <label>Id Type</label>
                                    <select required >
                                        <option disabled defaultValue="Select Gender">Select Type</option>
                                        <option>Adhaar</option>
                                        <option>Pan</option>
                                        <option>Voter</option>
                                        <option>Other</option>
                                    </select>
                                </div> */}
                                <div className="input-field">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>No. of Days</label>
                                    <select
                                        onChange={(e) => setNoOfDays(e.target.value)}
                                        required
                                    >
                                        <option disabled defaultValue="Select Type">
                                            Select Type
                                        </option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <label>Accomodation Type</label>
                                    <select
                                        onChange={(e) => setAccomodation(e.target.value)}
                                        required
                                    >
                                        <option disabled defaultValue="Select Type">
                                            Select Type
                                        </option>
                                        <option>Inside Campus</option>
                                        <option>Outside Campus</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <label>Accomodation From</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Starting Data"
                                        min={"2023-01-26"}
                                        max={noOfDays === "4" ? "2023-01-26" : noOfDays === "3" ? "2023-01-27" : "2023-01-28"}
                                        onChange={(e) => setAccomodationFrom(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Accomodation Upto</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Ending Date"
                                        min={
                                            noOfDays === "2"
                                                ? accomodationFrom === "2023-01-26" ? "2023-01-27" : accomodationFrom === "2023-01-27" ? "2023-01-28" : accomodationFrom === "2023-01-28" ? "2023-01-29" : "" :
                                            noOfDays === "3"
                                                ? accomodationFrom === "2023-01-26" ? "2023-01-28" : accomodationFrom === "2023-01-27" ? "2023-01-29" : "" : "2023-01-29"
                                        }
                                        max={
                                            noOfDays === "2"
                                                ? accomodationFrom === "2023-01-26" ? "2023-01-27" : accomodationFrom === "2023-01-27" ? "2023-01-28" : accomodationFrom === "2023-01-28" ? "2023-01-29" : "" :
                                            noOfDays === "3"
                                                ? accomodationFrom === "2023-01-26" ? "2023-01-28" : accomodationFrom === "2023-01-27" ? "2023-01-29" : "" : "2023-01-29"
                                        }
                                        onChange={(e) => setAccomodationTo(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>No. of Men (include registering user also)</label>
                                    <input
                                        type="number"
                                        placeholder="Enter No. of Men"
                                        onChange={(e) => setNoOfMen(e.target.value)}
                                        required
                                    />
                                </div><div className="input-field">
                                    <label>No. of Women (include registering user also)</label>
                                    <input
                                        type="number"
                                        placeholder="Enter No. of Women"
                                        onChange={(e) => setNoOfWomen(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            Check registered mail if Razorpay fails.
                            <button
                                onClick={async (e) => {
                                    console.log("enter");
                                    e.preventDefault();
                                    console.log("etner");
                                    try {
                                        const s3params = {
                                            Bucket: "hospitality23",
                                            Key: personalIdFile.name,
                                            ContentType: personalIdFile.type,
                                            Body: personalIdFile,
                                            ACL: "public-read",
                                        };
                                        await s3.upload(s3params).promise();
                                        console.log("hai");
                                        await registerUserMutation({
                                            variables: {
                                                input: {
                                                    name,
                                                    dob,
                                                    gender,
                                                    address,
                                                    phone,
                                                    email,
                                                    college,
                                                    personalIdType,
                                                    personalId: `https://shaastra23.sfo3.digitaloceanspaces.com/${personalId}`,
                                                    year: parseInt(year),
                                                    accomodation,
                                                    accomodationFrom,
                                                    accomodationTo,
                                                    noOfDays: parseInt(noOfDays),
                                                    noOfMen: parseInt(noOfMen),
                                                    noOfWomen: parseInt(noOfWomen),
                                                },
                                            },
                                        });
                                        console.log("done");

                                        // navigate("/otp");
                                    } catch (err) {
                                        console.log(err);
                                        //   navigate("/signup")
                                    }
                                }}
                                className="nextBtn"
                            >
                                <span className="btnText">Submit</span>
                                <i className="uil uil-navigator"></i>
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
