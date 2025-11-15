const TwitterStickyButton = () => {
  return (
    <a
      href="https://x.com/hedgefundpump"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-hedge-medium to-hedge-bright flex items-center justify-center shadow-lg hover:shadow-hedge-bright/50 hover:scale-110 transition-all duration-300 group"
      aria-label="Follow us on X"
    >
      <svg 
        className="w-6 h-6 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
  );
};

export default TwitterStickyButton;

