import { useState } from 'react';
import './App.css';

const features = [
    {
        number: '01',
        title: 'Find your focus',
        text: 'Turn a busy day into a clear, calm plan with one place for the work that matters.',
    },
    {
        number: '02',
        title: 'Make progress visible',
        text: 'Small wins add up. See your momentum and keep moving forward with confidence.',
    },
    {
        number: '03',
        title: 'Work your way',
        text: 'Shape your workspace around your rhythm, your team, and the goals you care about.',
    },
];

function App() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    }

    return (
        <main>
            <nav className="navbar" aria-label="Main navigation">
                <a className="brand" href="#top" aria-label="Northstar home">
                    <span className="brand-mark">N</span>
                    <span>northstar</span>
                </a>
                <div className="nav-links">
                    <a href="#why-northstar">Why northstar</a>
                    <a href="#features">Features</a>
                    <a href="#start">Get started</a>
                </div>
                <a className="nav-button" href="#start">
                    Join the waitlist <span aria-hidden="true">-&gt;</span>
                </a>
            </nav>

            <section className="hero" id="top">
                <div className="hero-copy">
                    <p className="eyebrow"><span /> A clearer way forward</p>
                    <h1>Make space for<br /><em>your best work.</em></h1>
                    <p className="hero-text">
                        Northstar helps thoughtful teams turn big ideas into meaningful progress,
                        without the noise.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-button" href="#start">Start exploring <span aria-hidden="true">-&gt;</span></a>
                        <a className="text-link" href="#features">See how it works <span aria-hidden="true">↓</span></a>
                    </div>
                    <div className="trusted-by">
                        <span>Trusted by curious teams at</span>
                        <strong>FRAME</strong>
                        <strong>orbits</strong>
                        <strong>FOLIO</strong>
                    </div>
                </div>
                <div className="hero-art" aria-label="Abstract sunrise illustration">
                    <div className="sun" />
                    <div className="orb orb-one" />
                    <div className="orb orb-two" />
                    <div className="mountain mountain-back" />
                    <div className="mountain mountain-front" />
                    <div className="art-label">EST. 2024 <span>✦</span> MAKE IT MATTER</div>
                </div>
            </section>

            <section className="intro-section" id="why-northstar">
                <div className="section-kicker">WHY NORTHSTAR</div>
                <div className="intro-content">
                    <h2>Good work needs<br /><span>room to grow.</span></h2>
                    <p>
                        The best ideas rarely arrive fully formed. We built northstar to give
                        ambitious people the tools and space to shape them into something real.
                    </p>
                </div>
            </section>

            <section className="features" id="features">
                {features.map((feature) => (
                    <article className="feature-card" key={feature.number}>
                        <span className="feature-number">{feature.number}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                        <span className="card-arrow" aria-hidden="true">↗</span>
                    </article>
                ))}
            </section>

            <section className="signup" id="start">
                <div>
                    <p className="eyebrow"><span /> Your next chapter</p>
                    <h2>Ready to find<br /><em>your northstar?</em></h2>
                </div>
                {submitted ? (
                    <p className="success-message">You are on the list. We will be in touch soon.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Get early access</label>
                        <div className="input-row">
                            <input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <button type="submit" aria-label="Join the waitlist">-&gt;</button>
                        </div>
                    </form>
                )}
            </section>

            <footer>
                <a className="brand" href="#top"><span className="brand-mark">N</span><span>northstar</span></a>
                <span>Make room for what matters.</span>
                <span>© 2024 Northstar</span>
            </footer>
        </main>
    );
}

export default App;
