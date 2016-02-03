import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

let ServerActions = {
	recieveLinks(links) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECIEVE_LINKS,
			links
		})
	}
}

export default ServerActions;