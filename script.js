
  document.addEventListener('DOMContentLoaded', () => {
    const navToggleBtn = document.getElementById('navToggleBtn');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navToggleBtn && navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

      // Click handler
      navToggleBtn.addEventListener('click', () => {
        const isOpen = navbarCollapse.classList.contains('show');
        isOpen ? bsCollapse.hide() : bsCollapse.show();
      });

      // Sync button animation with collapse events
      navbarCollapse.addEventListener('shown.bs.collapse', () => {
        navToggleBtn.classList.add('open');
      });
      navbarCollapse.addEventListener('hidden.bs.collapse', () => {
        navToggleBtn.classList.remove('open');
      });

      // Auto-close when clicking nav links (mobile only)
      const navLinks = navbarCollapse.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
          }
        });
      });
    }
  });


    


  //Newsletter / CTA

const form = document.getElementById('subscribe-form');
const status = document.getElementById('subscribe-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        status.innerText = "✅ Thanks for subscribing!";
        status.classList.remove("text-danger");
        status.classList.add("text-success");
        status.style.display = "block";
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      status.innerText = "❌ Subscription failed. Please try again.";
      status.classList.remove("text-success");
      status.classList.add("text-danger");
      status.style.display = "block";
    }
  });


// This fuction is to navigete the html page to the section with the id that matches the hash in the URL
// It will scroll smoothly to the section when the page loads if a hash is present in the URL
// It also adds a slight delay to ensure the content is loaded before scrolling.
  document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure content is loaded
      }
    }
  });