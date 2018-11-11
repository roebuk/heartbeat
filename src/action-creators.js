import { REQUESTED_HEART_RATE, UPDATE_BEAT, USER_CANCELLED } from './constants';
import { getHeartBeatValue } from './helpers'

const getHeartBeat = (e) => (
  { type: UPDATE_BEAT, heartRate: getHeartBeatValue(e) })


const userCancelled = (msg) => ({ type: USER_CANCELLED, msg })

const requestedHeartRate = () => ({ type: REQUESTED_HEART_RATE })

export {
  getHeartBeat,
  requestedHeartRate,
  userCancelled
}
