import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { FilePlus2 } from "lucide-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-between items-center bg-white shadow-sm p-5 border-b">
      <Link href="/" className="text-2xl font-medium">
        Chat To <span className="text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>

          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>

          {/* Upgrade BTN */}

          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}
