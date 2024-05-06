"use client";

import { useState } from "react";

import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import "./page.css";

export default function Enrollment() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            ...name,
            ...email,
            ...reason,
            ...date,
            ...message,
        };

        // send request on backend

        resetState();
    }

    function resetState() {
        setName("");
        setEmail("");
        setReason("");
        setDate("");
        setMessage("");
    }

    return (
        <div className="container">
            <Banner />
            <div className="enrollment_container">
                <div className="page_presentation">
                    <h1>Contact us</h1>
                    <form className="enrollment-form">
                        <div className="form-cell">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name..."
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                id="name"
                                autoComplete="name"
                            />
                        </div>

                        <div className="form-cell">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Email..."
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                id="email"
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-cell">
                            <label htmlFor="reason">Reason</label>
                            <input
                                type="text"
                                placeholder="Reason..."
                                onChange={(e) => setReason(e.target.value)}
                                value={reason}
                                id="reason"
                                autoComplete="reason"
                            />
                        </div>

                        <div className="form-cell">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                placeholder="Date..."
                                onChange={(e) => setDate(new String(e.target.value))}
                                value={date}
                                id="date"
                                autoComplete="date"
                            />
                        </div>

                        <div className="form-cell">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="message-cell"
                                placeholder="Message..."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                id="message"
                                autoComplete="message"
                            />
                        </div>

                        <div className="form-cell">
                            <button type="submit" className="form-btn" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                    </form>
                </div>
                <Categories />
            </div>
        </div>
    );
}
