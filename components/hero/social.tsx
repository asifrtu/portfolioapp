// import { Github, Linkedin, Twitter } from 'lucide-react'; <-- Remove these
import { SiGithub, SiX } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 p-4">
      {/* GitHub */}
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <SiGithub size={24} className="hover:text-black transition-colors" />
      </a>

      {/* LinkedIn */}
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <SlSocialLinkedin size={24} className="text-[#0077B5] hover:opacity-80 transition-opacity" />
      </a>

      {/* Twitter / X */}
      <a href="https://x.com" target="_blank" rel="noreferrer">
        <SiX size={24} className="hover:text-gray-700 transition-colors" />
      </a>
    </div>
  );
}
