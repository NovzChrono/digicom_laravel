import { SVGAttributes } from 'react';

export default function ApplicationLogo({ className = '' }) {
    return (
        <img
            className={className}
            src="/assets/images/logo/logo.png"
            alt="logo"
        />
    );
}
