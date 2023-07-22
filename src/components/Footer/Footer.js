import './Footer.css'


const Footer = () => {
    return (
        <>
        <div className='footer'>
           
            <div className="top">
                <div>
                    <h4>Contact Info</h4>
                    <h3>Sampada Engineering Works</h3>
                    <div className='onediv'>
                        <ul>
                            <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>  Gala No. D-13/14, Ramu Compound, <br /> Opp. Ganpati Mandir, Veer Savarkar Marg <br /> Virar East - 401305, India </span>
                            </li>
                            <li>
                    <i className='fa fa-phone'></i>
                    <span><a href="tel:+911234567890"> 9923416696</a></span>
                            </li>
                            <li>
                    <i className='fa fa-envelope'></i>
                    <span><a href="mailto:abcd@gmail.com">  sampada_engg@rediffmail.com </a></span>
                            </li>
                        </ul>
                    <p></p>
                    </div>
                </div>
                <div>
                    <h4>Our Products</h4>
                    <a href="/">High Cast Die</a>
                    <a href="/">Sheet Metal Parts</a>
                    <a href="/">Crase tyep parts</a>
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">Chanelog</a>
                    <a href="/">Sheet Metal Parts</a>
                    <a href="/">Crase tyep parts</a>
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                    <a href="/">Lorem ipsum dolor sit amet</a> 
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="bottom">
                <div className="bottomdiv">
                    <p>copyright @ all rights reserved - Sampada Engineering Works</p>
                </div>
                <div className="">
                    <a href="/">
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            </div>
        
        </>


    );
}

export default Footer