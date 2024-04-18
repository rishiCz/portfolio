import {
    BiLogoHtml5,
    BiLogoReact,
    BiLogoJavascript,
    BiLogoCss3,
    BiLogoRedux,
    BiLogoGithub,
    BiLogoMongodb,
    BiLogoFlutter,
    BiLogoCPlusPlus,
  } from "react-icons/bi";
  import { SiExpress } from "react-icons/si";
  import { FaBookOpen } from "react-icons/fa";
  import { DiEmber, DiJava, DiSass, DiAndroid } from "react-icons/di";
  import { TbBrandKotlin } from "react-icons/tb";
  import { GrMysql, GrOracle } from "react-icons/gr";
  import { SiNextdotjs } from "react-icons/si";

export const skillData = [
    { name: "NextJs", icon: SiNextdotjs, rating: 8, color: "#FFFFFF" },
    { name: "ReactJs", icon: BiLogoReact, rating: 8, color: "#1295ED" },
    { name: "EmberJs", icon: DiEmber, rating: 6, color: "#D44700" },
    { name: "JavaScript", icon: BiLogoJavascript, rating: 8, color: "#EDD712" },
    { name: "HTML", icon: BiLogoHtml5, rating: 8, color: "#FF7300" },
    { name: "CSS", icon: BiLogoCss3, rating: 9, color: "#0091FF" },
    { name: "Sass", icon: DiSass, rating: 7, color: "#A3004A" },
    { name: "Redux", icon: BiLogoRedux, rating: 7, color: "#AF12ED" },
    { name: "ExpressJs", icon: SiExpress, rating: 7, color:"#2E2E2E" },
    {
        name: "Mongo",
        icon: BiLogoMongodb,
        rating: 7,
        color: "#3FA037",
      },
    { name: "SQL", icon: GrMysql, rating: 6, color: "#128EED" },
    { name: "Git", icon: BiLogoGithub, rating: 6, color: "#FFFFFF" },
    { name: "Java", icon: DiJava, rating: 8, color: "#f89820" },
    { name: "Kotlin", icon: TbBrandKotlin, rating: 7, color: "#A84CFF" },
    { name: "Flutter", icon: BiLogoFlutter, rating: 7, color: "#1D6CD3" },
    { name: "Android", icon: DiAndroid, rating: 7, color: "#28AD17" },
    { name: "OIC", icon: GrOracle, rating: 8, color: "#B5620A" },
    { name: "C++", icon: BiLogoCPlusPlus, rating: 7, color: "#143F6C" },
    { name: "Learning", icon: FaBookOpen, rating: 10, color: "#D41869" }
  ];