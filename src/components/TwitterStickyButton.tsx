import { Twitter } from "lucide-react";

const TwitterStickyButton = () => {
  return (
    <a
      href="https://x.com/hedgefundpump"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-hedge-medium to-hedge-bright flex items-center justify-center shadow-lg hover:shadow-hedge-bright/50 hover:scale-110 transition-all duration-300 group"
      aria-label="Follow us on Twitter"
    >
      <Twitter className="w-6 h-6 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
};

export default TwitterStickyButton;

