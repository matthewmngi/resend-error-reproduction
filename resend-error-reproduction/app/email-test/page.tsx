"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmailTest() {
    const [sending, setSending] = useState(false)

    async function handleClick() {
        setSending(true);

        try {
            const response = await fetch(`/api/send`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.error("Failed to send email:", response.body);
                
                setSending(false);
                return;
            }
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <div >
            {sending ? (
                <button onClick={() => handleClick()} disabled>
                    Sending...
                </button>
            ) : (
                <button onClick={() => handleClick()}>Send Email</button>
            )}
        </div>
    )
}