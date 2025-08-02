import { privacyTerms } from "@/legals";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {privacyTerms}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/icon.png"
                alt="HK Bus Time Icon"
                width={32}
                height={32}
                className="w-8 h-8 rounded"
              />
              <span className="text-lg font-semibold">HK Bus Time</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 HK Bus Time. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
