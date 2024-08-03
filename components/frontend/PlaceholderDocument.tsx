"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {};

export default function PlaceholderDocument({}: Props) {
  const router = useRouter();

  const handleClick = () => {
    // Check if user is hobby and if they're over file limit, push to upgrade page
    router.push("/dashboard/upload");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-indigo-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a document</p>
    </Button>
  );
}
