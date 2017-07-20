import 'raf/polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme/build/adapters/ReactSixteenAdapter'

Enzyme.configure({ adapter: new Adapter() })
