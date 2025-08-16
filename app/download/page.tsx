"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isIOS } from "react-device-detect";

export default function DownloadPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if device is iOS
    if (isIOS) {
      // Redirect to App Store for iOS devices
      window.location.href =
        "https://apps.apple.com/hk/app/hk-bus-time/id6749821674?platform=iphone";
    } else {
      // Redirect to home page for Android and other devices
      router.push("/");
    }
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
