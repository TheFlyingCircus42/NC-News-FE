import '../styles/Footer.css'

function Footer ()
{
    return(
        <footer className='footer'>
            <div className='footer-inner'>

                <div className='footer-byLine'>
                    <p className='footer-name'>Robert Hawkins</p>
                    <p className='footer-meta'> Built at Northcoderds · 2026</p>
                </div>

                <div className='footer-links'>
                    <a href="https://github.com/TheFlyingCircus42">GitHub</a>
                    <a href='www.linkedin.com/in/rob-hawkins-866a02331'>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
