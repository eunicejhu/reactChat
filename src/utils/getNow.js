import moment from 'moment';
const getNow = () => moment().format(' h:mm:ss a');
export default getNow;