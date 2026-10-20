import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import BookShelf from "./components/BookShelf.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./app.css";

export default function App() {
  return (
    <>
      <Header />

      <main id="top">
        <section id="about" className="intro" aria-labelledby="intro-heading">
          <div className="container">
            <h1 id="intro-heading">A place to read, study and learn</h1>
            <p>
              Bright Future Library is open to everyone in the community. Borrow a
              book, find a quiet desk or join a reading group.
            </p>
            <a className="button" href="#books">Browse books</a>
          </div>
        </section>

        <Services />

        <div id="books">
          <BookShelf />
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}