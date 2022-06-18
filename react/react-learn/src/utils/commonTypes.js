// 导出一些属性约束
import PropTypes from "prop-types";
const types = {
	datas: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	),
    children:PropTypes.node,
    data:PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }),
    chooseData:PropTypes.arrayOf(PropTypes.string)
};

export default types;