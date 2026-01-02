import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { PUBLICKEY, SERVICEKEY, TEMPLATEKEY } from '../config';

export default function EmailForm() {
    const form = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    // Form Validation
    const validateForm = () => {
        const formData = new FormData(form.current);

        const newErrors = {
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
        };

        let isValid = true;

        const name = formData.get('user_name')?.trim();
        const email = formData.get('user_email')?.trim();
        const subject = formData.get('subject')?.trim();
        const message = formData.get('message')?.trim();

        if (!name) {
            newErrors.user_name = 'Name is required';
            isValid = false;
        } else if (name.length < 2) {
            newErrors.user_name = 'Name must be at least 2 characters';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.user_email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.user_email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!subject) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        } else if (subject.length < 5) {
            newErrors.subject = 'Subject must be at least 5 characters';
            isValid = false;
        }

        if (!message) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    // Input Change Handler
    const handleInputChange = (e) => {
        const { name } = e.target;

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }

        if (isSuccess) {
            setIsSuccess(false);
        }
    };

    // Send Email
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSuccess(false);

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(
                SERVICEKEY,
                TEMPLATEKEY,
                form.current,
                PUBLICKEY
            )
            .then(() => {
                toast.success('Message sent successfully!');
                form.current.reset();
                setIsSuccess(true);
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                toast.error('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <form
                ref={form}
                onSubmit={sendEmail}
                noValidate
                className="space-y-4"
            >
                {/* Name */}
                <div>
                    <label htmlFor="user_name" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder="Your name"
                        disabled={isSubmitting}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.user_name}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border ${errors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388]`}
                    />
                    {errors.user_name && <p className="mt-1 text-sm text-red-500">{errors.user_name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="user_email" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        placeholder="your@example.com"
                        disabled={isSubmitting}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.user_email}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border ${errors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388]`}
                    />
                    {errors.user_email && <p className="mt-1 text-sm text-red-500">{errors.user_email}</p>}
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject of your message"
                        disabled={isSubmitting}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.subject}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388]`}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="Your message..."
                        disabled={isSubmitting}
                        onChange={handleInputChange}
                        aria-invalid={!!errors.message}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#52a388]`}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 text-white rounded-lg transition ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#52a388] hover:bg-[#23775b]'
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {isSuccess && (
                    <p className="text-center text-green-500 font-medium">
                        Message sent successfully to Lalit Singh!
                    </p>
                )}
            </form>
        </div>
    );
}
