import React from 'react';
import '../css/landing.css';

const Landing= () => {
    return (
        <div className="min-h-screen antialiased bg-gray-50">

            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">ALUMNICONNECT</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-600 hover:text-primary font-medium">Log In</a>
                            <a href="#"
                               className="px-6 py-2 rounded-full text-white bg-primary hover:bg-blue-600 font-medium transition-colors">SignUp</a>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-white py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 md:flex items-center gap-16">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-800">Navigating Tomorrow's
                            Market.<br/>Together.</h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">AlumniConnect is a centralized platform
                            where alumni and faculty share real-world market trends and opportunities, empowering
                            students to build meaningful careers.</p>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
                        <div className="bg-secondary p-8 rounded-lg shadow-xl w-full">
                            <h3 className="text-2xl font-semibold text-center mb-6 text-primary">Our Network's Impact</h3>
                            <div className="relative h-64">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-full h-full text-blue-200" viewBox="0 0 100 100"
                                         preserveAspectRatio="xMidYMid meet">
                                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5"
                                                fill="transparent"/>
                                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="5"
                                                fill="transparent"/>
                                        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="5"
                                                fill="currentColor"/>
                                        <text x="50" y="52" className="text-sm font-bold text-white" textAnchor="middle"
                                              alignmentBaseline="middle">Connect
                                        </text>
                                    </svg>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="absolute top-4 right-4 p-2 text-primary font-bold">100+ Alumni</span>
                                    <span className="absolute bottom-4 left-4 p-2 text-primary font-bold">50+ Faculty</span>
                                    <span className="absolute top-1/2 left-4 -translate-y-1/2 p-2 text-primary font-bold">1000+ Students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-16 text-gray-800">A Network That Works for You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <img src="https://placehold.co/80x80/d1d5db/4a90e2?text=S" alt="Student Icon"
                                     className="w-20 h-20 rounded-full border-4 border-blue-200"/>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">For Students</h3>
                            <p className="text-gray-600 leading-relaxed">Gain a competitive edge by accessing a curated feed
                                of market trends, job openings, and career advice directly from experienced alumni and
                                faculty.</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <img src="https://placehold.co/80x80/d1d5db/4a90e2?text=A" alt="Alumni Icon"
                                     className="w-20 h-20 rounded-full border-4 border-blue-200"/>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">For Alumni</h3>
                            <p className="text-gray-600 leading-relaxed">Interact with a passionate community of peers and
                                students. Stay connected, share industry insights, and contribute to the next generation
                                of professionals.</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <img src="https://placehold.co/80x80/d1d5db/4a90e2?text=F" alt="Faculty Icon"
                                     className="w-20 h-20 rounded-full border-4 border-blue-200"/>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">For Faculty</h3>
                            <p className="text-gray-600 leading-relaxed">Strengthen connections with the professional world.
                                Share academic perspectives, foster discussions, and keep students informed on the
                                latest industry developments.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-white py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">About AlumniConnect</h2>
                    <p className="text-lg leading-relaxed">AlumniConnect is a dedicated platform designed to bridge the gap
                        between academic theory and professional practice. Our mission is to build a vibrant, active
                        community where alumni, faculty, and students can share knowledge, foster professional
                        connections, and create a strong network for career growth and mutual success.</p>
                </div>
            </section>

            <footer className="bg-gray-800 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white">AlumniConnect</h4>
                        <p className="text-sm">Connecting academic insights with professional opportunities.</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.25c-5.73 0-10.43-4.7-10.43-10.43S2.56 0 8.29 0c5.73 0 10.43 4.7 10.43 10.43s-4.7 10.43-10.43 10.43zm-1.63-7.55h-2.18v-5.28h2.18v5.28zm-1.09-6.07c-.74 0-1.34-.6-1.34-1.34 0-.74.6-1.34 1.34-1.34s1.34.6 1.34 1.34c0 .74-.6 1.34-1.34 1.34zm7.65 6.07h-2.18v-2.82c0-.67-.01-1.53-.93-1.53-1.12 0-1.29.87-1.29 1.49v2.86h-2.18v-5.28h2.09v.96c.29-.55.99-1.29 2.05-1.29 2.2 0 2.61 1.44 2.61 3.32v3.29z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M22.46 6c-.82.36-1.71.6-2.6.72.95-.57 1.68-1.47 2.02-2.55-.89.53-1.88.92-2.94 1.13-.84-.89-2.03-1.44-3.35-1.44-2.54 0-4.6 2.06-4.6 4.6 0 .36.04.7.12 1.04-3.82-.19-7.2-2.02-9.47-4.8.4.69.63 1.49.63 2.36 0 1.6-1.04 2.97-2.6 3.79.98-.18 1.9-.3 2.76-.76v.05c0 2.24-1.59 4.1-3.69 4.52.39.1.8.15 1.23.15-.3 0-.59-.03-.87-.08.58 1.8 2.26 3.12 4.25 3.16-1.58 1.24-3.57 1.99-5.74 1.99-.37 0-.74-.02-1.1-.06 2.04 1.31 4.46 2.08 7.08 2.08 8.5 0 13.15-7.05 13.15-13.15 0-.2-.01-.4-.02-.6.9-.65 1.68-1.47 2.3-2.4z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07c1.46.069 2.134.333 2.775.565.667.245 1.166.594 1.697 1.125s.88 1.03.1125 1.697c.23.64.496 1.314.565 2.775.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.069 1.46-.333 2.134-.565 2.775-.245.667-.594 1.166-1.125 1.697s-1.03.88-1.697 1.125c-.64.23-1.314.496-2.775.565-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.46-.069-2.134-.333-2.775-.565-.667-.245-1.166-.594-1.697-1.125s-.88-1.03-1.125-1.697c-.23-.64-.496-1.314-.565-2.775-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.069-1.46.333-2.134.565-2.775.245-.667.594-1.166 1.125-1.697s1.03-.88 1.697-1.125c.64-.23 1.314-.496 2.775-.565 1.266-.058 1.646-.07 4.85-.07zm0-2c-3.784 0-4.286.014-5.786.082-1.666.082-2.61.353-3.327.632-.738.288-1.234.697-1.77 1.233s-.945 1.03-1.233 1.77c-.28.718-.631 2.357-.631 5.097 0 3.784.014 4.286.082 5.786.082 1.666.353 2.61.632 3.327.288.738.697 1.234 1.233 1.77s1.03.945 1.77 1.233c.718.28 2.357.631 5.097.631s4.286-.014 5.786-.082c1.666-.082 2.61-.353 3.327-.632.738-.288 1.234-.697 1.77-1.233s.945-1.03 1.233-1.77c-.28-.718.631-2.357.631-5.097 0-3.784-.014-4.286-.082-5.786-.082-1.666-.353-2.61-.632-3.327-.288-.738-.697-1.234-1.233-1.77s-1.03-.945-1.77-1.233c-.718-.28-2.357-.631-5.097-.631z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white">Quick Links</h4>
                        <ul className="text-sm space-y-2">
                            <li><a  className="hover:underline">Student Hub</a></li>
                            <li><a  className="hover:underline">Alumni Network</a></li>
                            <li><a  className="hover:underline">About Us</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white">Career Opportunities</h4>
                        <ul className="text-sm space-y-2">
                            <li><a  className="hover:underline">Job Board</a></li>
                            <li><a  className="hover:underline">Internships</a></li>
                        </ul>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Landing;
