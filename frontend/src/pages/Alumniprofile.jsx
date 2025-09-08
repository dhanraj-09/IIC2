import React, { useState } from 'react';
import '../css/alumniprofile.css';

const profileData = {
    name: "Priya Sharma",
    title: "Product Manager",
    company: "Innovate Solutions",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgzODl8MHwxfHNlYXJjaHw3OXx8cG9ydHJhaXQlMjBmZW1hbGV8ZW58MHx8fHwxNzAzMjAwMzk0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    bannerImage: "https://images.unsplash.com/photo-1517439167232-2d1743a15234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgzODl8MHwxfHNlYXJjaHw3OXx8YnVpbGRpbmdzJTIwYmFubmVyfGVufDB8fHx8MTcwMzI1MzY3MHww&ixlib=rb-4.0.3&q=80&w=1080",
    about: "A passionate product manager with over 5 years of experience in the tech industry. I specialize in developing user-centric products and leading cross-functional teams from ideation to launch. I am proud to be an alumna of this university and am always looking for ways to connect with current students and fellow alumni.",
    contactInfo: {
        email: "priya.sharma@example.com",
        phone: "+91-9876543210"
    },
    educationalQualification: [
        { degree: "MBA", branch: "Business Management", year: "2018", university: "[University Name]" },
        { degree: "B.Tech", branch: "Computer Science", year: "2016", university: "[University Name]" }
    ],
    areaOfExpertise: [
        "Product Strategy",
        "Market Research",
        "Agile Methodologies",
        "User Experience (UX) Design",
        "Project Management"
    ],
    professionalExperience: [], // This is now an empty array, ready to be populated from a backend API
    ctcInfo: [
        { year: "2024", ctc: "₹ > 20 LPA" },
        { year: "2023", ctc: "₹ > 15 LPA" }
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
                    {contactInfo.phone && (
                        <p><strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProfessionalExperienceCard = ({ placement, role, description }) => (
    <div className="professional-experience-card">
        <h4 className="exp-role">{role}</h4>
        <p className="exp-placement">{placement}</p>
        <p className="exp-description">{description}</p>
    </div>
);

const AlumniProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [professionalExperience, setProfessionalExperience] = useState(profileData.professionalExperience);

    // This useEffect would be used to fetch the professional experience data from a backend
    // useEffect(() => {
    //     fetch('/api/alumni-experience')
    //         .then(res => res.json())
    //         .then(data => setProfessionalExperience(data));
    // }, []);

    // For now, we'll use a seeded placeholder to show how it would look
    if (professionalExperience.length === 0) {
        setProfessionalExperience([
            {
                placement: "Innovate Solutions",
                role: "Product Manager",
                description: "Led the development of a new mobile app, resulting in a 20% increase in user engagement within the first six months. Managed a team of 10 engineers and designers."
            },
            {
                placement: "Digital Corp",
                role: "Associate Product Manager",
                description: "Assisted in the product lifecycle management of multiple B2B software products. Conducted user research and competitive analysis to inform product strategy."
            }
        ]);
    }

    return (
        <div className="profile-page-wrapper">
            <div className="profile-card">
                <div className="profile-header-no-banner">
                    <div className="profile-image-wrapper">
                        <img src={profileData.profileImage} alt={profileData.name} className="profile-image" />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">{profileData.name}</h1>
                        <p className="profile-title">{profileData.title}</p>
                        <p className="profile-company">{profileData.company}</p>
                    </div>
                </div>

                <div className="profile-actions-and-about-wrapper">
                    <div className="profile-action-buttons">
                        <button className="contact-info-button" onClick={() => setIsModalOpen(true)}>Contact Info</button>
                        <button className="update-profile-button">Update Profile</button>
                    </div>
                </div>

                <div className="profile-about-section">
                    <h3 className="section-title">About</h3>
                    <div className="about-content-scroll">
                        <p>{profileData.about}</p>
                    </div>
                </div>

                <div className="profile-info-section">
                    <h3 className="section-title">Educational Qualification</h3>
                    <div className="info-list-container">
                        {profileData.educationalQualification.map((item, index) => (
                            <p key={index} className="info-item">
                                <strong>{item.degree}</strong> ({item.branch}), {item.university}, {item.year}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="profile-expertise-section">
                    <h3 className="section-title">Area of Expertise</h3>
                    <div className="expertise-tags-container">
                        {profileData.areaOfExpertise.map((expertise, index) => (
                            <span key={index} className="expertise-tag">{expertise}</span>
                        ))}
                    </div>
                </div>

                <div className="profile-professional-experience-section">
                    <h3 className="section-title">Professional Experience</h3>
                    {professionalExperience.map((exp, index) => (
                        <ProfessionalExperienceCard key={index} {...exp} />
                    ))}
                </div>

                <div className="profile-ctc-section">
                    <h3 className="section-title">CTC</h3>
                    <div className="ctc-list-container">
                        {profileData.ctcInfo.map((item, index) => (
                            <p key={index} className="ctc-item">
                                <strong>{item.year}:</strong> {item.ctc}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                contactInfo={profileData.contactInfo}
            />
        </div>
    );
};

export default AlumniProfile;