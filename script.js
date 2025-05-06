const data = [
  {
    objection: "How did you get my information?",
    rebuttal: "As a licensed lender, we lawfully access data through secure, verified credit bureaus..."
  },
  {
    objection: "Hesitant to Provide SSN",
    rebuttal: "Your security matters—and that’s why we use bank-level encryption..."
  },
  {
    objection: "What company is this?",
    rebuttal: "We’re Loan Assistance Center—trusted partners of top-tier lenders..."
  },
  // Add all remaining objections/rebuttals here...
];

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  results.innerHTML = "";
  const filtered = data.filter(item =>
    item.objection.toLowerCase().includes(searchTerm) ||
    item.rebuttal.toLowerCase().includes(searchTerm)
  );
  filtered.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("rebuttal");
    div.innerHTML = `<strong>${item.objection}</strong><p>${item.rebuttal}</p>`;
    results.appendChild(div);
  });
});
