// import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import {jwt_decode} from "jwt-decode";

// const GoogleLoginPage = () => {
//   const navigate = useNavigate();
//   const responseGoogle = (response) => {
//     //console.log(response);
//     const userObject = jwt_decode(response.credential);
//     //console.log(userObject);
//     localStorage.setItem("user", JSON.stringify(userObject));
//     const { name, sub, picture } = userObject;
//     const doc = {
//       _id: sub,
//       _type: "user",
//       userName: name,
//       image: picture,
//     };
//     console.log(doc)
//   };
//   return (
//     <div className="">
//       <div className="">
//         <GoogleOAuthProvider
//           clientId={"609020049683-mhg9teasgoejgj4je4nbbnp79g163he9.apps.googleusercontent.com"}
//         >
//           <GoogleLogin
//             render={(renderProps) => (
//               <button
//                 type="button"
//                 className=""
//                 onClick={renderProps.onClick}
//                 disabled={renderProps.disabled}
//               >
//                  Sign in with google
//               </button>
//             )}
//             onSuccess={responseGoogle}
//             onFailure={responseGoogle}
//             cookiePolicy="single_host_origin"
//           />
//         </GoogleOAuthProvider>
//       </div>
//     </div>
//   );
// };

// export default GoogleLoginPage;



// function GoogleSignIn() {
//   return (
//     <>
//         <a
//               className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
//               style={{ backgroundColor: "#3b5998" }}
//               href={getGoogleUrl(from)}
//               role="button"
//               data-mdb-ripple="true"
//               data-mdb-ripple-color="light"
//             >
//               <img
//                 className="pr-2"
//                 src={GoogleLogo}
//                 alt=""
//                 style={{ height: "2rem" }}
//               />
//               Continue with Google
//             </a>
//     </>
//   )
// }

// export default GoogleSignIn