import { REQUESTED_HEART_RATE, UPDATE_BEAT, USER_CANCELLED } from './constants'
import HeartRate from './heart-rate-union'

const reducer = (state, action) => {
  switch (action.type) {
    case REQUESTED_HEART_RATE:
      return {
        ...state,
        heartRate: HeartRate.Requested
      }

    case UPDATE_BEAT:
      return {
        ...state,
        heartRate: HeartRate.Beating(action.heartRate)
      }

    case USER_CANCELLED:
      return {
        ...state,
        heartRate: HeartRate.Error('User cancelled the request'),
      }

    default:
      return state
  }
}

export default reducer;
