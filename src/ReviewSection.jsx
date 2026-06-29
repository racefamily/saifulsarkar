import React from "react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      title: "অসাধারণ কোর্স",
      content:
        "আমি ২০২৩ সালে এই কোর্সে ভর্তি হয়েছিলাম। ডিজিটাল মার্কেটিং শিখে আমি এখন ‘বই প্রিয়’ নামে একটি বুক পেইজ নিয়ে কাজ করছি এবং এই কোর্সের প্রতিটি বিষয় আমার কাজে লাগছে। আমার মতে, Saiful Sarkar স্যার একজন দুর্দান্ত প্রশিক্ষক। শুভকামনা এবং সুন্দর কোর্সের জন্য ধন্যবাদ।",
      author: "Mobarok Hossain",
      designation: "Owner, বই প্রিয়",
      imageUrl: "https://i.imgur.com/GqL8zQj.jpg",
    },
    {
      id: 2,
      title: "জীবন বদলে দেওয়া কোর্স",
      content:
        "আমি ডিজিটাল মার্কেটিং শিখে এখন সন্দ্বীপের একটি সরকারি প্রতিষ্ঠানে শিক্ষক হিসেবে কাজ করছি। এই কোর্স না করলে আমি এই জায়গায় আসতে পারতাম না। Saiful Sarkar স্যার সবসময় সহযোগিতা করেছেন।",
      author: "Md Sultanul Arifin",
      designation: "Instructor, Sandwip Technical Training Center",
      imageUrl: "https://i.imgur.com/eJYoE16.jpg",
    },
    {
      id: 3,
      title: "উপকারী একটা কোর্স",
      content:
        "ডিজিটাল মার্কেটিং শিখে বর্তমানে Harbour IT & Training Institute এ Assistant Sales Manager হিসেবে কাজ করছি। Saiful Sarkar স্যারের কাছ থেকে অনেক সহযোগিতা পেয়েছি।",
      author: "Sajal Islam Rabbi",
      designation: "ASM, Harbour IT & Training Institute",
      imageUrl: "https://i.imgur.com/5ETwTnQ.jpg",
    },
    {
      id: 4,
      title: "সময় উপযোগী কোর্স",
      content:
        "ডিজিটাল মার্কেটিং বর্তমান ও ভবিষ্যতের জন্য অত্যন্ত প্রয়োজনীয় একটি স্কিল। এই কোর্স আমার চাকরি ও ফ্রিল্যান্সিং জীবনে অনেক সাহায্য করেছে।",
      author: "Anika Khanam",
      designation: "Assistant Teacher, Radiant School and College",
      imageUrl: "https://i.imgur.com/wzHsryU.jpg",
    },
    {
      id: 5,
      title: "খুবই উপকারী কোর্স",
      content:
        "আমি বর্তমানে বাংলাদেশ রেডক্রিসেন্ট সোসাইটিতে ICT Media Publication Department এ কাজ করছি। Saiful Sarkar স্যার একজন অসাধারণ মেন্টর ও প্রশিক্ষক।",
      author: "Shajidul Ridoy",
      designation:
        "বাংলাদেশ রেডক্রিসেন্ট সোসাইটি, ICT Media Publication",
      imageUrl: "https://i.imgur.com/zNtjFfY.jpg",
    },
    {
      id: 6,
      title: "বেকারত্ব থেকে মুক্তির পথ",
      content:
        "ছাত্র অবস্থায় ডিজিটাল মার্কেটিং কোর্স করে এখন Harbour IT এ Sales Officer হিসেবে কাজ করছি। আন্তরিক ধন্যবাদ Saiful Sarkar স্যারকে।",
      author: "Mohammad Nazim Uddin",
      designation: "Student",
      imageUrl: "https://i.imgur.com/BwUW8iZ.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-900">
          ছাত্র/ছাত্রীদের অনুভূতি
        </h2>

        <p className="text-gray-600 mt-3">
          আমাদের শিক্ষার্থীদের বাস্তব অভিজ্ঞতা ও সফলতার গল্প
        </p>
      </div>

      {/* Review Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            {/* Top Section */}
            <div className="flex items-center mb-4">
              <img
                src={review.imageUrl}
                alt={review.author}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                loading="lazy"
              />

              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {review.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.author}
                </p>

                <p className="text-sm text-purple-700">
                  {review.designation}
                </p>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-gray-700 leading-8 text-justify">
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;