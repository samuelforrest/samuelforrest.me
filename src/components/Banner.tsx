"use client";

import Link from "next/link";

export default function TimedBanner() {
  return (
    <Link href="https://samueljforrest.substack.com">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-foreground text-card shadow-lg max-w w-[100%] p-1 text-center">
        <p>My Substack blog is out - and I want you to read it.</p>
      </div>
    </Link>
  );
}
