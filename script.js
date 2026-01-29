
document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if(menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    
    const typingElement = document.querySelector('.typing');
    if(typingElement) {
        const phrases = [
            "FAYE_HAMED_BACHIROU",
            "Étudiant en Génie Logiciel",
            "Développeur Web",
            "Passionné d'Informatique",
            "Créateur de Solutions",
            "Basketteurs (Au Tournoi national)"
        ];
        
        let phraseIndex = 0;
        let letterIndex = 0;
        let currentPhrase = '';
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            
            const normalSpeed = 100;
            const deletingSpeed = 50;
            
            
            if(letterIndex === phrases[phraseIndex].length && !isDeleting) {
                
                setTimeout(() => {
                    isDeleting = true;
                }, 1500);
            }
            
            
            if(letterIndex === 0 && isDeleting) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            
            if(isDeleting) {
                currentPhrase = phrases[phraseIndex].substring(0, --letterIndex);
                typingSpeed = deletingSpeed;
            } else {
                currentPhrase = phrases[phraseIndex].substring(0, ++letterIndex);
                typingSpeed = normalSpeed;
            }
            
            typingElement.textContent = currentPhrase;
            
            setTimeout(type, typingSpeed);
        }
        
    
        setTimeout(type, 1000);
    }
 
 const skillSections = document.querySelectorAll('.skills-preview, .skills-section');
    
 if(skillSections.length) {
     const animateSkills = (entries, observer) => {
         entries.forEach(entry => {
             if(entry.isIntersecting) {
                 const skillBars = entry.target.querySelectorAll('.skill-progress');
                 skillBars.forEach((bar, index) => {
                     const width = bar.style.width;
                     bar.style.width = '0';
                     setTimeout(() => {
                         bar.style.width = width;
                     }, 200 * index);
                 });
                 observer.unobserve(entry.target);
             }
         });
     };
     
     const skillObserver = new IntersectionObserver(animateSkills, {
         threshold: 0.5
     });
     
     skillSections.forEach(section => {
         skillObserver.observe(section);
     });
 }
 
 
 const projectCards = document.querySelectorAll('.project-card');
 
 if(projectCards.length) {
     const animateProjects = (entries, observer) => {
         entries.forEach((entry, index) => {
             if(entry.isIntersecting) {
                 setTimeout(() => {
                     entry.target.style.opacity = '1';
                     entry.target.style.transform = 'translateY(0)';
                 }, 200 * index);
                 observer.unobserve(entry.target);
             }
         });
     };
     
     const projectObserver = new IntersectionObserver(animateProjects, {
         threshold: 0.1
     });
     
     projectCards.forEach(card => {
         card.style.opacity = '0';
         card.style.transform = 'translateY(30px)';
         projectObserver.observe(card);
     });
 }
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if(scrollTop > 100) {
        header.style.padding = '10px 5%';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 5%';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});
});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
<script>
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le reload
    const url = form.action;
    const data = new FormData(form);

    fetch(url, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Merci ! Votre message a été envoyé.");
            form.reset();
        } else {
            alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
    });
});
</script>

