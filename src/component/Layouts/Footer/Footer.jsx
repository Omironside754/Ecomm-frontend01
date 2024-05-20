import { Link } from "react-router-dom";

const footMenu = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Kriptees
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        {/* <p className="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p> */}
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to="/PrivacyPolicy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link
              to="/TermsandConditions"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link
              to="/ShipandDelivery"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Shipping and Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/RefundandCancellation"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Refund Policy
            </Link>
          </li>          <li>
            <Link
              to="/ContactUs"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default footMenu



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GooglePlay from "../../../Image/Footer/google-play-black.svg";
// import AppStore from "../../../Image/Footer/app-store-black.svg";
// import "./Footer.css";
// const footMenu = [
//   {
//     id: 1,
//     title: "Help",
//     menu: [
//       {
//         id: 1,
//         link: "Track Order",
//         path: "/orders",
//       },
//       {
//         id: 2,
//         link: "FAQs",
//         path: "/terms/conditions",
//       },

//       {
//         id: 3,
//         link: "Cancel Order",
//         path: "/policy/return",
//       },
//       {
//         id: 4,
//         link: "Return Order",
//         path: "/policy/return",
//       },
//       {
//         id: 5,
//         link: "Warranty Info",
//         path: "/policy/Terms",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Policies",
//     menu: [
//       {
//         id: 1,
//         link: "Return Policy",
//         path: "/policy/return",
//       },
//       {
//         id: 2,
//         link: "Security",
//         path: "/policy/privacy",
//       },
//       {
//         id: 3,
//         link: "Sitemap",
//         path: "/policy/Terms",
//       },
//       {
//         id: 4,
//         link: "Privacy Policy",
//         path: "/policy/privacy",
//       },
//       {
//         id: 5,
//         link: "T&C",
//         path: "/terms/conditions",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Company",
//     menu: [
//       {
//         id: 1,
//         link: "About Us",
//         path: "/about",
//       },
//       {
//         id: 2,
//         link: "Contact Us",
//         path: "/contact",
//       },
//       {
//         id: 3,
//         link: "Service Centres",
//         path: "/",
//       },
//       {
//         id: 4,
//         link: "Careers",
//         path: "/",
//       },
//       {
//         id: 5,
//         link: "Affiliates",
//         path: "/terms/conditions",
//       },
//     ],
//   },
// ];

// const footSocial = [
//   {
//     id: 1,
//     icon: <FacebookIcon className="facebook_icon" fontSize="large" />,
//     path: "https://www.instagram.com/",
//   },
//   {
//     id: 2,
//     icon: <TwitterIcon className="twitter_icon" fontSize="large" />,
//     path: "https://twitter.com/",
//   },
//   {
//     id: 3,
//     icon: <InstagramIcon className="insta_icon" fontSize="large" />,
//     path: "https://www.instagram.com/"
//   },
//   {
//     id: 4,
//     icon: <LinkedInIcon className="likedin_icon" fontSize="large" />,
//     path: "https://www.linkedin.com/",
//   },
// ];



// const Footer = () => {
//   const [subValue, setSubValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubValue("");
//     alert("Thankyou, you are subscribed to receive our daily newsletter");
//   };

//   const currYear = new Date().getFullYear();

//   return (
//     <>
//       <footer className="footer">
//         <div className="container">
//           <div className="wrapper_footer footer_wrapper ">
//             <div className="foot_about foot1">
//               <div className="foot_logo">
//                 <Link to="/" style={{ textDecoration: "none" }}>
//                   {/* <img
//                     src={require("../../../Image/Footer/logo.png")}
//                     alt="cricekt weapon logo"
//                   /> */}
//                   <h1 className="Foot_heading">Kriptees</h1>
//                 </Link>
//               </div>

//               <div className="foot_subs">
//                 <h5>Newsletter</h5>
//                 <form onSubmit={handleSubmit} className="foot_form">
//                   <input
//                     type="email"
//                     className="input_field_footer"
//                     placeholder="Email Address*"
//                     required
//                     value={subValue}
//                     onChange={(e) => setSubValue(e.target.value)}
//                   />
//                   <p>
//                     By submitting your email address you agree to the{" "}
//                     <Link to="/terms/conditions" className="foot_subs_text">
//                       Terms & Conditions
//                     </Link>
//                   </p>
//                   <button type="submit" className="btnFooter">
//                     Subscribe
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div className="foot_menu_container">
//               {footMenu.map((item) => {
//                 const { id, title, menu } = item;
//                 return (
//                   <div className="foot_menu foot2" key={id}>
//                     <h4>{title}</h4>
//                     <ul>
//                       {menu.map((item) => {
//                         const { id, link, path } = item;
//                         return (
//                           <li key={id}>
//                             <Link to={path}>{link}</Link>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="foot_links foot3">
//               <div className="foot_dowload_appLink">
//                 <h5>Download app</h5>
//                 <div className="app_links">
//                   <span className="googlePlayStore_link">
//                     <a href="/">
//                       <img src={GooglePlay} alt="play Store svg" />
//                     </a>
//                   </span>
//                   <span className="appleStore_link">
//                     <a href="/">
//                       <img src={AppStore} alt="Apple Store svg" />
//                     </a>
//                   </span>
//                 </div>
//               </div>
//               {/* socila media link */}

//               <div className="foot_social">
//                 {footSocial.map((item) => {
//                   const { id, icon, path } = item;
//                   return (
//                     <a
//                       href={path}
//                       key={id}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {icon}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="separatorFooter"></div>

//         <div className="sub_footer_root">
//           <div className="container_Footer">
//             <div className="sub_footer_wrapper">
//               <div className="foot_policyLink">
//                 <ul>
//                   <li className="subfoot_link_text1">
//                     <Link to="/policy/privacy">
//                       <p className="foot_policyLink_p">Privacy Policy</p>
//                     </Link>
//                   </li>
//                   <li className="subfoot_link_text2">
//                     <Link to="/terms/conditions">
//                       <p className="foot_policyLink_p">TERMS & CONDITIONS</p>
//                     </Link>
//                   </li>
//                   <li className="subfoot_link_text3">
//                     <Link to="/policy/Terms">
//                       <p className="foot_policyLink_p">TERMS OF USE</p>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               <div className="foot_copyright">
//                 <p>
//                   &copy; {currYear} | Kriptees, All Rights Reserved.

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
