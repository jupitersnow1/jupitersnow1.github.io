let reviews = [];
let currentFilter = "All";

async function fetchReviews() {
  const res = await fetch("reviews.json");
  reviews = await res.json();
  renderFilters();
  renderGallery();
}

function renderFilters() {
  const container = document.getElementById("category-filters");
  container.innerHTML = "";

  const categories = ["All", ...new Set(reviews.flatMap(r => r.categories))];

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = `px-3 py-1 rounded-full text-sm transition ${
      currentFilter === category
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;
    btn.onclick = () => {
      currentFilter = category;
      renderGallery();
      renderFilters();
    };
    container.appendChild(btn);
  });
}

function renderGallery() {
  const container = document.getElementById("review-gallery");
  container.innerHTML = "";

  const filtered = currentFilter === "All"
    ? reviews
    : reviews.filter(r => r.categories.includes(currentFilter));

  filtered.forEach(r => {
    const card = document.createElement("div");
    card.className = "bg-white rounded shadow overflow-hidden hover:shadow-md transition";

    card.innerHTML = `
      <img src="${r.thumbnail}" alt="${r.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">${r.title}</h2>
        <p class="text-sm text-gray-600 mb-4">${r.description}</p>
        <a href="/reviews/content/${r.slug}.html" class="text-blue-500 hover:underline text-sm">Read More →</a>
      </div>
    `;
    container.appendChild(card);
  });
}

fetchReviews();
