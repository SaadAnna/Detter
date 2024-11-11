/* eslint-disable react/no-unescaped-entities */
import FristCoustmer from "./Firstcoustmer.png";
import SecondCoustmer from "./Secondcoustmer.png";
import ThirdCoustmer from "./Thirdcoustmer.png";
import { useState } from "react";
export default function Navbar() {
  const [openQuestion, setOpenQuestion] = useState("");
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer service team to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary based on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for online purchases.",
    },
  ];

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? "" : question);
  };

  return (
    <div className="max-w-7xl text-center  mx-auto mt-44 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl text-center mx-auto mt-28 px-4 sm:px-6 lg:px-8">
        <span className="font-Text font-normal text-neutral-700 mb-4 text-lg">
          Created by{" "}
          <a
            className="font-Text underline font-normal text-neutral-900 "
            href="#"
          >
            Codew
          </a>{" "}
        </span>
        <div className=" w-full max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-Text text-6xl md:text-8xl mt-4 font-medium text-black">
            Create your website now!
          </h1>
          <p className="font-Text text-neutral-600 text-xl font-normal mt-4">
            We design websites that captivate and connect let's make your
            <br /> brand unforgettable!
          </p>
        </div>
        <div className="w-full flex max-w-md mx-auto p-4">
          <form className="relative w-full flex text-center justify-center items-center justify-items-center">
            <input
              className="w-full  text-neutral-700 text-base font-Text font-normal mt-7 h-11 bg-gray-100 border border-solid p-4 outline-one border-neutral-440 rounded-full focus:outline-none focus:border-neutral-800 focus:border focus:border-solid placeholder:text-sm placeholder:font-Text placeholder:text-neutral-700 placeholder:font-normal "
              type="text"
              placeholder="Search Your Design!"
            />
          </form>
        </div>
        <h1 className="font-Text text-xl mt-7 m-auto font-normal text-neutral-600">
          Trusted by
        </h1>

        <div className="flex  justify-items-center items-center justify-center mt-8">
          <img className="w-11 object-cover h-11" src={FristCoustmer} />
          <img
            className="w-11 object-cover h-11 relative right-5"
            src={SecondCoustmer}
          />
          <img
            className="w-11 object-cover h-11 relative right-8"
            src={ThirdCoustmer}
          />
          <div className="felx felx-col relative right-3 text-start">
            <h1 className="font-Text relative  mt-2 text-lg font-medium text-neutral-950">
              10M+ Community
            </h1>
            <p className="font-Text text-neutral-600 text-base font-normal relative ">
              Be with Us
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full h-2/5 cursor-pointer flex justify-items-center items-center  mx-auto mt-28 px-4 sm:px-6 lg:px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" w-11/21 lg:w-3/5 m-auto"
          viewBox="0 0 610.81982 489.57062"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="m15.17983,488.38062c0,.66.53,1.19,1.19,1.19h593.25999c.65997,0,1.19-.53,1.19-1.19s-.53003-1.19-1.19-1.19H16.36983c-.66,0-1.19.53-1.19,1.19Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <path
            d="m322.81827,370.94498c-1.62897,9.87393-10.22128,17.43042-20.54929,17.43042s-18.92029-7.55649-20.54926-17.43042h-52.57347v113.93546h146.24547v-113.93542h-52.57349l.00003-.00003Z"
            fill="#b6b3c5"
            strokeWidth="0"
          />
          <rect
            x="231.69705"
            y="484.45539"
            width="14.4545"
            height="2.55078"
            fill="#b6b3c5"
            strokeWidth="0"
          />
          <rect
            x="359.66187"
            y="484.88053"
            width="14.4545"
            height="2.55078"
            fill="#b6b3c5"
            strokeWidth="0"
          />
          <path
            d="m596.38477,373.9209H8.15307c-4.49565,0-8.15307-3.65762-8.15307-8.15308V30.0645c0-4.49544,3.65742-8.15307,8.15307-8.15307h588.2317c4.49567,0,8.15326,3.65763,8.15326,8.15307v335.70335c0,4.49545-3.65765,8.15308-8.15326,8.15308v-.00003Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <rect
            x="14.87962"
            y="36.36602"
            width="575.62905"
            height="324.80103"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m522.12122,161.10268h-31.40942c-2.72925,0-4.94971-2.22021-4.94971-4.94971s2.22046-4.94971,4.94971-4.94971h31.40942c2.72925,0,4.94971,2.22021,4.94971,4.94971s-2.22046,4.94971-4.94971,4.94971Z"
            fill="#d1d1d2"
            strokeWidth="0"
          />
          <path
            d="m558.24231,161.10268h-14.65771c-2.72925,0-4.94971-2.22021-4.94971-4.94971s2.22046-4.94971,4.94971-4.94971h14.65771c2.72925,0,4.94971,2.22021,4.94971,4.94971s-2.22046,4.94971-4.94971,4.94971Z"
            fill="#d1d1d2"
            strokeWidth="0"
          />
          <path
            d="m207.64661,164.88297h-95.60376c-4.88037,0-8.85083-3.9707-8.85083-8.85107s3.97046-8.85107,8.85083-8.85107h95.60376c4.88062,0,8.85107,3.9707,8.85107,8.85107s-3.97046,8.85107-8.85107,8.85107Z"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <path
            d="m155.81335,188.49575h-46.07422c-2.97485,0-5.39526-2.42041-5.39526-5.39502,0-2.9751,2.42041-5.39551,5.39526-5.39551h46.07422c2.97485,0,5.39526,2.42041,5.39526,5.39551,0,2.97461-2.42041,5.39502-5.39526,5.39502Z"
            fill="#d1d1d2"
            strokeWidth="0"
          />
          <path
            d="m409.79675,209.80532H108.58727c-2.97485,0-5.39526-2.42041-5.39526-5.39551s2.42041-5.39551,5.39526-5.39551h301.20947c2.97485,0,5.39526,2.42041,5.39526,5.39551s-2.42041,5.39551-5.39526,5.39551Z"
            fill="#d1d1d2"
            strokeWidth="0"
          />
          <path
            d="m383.88,224.20328H108.58727c-2.97485,0-5.39526-2.42041-5.39526-5.39551,0-2.97461,2.42041-5.39502,5.39526-5.39502h275.29272c2.97485,0,5.39526,2.42041,5.39526,5.39502,0,2.9751-2.42041,5.39551-5.39526,5.39551Z"
            fill="#d1d1d2"
            strokeWidth="0"
          />
          <polygon
            points="557.3418 432.03742 543.5249 446.54551 528.79944 432.9325 542.61639 418.42444 557.3418 432.03742"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m568.3783,446.89655l-29.37,30.83914c-2.51031,2.63586-5.64563,4.71841-9.06708,6.02249l-8.18829,3.12103c-1.69299.64532-3.6424.27151-4.96619-.95227-1.55249-1.43521-1.94537-3.73444-.95551-5.59137l7.87616-14.77438,8.40466-29.96185.09143.0563c2.28638,1.40796,5.75421,3.52057,6.00146,3.61002,4.35229.15414,7.46796-.94049,9.26147-3.25262,3.12823-4.03296,1.14362-10.47122,1.12317-10.53583l-.01562-.04941.03967-.03397c.91187-.77859,1.87238-1.09015,2.85486-.92603,2.08575.34851,3.57776,2.69144,3.79608,3.05188,1.95728-.08246,7.96686,4.62411,8.45044,5.00552,2.95044-.0079,5.11334.69168,6.42841,2.07965,1.14978,1.21341,1.65033,2.93582,1.48816,5.11938-.19513,2.62711-1.35052,5.17429-3.25336,7.17233l.00006-.00003Z"
            fill="#090814"
            strokeWidth="0"
          />
          <rect
            x="521.19769"
            y="448.74103"
            width="20.19269"
            height="19.89465"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m537.94391,486.73258h-42.9227c-3.66864,0-7.35544-.82767-10.66183-2.39359l-7.91296-3.74756c-1.63611-.77484-2.6933-2.43121-2.6933-4.2197,0-2.09747,1.43298-3.95303,3.48477-4.51242l16.32486-4.45053,27.9278-14.46289.02087.10419c.52234,2.60611,1.33154,6.5433,1.43445,6.7821,2.86401,3.23251,5.80609,4.72208,8.74469,4.42856,5.12561-.51196,8.53302-6.34332,8.56683-6.40219l.02594-.04501.05231.00525c1.20026.12238,2.08807.5993,2.63885,1.41754,1.16925,1.73706.45593,4.41217.33856,4.81567,1.40033,1.34985,2.02869,8.88806,2.07727,9.49652,2.02472,2.11441,2.98688,4.14713,2.85938,6.04169-.11145,1.65637-1.04376,3.19458-2.77094,4.57214-2.078,1.65744-4.75397,2.57022-7.53485,2.57022Z"
            fill="#090814"
            strokeWidth="0"
          />
          <polygon
            points="543.78766 198.18148 472.23505 198.21633 448.38416 347.00736 519.93677 432.05072 543.78766 410.78989 487.24072 347.00736 543.78766 198.18148"
            fill="#090814"
            strokeWidth="0"
          />
          <polygon
            points="501.49582 220.11469 543.78766 198.18148 543.78766 453.31156 519.93677 453.96653 501.49582 220.11469"
            fill="#090814"
            strokeWidth="0"
          />
          <path
            d="m459.13336,257.84793l.50385-23.22496-13.56027-.29417-.50385,23.22498c-2.53,2.34866-4.20013,5.99799-4.28989,10.13547-.15707,7.23953,4.57251,13.21365,10.56384,13.34363s10.97556-5.63339,11.1326-12.87292c.08975-4.13751-1.42062-7.85583-3.84628-10.31198v-.00003Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m523.4361,31.03003s19.46515-.04207,12.19354-18.79784-20.81177-10.35779-20.81177-10.35779c0,0-5.70535,3.01366-4.52911,9.73748"
            fill="#090814"
            strokeWidth="0"
          />
          <path
            d="m525.38422,40.02662c0-14.38025-11.65747-26.03763-26.03754-26.03763s-26.03772,11.65737-26.03772,26.03763c0,11.6623,7.66782,21.53259,18.23663,24.84743l5.03369,33.26563,25.6604-21.3836s-5.54352-7.06083-8.51636-15.02245c7.02637-4.66298,11.66089-12.64233,11.66089-21.70701Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m511.85626,62.02208s3.4577-13.25664-2.19604-19.35213c-5.6409-6.0816-6.36957,3.38112-6.36957,3.38112l-4.07028-.88484s.70789-9.20238-7.25571-10.7951l5.13211-10.97207s-19.64838,3.81501-20.18994,1.912c-4.26123-14.97371,36.39041-27.76478,47.62015-4.92047,17.46588,35.53044-12.67062,41.6315-12.67062,41.6315h-.00009Z"
            fill="#090814"
            strokeWidth="0"
          />
          <path
            d="m488.858,85.21825h-.00003c-18.90326,3.69375-33.0921,19.43311-34.81262,38.61688l-11.76633,131.19472h20.64801l25.93097-169.81158v-.00002Z"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <polyline
            points="469.33435 189.7459 466.11865 226.78904 553.40839 201.11559 542.77228 174.34183 562.57751 128.86313 522.14832 70.91446 489.87314 73.11505 477.40317 89.25265"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <path
            d="m540.5188,224.9253l12.17487-19.78447-11.55151-7.10851-12.17487,19.78447c-3.37018.74757-6.65594,3.05208-8.82489,6.57666-3.7951,6.16708-2.73413,13.71249,2.36963,16.85326,5.10376,3.14075,12.31769.68745,16.11273-5.47964,2.16895-3.52458,2.7453-7.49635,1.89398-10.84177h.00006Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m515.54657,71.64799l7.03845-.29198,12.03333,9.09431c14.25885,2.43159,18.39404,3.11332,22.76288,12.53204,1.83582,3.95777,3.0528,8.17407,3.73322,12.48349l10.18024,64.47481-25.58832,61.6163-16.9563-19.07172,18.12646-48.17314-3.01123-11.52303"
            fill="#ff9d06"
            strokeWidth="0"
          />
        </svg>
      </div>
      <div className="max-w-7xl text-center  mx-auto mt-44 px-4 sm:px-6 lg:px-8">
        <h1 className="font-Text text-4xl md:text-5xl mt-14 font-normal text-black">
          How its work?{" "}
        </h1>
        <p className="font-Text text-neutral-600 text-xl font-normal mt-4">
          Here's how to get started with our platform.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl items-start mt-28 gap-10 py-12 md:grid-cols-3">
        <div className="relative text-start  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Sign up
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Create your account in just a few clicks. It's quick, easy, and free
            to get started.
          </p>
        </div>
        <div className="relative text-start  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Customize Your Profile
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Tell us about your preferences and goals. We'll tailor our service
            to match your needs.{" "}
          </p>
        </div>
        <div className="relative text-start  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Start Your Journey
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Access our full range of tools and resources. get started on your
            success today!{" "}
          </p>
        </div>
      </div>
      <div className="max-w-7xl text-center  mx-auto mt-44 px-4 sm:px-6 lg:px-8">
        <h1 className="font-Text text-4xl md:text-5xl mt-14 font-normal text-black">
          What we offer?
        </h1>
        <p className="font-Text text-neutral-600 text-xl font-normal mt-4">
          Our service that can boost your online presence{" "}
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl items-start mt-28 gap-10 py-12 md:grid-cols-3">
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Fast development
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Rapid prototyping and development to bring your ideas to life
            quickly.
          </p>
        </div>
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Custom Design
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Tailored designs that match your brand and captivate your audience.
          </p>
        </div>
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Responsive Web Apps
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            The first mobile apps that work seamlessly across all devices and
            computers.
          </p>
        </div>
      </div>
      <div className="mx-auto grid maW-7xl items-start  gap-10 py-12 md:grid-cols-3">
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Secure Solutions
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Implementing best practices in security to protect your data and
            users.
          </p>
        </div>
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
              />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            Clean Code
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Well-structured, maintainable code that scales with your business.
          </p>
        </div>
        <div className="relative text-center  overflow-hidden p-5 rounded-xl  border-none cursor-pointer bg-gray-100 ">
          <div className="w-fit h-fit text-center m-auto items-center bg-black rounded-full p-2">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.027 10.9a8.729 8.729 0 0 1 6.422-3.62v-1.2A2.061 2.061 0 0 1 12.61 4.2a1.986 1.986 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.109 2.109 0 0 1-.588.734l-5.489 4.308a1.983 1.983 0 0 1-2.104.228 2.065 2.065 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1.003 1.003 0 0 1-.955-.7A10.221 10.221 0 0 1 5.027 10.9Z" />
            </svg>
          </div>
          <h1 className="font-Text font-medium text-black text-xl mt-4">
            publish
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-2">
            Publish your website and stores online and you can also buy a domain
            for your site
          </p>
        </div>
      </div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 lg:flex justify-items-center items-center lg:flex-row flex flex-col-reverse mt-22  lg:mt-60 gap-52">
        <div className=" w-11/12 lg:w-3/5 flex flex-col text-center lg:text-start ">
          <h1 className="font-Text font-medium text-black text-6xl">Why us?</h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-5">
            Choose us for sleek, responsive designs that make your brand shine.
            We turn ideas into beautiful, user-friendly websites tailored to
            your needs.
          </p>
          <button className="lg:w-3/5 w-11/12 lg:m-0  m-auto font-Text text-lg font-medium text-black p-3 rounded-full bg-yellow-400 relative top-4 hover:bg-yellow-500 cursor-pointer">
            Get started
          </button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8/12 md:w-3/6 w-11/12 m-auto lg:m-0 mt-48"
          viewBox="0 0 678.62 606.19"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="uuid-fb20b2b5-bc5b-4117-a1ee-c5d1a8aa62bd-183"
            d="m183.39,55.89c2.75-6.95,8.68-11.07,13.24-9.21,4.56,1.86,6.03,9.01,3.28,15.96-1.06,2.79-2.79,5.27-5.06,7.23l-12.04,29.28-14.07-6.29,13.36-28.2c-.3-3.01.14-6.02,1.28-8.78,0,0,0,0,0,0Z"
            fill="#a0616a"
            strokeWidth="0"
          />
          <path
            d="m132.94,242.82s-20.19-9.78-18.79-16.8c1.4-7.03,61.55-156.74,61.55-156.74l27.85,18.3-70.61,155.25Z"
            fill="#e6e6e6"
            strokeWidth="0"
          />
          <path
            d="m435.76,606.19h-193.12c-28.09,0-50.94-22.85-50.94-50.94V50.94c0-28.09,22.85-50.94,50.94-50.94h193.12c28.09,0,50.94,22.85,50.94,50.94v504.31c0,28.09-22.85,50.94-50.94,50.94Z"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <path
            d="m435.9,592.4h-193.4c-20.79,0-37.71-16.92-37.71-37.71V50.51c0-20.79,16.92-37.71,37.71-37.71h193.4c20.79,0,37.71,16.92,37.71,37.71v504.18c0,20.79-16.92,37.71-37.71,37.71Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m366.55,46.36h-54.69c-7.22,0-13.09-5.87-13.09-13.09s5.87-13.09,13.09-13.09h54.69c7.22,0,13.09,5.87,13.09,13.09s-5.87,13.09-13.09,13.09Z"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <rect
            x="232.82"
            y="201.79"
            width="212.77"
            height="29.95"
            rx="14.98"
            ry="14.98"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <rect
            x="237.24"
            y="176.9"
            width="65.71"
            height="5.22"
            rx="2.61"
            ry="2.61"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <rect
            x="232.82"
            y="303.18"
            width="212.77"
            height="29.95"
            rx="14.98"
            ry="14.98"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <rect
            x="237.24"
            y="278.28"
            width="65.71"
            height="5.22"
            rx="2.61"
            ry="2.61"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <rect
            x="232.82"
            y="404.56"
            width="212.77"
            height="29.95"
            rx="14.98"
            ry="14.98"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <rect
            x="237.24"
            y="379.67"
            width="65.71"
            height="5.22"
            rx="2.61"
            ry="2.61"
            fill="#d7d7d8"
            strokeWidth="0"
          />
          <path
            d="m537.95,123.4s-20.62,2.33-21.95,34.25c-1.11,26.6-3.37,41.43,7.45,46.98,3.87,1.98,8.42,2.16,12.55.8l44.18-14.53s.67-47.89-14.63-59.52c-15.3-11.64-27.6-7.98-27.6-7.98Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <polygon
            points="562.31 196.78 539.95 204.13 539.95 171.95 560.23 171.95 562.31 196.78"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <path
            id="uuid-e639489a-d12b-4c23-97cb-2af79ea40b7d-184"
            d="m493.96,379.49c-1.21,7.37-6.13,12.66-10.98,11.81-4.85-.85-7.81-7.52-6.59-14.9.44-2.95,1.61-5.75,3.41-8.14l5.54-31.17,15.08,3.16-7.07,30.39c.93,2.88,1.14,5.91.61,8.85,0,0,0,0,0,0Z"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <path
            id="uuid-56df27a3-bbb6-4bd2-b7f5-888148e3fe66-185"
            d="m615.85,375.91c1.49,7.32-1.24,14.01-6.08,14.94-4.84.93-9.97-4.26-11.45-11.58-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06,0,0,0,0,0,0Z"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <rect
            x="532.96"
            y="557.07"
            width="20.94"
            height="29.71"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <path
            d="m512.57,604.77c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <rect
            x="602.03"
            y="537.03"
            width="20.94"
            height="29.71"
            transform="translate(-199.26 407.72) rotate(-31.95)"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <path
            d="m589.93,600.7c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m569.32,308.62h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75c-10.64-21.28-17.43-21.28-17.43-21.28Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <polygon
            points="598.48 311.95 496.73 311.95 533.31 191.57 573.88 191.57 598.48 311.95"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <path
            d="m539.71,191.59s-25.27-.67-27.93,5.99c-2.66,6.65-33.92,164.94-33.92,164.94h20.62l41.24-170.93Z"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <path
            d="m556.15,191.73s22.26-2.82,24.92,3.83c2.66,6.65,33.92,164.94,33.92,164.94h-20.62s-38.22-168.77-38.22-168.77Z"
            fill="#ff9d06"
            strokeWidth="0"
          />
          <circle
            cx="542.72"
            cy="158.58"
            r="22.28"
            fill="#ffb6b6"
            strokeWidth="0"
          />
          <path
            d="m536.62,131.71s-12.26,49.79,1.37,73.06l-19.2-4.08s-7.44-54.49,7.52-64.4l10.31-4.59Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m678.62,603.58c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h675.62c.83,0,1.5.67,1.5,1.5Z"
            fill="#2e2e41"
            strokeWidth="0"
          />
          <polygon
            points="115.1 174.73 140.71 183.15 140.71 146.28 117.47 146.28 115.1 174.73"
            fill="#a0616a"
            strokeWidth="0"
          />
          <circle
            cx="137.54"
            cy="130.96"
            r="25.52"
            fill="#a0616a"
            strokeWidth="0"
          />
          <path
            d="m131.04,132.96l3.52,4.27,6.36-11.14s8.12.42,8.12-5.61,7.45-6.2,7.45-6.2c0,0,10.55-18.42-11.3-13.57,0,0-15.16-10.38-22.69-1.51,0,0-23.11,11.64-16.5,31.9l10.99,20.89,2.49-4.73s-1.51-19.85,11.56-14.32Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <rect
            x="107.42"
            y="557.4"
            width="20.94"
            height="29.71"
            transform="translate(235.77 1144.5) rotate(-180)"
            fill="#a0616a"
            strokeWidth="0"
          />
          <path
            d="m126.04,604.12c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m155.1,301.25l-54.93-2.81s-8.42,31.92,2.22,65.18l1.28,200.29h31.04l29.26-206.61-8.87-56.05Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m145.83,167.65l-30.15-16s-32.49,47.48-28,73.2c4.5,25.72,12.48,73.6,12.48,73.6l66.51,2.81-11.61-94.29-9.23-39.32Z"
            fill="#e6e6e6"
            strokeWidth="0"
          />
          <rect
            x="122.31"
            y="557.4"
            width="20.94"
            height="29.71"
            transform="translate(265.56 1144.5) rotate(-180)"
            fill="#a0616a"
            strokeWidth="0"
          />
          <path
            d="m140.94,604.12c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m166.67,301.25l-66.51-2.81s-8.42,31.92,2.22,65.18l12.86,200.29h31.04l29.26-206.61-8.87-56.05Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            id="uuid-e3777ca2-fb97-40f5-b301-a7df89d05aed-186"
            d="m192.22,353.55c2.45,7.06.64,14.05-4.03,15.62-4.67,1.56-10.44-2.89-12.89-9.96-1.02-2.81-1.32-5.82-.88-8.78l-9.97-30.05,14.76-4.41,8.27,30.09c2.19,2.09,3.82,4.66,4.75,7.49,0,0,0,0,0,0Z"
            fill="#a0616a"
            strokeWidth="0"
          />
          <path
            d="m108.54,178.95s21.68-5.76,25.21.48c3.52,6.24,55.57,158.96,55.57,158.96l-33.04,4.3-47.73-163.74Z"
            fill="#e6e6e6"
            strokeWidth="0"
          />
        </svg>
      </div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 lg:flex justify-items-center items-center lg:flex-row flex flex-col-reverse  mt-44  lg:mt-60 gap-52">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className=" lg:w-8/12 md:w-3/6 w-11/12 m-auto lg:m-0 "
          viewBox="0 0 636 609.15198"
        >
          <path
            d="m499.99864,215.94827c0,1.35886-.15644,2.7507-.4858,4.14274l-13.76277,58.56645c-1.95163,8.32651-10.29503,13.48227-18.61349,11.51394l-55.15642-17.11468-2.6932-.83165c-3.13797,2.27295-7.51939,3.31894-12.09867,2.51183-8.00559-1.41657-13.54842-7.93119-12.37897-14.56123,1.16985-6.62179,8.60681-10.84678,16.6124-9.43845,4.57928.80711,8.343,3.28617,10.51742,6.49009l.04102.00804.13995.02473,48.00781,5.93834,4.03557-48.69147c.76609-9.30675,8.54085-16.4638,17.88037-16.4638,10.13055,0,17.95477,8.27724,17.95477,17.90511Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m499.99864,215.94827c0,1.35886-.15644,2.7507-.4858,4.14274l-11.29196,61.03726c-1.95163,8.32651-10.29503,13.48227-18.61349,11.51394l-55.15642-15.33557,2.47081-23.88447h0l42.00372,5.76522,5.238-44.68043c.76609-9.30675,8.54085-16.4638,17.88037-16.4638,10.13055,0,17.95477,8.27724,17.95477,17.90511Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <polyline
            points="0 608.39479 49.89722 608.39479 94.24874 608.39479 96.03179 608.39479 135.07629 608.39479 402.46305 608.39479 466.09113 608.39479 636 608.39479"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <rect
            x="561.60675"
            y="540.86966"
            width="16.55153"
            height="16.55153"
            transform="translate(-214.68298 445.30058) rotate(-36.39853)"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m588.11481,564.69082l-28.31896,20.87741c-2.42046,1.78442-5.26149,3.0234-8.21601,3.583l-7.07082,1.33928c-1.46197.27692-2.97718-.31805-3.86013-1.51572-1.03548-1.40457-1.00611-3.34414.07142-4.71672l8.57344-10.92064,11.28575-23.26905.06522.05962c1.6312,1.49114,4.1088,3.73407,4.29462,3.84392,3.48539.77161,6.16188.33807,7.95576-1.28779,3.12893-2.8359,2.49821-8.39822,2.49147-8.4541l-.00513-.04275.0371-.02191c.8523-.50184,1.6735-.6143,2.44086-.33427,1.62897.59451,2.47904,2.73283,2.6008,3.06014,1.59028.22283,5.72636,4.96516,6.0588,5.34896,2.37968.43111,4.018,1.32433,4.86918,2.65504.74421,1.16338.88848,2.64694.42901,4.40952-.55275,2.12064-1.86762,4.03345-3.70238,5.38607Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <rect
            x="440.836"
            y="576.44745"
            width="16.55153"
            height="16.55153"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m454.56248,608.05485h-35.18281c-3.00712,0-6.0291-.68859-8.73929-1.99138l-6.48609-3.11782c-1.34108-.64463-2.20763-2.02266-2.20763-3.51061,0-1.74501,1.17458-3.28876,2.85638-3.75415l13.38113-3.70266,22.89181-12.03252.01712.08669c.42813,2.16818,1.09143,5.44374,1.1758,5.64242,2.34755,2.6893,4.75914,3.92857,7.16783,3.68438,4.20133-.42594,6.99432-5.27737,7.02205-5.32635l.02124-.03746.04286.00438c.98381.10182,1.71154.4986,2.16303,1.17934.95839,1.44515.37374,3.67074.27752,4.00644,1.14781,1.12303,1.66288,7.39451,1.70272,7.9007,1.6596,1.7591,2.44827,3.45024,2.34375,5.02643-.09133,1.37802-.85554,2.65777-2.27128,3.80384-1.7033,1.37892-3.89671,2.13831-6.17616,2.13831Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <polygon
            points="524.92198 317.71416 445.59607 317.71416 432.95141 580.87471 460.88733 580.87471 478.93669 461.25628 551.36395 556.95103 577.80592 533.02734 524.92198 461.25628 524.92198 317.71416"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <path
            d="m504.49989,144.76742s21.85539-.04723,13.69086-21.10616c-8.16453-21.05892-23.36736-11.6297-23.36736-11.6297,0,0-6.40596,3.38373-5.08526,10.93321"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <path
            d="m506.68724,154.86876c0-16.146-13.08896-29.23497-29.23487-29.23497s-29.23507,13.08896-29.23507,29.23497c0,13.09449,8.60942,24.17673,20.47605,27.89862l5.65181,37.35055,28.8114-24.00944s-6.22427-7.92778-9.56211-16.86716c7.88917-5.23559,13.09278-14.19477,13.09278-24.37258Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m491.49811,179.56519s3.88232-14.88451-2.46573-21.72851c-6.33359-6.8284-7.15173,3.79631-7.15173,3.79631l-4.5701-.9935s.7948-10.33241-8.14671-12.12071l5.7623-12.31941s-22.06115,4.28348-22.66921,2.14678c-4.78449-16.81243,40.85904-31.17421,53.46773-5.52469,19.61067,39.89347-14.22655,46.74372-14.22655,46.74372Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <polygon
            points="507.50257 281.63928 520.45818 319.81764 447.15757 318.99404 458.08643 284.11008 507.50257 281.63928"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <path
            d="m500.88324,184.73907l-32.50579,11.30049-30.7305,158.64705,63.23629,7.72063,4.61098-24.18841,4.39576,24.18841h21.90486l-23.61606-157.7627c-1.05701-7.06118-3.53916-13.8336-7.29552-19.90544h0Z"
            fill="#ff8c1c"
            strokeWidth="0"
          />
          <path
            d="m491.76951,371.14655l.56573-26.07692-15.22544-.33031-.56573,26.07692c-2.84068,2.63705-4.71588,6.73452-4.81667,11.38008-.17634,8.12854,5.13401,14.83624,11.86106,14.98218,6.72705.14594,12.32331-6.32514,12.49965-14.45368.10078-4.64557-1.59508-8.8205-4.3186-11.57827Z"
            fill="#ed9da0"
            strokeWidth="0"
          />
          <polyline
            points="470.74988 240.63038 470.74988 367.02756 497.19185 367.02756 505.00656 241.69735"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <path
            d="m523.9969,374.6962c-.46408,0-.92816-.01649-1.39385-.05188-5.5561-.41743-10.33685-3.39656-14.21036-8.85332-14.57712-20.54039-43.97104-88.51453-43.97104-107.84425,0-18.47194,4.0215-60.80783,4.16064-61.44222h0l29.68749-16.43726c14.24253,3.34367,24.15632,16.38639,23.57401,31.01277-1.42281,35.73582,2.24078,117.19865,26.21131,150.9573l.19786.27849-.23646.24591c-.49545.51314-11.84894,12.13446-24.01959,12.13446Z"
            fill="#2f2e43"
            strokeWidth="0"
          />
          <path
            d="m354.55061,609.15198h-199.55937c-26.00248,0-47.15726-21.1545-47.15726-47.15726V47.15726c0-26.00276,21.15478-47.15726,47.15726-47.15726h199.55937c26.00276,0,47.15726,21.1545,47.15726,47.15726v514.83746c0,26.00276-21.1545,47.15726-47.15726,47.15726Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <path
            d="m354.75399,596.42516h-199.96612c-19.51083,0-35.38405-15.8735-35.38405-35.38405V45.21841c0-19.51054,15.87322-35.38405,35.38405-35.38405h199.96612c19.51054,0,35.38405,15.8735,35.38405,35.38405v515.82271c0,19.51054-15.8735,35.38405-35.38405,35.38405Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m286.00949,43.38689h-63.63411c-7.33651,0-13.30531-5.96852-13.30531-13.30531s5.9688-13.30531,13.30531-13.30531h63.63411c7.33679,0,13.30531,5.96852,13.30531,13.30531s-5.96852,13.30531-13.30531,13.30531Z"
            fill="#2f2e41"
            strokeWidth="0"
          />
          <line
            x1="546.10268"
            y1="608.84458"
            x2="21.28449"
            y2="608.84458"
            fill="#fff"
            strokeWidth="0"
          />
          <line
            x1="164.65297"
            y1="144.0567"
            x2="233.2756"
            y2="144.0567"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="170.06599"
            x2="309.00454"
            y2="170.06599"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="158.36181"
            x2="371.42683"
            y2="158.36181"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            cx="149.04739"
            cy="150.55903"
            r="11.70418"
            fill="#ff8c1c"
            strokeWidth="0"
          />
          <line
            x1="164.65297"
            y1="221.0567"
            x2="233.2756"
            y2="221.0567"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="247.06599"
            x2="309.00454"
            y2="247.06599"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="235.36181"
            x2="371.42683"
            y2="235.36181"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            cx="149.04739"
            cy="227.55903"
            r="11.70418"
            fill="#ff8c1c"
            strokeWidth="0"
          />
          <line
            x1="164.65297"
            y1="298.0567"
            x2="233.2756"
            y2="298.0567"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="324.06599"
            x2="309.00454"
            y2="324.06599"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="164.65297"
            y1="312.36181"
            x2="371.42683"
            y2="312.36181"
            fill="none"
            stroke="#090814"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            cx="149.04739"
            cy="304.55903"
            r="11.70418"
            fill="#ff8c1c"
            strokeWidth="0"
          />
        </svg>

        <div className=" w-11/12 lg:mt-0  mt-48 lg:w-3/5 flex flex-col text-center lg:text-start ">
          <h1 className="font-Text font-medium text-black text-6xl">
            Get started
          </h1>
          <p className="font-Text font-normal text-neutral-600 text-lg mt-5">
            Start creating clean, user-friendly designs with ease. Get inspired
            and bring your vision to life—let's design!
          </p>
          <button className="lg:w-3/5 w-11/12 lg:m-0  m-auto font-Text text-lg font-medium text-black p-3 rounded-full bg-yellow-400 relative top-4 hover:bg-yellow-500 cursor-pointer">
            Get started
          </button>
        </div>
      </div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-60 gap-4">
        <p className="text-neutral-800 text-lg font-Text font-meduim">
          Our mission
        </p>
        <h1 className="text-black font-Text text-4xl md:text-6xl font-meduim">
          We've helped
          <br /> innovative companies
        </h1>
        <p className="text-neutral-900 text-xl font-Text font-meduim">
          We have created stunning and attractive designs for
          <br /> the most famous large companies and also emerging ones.
        </p>
      </div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex justify-items-center justify-center items-center md:flex-row felx felx-wrap gap-32 mt-14 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-Text text-black font-medium text-6xl mt-24 ">
            24%
          </h1>
          <p className="text-neutral-800 text-lg font-Text font-meduim">
            Revenuew business
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="font-Text text-black font-medium text-6xl mt-24 ">
            180K
          </h1>
          <p className="text-neutral-800 text-lg font-Text font-meduim">
            In annnual revenue
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="font-Text text-black font-medium text-6xl mt-24 ">
            10+
          </h1>
          <p className="text-neutral-800 text-lg font-Text font-meduim">
            Months of runway
          </p>
        </div>
      </div>
      <section className="max-w-2xl mt-52 mx-auto px-4 py-8">
        <h2 className="text-3xl font-Text font-meduim mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border-b text-start border-gray-200 pb-4"
            >
              <button
                className="flex justify-between items-center font-Text w-full text-left font-meduim"
                onClick={() => toggleQuestion(faq.question)}
              >
                {faq.question}
                <span>{openQuestion === faq.question ? "▼" : "▼"}</span>
              </button>
              {openQuestion === faq.question && (
                <p className="mt-2 font-Text text-sm  text-neutral-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 md:flex md:flex-row  md:justify-between md:items-start md:text-start mt-44 border-b border-gray-200 pb-14">
        <h1 className="font-Text text-start text-black font-medium text-xl mt-24 ">
          detter
        </h1>
        <div className="md:flex md:flex-row flex flex-col items-start text-start mt-10  md:mt-auto gap-5 md:gap-10">
          <a
            href="#"
            className="font-Text text-base font-normal text-neutral-600 hover:text-black"
          >
            Home
          </a>
          <a
            href="#"
            className="font-Text text-base font-normal text-neutral-600 hover:text-black"
          >
            Services
          </a>
          <a
            href="#"
            className="font-Text text-base font-normal text-neutral-600 hover:text-black"
          >
            About
          </a>
          <a
            href="#"
            className="font-Text text-base font-normal text-neutral-600 hover:text-black"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-row items-start text-start md:mt-auto mt-10 gap-3">
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl w-full h-full mx-auto px-4 sm:px-6 lg:px-8 md:flex md:flex-row  md:justify-between md:items-start md:text-start mt-14 ">
        <h1 className="font-Text text-start text-neutral-600 font-normal text-base ">
          Build by Codew
        </h1>
        <div className="md:flex md:flex-row flex flex-col items-start text-start mt-24  md:mt-auto gap-5 md:gap-10">
          <a
            href="#"
            className="font-Text text-start text-neutral-600 font-normal text-base hover:text-black "
          >
            Terms & Privacy
          </a>
          <a
            href="#"
            className="font-Text text-start text-neutral-600 font-normal text-base hover:text-black "
          >
            Detter 2024
          </a>
        </div>
      </div>
    </div>
  );
}
