import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from  "../landing_page/Home/Hero";


//Test Suite
describe("Hero Component",()=>{
  test("renders hero image",()=>{
   render(<Hero/>);
   const HeroImage=screen.getByAltText("Hero Image");
   expect(HeroImage).toBeInTheDocument();
   expect(HeroImage).toHaveAttribute("src","media/images/homeHero.png");
  });
});