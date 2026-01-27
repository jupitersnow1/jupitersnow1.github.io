import { renderHero } from "./components/hero/hero-threads.js";
import { initScrollSpy } from "./scrollspy.js";

const hero = document.getElementById("hero");
renderHero(hero);

initScrollSpy(); 
