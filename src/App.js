import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = /* getMovies()�� �ð��� �ʿ��� */ async () => {
        const movies = /* axios.get()�� ������ ��ٸ� (async �ȿ����� �۵�) */ await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log(movies.data.data.movies);
    }

    componentDidMount() {
        // ��ȭ ������ �ε�
        this.getMovies();
    }

    render(){
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'} </div>;
    }
}

export default App;
