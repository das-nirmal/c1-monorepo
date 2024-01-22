import type { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  console.log("Request Url: ", getRequestURL(event));
  console.log("Request headers: ", getRequestHeaders(event));

  return {
    success: true,
    data: {
      message: "Hello"
    }
  };
})