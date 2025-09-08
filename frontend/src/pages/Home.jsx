import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';

// Sample data for the logged-in user
const userData = {
    name: "Aditya Singh",
    role: "Student",
    department: "Computer Science",
    profileImage: "https://via.placeholder.com/150/0000FF/FFFFFF?text=AS",
    canPost: false
};

const fetchPosts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    author: {
                        name: "Priya Sharma",
                        role: "Alumni, Innovate Solutions",
                        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgzODl8MHwxfHNlYXJjaHw3OXx8cG9ydHJhaXQlMjBmZW1hbGV8ZW58MHx8fHwxNzAzMjAwMzk0fDA&ixlib=rb-4.0.3&q=80&w=1080",
                        profileUrl: "#"
                    },
                    content: "We're hiring for a Junior Product Manager! If you're a recent graduate with a passion for tech and user-centric design, please connect with me. #hiring #alumninetwork #productmanagement",
                    date: "2 hours ago",
                    image: null
                },
                {
                    id: 2,
                    author: {
                        name: "Dr. Ankit Singh",
                        role: "Faculty, Dept. of CSE",
                        image: "https://images.unsplash.com/photo-1519062332616-092955490483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgzODl8MHwxfHNlYXJjaHw3OXx8cG9ydHJhaXQlMjBtYWxlfGVufDB8fHx8MTcwMDgxNTA5M3ww&ixlib=rb-4.0.3&q=80&w=1080",
                        profileUrl: "#"
                    },
                    content: "Reminder to all final-year students: the deadline for project proposals is this Friday. Please submit your work on the portal. Feel free to reach out with any questions.",
                    date: "Yesterday",
                    image: null
                }
            ]);
        }, 1000);
    });
};

const trendingTopics = [
    { id: 1, text: "#TechInternships2025", count: 120 },
    { id: 2, text: "#AIinEducation", count: 85 },
    { id: 3, text: "#StartUpStories", count: 62 },
    { id: 4, text: "#NewCoursesCS", count: 45 },
];

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-links-container">
            <a href="#home" className="nav-link">Home</a>
            <a href="#student" className="nav-link">Student</a>
            <a href="#alumni" className="nav-link">Alumni</a>
            <a href="#faculty" className="nav-link">Faculty</a>
        </div>
    </nav>
);

const UserProfileSummary = ({ user }) => (
    <div className="profile-summary-card">
        <div className="summary-header">
            <img src={user.profileImage} alt={user.name} className="summary-profile-img" />
            <h4 className="summary-name">{user.name}</h4>
            <p className="summary-role">{user.role}</p>
        </div>
        <div className="summary-body">
            <p className="summary-department">{user.department}</p>
            <a href="#" className="summary-view-profile">View Profile</a>
        </div>
    </div>
);

const Post = ({ post, onSave, isSaved }) => (
    <div className="post-card">
        <div className="post-header">
            <img src={post.author.image} alt={post.author.name} className="post-author-img" />
            <div className="post-author-info">
                <a href={post.author.profileUrl} className="post-author-name">{post.author.name}</a>
                <p className="post-author-role">{post.author.role}</p>
            </div>
            <span className="post-date">{post.date}</span>
        </div>
        <div className="post-content">
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="Post media" className="post-media" />}
        </div>
        <div className="post-actions">
            <button
                className={`post-action-button ${isSaved ? 'saved' : ''}`}
                onClick={() => onSave(post)}
            >
                {isSaved ? 'Saved' : 'Save'}
            </button>
        </div>
    </div>
);

const PostModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h3 className="modal-title">Create a Post</h3>
                <div className="modal-form">
                    <textarea placeholder="What's on your mind?" rows="5"></textarea>
                    <input type="text" placeholder="Add an image or video URL (optional)" />
                    <button className="modal-post-button">Post</button>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    const handleSavePost = (post) => {
        setSavedPosts(prevSaved => {
            if (prevSaved.find(p => p.id === post.id)) {
                return prevSaved.filter(p => p.id !== post.id);
            } else {
                return [...prevSaved, post];
            }
        });
    };

    return (
        <div className="home-page-wrapper">
            <Navbar />
            <div className="home-content-layout">
                <div className="home-sidebar left-sidebar">
                    <UserProfileSummary user={userData} />
                </div>
                <div className="noticeboard-feed">
                    <div className="feed-header">
                        <h2 className="feed-title">Noticeboard</h2>
                        {userData.canPost && (
                            <div className="create-post-prompt" onClick={() => setIsModalOpen(true)}>
                                <img src={userData.profileImage} alt={userData.name} className="prompt-author-img" />
                                <span className="prompt-text">Write a post...</span>
                            </div>
                        )}
                    </div>
                    {loading ? (
                        <div className="loading-posts">Loading posts...</div>
                    ) : (
                        posts.map(post => (
                            <Post
                                key={post.id}
                                post={post}
                                onSave={handleSavePost}
                                isSaved={savedPosts.some(p => p.id === post.id)}
                            />
                        ))
                    )}
                </div>
                <div className="home-sidebar right-sidebar">
                    <div className="right-sidebar-card">
                        <h4 className="sidebar-title">Trending</h4>
                        <div className="trending-list">
                            {trendingTopics.map(topic => (
                                <div key={topic.id} className="trending-item">
                                    <p className="trending-topic">{topic.text}</p>
                                    <span className="trending-count">{topic.count} posts</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-sidebar-card saved-posts-card">
                        <h4 className="sidebar-title">Saved Posts</h4>
                        {savedPosts.length > 0 ? (
                            savedPosts.map(post => (
                                <div key={post.id} className="saved-post-item">
                                    <h5 className="saved-post-author">{post.author.name}</h5>
                                    <p className="saved-post-content">{post.content.substring(0, 50)}...</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-posts-message">No posts saved yet.</p>
                        )}
                    </div>
                </div>
            </div>
            <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;