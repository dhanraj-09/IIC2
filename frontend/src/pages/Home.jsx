import React, { useState, useEffect } from 'react';
import { Bookmark, MessageSquare } from 'lucide-react';
import "../css/homepage.css"

// --- Boilerplate JSON Data (Simulating API Response from AlumniNotes table) ---
const apiData = {
    currentUser: {
        name: 'John Doe',
        regNo: '20BCE1234',
        author: 'Tech University',
    },




    // saved post and messages are hard coded for now
    savedPosts: [
        { id: 1, description: 'We\'re hiring for a Junior Product Manager...' },
        { id: 2, description: 'Internship opportunities for Data Analysts...' },
        { id: 3, description: 'Webinar on Cloud Computing trends...' },
    ],
    messages: [
        { id: 1, senderName: 'Priya Sharma', avatarUrl: 'https://placehold.co/40x40/3B82F6/FFFFFF?text=PS' },
        { id: 2, senderName: 'Dr. Vikas Yadav', avatarUrl: 'https://placehold.co/40x40/EF4444/FFFFFF?text=VY' },
        { id: 3, senderName: 'Rohan Mehta', avatarUrl: 'https://placehold.co/40x40/10B981/FFFFFF?text=RM' },
        { id: 4, senderName: 'Dr. Shikha Verma', avatarUrl: 'https://placehold.co/40x40/8B5CF6/FFFFFF?text=SV' },
        { id: 5, senderName: 'Ananya Gupta', avatarUrl: 'https://placehold.co/40x40/8B5CF6/FFFFFF?text=AG' },
    ],
};

// --- Child Components ---

const Header = () => (
    <header className="home-header">
        <nav className="nav-container">
            <ul className="nav-list">
                {['Home', 'Alumni', 'Student', 'Faculty'].map((item, index) => (
                    <li key={item} className="nav-item">
                        <a href="#" className={index === 0 ? 'active' : ''}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

const UserProfileCard = ({ user }) => (
    <div className="card user-profile-card">

        <h2 className="user-name">{user.name}</h2>
        <p className="user-detail">{user.regNo}</p>
        <p className="user-detail user-university">{user.universityName}</p>
        <button className="profile-button">
            View Profile
        </button>
    </div>
);

// Updated to use 'description'
const SavedPostsCard = ({ savedPosts }) => (
    <div className="card sidebar-card saved-posts-card">
        <h3 className="card-title">
            <Bookmark size={20} /> Saved
        </h3>
        <ul>
            {savedPosts.map(post => (
                <li key={post.id}>
                    <a href="#">
                        {post.description}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// Updated to work with the new AlumniNotes data structure
const PostCard = ({ post }) => {
    return (
        <div className="card post-card">
            <div className="post-author-header">
                <div>
                    <h4 className="author-name">{post.author_name}</h4>
                    <p className="author-details">{post.author_role}</p>
                </div>
            </div>
            {/* Title is removed, description is the main content */}
            <div className="post-content">
                <p>{post.description}</p>
            </div>
            <div className="post-save-action">
                <a href="#">Save</a>
            </div>
        </div>
    );
};

const MessagesCard = ({ messages }) => (
    <div className="card sidebar-card messages-card">
        <h3 className="card-title">
            <MessageSquare size={20} /> Messages
        </h3>
        <ul>
            {messages.map(message => (
                <li key={message.id} className="message-item">

                    <span>{message.senderName}</span>
                </li>
            ))}
        </ul>
    </div>
);

// --- Main Home Component ---

const Home = () => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setPageData(apiData);
                setLoading(false);
            }, 500);
        };
        fetchData();
    }, []);


    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader-text">Loading your feed...</div>
            </div>
        );
    }

    if (!pageData) return <div>Error loading data.</div>;

    const { currentUser, feedPosts, savedPosts, messages } = pageData;

    return (
        <div className="home-container">
            <div className="home-layout">
                <Header />
                <main className="main-grid">
                    <aside className="left-sidebar">
                        <UserProfileCard user={currentUser} />
                        <SavedPostsCard savedPosts={savedPosts} />
                    </aside>

                    <section className="main-feed">
                        {feedPosts.map(post => <PostCard key={post.id} post={post} />)}
                    </section>

                    <aside className="right-sidebar">
                        <MessagesCard messages={messages} />
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default Home;

