import PropTypes, { object } from 'prop-types';

const List = props => {
    const arr = props.colors
    const lis = arr.map((item, index) => <li key={index}>{item.name}</li>);

    return (
        <div>
            <ul>
                {lis}
            </ul>
            <p>props的默认值</p>
        </div>
    );
};

List.propTypes = {  // 为组件添加校验规则。
    colors: PropTypes.array,
    fn: PropTypes.func, //后面接 .isRequired 表示必需要传
    obj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number
    }).isRequired
};

export default List;