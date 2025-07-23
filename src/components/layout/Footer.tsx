import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 bg-neutral text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Fardil</span>
        <div className="flex gap-4">
          <a href="#" aria-label="GitHub" className="hover:text-accent">
            <FaGithub />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-accent">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
