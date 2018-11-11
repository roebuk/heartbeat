import prop from 'ramda/src/prop';
import invoker from 'ramda/src/invoker';
import compose from 'ramda/src/compose';

//--- getEventValue :: Event -> a
const getEventValue = compose(
  prop('value'),
  prop('target')
)

//---  getFirstByteOffset :: DataView -> Number
const getFirstByteOffset = invoker(1, 'getUint8')

//--- getHeartBeatValue :: Event -> Number
const getHeartBeatValue = compose(
  getFirstByteOffset(1),
  getEventValue
)

export {
  getEventValue,
  getFirstByteOffset,
  getHeartBeatValue
}
