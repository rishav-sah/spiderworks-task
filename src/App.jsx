import { useEffect, useState } from "react";
import Discussions from "./components/Discussions";
import Forum from "./components/Forum";
import Header from "./components/Header";
import ScrollFadeIn from "./components/ScrollFadeIn";
import Topics from "./components/Topics";
import ShortNavBar from "./components/ShortNavBar";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timer;
    
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 200); // using debounce to solve flickering issue
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <ScrollFadeIn>
        {!isScrolled ? <Header /> : <ShortNavBar /> }
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Forum />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Topics />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Discussions />
      </ScrollFadeIn>
    </div>
  );
};

export default App;
