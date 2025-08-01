import logo from './logo.svg';
import './App.css';
import myimage from './assets/pic.png'
import jslogo from './assets/js.png'
import csslogo from './assets/css.png'
import htmllogo from './assets/html.png'
import redlogo from './assets/1.png'
import greenlogo from './assets/2.png'
import yellologo from './assets/3.png'
import students from './assets/students.png'
import magicart from './assets/127.jpg'
import triangle from './assets/126.jpg'
import skillimg from './assets/skill.jpg'
import webp1 from './assets/1.webp'
import webp2 from './assets/2.webp'
import webp3 from './assets/3.webp'
import webp4 from './assets/4.webp'
import { LiaIdCardSolid } from "react-icons/lia";
import { BsWindow } from "react-icons/bs";

function App() {
  return (
    <>
        <nav>
            <div className='logowrapper'><h1>Logo Here</h1></div>
           <div className='ulwrapper'>
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Service</li>
                <li>Blog</li>
            </ul>
                <button className='Download_btn'>Download&nbsp;CV</button>
           </div>
        </nav>
        <main>
        <div className="landing">
              <div className="details">
             <h3><span className='details-h3'>Hello, I'm</span> </h3><br />
            <h3 className='namewrapper'>Kristal Shrestha</h3><br />
            <p>A Creative Designer From Nepal 
              <br /><br />
            I'm Creative Designer based in Nepal, and i'm very passionate and dedicated to my work.</p><br />
            <div className="details_linkwrapper">
                 <button className='Aboutbtn'>About Me</button>&nbsp;&nbsp;<a href=""><i class="fa-brands fa-facebook-f"></i></a>&nbsp;&nbsp;<a href=""><i class="fa-brands fa-square-linkedin"></i></a>&nbsp;&nbsp;<a href=""><i class="fa-brands fa-github"></i></a>
            </div>
            </div>
            <div className="avatar">
              <img src={myimage} alt="this is a profile picture" className='myimage' />
              <img src={htmllogo} alt="this is html logo" className='htmllogo'/>
              <img src={csslogo} alt="this is css logo" className='csslogo'/>
              <img src={jslogo} alt="this is js logo"className='jslogo' />
            </div>
        </div>
        <div className="process">
              <div className="pixel-perfect"><img src={redlogo} alt="image" /><h3>Pixel Perfect</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
              <div className="high-quality"><img src={greenlogo} alt="image" /><h3>High Quality</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
              <div className="awesome-idea"><img src={yellologo} alt="image" /><h3>Awesome Idea</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
        </div>
        <div className="About">
          <div className="left">
            <div className="imageholder">
              <img src={students} alt="here is an image" className='studentsimage'/>
            <div className="year">
              <h3>18</h3>
              <span>Years of <br />success</span>
            </div>
             <div className="projects">
              <h3>9K</h3>
              <span>total <br />Projects</span>
            </div>
            </div>
          </div>
          <div className="right">
            <div className="title">
              <h3><span className='designer'>I'm a Designer</span></h3>
              <h3 className='titleh3-wrapper'>I can Design Anything You Want</h3>
            </div>
            <div className="pwrapper">
              <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            </div>
            <div className="">
              <button className='hirebtn'>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="portfolio">
         <div className="portfolio-details">
           <p className='color'>Portfolio</p><br />
          <h3>My Amazing Works</h3>
          <p className='portfolio-p'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
         </div>
         <div className="portfolio-list">
          <ul>
            <li>All</li>
            <li>Youtube</li>
            <li>popup</li>
            <li>Details</li>
          </ul>
         </div>
         <div className="gallery">
          <img src={triangle} alt="Mockup Shape" className='triangle-img' />
          <img src={magicart} alt="Magic art" className='art-img' />
          <img src="" alt="Art System" />
         </div>
        </div>
        <div className="Skills">
          <div className="skill-left">
            <p className='color'>Design is Life</p>
            <h3>I Develop Skills Regularly to Keep Me Update</h3>
            <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            <div className="progress-bar">
              <span className='html-wrapper'>Html</span><br />
              <progress value="70" max="100" className='first-progress'></progress>
              <br />
              <span>CSS</span><br />
              <progress value="60" max="100"></progress><br />
              <span>Javascript</span><br />
              <progress value="60" max="100"></progress>
              </div>
          </div>
          <div className="skill-right">
            <img src={skillimg} alt="here is an image" className='skillimg'/>
          </div>
        </div>
           <div className="services">
         <div className='services-head'>
            <p className='color'>Services</p>
          <h3>What i Do For Clients</h3>
          <p className='services-p'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
         </div>
         <div className="cards">
              <div className="card">
              <div className='icon'><img src={webp1} alt="Icon" className='redimg'/>
              <i class="fa-solid fa-chart-diagram"></i></div>
              <div className='card-detail'>  <h3>Creative Design</h3>
                <span>Starts from <span className='Amount_span'>$99</span></span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p></div>
              </div>
              <div className="card">
              <div className='icon'>
                <img src={webp2} alt="Icon" />
                <i class="fa-brands fa-react"></i>
              </div>
              <div className='card-detail'>
                  <h3>Graphic Design</h3>
                <span>Starts from <span className='Amount'>$99</span></span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
              </div>
              </div>
              <div className="card">
              <div className='icon'><img src={webp3}alt="Icon" />
              <LiaIdCardSolid className='idcard'/>
              </div>
              <div className='card-detail'>
                  <h3>UI/UX Design</h3>
                <span>Starts from <span className='Amount'>$99</span></span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
              </div>
              </div>
              <div className="card">
              <div className='icon'>
                <img src={webp4} alt="Icon" />
                <BsWindow className='webdesign'/>
              </div>
              <div className='card-detail'>
                  <h3>Web Design</h3>
                <span>Starts from <span className='Amount'>$99</span></span>
                <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
              </div>
              </div>
         </div>
        </div>
        <div className="test">
        <div className='testimonials-details'>
            <p className='color'>Testimonials</p>
          <h3>What My clients say</h3>
          <p className='testimonials-p'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
         </div>
        </div>
        <div className="Blog">
           <div>
            <p className='color'>From my Blog</p>
          <h3>Our Recent Updated, Blog, Tips, Tricks & More</h3>
         </div>
         <div className="">
        <div className="">
          <img src="" alt="image" />
          <h3>Web Development</h3>
          <p>
            Jim Morisson Says when the musics over turn off the light</p>
        </div>
         <div className="">
          <img src="" alt="image" />
          <h3>Branding</h3>
          <p>How to be appreciated for your hard work as a developer</p>
        </div>
         <div className="">
          <img src="" alt="image" />
          <h3>Social Media</h3>
          <p>How designers and developers can collaborate better</p>
        </div>
         </div>
        </div>
        <div className="">
          <div className="">
            <h3>Subscribe Now</h3>
            <h2>Get My NewsLetter</h2>
            <p>Get latest news, updates, tips and trics in your inbox</p>
          </div>
          <div className="">
            <input type="email" name="email" placeholder='Your Email Here' /><button>Send Now</button>
          </div>
        </div>
        <div className="contact">
            <div>
            <p className='color'>Contact Me</p>
          <h3>I Want to Hear From You</h3>
          <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
         </div>
         <div className="">
          <div className="">
            <span>
              <img src="" alt="LOGO" />
              <h3>Address</h3>
              <p>20, Somewere in the World</p>
            </span>
             <span>
              <img src="" alt="LOGO" />
              <h3>Email</h3>
              <a href="Kristalstha20@gmail.com">Kristalstha20@gmail.com</a>
            </span>
             <span>
              <img src="" alt="LOGO" />
              <h3>Phone</h3>
              <p>+977 9800000</p>
            </span>
          </div>
          <div className="">
            <form action="">
              <input type="text" placeholder='Your Name'/>
              <input type="email" placeholder='Your Email'/><br />
              <input type="number" placeholder='Your Phone'/>
              <input type="text" placeholder='Subject'/><br />
              <textarea name="Write Your Message Here" id=""></textarea><br />
              <input type="submit" value="Submit Now"/>
            </form>
          </div>
         </div>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.609077968113!2d83.46243300000002!3d27.707882000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687a9e810c4af%3A0x330398c480aee01b!2sPari%20Butwal!5e0!3m2!1sen!2snp!4v1753426254096!5m2!1sen!2snp" width="1000" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </main>
        <footer>
          <div className=""><p>Developed with love by Kristal &copy; 2025</p></div>
          <div className=""><a href="">Terms And Conditions</a>&nbsp;<a href="">Privacy Policy</a></div>
        </footer>
        </>
  );
}

export default App;
