import React from "react";
import PostCard from "./PostCard";

export default function Gallery() {
  const metaContent = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div class="px-5 mt-10 mx-auto grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 md:gap-5 md:max-w-7xl">
      {metaContent.map((content) => (
        <PostCard content={content} />
      ))}
    </div>
  );
}
