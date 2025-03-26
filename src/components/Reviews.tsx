import Image from "next/image";
import React from "react";

function Reviews() {
  const reviews = [
    {
      ratings: "5.0",
      review_text:
        "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me.",
      image: "/review_user1.png",
      name: "Vedang Shah",
    },
    {
      ratings: "4.5",
      review_text:
        "His ability to create a relaxed atmosphere and provide insightful feedback made the hour-long session highly productive.",
      image: "/review_user2.png",
      name: "Anonyms",
    },
    {
      ratings: "5.0",
      review_text:
        "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me. His honest and actionable feedback on my technical abilities was invaluable",
      image: "/review_user3.png",
      name: "Hemet Singh",
    },
  ];
  return (
    <div className=" flex flex-col gap-5 py-10 drop-shadow-xl">
      <h1 className="text-[#0F172A] text-2xl leading-8 font-normal">Reviews</h1>

      <div className="flex gap-2 items-center py-4">
        <p className="text-[#64748B] text-base font-medium">3 Reviews | 5.0 </p>
        <Image
          src="/star.png"
          width={200}
          height={100}
          alt="ratings"
          unoptimized
          className="w-4 h-4"
        />
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className="w-full h-48 border border-[#CBD5E1] rounded-xl p-6  gap-3 bg-white"
        >
          <div className="flex gap-2 items-center py-4">
            <p className="text-[#64748B] text-base font-medium">
              {review.ratings}
            </p>
            <Image
              src="/star.png"
              width={200}
              height={100}
              alt="ratings"
              unoptimized
              className="w-4 h-4"
            />
          </div>
          <div className="rounded-sm bg-[#F8FAFC] py-3 px-2">
            <p className="text-[#334155] font-medium text-sm leading-5">
              {review.review_text}
            </p>
          </div>

          <div className="flex items-center gap-2 py-2">
            <Image
              src={review.image}
              width={0}
              height={0}
              alt="review user avatar"
              className="w-8 h-8 rounded-full"
              unoptimized
              quality={100}
            />
            <p className="text-sm font-medium leading-5 text-[#64748B]">
              {review.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
