// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 70 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const navbarBurger = document.querySelector(".navbar-burger")
  const navbarMenu = document.querySelector(".navbar-menu")
  const navbarItems = document.querySelectorAll(".navbar-item")

  // Toggle mobile menu
  if (navbarBurger) {
    navbarBurger.addEventListener("click", () => {
      navbarBurger.classList.toggle("active")
      navbarMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  navbarItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarBurger) {
        navbarBurger.classList.remove("active")
        navbarMenu.classList.remove("active")
      }
    })
  })

  // Smooth scrolling for navigation links
  navbarItems.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)

      // Remove active class from all links
      navbarItems.forEach(l => l.classList.remove("active"))
      // Add active class to clicked link
      this.classList.add("active")

      scrollToSection(targetId)
    })
  })

  // Update mobile menu styles for white navbar
  const style = document.createElement("style")
  style.textContent = `
    @media (max-width: 768px) {
      .nav-menu {
        background-color: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 5px 15px rgba(139, 69, 19, 0.1);
      }
      .nav-link {
        color: #8b4513 !important;
      }
    }
  `
  document.head.appendChild(style)
})

// Navbar scroll effect and active section highlighting
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Update active navigation link based on scroll position
  updateActiveNavLink()
})

// Function to update active navigation link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navbarItems = document.querySelectorAll(".navbar-item")

  let currentSection = ""

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id")
    }
  })

  // Map sections to navbar items
  const sectionMap = {
    'hero': 'hero',
    'about': 'about',
    'stats': 'about',
    'leadership': 'about',
    'products': 'products',
    'manufacturing': 'products',
    'clients': 'products',
    'sustainability': 'products',
    'contact': 'contact'
  }

  const mappedSection = sectionMap[currentSection] || currentSection

  navbarItems.forEach(link => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${mappedSection}`) {
      link.classList.add("active")
    }
  })
}

// Active section highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Add animate-on-scroll class to various elements
  const animateElements = [
    ".service-card",
    ".product-card",
    ".client-item",
    ".market-item",
    ".sustainability-item",
    ".contact-item",
    ".team-member",
    ".about-item",
    ".hero-image-item",
  ]

  animateElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      element.classList.add("animate-on-scroll")
      element.style.transitionDelay = `${index * 0.1}s`
      observer.observe(element)
    })
  })
})

// Parallax effect removed for new hero layout
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset
//   const hero = document.querySelector(".hero")
//   if (hero) {
//     const rate = scrolled * -0.5
//     hero.style.transform = `translateY(${rate}px)`
//   }
// })

// Enhanced hover effects and interactions
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".service-card, .product-card, .client-item, .market-item, .manufacturing-item",
  )

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Add subtle rotation and scale effect
      const randomRotation = (Math.random() - 0.5) * 2 // Random rotation between -1 and 1 degree
      this.style.transform = `translateY(-15px) scale(1.03) rotate(${randomRotation}deg)`

      // Add glow effect
      this.style.boxShadow = "0 25px 50px rgba(139, 69, 19, 0.25), 0 0 30px rgba(218, 165, 32, 0.1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1) rotate(0deg)"
      this.style.boxShadow = ""
    })
  })

  // Add parallax effect to images
  const images = document.querySelectorAll(".service-image img, .product-image img, .manufacturing-image img")

  images.forEach((img) => {
    img.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      this.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1.1)"
    })
  })
})

// Smooth reveal animation for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll(".animate-on-scroll")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("animated")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Enhanced scroll indicator
document.addEventListener("DOMContentLoaded", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      scrollToSection("about")
    })
  }
})

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Enhanced counter animation for statistics
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)
  const suffix = element.dataset.suffix || ""

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start) + suffix
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + suffix
    }
  }

  updateCounter()
}

// Initialize counter animations when stats section comes into view
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number")

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
          const target = Number.parseInt(entry.target.dataset.target)
          animateCounter(entry.target, target, 2000)
          entry.target.classList.add("animated")
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat)
  })
})

// Enhanced mobile menu animation
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      const spans = this.querySelectorAll("span")
      spans.forEach((span, index) => {
        span.style.transform = this.classList.contains("active")
          ? `rotate(${index === 1 ? 45 : -45}deg) translate(${index === 0 ? "5px, 5px" : index === 2 ? "-5px, -5px" : "0, 0"})`
          : "none"
      })
    })
  }
})

// Add scroll progress indicator
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.createElement("div")
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8b4513, #daa520);
        z-index: 9999;
        transition: width 0.1s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + "%"
  })
})

// Add floating leather particles animation
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero")
  if (hero) {
    for (let i = 0; i < 15; i++) {
      createFloatingParticle(hero)
    }
  }
})

function createFloatingParticle(container) {
  const particle = document.createElement("div")
  particle.style.cssText = `
    position: absolute;
    width: ${Math.random() * 8 + 4}px;
    height: ${Math.random() * 8 + 4}px;
    background: rgba(139, 69, 19, ${Math.random() * 0.3 + 0.1});
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  `

  // Random starting position
  particle.style.left = Math.random() * 100 + "%"
  particle.style.top = Math.random() * 100 + "%"

  container.appendChild(particle)

  // Animate the particle
  animateParticle(particle)
}

function animateParticle(particle) {
  const duration = Math.random() * 20000 + 15000 // 15-35 seconds
  const startX = Number.parseFloat(particle.style.left)
  const startY = Number.parseFloat(particle.style.top)
  const endX = Math.random() * 100
  const endY = Math.random() * 100

  particle.animate(
    [
      {
        left: startX + "%",
        top: startY + "%",
        opacity: 0,
      },
      {
        opacity: 1,
        offset: 0.1,
      },
      {
        opacity: 1,
        offset: 0.9,
      },
      {
        left: endX + "%",
        top: endY + "%",
        opacity: 0,
      },
    ],
    {
      duration: duration,
      easing: "ease-in-out",
    },
  ).onfinish = () => {
    // Restart animation
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    animateParticle(particle)
  }
}

// Add smooth reveal animations for text elements
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("h1, h2, h3, p")

  const textObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.8s ease forwards"
        }
      })
    },
    { threshold: 0.1 },
  )

  textElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    textObserver.observe(el)
  })
})

// Add magnetic effect to CTA buttons
document.addEventListener("DOMContentLoaded", () => {
  const ctaButtons = document.querySelectorAll(".cta-button")

  ctaButtons.forEach((button) => {
    button.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      this.style.transform = `translateY(-3px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1) translate(0, 0)"
    })
  })
})

// Continuous Suppliers Carousel - No manual controls needed
// The carousel runs automatically via CSS animation

// Inquiry Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const inquiryForm = document.getElementById("inquiryForm")
  const formStatus = document.getElementById("form-status")

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", async function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const submitBtn = this.querySelector(".submit-btn")
      const originalBtnText = submitBtn.innerHTML

      // Show loading state
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
          </path>
        </svg>
        Sending...
      `
      submitBtn.disabled = true

      try {
        // Submit to Formspree
        const response = await fetch(this.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok) {
          // Success
          formStatus.className = "form-status success"
          formStatus.textContent = "Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours."
          this.reset() // Clear the form
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        // Fallback: Create mailto link with form data
        const name = formData.get('name') || ''
        const email = formData.get('email') || ''
        const company = formData.get('company') || ''
        const phone = formData.get('phone') || ''
        const country = formData.get('country') || ''
        const productInterest = formData.get('product_interest') || ''
        const message = formData.get('message') || ''

        const emailBody = `
New Inquiry from Ashraf Impex Website

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Country: ${country}
Product Interest: ${productInterest}

Message:
${message}

---
This inquiry was submitted through the website contact form.
        `.trim()

        const mailtoLink = `mailto:abdul.wasay308@gmail.com?subject=New Inquiry from Ashraf Impex Website&body=${encodeURIComponent(emailBody)}`

        // Show fallback message with mailto option
        formStatus.className = "form-status error"
        formStatus.innerHTML = `
          <p>There was an issue with the automatic form submission.</p>
          <p><strong>Alternative:</strong> <a href="${mailtoLink}" style="color: #8b4513; text-decoration: underline;">Click here to send your inquiry via email</a></p>
          <p>Or contact us directly at: <strong>abdul.wasay308@gmail.com</strong></p>
        `
      } finally {
        // Reset button
        submitBtn.innerHTML = originalBtnText
        submitBtn.disabled = false

        // Scroll to status message
        formStatus.scrollIntoView({ behavior: "smooth", block: "center" })

        // Hide status message after 10 seconds
        setTimeout(() => {
          formStatus.style.display = "none"
        }, 10000)
      }
    })
  }

  // Form validation enhancements
  const formInputs = document.querySelectorAll("#inquiryForm input, #inquiryForm select, #inquiryForm textarea")

  formInputs.forEach(input => {
    // Add real-time validation feedback
    input.addEventListener("blur", function() {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.style.borderColor = "#dc3545"
      } else if (this.type === "email" && this.value && !isValidEmail(this.value)) {
        this.style.borderColor = "#dc3545"
      } else {
        this.style.borderColor = "#e8ddd4"
      }
    })

    input.addEventListener("focus", function() {
      this.style.borderColor = "#8b4513"
    })
  })
})

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Send via Email function (mailto fallback)
function sendViaEmail() {
  const form = document.getElementById('inquiryForm')
  const formData = new FormData(form)

  // Validate required fields
  const name = formData.get('name') || ''
  const email = formData.get('email') || ''
  const message = formData.get('message') || ''

  if (!name.trim()) {
    alert('Please enter your name')
    document.getElementById('name').focus()
    return
  }

  if (!email.trim()) {
    alert('Please enter your email address')
    document.getElementById('email').focus()
    return
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address')
    document.getElementById('email').focus()
    return
  }

  if (!message.trim()) {
    alert('Please enter your message')
    document.getElementById('message').focus()
    return
  }

  // Get all form data
  const company = formData.get('company') || ''
  const phone = formData.get('phone') || ''
  const country = formData.get('country') || ''
  const productInterest = formData.get('product_interest') || ''

  // Create email body
  const emailBody = `
New Inquiry from Ashraf Impex Website

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Country: ${country}
Product Interest: ${productInterest}

Message:
${message}

---
This inquiry was submitted through the website contact form.
  `.trim()

  // Create mailto link
  const subject = 'New Inquiry from Ashraf Impex Website'
  const mailtoLink = `mailto:abdul.wasay308@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

  // Open email client
  window.location.href = mailtoLink

  // Show success message
  const formStatus = document.getElementById('form-status')
  formStatus.className = 'form-status success'
  formStatus.textContent = 'Your email client should open now. Please send the email to complete your inquiry.'
  formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
