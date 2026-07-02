"use client";

import dynamic from "next/dynamic";

const ContactScene = dynamic(() => import("@/components/ContactScene"), {
  ssr: false,
});

export default function Page() {
  return <ContactScene />;
}
