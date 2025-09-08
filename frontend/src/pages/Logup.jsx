import React, { useState, useEffect } from 'react';
import {sendData} from "../api/api.js";
import "../css/logup.css"




const userRoles = ['Student', 'Faculty', 'Alumni'];
const genders = ['Male', 'Female', 'Other'];
const degrees = ['BTech', 'BBA', 'BCom', 'MTech', 'MBA', 'MCom'];
const facultyDepartments = ['Computer Science', 'Information Technology', 'Management', 'Commerce', 'Humanities'];
const facultyRoles = ['Head of Department', 'Professor', 'Assistant Professor'];
const ctcRanges = ['< 5 LPA', '< 10 LPA', '< 15 LPA', '15+ LPA'];
const years = ['1', '2', '3', '4'];
const passingYears = Array.from({ length: 20 }, (_, i) => String(new Date().getFullYear() - i));

const branchOptions = {
    'BTech': ['IoT', 'CSE', 'IT', 'Data Science'],
    'MTech': ['IoT', 'CSE', 'IT', 'Data Science'],
    'BBA': ['Marketing', 'Finance', 'HR'],
    'MBA': ['Marketing', 'Finance', 'HR'],
    'BCom': ['Accounting', 'Finance', 'Economics'],
    'MCom': ['Accounting', 'Finance', 'Economics']
};

const initialFormState = {
    userType: '', name: '', dob: '', registrationId: '', degree: '',
    branch: '', year: '', gender: '', department: '', role: '',
    yearOfPassing: '', company: '', designation: '', ctc: '',
};

// --- Custom ComboBox Component ---
const ComboBoxInput = ({ name, value, onChange, onBlur, options, placeholder, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        if (value) {
            setFilteredOptions(
                options.filter(option =>
                    option.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setFilteredOptions(options);
        }
    }, [value, options]);

    const handleSelectOption = (option) => {
        onChange({ target: { name, value: option } });
        setIsOpen(false);
        const mockEvent = { target: { name, value: option } };
        onBlur(mockEvent);
    };

    return (
        <div className="combo-box">
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => {
                    setTimeout(() => setIsOpen(false), 200);
                    onBlur({ target: { name, value } });
                }}
                placeholder={placeholder}
                className={`${error ? 'invalid' : value ? 'valid' : ''}`}
                autoComplete="off"
            />
            {isOpen && (
                <ul className="options-list">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <li key={index} onMouseDown={() => handleSelectOption(option)}>
                                {option}
                            </li>
                        ))
                    ) : (
                        <li className="no-options">No matches found</li>
                    )}
                </ul>
            )}
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};


const Logup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = '';
        if (!value) {
            error = 'This field is required';
        } else {
            const optionsMap = {
                userType: userRoles, degree: degrees, branch: branchOptions[formData.degree] || [],
                year: years, gender: genders, department: facultyDepartments, role: facultyRoles,
                yearOfPassing: passingYears, ctc: ctcRanges,
            };
            if (optionsMap[name] && !optionsMap[name].includes(value)) {
                error = 'Please select a valid option';
            }
        }
        setErrors(prev => ({ ...prev, [name]: error }));
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updatedData = { ...prev, [name]: value };
            if (name === 'degree') updatedData.branch = '';
            if (name === 'userType') {
                // When user type changes, reset all fields except the step 1 fields
                return { ...initialFormState, userType: value, name: prev.name, dob: prev.dob };
            }
            return updatedData;
        });
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const nextStep = () => {
        const step1Fields = ['userType', 'name', 'dob'];
        let isValid = true;
        step1Fields.forEach(field => {
            if (validateField(field, formData[field])) isValid = false;
        });
        if (isValid) setCurrentStep(2);
    };

    const prevStep = () => setCurrentStep(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let fieldsToValidate = [];
        const { userType } = formData;
        if (userType === 'Student') fieldsToValidate = ['registrationId', 'degree', 'branch', 'year', 'gender'];
        if (userType === 'Faculty') fieldsToValidate = ['department', 'role'];
        if (userType === 'Alumni') fieldsToValidate = ['degree', 'branch', 'yearOfPassing', 'company', 'designation', 'ctc', 'gender'];

        let isStep2Valid = true;
        fieldsToValidate.forEach(field => {
            if (validateField(field, formData[field])) isStep2Valid = false;
        });

        if (isStep2Valid) {
            try {
                await sendData(formData);
                alert(`Registration successful for ${formData.name}!`);
                setFormData(initialFormState); // Reset form to initial state
                setErrors({});
                setCurrentStep(1);
            } catch (error) {
                console.error("Submission failed:", error);
                alert(`Registration failed. ${error.message}`);
            }
        }
    };

    const renderStep2Fields = () => {
        switch (formData.userType) {
            case 'Student':
                return <>
                    <div className="form-group">
                        <label>Registration ID</label>
                        <input type="text" name="registrationId" value={formData.registrationId} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your ID" className={`${errors.registrationId ? 'invalid' : formData.registrationId ? 'valid' : ''}`} />
                        {errors.registrationId && <span className="error-message">{errors.registrationId}</span>}
                    </div>
                    <div className="form-group"><label>Degree</label><ComboBoxInput name="degree" value={formData.degree} onChange={handleChange} onBlur={handleBlur} options={degrees} placeholder="Select your degree" error={errors.degree} /></div>
                    <div className="form-group"><label>Branch</label><ComboBoxInput name="branch" value={formData.branch} onChange={handleChange} onBlur={handleBlur} options={branchOptions[formData.degree] || []} placeholder="Select your branch" error={errors.branch} /></div>
                    <div className="form-group"><label>Year</label><ComboBoxInput name="year" value={formData.year} onChange={handleChange} onBlur={handleBlur} options={years} placeholder="Select current year" error={errors.year} /></div>
                    <div className="form-group"><label>Gender</label><ComboBoxInput name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} options={genders} placeholder="Select your gender" error={errors.gender} /></div>
                </>;
            case 'Faculty':
                return <>
                    <div className="form-group"><label>Department</label><ComboBoxInput name="department" value={formData.department} onChange={handleChange} onBlur={handleBlur} options={facultyDepartments} placeholder="Select department" error={errors.department} /></div>
                    <div className="form-group"><label>Role</label><ComboBoxInput name="role" value={formData.role} onChange={handleChange} onBlur={handleBlur} options={facultyRoles} placeholder="Select your role" error={errors.role} /></div>
                </>;
            case 'Alumni':
                return <>
                    <div className="form-group"><label>Degree Completed</label><ComboBoxInput name="degree" value={formData.degree} onChange={handleChange} onBlur={handleBlur} options={degrees} placeholder="Select your degree" error={errors.degree} /></div>
                    <div className="form-group"><label>Branch</label><ComboBoxInput name="branch" value={formData.branch} onChange={handleChange} onBlur={handleBlur} options={branchOptions[formData.degree] || []} placeholder="Select your branch" error={errors.branch} /></div>
                    <div className="form-group"><label>Year of Passing</label><ComboBoxInput name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} onBlur={handleBlur} options={passingYears} placeholder="Select passing year" error={errors.yearOfPassing} /></div>
                    <div className="form-group"><label>Company</label><input type="text" name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} placeholder="Your current company" className={`${errors.company ? 'invalid' : formData.company ? 'valid' : ''}`} />{errors.company && <span className="error-message">{errors.company}</span>}</div>
                    <div className="form-group"><label>Designation</label><input type="text" name="designation" value={formData.designation} onChange={handleChange} onBlur={handleBlur} placeholder="Your designation" className={`${errors.designation ? 'invalid' : formData.designation ? 'valid' : ''}`}/>{errors.designation && <span className="error-message">{errors.designation}</span>}</div>
                    <div className="form-group"><label>CTC</label><ComboBoxInput name="ctc" value={formData.ctc} onChange={handleChange} onBlur={handleBlur} options={ctcRanges} placeholder="Select CTC range" error={errors.ctc} /></div>
                    <div className="form-group"><label>Gender</label><ComboBoxInput name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} options={genders} placeholder="Select your gender" error={errors.gender} /></div>
                </>;
            default:
                return <p className="selection-prompt">Please select a user type to see the relevant fields.</p>;
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <div className="form-header">
                    <h2>Create Your Account</h2>
                    <p>Step {currentStep} of 2</p>
                </div>

                <div className="form-steps-wrapper">
                    <div className={`form-steps-slider step-${currentStep}`}>
                        <div className="form-step">
                            <div className="form-group">
                                <label>I am a</label>
                                <ComboBoxInput name="userType" value={formData.userType} onChange={handleChange} onBlur={handleBlur} options={userRoles} placeholder="Select user type" error={errors.userType} />
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your full name" className={`${errors.name ? 'invalid' : formData.name ? 'valid' : ''}`} />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} onBlur={handleBlur} className={`${errors.dob ? 'invalid' : formData.dob ? 'valid' : ''}`} />
                                {errors.dob && <span className="error-message">{errors.dob}</span>}
                            </div>
                        </div>


                        <div className="form-step step-two-content">
                            {renderStep2Fields()}
                        </div>
                    </div>
                </div>

                <div className="form-navigation">
                    {currentStep > 1 && <button type="button" className="btn-secondary" onClick={prevStep}>Back</button>}
                    {currentStep === 1 ?
                        <button type="button" className="btn-primary" onClick={nextStep}>Next</button> :
                        <button type="submit" className="btn-primary">Sign Up</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default Logup;

