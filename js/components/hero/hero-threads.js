export function renderHero(container) {
  container.innerHTML = `
    <h1>Howdy!</h1>
    <p>hero coming soon!</p>

    <a href="#projects"
        class="inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition">
        View My Work
      </a>
  `;
}
