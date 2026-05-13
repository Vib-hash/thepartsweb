import Image from "next/image";

const linkColumns = [
  {
    title: "Product",
    links: [
      { label: "Workshops", href: "#workshops" },
      { label: "Vendors", href: "#vendors" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#about" },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Early Access", href: "#early-access" },
      { label: "Vendor Partner", href: "#vendors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #f97316 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <a href="/" className="inline-block">
              <Image
                src="/partweb-logo.png"
                alt="PartWeb"
                width={140}
                height={36}
                unoptimized
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Realtime Automotive Procurement Network
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 md:gap-16">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-center text-sm text-gray-600">
            &copy; 2026 PartWeb. Built for India&apos;s automotive aftermarket
            ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
