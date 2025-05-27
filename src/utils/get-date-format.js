import moment from 'moment'
import 'moment-precise-range-plugin'

export const getDateFormat = (date) => {
	return moment(date).format('DD.MM.YYYY  HH:mm:ss')
}
