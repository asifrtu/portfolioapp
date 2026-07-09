export default function ArticleContent() {
  return (
    <section className="prose prose-neutral dark:prose-invert max-w-none mt-14">

      <p>
        Authentication has changed significantly over the last few years.
        Simply storing JWTs in localStorage is no longer considered the
        safest solution for modern applications.
      </p>

      <h2>Why HttpOnly Cookies?</h2>

      <p>
        HttpOnly cookies cannot be accessed by JavaScript. This prevents
        attackers from stealing tokens through XSS attacks.
      </p>

      <blockquote>
        Security isn't one feature—it's a collection of small,
        intentional decisions.
      </blockquote>

      <h2>Authentication Flow</h2>

      <ol>
        <li>User logs in</li>
        <li>Server verifies credentials</li>
        <li>Access Token is generated</li>
        <li>Refresh Token stored in database</li>
        <li>Both returned via HttpOnly Cookies</li>
      </ol>

      <pre>
{`export async function POST() {
  const token = await signJwt(user);

  cookies().set("accessToken", token, {
    httpOnly: true,
    secure: true
  });

  return Response.json({ success: true });
}`}
      </pre>

      <h2>Middleware Protection</h2>

      <p>
        Middleware can verify the cookie before allowing protected routes
        to render.
      </p>

      <h2>Conclusion</h2>

      <p>
        Combining HttpOnly cookies, rotating refresh tokens, CSRF
        protection, and middleware creates a production-ready
        authentication system.
      </p>
    </section>
  );
}