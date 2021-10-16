import { getMovies } from '../api/movies';
import { createMovieTags } from './list/index';
import { createPages } from './pager/index'

async function init() {
    const res = await getMovies(1, 30);
    // console.log(res.data.movieList)
    createMovieTags(res.data.movieList); //生成列表
    createPages(1, 30, res.data.movieTotal); //生成分页
}
init()