import React from "react";
import "./style.css";
import Header from "../../components/Header";
import HeroSection from "../../components/HomePage/HeroSection";
import { Container } from "@mui/material";
import AreaOfWork from "../../components/HomePage/AreaOfWork";
import PromotionalVideo from "../../components/HomePage/PromotionalVideo";
import OnTheGoSection from "../../components/HomePage/OnTheGo";
import WhatWeDo from "../../components/HomePage/WhatWeDo";
import Partner from "../../components/HomePage/Partner";
import { useTheme } from "@mui/material/styles";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  const theme = useTheme();

  return (<>
    <Header/>
    <Container maxWidth={false} sx={{backgroundColor:theme.palette.background,color:theme.palette.mode==='dark'?'white':'black'}}>
    <HeroSection/>
    <div class="separator">
      <h2>Our Area of Work</h2>
    </div>
    <AreaOfWork />
    <PromotionalVideo/>
    <div class="separator">
      <h2>Ayurveda On The Go</h2> 
    </div>
    <OnTheGoSection/>
    <div class="separator">
      <h2>What We Do</h2> 
    </div>
    <WhatWeDo/>
    <div class="separator">
      <h2>100+ Companies Clustered</h2> 
    </div>
    <Partner />
    <Footer/>
    </Container>
    </>
  );
};

export default Home;