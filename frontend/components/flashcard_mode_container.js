import FlashcardMode from './flashcard_mode';
import {connect} from 'react-redux';
import {fetchSet} from '../actions/api_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
        session: state.session,
        user: Object.values(state.users)[0],
        sets: Object.values(state.sets)[0],
        cards: Object.values(state.cards),
        setId: ownProps.match.params.setId
    })

const mapDispatchToProps = (dispatch) => ({
    fetchSet: (setId) => dispatch(fetchSet(setId))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FlashcardMode));