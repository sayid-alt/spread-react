import React from "react";

export default function PostCard() {
  return (
    <div class="mt-5 shadow-md p-5 rounded-md border border-blue-500/10">
      <div class="flex items-center gap-2">
        <div class="bg-blue-500 w-8 h-8 p-1 flex items-center justify-center rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
          <span class="font-medium text-white  dark:text-white">TH</span>
        </div>
        <span>|</span>
        <p class="font-bold text-primary text-base">post.header</p>
      </div>
      <p class="text-sm text-secondary mt-2 ">post.body</p>
      <p class="font-medium text-secondary mt-3 text-xs">~ post.category</p>

      <div class="mt-5 flex justify-between items-center">
        <div class="flex gap-3">
          <form action="/likes" method="post">
            <input type="text" name="postId" value="post._id" hidden />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                />
              </svg>
            </button>
          </form>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19l6.4-7z"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Zm2-3.05l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"
              />
            </svg>
          </button>
        </div>
        <div class="text-xs text-secondary">date here</div>
      </div>
    </div>
  );
}
