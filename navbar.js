class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        nav {
          background-color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          color: #3b82f6;
          font-weight: 800;
          font-size: 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          width: 36px;
          height: 36px;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: #3b82f6;
          background-color: #eff6ff;
        }
        
        .nav-link.active {
          color: #3b82f6;
          font-weight: 600;
        }
        
        .donate-btn {
          background-color: #3b82f6;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .donate-btn:hover {
          background-color: #2563eb;
          transform: translateY(-1px);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 1rem 0;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links.open {
            display: flex;
          }
          
          .nav-link {
            width: 100%;
            padding: 0.75rem 2rem;
          }
        }
      </style>
      
      <nav aria-label="Main navigation">
        <a href="index.html" class="logo">
          <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
          </svg>
          Accendo Charity
        </a>
        
        <button class="mobile-menu-btn" aria-expanded="false" aria-label="Menu" aria-controls="mobile-menu">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links" id="mobile-menu">
          <li><a href="index.html" class="nav-link active">Home</a></li>
          <li><a href="about.html" class="nav-link">About Us</a></li>
          <li><a href="mission.html" class="nav-link">Our Mission</a></li>
          <li><a href="programs.html" class="nav-link">Programs</a></li>
          <li><a href="transparency.html" class="nav-link">Transparency</a></li>
          <li><a href="contact.html" class="nav-link">Contact</a></li>
          <li><a href="donate.html" class="nav-link donate-btn">Donate</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('open');
      
      const icon = menuBtn.querySelector('i');
      if (expanded) {
        icon.setAttribute('data-feather', 'menu');
      } else {
        icon.setAttribute('data-feather', 'x');
      }
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);