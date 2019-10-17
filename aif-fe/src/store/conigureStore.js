/**
 * Created by rajasekhar on 27-Sep-18.
 */
import { createStore} from 'redux';
import reducers from './../reducers/reducers'

function store() {
    return createStore(reducers);
}
export default store();
