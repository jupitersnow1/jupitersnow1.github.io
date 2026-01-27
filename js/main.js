import { renderHero } from "./components/hero/hero-threads.js";
import { initScrollSpy } from "./components/scrollspy.js";
import { initMenu } from "./menu.js";

const hero = document.getElementById("hero");
renderHero(hero);

initMenu(); 

initScrollSpy(); 
