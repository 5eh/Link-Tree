import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-12 flex items-center justify-center min-h-[50vh]">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="flex flex-col w-fit justify-center items-center border border-gray-400 rounded-2xl backdrop-blur-2xl px-8 py-10">
          <div className="mb-8 rounded-full p-8">
            <Image
              src="/Arthur_Labs-Logo.png"
              alt="Arthur Labs Logo"
              width={64}
              height={64}
              className="w-24 h-24"
            />
          </div>
          <div className="mb-8 w-full max-w-md flex justify-center">
            <Link href="https://builder.arthurlabs.net/contact">
              <button
                type="submit"
                className="rounded-full bg-black text-white border border-white/40 py-2 px-6 hover:bg-zinc-800 hover:border-white/20 transition-all duration-300"
              >
                Let&apos;s talk business
              </button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-bold">
              © 2024 Arthur Labs Web Builder. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Filing WY S-Corp: 2024-001512097
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
