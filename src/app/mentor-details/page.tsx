import MentorDetails from "@/components/MentorDetails";
import { Suspense } from "react";

export default function MentorDetailsPage() {
  return (
    <div className="pl-[200px] overflow-x-hidden">
      <Suspense>
        <MentorDetails />
      </Suspense>
    </div>
  );
}
