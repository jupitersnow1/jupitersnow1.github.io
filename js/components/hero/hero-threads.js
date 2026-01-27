export function renderHero(container) {
  container.innerHTML = `
    <div class="text-center max-w-2xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Howdy!
      </h1>

      <p class="text-lg md:text-xl text-gray-600 mb-6">
        hero coming soon!
      </p>

      <a
        href="#projects"
        class="inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
      >
        View My Work
      </a>
    </div>
  `;
}
