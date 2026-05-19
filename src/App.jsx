import { useEffect } from "react";
import "./App.css";
import siteData from "./data.json";

function App() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav id="navbar">
        <a href="#" className="nav-logo">
          {siteData.settings.artist_name}
          <span>{siteData.settings.tagline}</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">Tentang</a>
          </li>
          <li>
            <a href="#discography">Album</a>
          </li>
          <li>
            <a href="#gallery">Galeri</a>
          </li>
          <li>
            <a href="#events">Penampilan</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Penyanyi & Seniman Bali</span>
          </div>

          <h1 className="hero-name">{siteData.settings.artist_name}</h1>

          <p className="hero-subtitle">{siteData.settings.hero_subtitle}</p>

          <p className="hero-desc">{siteData.settings.bio}</p>

          <div className="hero-actions">
            <a href="#discography" className="btn-gold">
              ✦ Dengarkan Musik
            </a>

            <a href="#about" className="btn-outline">
              Kenali Lebih Dekat
            </a>
          </div>
        </div>

        {/* FOTO HERO */}
        <div className="hero-image-side">
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}uploads/foto-hero.jpeg`}
                alt="Ary Kencana"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-visual">
          <img
            src={`${import.meta.env.BASE_URL}uploads/about-photo.jpeg`}
            alt="About"
            className="about-photo-img"
          />
        </div>

        <div className="about-text">
          <h2 className="section-title">Tentang Ary Kencana</h2>

          <p>{siteData.settings.bio}</p>
        </div>
      </section>

      {/* ALBUM */}
      <section className="discography" id="discography">
        <h2 className="section-title">Album</h2>

        <div className="albums-grid">
          {siteData.albums.map((album) => (
            <div className="album-card" key={album.id}>
              <div className="album-cover">
                <img
                  src={`${import.meta.env.BASE_URL}${album.cover}`}
                  alt={album.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="album-overlay">
                <div className="album-title">{album.title}</div>

                <div className="album-year">{album.year}</div>

                {album.youtube_url && (
                  <a
                    href={album.youtube_url}
                    target="_blank"
                    rel="noreferrer"
                    className="album-play"
                  >
                    ▶
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">Galeri</h2>

        <div className="gallery-grid">
          {siteData.gallery.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="gallery-inner">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="gallery-info">
                <h4>{item.title}</h4>
                <p>{item.event_date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="events" id="events">
        <h2 className="section-title">Penampilan</h2>

        <div className="events-list">
          {siteData.events.map((event) => (
            <div className="event-item" key={event.id}>
              <div className="event-info">
                <h4>{event.title}</h4>
                <p>{event.location}</p>
                <span>{event.event_date}</span>
              </div>

              <div className="event-tag">{event.status}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="booking">
        <h2 className="section-title">Booking & Kerjasama</h2>

        <a
          href={`https://wa.me/${siteData.settings.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="btn-gold"
        >
          ✦ Hubungi via WhatsApp
        </a>
      </section>
    </>
  );
}

export default App;
