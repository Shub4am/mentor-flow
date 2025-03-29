import MentorDetails from "@/components/MentorDetails";
import { Suspense } from "react";

export default function MentorDetailsPage() {
  return (
    <div className="pl-5 sm:pl-12 overflow-x-hidden">
      <Suspense>
        <MentorDetails />
      </Suspense>
    </div>
  );
}
