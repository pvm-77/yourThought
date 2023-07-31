import React from 'react'
import t1 from '../t1.jpg'
import t3 from '../t3.jpg'
import t2 from '../t2wobg.png';
import Typewriter from 'typewriter-effect';
import ThoughtCanvas from './canvas/Thought';


const Home = () => {
  return (
    <>

      <div className="landing-page ">
        <div className="flex flex-col items-center justify-center ">
          <header className="hero-section py-20 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to yourThought App</h1>
            <p className="text-lg md:text-xl mb-8">A place to create and organize your thoughts</p>
            <button className="cta-butto py-3 px-6 rounded-lg shadow-lg font-semibold hover:bg-blue-400 transition-colors duration-300">Get Started</button>
          </header>
        </div>


        <div className='mb-5'>
          <ThoughtCanvas />
        </div>
        {/* <div class="bg-gray-200 rounded animate-pulse">
          <div class="h-6 bg-gray-300 rounded w-1/2 mt-2 animate-pulse"></div>
          <div class="h-4 bg-gray-300 rounded w-3/4 mt-2 animate-pulse"></div>
          <div class="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>
        </div> */}


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


        <div className="flex flex-col items-center">
          <section className="features-section py-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature text-center">
                <img src="feature-icon-1.png" alt="Feature 1" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thought Creation</h3>
                <p>Create and store your thoughts easily</p>
              </div>
              <div className="feature text-center">
                <img src="feature-icon-2.png" alt="Feature 2" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thought Organization</h3>
                <p>Organize your thoughts into categories or tags</p>
              </div>
              <div className="feature text-center">
                <img src="feature-icon-3.png" alt="Feature 3" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thought Sharing</h3>
                <p>Share your thoughts with others easily</p>
              </div>
            </div>
          </section>

          <section className="testimonials-section  py-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="testimonial p-4  rounded-lg shadow-md">
                <img src="user-avatar-1.png" alt="User 1" className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <p className="text-lg mb-4">"This app has completely changed the way I organize my thoughts. Highly recommended!"</p>
                <p className="text-xl font-semibold">John Doe</p>
              </div>
              <div className="testimonial p-4  rounded-lg shadow-md">
                <img src="user-avatar-2.png" alt="User 2" className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <p className="text-lg mb-4">"I love how simple and intuitive this app is. It helps me stay focused and productive."</p>
                <p className="text-xl font-semibold">Jane Smith</p>
              </div>
            </div>
          </section>

          <section className="app-preview-section py-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">App Preview</h2>
            <img src="app-screenshot.png" alt="App Screenshot" className="w-full rounded-lg shadow-md" />
          </section>

          <section className="contact-section  py-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <p className="text-lg md:text-xl mb-8 text-center">Have questions or need support? Reach out to our team at <a href="mailto:support@example.com" className="underline">support@example.com</a>.</p>
          </section>
        </div>


      </div>
    </>);
}
export default Home