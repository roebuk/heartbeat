import { taggedSum } from 'daggy';

const HeartRate = taggedSum('HeartRate', {
  NotRequested: [],
  Requested: [],
  Beating: ['beats'],
  Error: ['error']
})

export default HeartRate
