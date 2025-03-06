"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }
  }, [router, status]);

  if (status !== "authenticated") {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="w-32">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
