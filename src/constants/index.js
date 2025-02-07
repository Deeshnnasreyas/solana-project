import { FaGithub, FaGoogle, FaTwitch, FaYoutube } from "react-icons/fa6";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import frame6 from "../assets/frame6.png";
import frame7 from "../assets/frame7.png";
import thriving1 from "../assets/thriving1.jpeg";
import thriving2 from "../assets/thriving2.jpeg";
import thriving3 from "../assets/thriving3.jpeg";
import thriving4 from "../assets/thriving4.jpeg";

export const menuLearnItems = [
  { value: "learn1", label: "Learn" },
  { value: "learn2", label: "Learn1" },
];
export const menuBuildItems = [
  { value: "build1", label: "Build" },
  { value: "build2", label: "Buil1" },
];
export const menuNetworkItems = [
  { value: "nertwork1", label: "Network" },
  { value: "nertwork2", label: "Network1" },
];
export const menuCommunityItems = [
  { value: "community1", label: "Community" },
  { value: "community2", label: "Community1" },
];
export const footerItems = [
  {
    label: "LinkedIn",
    link: "/",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    link: "/",
    icon: FaTwitch,
  },
  {
    label: "LinkedIn",
    link: "/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    link: "/",
    icon: FaGoogle,
  },
];
export const footerSolanaItems = [
  {
    label: "Grants",
    link: "/",
  },
  {
    label: "Break Solana",
    link: "/",
  },
  {
    label: "Media Kit",
    link: "/",
  },
  {
    label: "Careers",
    link: "/",
  },
  {
    label: "Disclaimer",
    link: "/",
  },
];
export const footerConnectItems = [
  {
    label: "Ecosystem",
    link: "/",
  },
  {
    label: "Blog",
    link: "/",
  },
  {
    label: "Newsletter",
    link: "/",
  },
];
export const brandingLogo = [
  {
    image: frame1,
    className: "w-[83px] h-[27.43px] xl:w-[113px] xl:h-[37.19px]",
  },
  {
    image: frame2,
    className: "w-[104px] h-[27.29px] xl:w-[147px] xl:h-[37px]",
  },
  {
    image: frame3,
    className: "w-[91.46px] h-[17.7px] xl:w-[124px] xl:h-[24px]",
  },
  {
    image: frame4,
    className: "w-[84.09px] h-[28.03px] xl:w-[96px] xl:h-[44px]",
  },
  {
    image: frame5,
    className: "w-[83px] h-[27.43px] xl:w-[113px] xl:h-[37.19px]",
  },
  {
    image: frame6,
    className: "w-[84.09px] h-[28.03px] xl:w-[114px] xl:h-[38px]",
  },
  {
    image: frame7,
    className: "w-[84.09px] h-[28.03px] xl:w-[114px] xl:h-[38px]",
  },
];
export const slides = [
  { type: "image", src: thriving1, alt: "Slide 1" },
  {
    type: "text",
    src: thriving2,
    alt: "Slide 2",
    stats: {
      number: "48,000",
      text: "Developers building during Solana Hackathons",
    },
  },
  { type: "image", src: thriving3, alt: "Slide 3" },
  {
    type: "text",
    src: thriving4,
    alt: "Slide 4",
    stats: { number: "11,000", text: "Solana Hacker House participants" },
  },
  { type: "image", src: thriving4, alt: "Slide 5" },
  {
    type: "text",
    src: thriving2,
    alt: "Slide 6",
    stats: {
      number: "48,000",
      text: "Developers building during Solana Hackathons",
    },
  },
];
export const JoinCommunityStatus = [
  { value: "11.5M+", label: "Active accounts" },
  { value: "29.9M+", label: "NFTs minted" },
  { value: "$0.0025", label: "Average cost per transaction" },
];

export const massAdoptionLeft = [
  {
    title: "FAST",
    description:
      "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
    statValue: "3,969",
    statLabel: "Transactions per second",
  },
  {
    title: "Scalable",
    description:
      "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    statValue: "163,077,581,394",
    statLabel: "Total transactions",
  },
];
export const massAdoptionRight = [
  {
    title: "Decentralized",
    description:
      "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    statValue: "1,675",
    statLabel: "Validator nodes",
  },
  {
    title: "Energy Efficient",
    description:
      "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    statValue: "0%",
    statLabel: "Net carbon impact",
  },
];
export const massAdoptionMob = [
  {
    title: "FAST",
    description:
      "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
    statValue: "3,969",
    statLabel: "Transactions per second",
  },
  {
    title: "Scalable",
    description:
      "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    statValue: "163,077,581,394",
    statLabel: "Total transactions",
  },
  {
    title: "Decentralized",
    description:
      "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
    statValue: "1,675",
    statLabel: "Validator nodes",
  },
  {
    title: "Energy Efficient",
    description:
      "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
    statValue: "0%",
    statLabel: "Net carbon impact",
  },
];
