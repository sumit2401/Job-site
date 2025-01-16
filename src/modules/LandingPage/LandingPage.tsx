import AboutSection from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";
import JobSection from "@/components/JobSection/JobSection";
import { PartnerSection } from "@/components/PartnerSection/PartnerSection";
import SearchJobAnimation from "@/components/SearchJobAnimaation/SearchJobAnimation";
import { NewsletterSection } from "../../components/Home/CallToAction";
import { Testimonials } from "../../components/Home/Testimonials";
import { SpecialismsSection } from "@/components/Specialism/SpecialismSection";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <SearchJobAnimation/>
  <SpecialismsSection/>
      {/* <Pricing /> */}
      <section className="w-full"><JobSection/></section>
    
      <Testimonials />
      <NewsletterSection />
    </>
  );
};
