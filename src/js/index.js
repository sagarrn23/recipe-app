import Search from './models/Search';
import * as searchView from './view/searchView';
import {elements} from './view/base';

/** global state 
 * - search object
 * - current recipe onject
 * - shopping list object
 * - liked recipes
*/

const state = {};

const controlSearch = async () => {
    //get query
    const query = searchView.getInput();
    console.log(query);

    if(query) {
        // 2) new search object and add to state
        state.search = new Search(query);

        // 3) prepare UI for result
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipe
        await state.search.getResult();

        // 5) render result on UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}

elements.searchFrom.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});