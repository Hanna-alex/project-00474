import moment from 'moment'
import 'moment-precise-range-plugin'

export const getDate = () => {
	return moment(new Date()).format('DD.MM.YYYY HH:mm:ss')
}
