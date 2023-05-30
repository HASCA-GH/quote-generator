import 'react';

declare module 'react' {
    interface JSX {
        // Add interfaces for HTML elements you use in your JSX
        // For example, to fix the error with <div>, you can add:
        // interface IntrinsicElements {
        //   div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        // }
        div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        // Add interfaces for other HTML elements you use in your JSX
    }
}