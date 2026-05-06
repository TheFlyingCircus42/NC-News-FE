import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">


        <div className="footer-gooter-left">
          <p className="footer-name">Robert Hawkins</p>
          
          <p className="footer-meta">
            Built at Northcoders · 2026
          </p>

          <div className="footer-links">
            <a href="https://github.com/TheFlyingCircus42">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/rob-hawkins-866a02331">LinkedIn</a>
          </div>
        </div>

        <div className="footer-footer-right">
          {/* <p className="footer-meta footer-stack-text">
            React · Node.js · Express · PostgreSQL · REST API
          </p> */}
           <p className="footer-meta footer-stack-text">
            NC News is a fullstsack create, read, update, delete demo app. 
           </p>

          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">PostgreSQL</span>
            <span className="tech-badge">API</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
