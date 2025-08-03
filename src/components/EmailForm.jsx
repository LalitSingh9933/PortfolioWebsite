import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function EmailForm() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const formData = new FormData(form.current);
        const newErrors = {};
        let isValid = true;

        // Name validation
        if (!formData.get('user_name')?.trim()) {
            newErrors.user_name = 'Name is required';
            isValid = false;
        } else if (formData.get('user_name').length < 2) {
            newErrors.user_name = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.get('user_email')?.trim()) {
            newErrors.user_email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.get('user_email'))) {
            newErrors.user_email = 'Please enter a valid email address';
            isValid = false;
        }

        // Subject validation
        if (!formData.get('subject')?.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        } else if (formData.get('subject').length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
            isValid = false;
        }

        // Message validation
        if (!formData.get('message')?.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.get('message').length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        // Hide success message when user starts typing again
        if (isSuccess) {
            setIsSuccess(false);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSuccess(false);

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);

        emailjs.sendForm(
            'service_r0s6gfl',
            'template_8or0l6i',
            form.current,
            'TAI-rzMS6tGBL0JOc'
        ).then(
            (result) => {
                toast.success('Message sent successfully!');
                form.current.reset();
                setIsSuccess(true);
            },
            (error) => {
                toast.error('Failed to send message. Please try again.');
                console.error('EmailJS Error:', error);
            }
        ).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <form ref={form} onSubmit={sendEmail} className="space-y-4" noValidate>
                {/* Name Field */}
                <div>
                    <label htmlFor="user_name" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Your Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="Your name"
                        required
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border ${errors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388] focus:border-transparent`}
                    />
                    {errors.user_name && (
                        <p className="mt-1 text-sm text-red-500">{errors.user_name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="user_email" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Your Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        placeholder="your@example.com"
                        required
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3  dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border ${errors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388] focus:border-transparent`}
                    />
                    {errors.user_email && (
                        <p className="mt-1 text-sm text-red-500">{errors.user_email}</p>
                    )}
                </div>

                {/* Subject Field */}
                <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3  dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388] focus:border-transparent`}
                    />
                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Your Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Your message here..."
                        required
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3  dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388] focus:border-transparent`}
                    ></textarea>
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="space-y-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-6 py-3 bg-[#52a388] hover:bg-[#23775b] text-white font-medium rounded-lg transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Success Message */}
                    {isSuccess && (
                        <p className="text-center text-green-500 font-medium">
                           ✅ Message sent successfully to Lalit Singh!
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}