export default function Footer() {
  return (
    <footer className="border-t border-[#27272a]/50 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-[#52525b]">
          &copy; {new Date().getFullYear()} Marwan Mohamed
        </p>
        <a href="https://github.com/mmmelbahrawy55-beep" target="_blank" className="text-[12px] text-[#52525b] hover:text-[#a1a1aa] transition-colors">
          Built with Next.js
        </a>
      </div>
    </footer>
  );
}
