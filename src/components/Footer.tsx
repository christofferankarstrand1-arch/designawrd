export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#B4D12E] rotate-45" />
              <div className="w-3 h-3 bg-[#F58220] rotate-45" />
              <div className="w-3 h-3 bg-[#FFD100] rotate-45" />
              <div className="w-3 h-3 bg-[#0071BC] rotate-45" />
            </div>
            <span className="text-lg tracking-wide">EXIMIUS PARTNER</span>
          </div>

          {/* Copyright */}
          <div className="text-neutral-400 text-sm">
            Copyright © {new Date().getFullYear()} All Rights Reserved | Eximius Partner AB
          </div>
        </div>
      </div>
    </footer>
  );
}
