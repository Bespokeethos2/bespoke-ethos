// app/api/dev-coder/route.ts
// This endpoint previously proxied OpenAI for a dev-coder chat.
// It has been intentionally disabled and now always returns 503.

export async function POST() {
  return new Response("Dev coder endpoint has been disabled.", {
    status: 503,
  });
}
