import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        <nav>
            <div><h1>Logo Here</h1></div>
           <div>
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Service</li>
                <li>Blog</li>
                <li><button>Download CV</button></li>
            </ul>
           </div>
        </nav>
        <main>
        <div className="landing">
              <div className="details">
            <div><h3>Hello, I'm</h3></div>
            <div><h3>Kristal Shrestha</h3></div>
            <div><p>A Creative Designer From Nepal</p></div>
            <div><p>I'm Creative Designer based in Nepal, and i'm very passionate and dedicated to my work.</p></div>
            <div><button>About Me</button>&nbsp;&nbsp;<a href="">Facebook</a>&nbsp;&nbsp;<a href="">linkedin</a>&nbsp;&nbsp;<a href="">GitHub</a></div>
            </div>
            <div className="avatar">
              <img src="/pic.png" alt="This is my picture" />
              <img src="/html.png" alt="" />
              <img src="/css.png" alt="" />
              <img src="/js.png" alt="" />
            </div>
        </div>
        <div className="">
          <ul>
            <li>
              <div className=""><img src="" alt="image" /><h3>Pixel Perfect</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
            </li>
            <li>
              <div className=""><img src="" alt="image" /><h3>High Quality</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
            </li>
            <li>
              <div className=""><img src="" alt="image" /><h3>Awesome Idea</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p></div>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="left">
            <img src="" alt="here is an image" />
            <div className="year">
              <h3>18</h3>
              <span>Years of <br />success</span>
            </div>
             <div className="Projests">
              <h3>9K</h3>
              <span>total <br />Projects</span>
            </div>
          </div>
          <div className="right">
            <div className="title">
              <span>I'm a designer</span>
              <h3>I can Design Anything You Want</h3>
            </div>
            <div className="">
              <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            </div>
            <div className="">
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        </main>
        </>
  );
}

export default App;
