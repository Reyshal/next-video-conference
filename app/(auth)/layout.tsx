"use client";

import { LoadingSpinner } from "@/components/loading-spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [router, status]);

  if (status !== "unauthenticated") {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="w-32">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[90vh] w-screen flex items-center justify-center">
      <div className="w-[80%] sm:max-w-[400px]">{children}</div>
    </div>
  );
}
