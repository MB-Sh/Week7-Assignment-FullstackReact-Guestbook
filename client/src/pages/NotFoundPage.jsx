import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}