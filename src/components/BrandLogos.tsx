import React from 'react';

type LogoProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function GoogleCalendarLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#1967D2" d="M40 8H8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Z"/>
      <path fill="#FAFAFA" d="M34 14H14v20h20V14Z"/>
      <path fill="#34A853" d="M26 24h8v10h-8z"/>
      <path fill="#EA4335" d="M14 24h8v10h-8z"/>
      <path fill="#FBBC04" d="M26 14h8v10h-8z"/>
      <path fill="#4285F4" d="M14 14h8v10h-8z"/>
    </svg>
  );
}

export function OutlookLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#0A5BD3" d="M28 8h12a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H28z"/>
      <path fill="#1066E1" d="M6 12a4 4 0 0 1 4-4h18v32H10a4 4 0 0 1-4-4V12z"/>
      <rect x="14" y="18" width="12" height="12" rx="6" fill="#fff"/>
    </svg>
  );
}

export function ZoomLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="40" height="28" x="4" y="10" rx="6" fill="#2D8CFF"/>
      <path d="M23 19c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v10c0 .87-1.012 1.363-1.707.8l-4.586-3.67A2 2 0 0 0 25 26h-0.5c-.828 0-1.5-.672-1.5-1.5V19Z" fill="#fff"/>
      <rect x="10" y="18" width="10" height="12" rx="2" fill="#fff"/>
    </svg>
  );
}

export function GoogleMeetLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#188038" d="M8 12a4 4 0 0 1 4-4h12v12H8z"/>
      <path fill="#34A853" d="M8 28V12h16v12l-6 4z"/>
      <path fill="#FBBC04" d="M28 8h12a4 4 0 0 1 4 4v12H28V8z"/>
      <path fill="#EA4335" d="M44 24v12a4 4 0 0 1-4 4H28V24h16z"/>
      <path fill="#4285F4" d="M24 24v16H12a4 4 0 0 1-4-4V20l12 4z"/>
    </svg>
  );
}


