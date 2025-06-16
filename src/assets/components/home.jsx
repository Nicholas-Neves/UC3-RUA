import React from "react";
import "./home.css";

export default function Home() {
  return (
    <main className="home">
      {/* Post 1 */}
      <article className="post">
        <section className="post-header">
          <div className="laricon" />
          <div>
            <div className="display">🧚‍♀️</div>
            <div className="username">@leaoalari</div>
            <p className="text">
              Primeiro post da casa e o primeiro shape que saiu da oficina! OI RUA!!!
            </p>
          </div>
        </section>

        <div className="larimage" />

        <div className="post-actions">
          <div className="icon-like" />
          <div className="icon-comment" />
          <div className="icon-share" />
        </div>
      </article>

     
      <article className="post">
        <div className="post-header">
          <div className="tonicon" />
          <div>
            <div className="display">Tony 🦅</div> 
            <div className="username">@ton11</div>
            <p className="text">
              I'm very happy to show the new deck I just got from RUA, thanks Brazil
            </p>
          </div>
        </div>

        <div className="tonimage" />

        <div className="post-actions">
          <div className="icon-like"  />
          <div className="icon-comment" />
          <div className="icon-share" />
        </div>
      </article>
    </main>
  );
}
