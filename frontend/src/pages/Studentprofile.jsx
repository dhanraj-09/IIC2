import React from 'react';
import '../css/StudentProfile.css';

const profileData = {
    name: "Aditya Singh",
    title: "Student",
    department: "Computer Science and Engineering",
    university: "University of Technology",
    registrationNumber: "CSE180123",
    yearOfJoining: "2023",
    yearOfPassing: "2027",
    profileImage: "https://source.unsplash.com/random/150x150/?portrait,male",
    linkedinUrl: "https://linkedin.com/in/adityasingh",
    githubUrl: "https://github.com/adityasingh",
    outlookEmail: "aditya.singh@outlook.com",
    about: "A third-year Computer Science and Engineering student with a passion for web development and artificial intelligence. I am an active member of the university's AI Club and have a strong foundation in data structures and algorithms. I am eager to apply my technical skills to real-world problems and am currently seeking a summer internship to further my my knowledge in the field.",
    gpa: {
        current: "8.9",
        cumulative: "8.7"
    },
    arrears: [
        "Data Structures",
        "Operating Systems",
        "Computer Networks"
    ],
    projects: [
        {
            name: "Real-time Chat App",
            link: "https://github.com/adityasingh/chat-app"
        },
        {
            name: "Portfolio Website",
            link: "https://github.com/adityasingh/portfolio"
        },
        {
            name: "E-commerce Backend",
            link: "https://github.com/adityasingh/ecommerce-backend"
        }
    ]
};

const ProjectCard = ({ name, link }) => (
    <div className="project-card">
        <h4 className="project-name">{name}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.873 8.207 11.414.59.106.805-.258.805-.577 0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61-.542-1.375-1.325-1.743-1.325-1.743-1.088-.745.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.77.42-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.931 0-1.31.465-2.385 1.235-3.22-.135-.303-.54-.762.135-1.597 0 0 1.005-.322 3.3.992.955-.266 1.956-.399 2.956-.399s1.901.133 2.857.398c2.29-1.315 3.29-1.002 3.29-1.002.675.835.27 1.294.135 1.597.77.835 1.235 1.91 1.235 3.22 0 4.61-2.805 5.624-5.475 5.92-.42.365-.818 1.09-.818 2.22 0 1.606.015 2.895.015 3.28 0 .315.21.69.81.57C20.565 21.84 24 17.221 24 12c0-6.627-5.373-12-12-12z" /></svg>
            GitHub
        </a>
    </div>
);

const StudentProfile = () => {
    return (
        <div className="profile-page-wrapper">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image-wrapper">
                        <img src={profileData.profileImage} alt={profileData.name} className="profile-image" />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">{profileData.name}</h1>
                        <p className="profile-title">{profileData.title}</p>
                        <p className="profile-department">{profileData.department}, {profileData.university}</p>
                        <p className="profile-reg-number">Reg. No: {profileData.registrationNumber}</p>
                        <p className="profile-academic-duration">{profileData.yearOfJoining}-{profileData.yearOfPassing}</p>
                    </div>
                </div>

                <div className="profile-actions-and-about-wrapper">
                    <div className="profile-action-buttons">
                        <button className="update-profile-button">Update Profile</button>
                    </div>
                    <div className="social-links">
                        <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="profile-about-section">
                    <h3 className="section-title">About</h3>
                    <div className="about-content-scroll">
                        <p>{profileData.about}</p>
                    </div>
                </div>

                <div className="profile-academic-section">
                    <h3 className="section-title">Academic Details</h3>
                    <div className="gpa-and-arears-container">
                        <div className="gpa-container">
                            <div className="gpa-card">
                                <p className="gpa-value">{profileData.gpa.current}</p>
                                <p className="gpa-label">Current GPA</p>
                            </div>
                            <div className="gpa-card">
                                <p className="gpa-value">{profileData.gpa.cumulative}</p>
                                <p className="gpa-label">Cumulative GPA</p>
                            </div>
                        </div>
                        <div className="arears-container">
                            <p className="arears-title">Arrears</p>
                            <ul>
                                {profileData.arrears.map((arear, index) => (
                                    <li key={index} className="arears-item">{arear}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="profile-projects-section">
                    <h3 className="section-title">Projects</h3>
                    <div className="projects-grid">
                        {profileData.projects.map((proj, index) => (
                            <ProjectCard key={index} {...proj} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;