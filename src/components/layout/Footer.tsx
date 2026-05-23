import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#020206]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-zinc-500 max-w-xs leading-relaxed">
              AI-native mobile product studio. Design → AI → App Store.
            </p>
            <p className="mt-6 text-xs font-medium tracking-widest uppercase text-zinc-600">
              Design → AI → App Store
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "Process"
                        ? "#process"
                        : item === "Journal"
                          ? "#journal"
                          : item === "Contact"
                            ? "#contact"
                            : "#"
                    }
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">
              Stack
            </h4>
            <ul className="space-y-3">
              {footerLinks.stack.map((item) => (
                <li key={item}>
                  <a
                    href="#stack"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Mapica. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            San Francisco · Remote-first
          </p>
        </div>
      </div>
    </footer>
  );
}
