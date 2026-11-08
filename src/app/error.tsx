'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="hero">
      <div className="container prose">
        <h1>Something went wrong</h1>
        <p className="hero__lede">This page could not be displayed. Please try again.</p>
        <button type="button" className="btn btn--primary" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </section>
  );
}
