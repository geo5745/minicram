import EditSet from './create_edit_set';
import {connect} from 'react-redux';
import { openProtected, closeProtected } from '../actions/ui_actions';
import {fetchSet,createSet, clearSet,deleteCard } from '../actions/api_actions';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
    return ({
        session: state.session,
        sets: Object.values(state.sets)[0],
        cards: Object.values(state.cards),
        formType: "edit",
        save: true,
        setId: ownProps.match.params.setId
    })};

const mapDispatchToProps = (dispatch) => ({
    openProtected: () => dispatch(openProtected()),
    closeProtected: () => dispatch(closeProtected()),
    fetchSet: (setId) => dispatch(fetchSet(setId)),
    createSet: (session) => dispatch(createSet(session)),
    clearSet: () => dispatch(clearSet()),
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditSet));