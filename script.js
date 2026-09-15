// ========================================
// MODE GELAP / CERAH
// ========================================

const themeBtn = document.getElementById("themeBtn");


// Ambil mode yang tersimpan
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

} else {

    document.body.classList.remove("dark");

    themeBtn.textContent = "☾";

}


// Tombol mode
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "☾";

        localStorage.setItem("theme", "light");

    }

});



// ========================================
// COPY CODE
// ========================================

const copyBtn = document.getElementById("copyBtn");

const code = document.getElementById("code");


copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(code.innerText);

        copyBtn.textContent = "Copied!";


        setTimeout(() => {

            copyBtn.textContent = "Copy Code";

        }, 1500);


    } catch (error) {

        copyBtn.textContent = "Gagal Copy";


        setTimeout(() => {

            copyBtn.textContent = "Copy Code";

        }, 1500);

    }

});



// ========================================
// ANIMASI SCROLL
// ========================================

const animatedElements = document.querySelectorAll(
    ".section-heading, .project-grid, .material, .wiring, .step, .code-container, .result"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


animatedElements.forEach((element) => {

    observer.observe(element);

});