import './App.css';
import globeSVG from './assets/svg/globe.svg';
import articles from './data/articles';
import archiveSVG from './assets/svg/archive.svg';

function App() {
  return (
    <main>
      <header>
        {/* <h1></h1> */}
        <a className='logo-and-text' href='/'>
          <img src={globeSVG} width="50px" alt='tinyatlas.dev'/>
          <h4>mydevdocs</h4>
        </a>

        <nav>
          <ul>
            <li><a href='/'>home</a></li>
            <li><a href='/'>explore</a></li>
          </ul>
        </nav>
      </header>

      <section className='hero'>
        <div className='text-container'>
          <div className='title'>from systems to sites, and everything between.</div>
          <p>
            a personal archive of insights, resources, and notes.
          </p>
        </div>
        <div className='image-container'>
          <img src={archiveSVG} width="90px" alt='archive.svg'></img>
        </div>
      </section>

      <section className='article-cards'>
      {articles.map(article => {
        return (
          <>
            <article>
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </article>
            {article.id < articles.length ? <hr/> : ""}
          </>
        );
      })}
      </section>

    </main>
  );
}

export default App;
