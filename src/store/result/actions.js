import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { API_URL } from '../../config'

const resultLoaded = createAction('RESULT_LOADED')
const questionLoaded = createAction('QUESTION-DETAIL_LOADED')

const fetchResult = participationId => dispatch => {
  return http
    .get(`${API_URL}/result/` + participationId)
    .then(result => dispatch(resultLoaded(result)))
    .catch(() => dispatch(growl('Erro ao carregar o resultado', GROWL_ERROR)))
}

const fetchQuestionDetail = (participationId, questionId) => dispatch => {
  return http
    .get(`${API_URL}/result/question/${participationId}/${questionId}`)
    .then(question => dispatch(questionLoaded(question)))
    .catch(() =>
      dispatch(growl('Erro ao carregar os detalhes da questão', GROWL_ERROR)),
    )
}

export { resultLoaded, fetchResult, questionLoaded, fetchQuestionDetail }
