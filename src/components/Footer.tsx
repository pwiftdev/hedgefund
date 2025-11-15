import { Twitter } from "lucide-react";
import hedgeLogo from "@/assets/hedge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={hedgeLogo} alt="$HEDGE" className="w-12 h-12" />
                <span className="text-2xl font-bold">$HEDGE</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                The only hedge fund backed by actual hedges. Stay green, invest in shrubbery.
              </p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Join the Hedge Fund</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://x.com/hedgefundpump" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Contract Address:<br />
                <a 
                  href="https://pump.fun/coin/CoCCScRnAcuUy4qVD298jYfdWG65iv5e6V1mY59Qpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-primary-foreground/80 hover:text-primary-foreground break-all transition-colors"
                >
                  CoCCScRnAcuUy4qVD298jYfdWG65iv5e6V1mY59Qpump
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-primary-foreground/60">
                © 2025 $HEDGE. All rights reserved to the hedges.
              </p>
              <p className="text-primary-foreground/60 text-center md:text-right italic">
                Disclaimer: Not financial advice. We're literally bushes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
