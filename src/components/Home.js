import React from 'react'

const Home = () => {
    return (
        <>
            <div className="landing-page">
                <header className="hero-section">
                    <h1>Welcome to My Thoughts App</h1>
                    <p>A place to create and organize your thoughts</p>
                    <button className="cta-button">Get Started</button>
                </header>

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