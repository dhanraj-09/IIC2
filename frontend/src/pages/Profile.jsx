import React, { useState } from 'react';
import '../css/Profile.css';

const profileData = {
    name: "Aditya Dhanraj",
    title: "Professor",
    department: "Department of Information Technology",
    profileImage: "https://images.unsplash.com/photo-1519062332616-092955490483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgzODl8MHwxfHNlYXJjaHw3OXx8cG9ydHJhaXQlMjBtYWxlfGVufDB8fHx8MTcwMDgxNTA5M3ww&ixlib=rb-4.0.3&q=80&w=1080",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contactInfo: {
        email: "aditya.dhanraj@gmail.com",
        linkedin: "https://linkedin.com/in/adityadhanraj",
        outlook: "aditya.dhanraj@outlook.com"
    },
    accordions: [
        {
            title: "Educational Qualification",
            content: [
                "Ph.D. in Information Technology - [University Name], [Year]",
                "M.Sc. in Computer Science - [University Name], [Year]",
                "B.Tech. in Information Technology - [University Name], [Year]"
            ]
        },
        {
            title: "Area of Expertise",
            content: [
                "Artificial Intelligence & Machine Learning",
                "Data Science & Big Data Analytics",
                "Cybersecurity & Network Protocols",
                "Cloud Computing & Distributed Systems"
            ]
        },
        {
            title: "Responsibility",
            content: [
                "Head of Research, AI & ML Lab",
                "Curriculum Lead for Data Science Program",
                "Faculty Advisor for Student Tech Club",
                "Departmental Hiring Committee Member"
            ]
        },
        {
            title: "Publication",
            content: [
                "\"Advancements in Deep Learning for Image Recognition,\" Journal of AI, 2023.",
                "\"Secure Data Transmission in IoT Environments,\" IEEE Transactions, 2022.",
                "\"Optimizing Cloud Resource Allocation with Reinforcement Learning,\" ACM Computing, 2021."
            ]
        },
        {
            title: "Projects",
            content: [
                "Project X: Developed an AI-powered tutoring system.",
                "Project Y: Led a team to build a secure blockchain network."
            ]
        }
    ]
};

const ContactModal = ({ isOpen, onClose, contactInfo }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h3 className="modal-title">Contact Information</h3>
                <div className="modal-info">
                    {contactInfo.email && (
                        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                    )}
                    {contactInfo.linkedin && (
                        <p><strong>LinkedIn:</strong> <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></p>
                    )}
                    {contactInfo.outlook && (
                        <p><strong>Outlook:</strong> <a href={`mailto:${contactInfo.outlook}`}>{contactInfo.outlook}</a></p>
                    )}
                </div>
            </div>
        </div>
    );
};

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="accordion-title">{title}</span>
                <svg
                    className={`accordion-arrow ${isOpen ? 'rotated' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="profile-page-wrapper">
            <div className="profile-card">
                <div className="profile-header-section">
                    <div className="profile-image-wrapper">
                        <img src={profileData.profileImage} alt={profileData.name} className="profile-image" />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">{profileData.name}</h1>
                        <p className="profile-position">{profileData.title}</p>
                        <p className="profile-department">{profileData.department}</p>
                    </div>
                </div>

                <div className="profile-contact-social">
                    <div className="contact-buttons">
                        <a href={`mailto:${profileData.contactInfo.email}`} className="email-button">
                            <span className="icon">✉️</span> Message
                        </a>
                        <button className="contact-info-button" onClick={() => setIsModalOpen(true)}>
                            Contact Info
                        </button>
                    </div>

                </div>

                <div className="profile-about-section">
                    <h3 className="about-title">About</h3>
                    <div className="about-content-scroll">
                        <p>{profileData.about}</p>
                    </div>
                </div>
            </div>

            <div className="all-accordions-wrapper">
                {profileData.accordions.map((accordion, index) => (
                    <AccordionItem key={index} title={accordion.title}>
                        {accordion.content.map((item, itemIndex) => (
                            <p key={itemIndex}>{item}</p>
                        ))}
                    </AccordionItem>
                ))}
            </div>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                contactInfo={profileData.contactInfo}
            />
        </div>
    );
};

export default Profile;