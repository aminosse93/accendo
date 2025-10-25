class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1f2937;
          color: white;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          margin-bottom: 1rem;
        }
        
        .footer-logo-icon {
          width: 32px;
          height: 32px;
        }
        
        .footer-description {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #3b82f6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          color: white;
          background-color: #374151;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: #3b82f6;
          transform: translateY(-2px);
        }
        
        .footer-bottom {
          background-color: #111827;
          padding: 1.5rem 1rem;
          text-align: center;
          border-top: 1px solid #374151;
        }
        
        .footer-bottom-text {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .ein-number {
          font-weight: 600;
          color: #3b82f6;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-col">
            <a href="index.html" class="footer-logo">
              <svg class="footer-logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
              </svg>
              Accendo Charity
            </a>
            <p class="footer-description">
              Providing financial support to non-profit organizations working to improve the lives of people with physical or mental disabilities.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i data-feather="twitter"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i data-feather="instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <i data-feather="linkedin"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html" class="footer-link">Home</a></li>
              <li><a href="about.html" class="footer-link">About Us</a></li>
              <li><a href="mission.html" class="footer-link">Our Mission</a></li>
              <li><a href="programs.html" class="footer-link">Programs</a></li>
              <li><a href="transparency.html" class="footer-link">Transparency</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">Get Involved</h3>
            <ul class="footer-links">
              <li><a href="donate.html" class="footer-link">Donate</a></li>
              <li><a href="volunteer.html" class="footer-link">Volunteer</a></li>
              <li><a href="partners.html" class="footer-link">Partnerships</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">Contact Us</h3>
            <ul class="footer-links">
              <li><a href="mailto:contact@accendocharity.org" class="footer-link">contact@accendocharity.org</a></li>
              <li><a href="tel:+12135551234" class="footer-link">(213) 555-1234</a></li>
              <li class="footer-link">1055 W 7th St, Suite 3260<br>Los Angeles, CA 90017</li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="footer-bottom-text">
            &copy; ${new Date().getFullYear()} Accendo Charity. All rights reserved. 
            <span class="ein-number">EIN: 83-3359978</span>
          </p>
          <p class="footer-bottom-text">
            <a href="privacy.html" class="footer-link">Privacy Policy</a> | 
            <a href="terms.html" class="footer-link">Terms of Service</a> | 
            <a href="accessibility.html" class="footer-link">Accessibility Statement</a>
          </p>
        </div>
      </footer>
    `;
    
    // Replace feather icons
    this.shadowRoot.querySelectorAll('i').forEach(icon => {
      feather.replace();
    });
  }
}

customElements.define('custom-footer', CustomFooter);