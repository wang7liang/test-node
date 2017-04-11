/**
 * Created by wang7liang on 2017/4/4.
 */
import React from 'react';
export default class StaffHeader extends React.Component{

    handlerSearch(){
        let bar = this.refs.searchBar;
        let value = bar.value;
        this.props.searchStaff(value);
    }

    render(){
        return (
            <div>
                <h3 style={{'textAlign':'center'}}>人员管理系统</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className="headerTd"><input ref='searchBar' type='text'onChange={this.handlerSearch.bind(this)}  placeholder='Search...' /></td>
                            <td className="headerTd">
                                <label htmlFor='idSelect'>人员筛选</label>
                                <select id='idSelect'>
                                    <option value='0'>全部</option>
                                    <option value='1'>主任</option>
                                    <option value='2'>老师</option>
                                    <option value='3'>学生</option>
                                    <option value='4'>实习</option>
                                </select>
                            </td>
                            <td>
                                <label htmlFor='orderSelect'>排列方式</label>
                                <select id='orderSelect'>
                                    <option value='0'>身份</option>
                                    <option value='1'>年龄升</option>
                                    <option value='2'>年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}