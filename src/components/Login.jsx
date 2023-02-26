// import React, { useState } from "react";
// import "../styles/login.css";

// import { useLoginUserMutation } from "../generated/graphql.tsx";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loginUserMutation, { data, loading, error }] = useLoginUserMutation();
//   return (
//     <>
//       <div className="body-login">
//         <div className="cont-login">
//           {/* <div className='logo-login'></div> */}
//           <i class="fa-regular fa-user"></i>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type={"text"}
//               className="login-email"
//               placeholder="Enter Email"
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type={"password"}
//               className="login-password"
//               placeholder="Enter Password"
//               onChange={(e) => setPassword(e.target.value)}
//               id="password"
//             />
//           </div>
//           <a className="resend">
//             Forgot Password
//           </a>
//           <button
//             className="login-btn"
//             onClick={async (e) => {
//               e.preventDefault();
//               console.log("done")
//               try {
//                 await loginUserMutation({
//                   variables: {
//                     input: {
//                       email,
//                       password,
//                     },
//                   },
//                 });
//                 console.log(data.loginUser)
//               } catch (err) {
//                 console.log(err);
//               }
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
