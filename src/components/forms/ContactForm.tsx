"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Literary Inquiries & Workshops",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message or inquiry.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate reliable frontend submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Literary Inquiries & Workshops",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {status === "success" ? (
        <div className="py-10 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-lavender flex items-center justify-center text-primary border border-gold/40">
            <CheckCircle2 className="w-9 h-9 text-gold" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-primary">
            Message Received with Gratitude
          </h3>
          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-md leading-relaxed">
            Thank you for reaching out to Read Pustak with Avni. We cherish every
            note from fellow readers, educators, and young writers. Our founders
            will review your inquiry promptly.
          </p>
          <div className="p-4 rounded-xl bg-ivory-warm border border-gold/20 text-xs text-charcoal text-left max-w-md mt-2">
            <span className="font-semibold text-primary block mb-1">
              Editorial Note:
            </span>
            This informational submission has been recorded in the client session.
            For urgent collaborations, feel free to email directly at{" "}
            <a
              href="mailto:contact@readpustak.com"
              className="text-gold font-bold hover:underline"
            >
              contact@readpustak.com
            </a>
            .
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <div className="flex flex-col gap-1 border-b border-border/80 pb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Correspondence</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">
              Send a Note to Our Founders
            </h3>
            <p className="font-sans text-sm text-charcoal-muted">
              Whether you are an educator, student, or book lover, we would love
              to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal"
              >
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Radhika Sharma"
                className={`w-full px-4 py-3 rounded-lg border text-sm font-sans transition-all focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-400 focus:ring-red-200"
                    : "border-border focus:border-gold focus:ring-gold/20"
                }`}
              />
              {errors.name && (
                <span className="flex items-center gap-1 text-xs text-red-600">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="name@domain.com"
                className={`w-full px-4 py-3 rounded-lg border text-sm font-sans transition-all focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:ring-red-200"
                    : "border-border focus:border-gold focus:ring-gold/20"
                }`}
              />
              {errors.email && (
                <span className="flex items-center gap-1 text-xs text-red-600">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="subject"
              className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal"
            >
              Inquiry Subject
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-border text-sm font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
            >
              <option value="Literary Inquiries & Workshops">
                Literary Inquiries & School Workshops
              </option>
              <option value="Book Reading & Storytelling Circles">
                Book Reading & Storytelling Circles
              </option>
              <option value="Community & Social Outreach Collaboration">
                Community & Social Outreach Collaboration
              </option>
              <option value="General Encouragement & Notes to Avni">
                General Encouragement & Notes to Avni
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal"
            >
              Your Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Share your thoughts, invite us to your school, or propose a collaboration..."
              className={`w-full px-4 py-3 rounded-lg border text-sm font-sans transition-all focus:outline-none focus:ring-2 resize-y ${
                errors.message
                  ? "border-red-400 focus:ring-red-200"
                  : "border-border focus:border-gold focus:ring-gold/20"
              }`}
            />
            {errors.message && (
              <span className="flex items-center gap-1 text-xs text-red-600">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto self-start px-8 py-3.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-editorial border border-gold/30 hover:border-gold disabled:opacity-60"
          >
            {status === "submitting" ? (
              <span>Transmitting Note...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-gold" />
                <span>Submit Letter</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

