import './App.css';
import Hero from './App/Components/Hero';
import MovieList from './App/Components/MovieList';
import Nav from './App/Components/Nav';


function App() {
    return (
        <div>
            <div className='max-w-4xl mx-auto'>
                <Nav />
                <Hero/>
                <MovieList
                 title="Top Rated 🔥"
                 filter="sorty_by=rating"
                 />
                <MovieList
                 title="Action 🔥"
                 filter="genre=action"
                 />
                <MovieList
                 title="Horror 🔥"
                 filter="genre=horror"
                 />
                <MovieList
                 title="Thriller 🔥"
                 filter="genre=thriller"
                 />
            </div>
        </div>
    );
}

export default App;
