import EditSet from './create_edit_set';
import {connect} from 'react-redux';
import { openProtected, closeProtected } from '../actions/ui_actions';
import {fetchSet,createSet, clearSet,deleteCard, addCard, updateCard, updateSet, deleteSet } from '../actions/api_actions';
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
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    addCard: (set) => dispatch(addCard(set)),
    updateCard: (card) => dispatch(updateCard(card)),
    updateSet: (set) => dispatch(updateSet(set)),
    deleteSet: (setId) => dispatch(deleteSet(setId))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditSet));