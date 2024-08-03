"use client";

import useUpload from "@/hooks/useUpload";
import clsx from "clsx";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

type Props = {};

export default function FileUploader({}: Props) {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      await handleUpload(file);
    } else {
      // toast...
    }
  }, []);

  const { getInputProps, getRootProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      maxFiles: 1,
    });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto cursor-pointer">
      {uploadInProgress ? (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          <div
            className={clsx(
              "radial-progress bg-indigo-300 text-white border-indigo-600 border-4",
              progress === 100 ? "hidden" : ""
            )}
            role="progressbar"
            style={{
              // @ts-ignore
              "--value": progress,
              "--size": "12rem",
              "--thickness": "1.3rem",
            }}
          >
            {progress}%
          </div>

          <p>
            <>{status}</>
          </p>
        </div>
      ) : null}

      <div
        {...getRootProps()}
        className={clsx(
          "p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center",
          isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
        )}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop files here...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                {"Drag 'n' Drop some files here, or click to select files."}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
