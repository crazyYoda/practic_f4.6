import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getCategories } from '../../actions/categories';


export class CategoryList extends Component{

    static propTypes = {
        categories: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getCategories();
    };

    render(){
        return (
        <>
            <h3>Категории</h3>
            <table>
                <tbody>
                    {this.props.categories.map(category => (
                        <tr key={category.id}>
                            <td>{ category.title }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })(CategoryList);