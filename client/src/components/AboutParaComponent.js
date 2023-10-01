import React from "react";

import {Card, CardBody} from "@nextui-org/react";

export default function AboutParaComponent() {
  return (
<Card className="w-10/12 h-fit pr-10 mx-auto my-10 text-lg bg-gray-900 text-white">
  <CardBody className="m-10">
    <p className="mb-4">
      Welcome to our Hostel Allotment Website! We are delighted to introduce you to our user-friendly platform designed to streamline the hostel allocation process, ensuring a comfortable and hassle-free experience for students and administrators alike.
    </p>
    <p className="mb-4">
      Our Mission At the core of our mission is the commitment to provide efficient, fair, and transparent hostel allotment services for college and university students. We aim to create a sense of community and convenience by simplifying the room allocation process.
    </p>
    <h1 className="text-2xl mb-2">What Sets Us Apart</h1>
    <div className="mb-4">
      <ul className="list-disc list-inside">
        <li>User-Centric Approach: We prioritize the needs and preferences of our users, making it easy for them to select their ideal accommodations.</li>
        <li>Administrative Control: Our platform empowers administrators with the tools they need to manage allocations effectively.</li>
        <li>Transparency: We believe in transparency throughout the process, from form submissions to room assignments.</li>
      </ul>
    </div>
    <p className="mb-4">
      Join us in simplifying the hostel allocation journey, enhancing the student living experience, and fostering a sense of belonging within the campus community. We're here to make your stay with us as comfortable and enjoyable as possible.
    </p>
    <h2 className="text-2xl">Welcome to your new home away from home!</h2>
  </CardBody>
</Card>

  );
}
