import React from 'react'
import t1 from '../t1.jpg'
import t3 from '../t3.jpg'
import t2 from '../t2wobg.png';
import Typewriter from 'typewriter-effect';
import ThoughtCanvas from './canvas/Thought';


const Home = () => {
  return (
    <>
      <div className='mb-5'>
        <ThoughtCanvas />
      </div>

      


      <div className="landing-page ">
        <div class="bg-gray-200 rounded animate-pulse">
          <div class="h-6 bg-gray-300 rounded w-1/2 mt-2 animate-pulse"></div>
          <div class="h-4 bg-gray-300 rounded w-3/4 mt-2 animate-pulse"></div>
          <div class="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>
        </div>

        <div className=' '>
          <div className=' text-center'>
            <Typewriter

              options={{
                strings: [
                  '<span class="text-cyan-900 text-5xl font-bold">Welcome to My Thoughts App</span>',
                  '<span class="text-cyan-900 text-5xl">A place to create and organize your thoughts</span>'
                ],
                autoStart: true,
                loop: true,
                spanClassBack: 'text-green-500',
                spanClassDelete: 'text-yellow-500'
              }}
            />

          </div>

          <div className=' mt-3 flex items-start justify-center'>

            <img src={t2} alt='t1' className='animate-spin-vertical ' />


          </div>
        </div>


        <header className="hero-section">
          <h1>Welcome to My Thoughts App</h1>
          <p>A place to create and organize your thoughts</p>
          <button className="cta-button">Get Started</button>
        </header>
        {/* <img src={t2} alt='t1' className='animate-spin-vertical' /> */}

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="feature">
            <img src="feature-icon-1.png" alt="Feature 1" />
            <h3>Thought Creation</h3>
            <p>Create and store your thoughts easily</p>
          </div>
          <div className="feature">
            <img src="feature-icon-2.png" alt="Feature 2" />
            <h3>Thought Organization</h3>
            <p>Organize your thoughts into categories or tags</p>
          </div>
          <div className="feature">
            <img src="feature-icon-3.png" alt="Feature 3" />
            <h3>Thought Sharing</h3>
            <p>Share your thoughts with others easily</p>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <img src="user-avatar-1.png" alt="User 1" />
            <p>"This app has completely changed the way I organize my thoughts. Highly recommended!"</p>
            <p className="user-name">John Doe</p>
          </div>
          <div className="testimonial">
            <img src="user-avatar-2.png" alt="User 2" />
            <p>"I love how simple and intuitive this app is. It helps me stay focused and productive."</p>
            <p className="user-name">Jane Smith</p>
          </div>
        </section>

        <section className="app-preview-section">
          <h2>App Preview</h2>
          <img src="app-screenshot.png" alt="App Screenshot" />
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Have questions or need support? Reach out to our team at support@example.com.</p>
        </section>
      </div>
    </>);
}
export default Home