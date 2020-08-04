import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = /* getMovies()는 시간이 필요함 */ async () => {
        const movies = /* axios.get()의 실행을 기다림 (async 안에서만 작동) */ await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log(movies.data.data.movies);
    }

    componentDidMount() {
        // 영화 데이터 로딩
        this.getMovies();
    }

    render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'} </div>;
    }
}

export default App;
