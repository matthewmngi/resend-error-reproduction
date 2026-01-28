import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
        <div>
            <h1>Hello, {firstName}</h1>
            <p>The status of your application was updated: PENDING</p>
        </div>
    );
}