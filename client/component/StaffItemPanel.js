/**
 * Created by wang7liang on 2017/4/4.
 */
import React from 'react';
import StaffItem from './StaffItem.js';
export default class StaffItemPanel extends React.Component{
    render(){
        let items=[];
        if(this.props.items.length==0){
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>)
        }else{
            this.props.items.forEach(item=>{
                items.push(<StaffItem key={item.key} item={item} />);
            });
        }

        console.log(items);
        return (
            <table className='itemPanel'>
                <thead>
                    <tr>
                        <th className='itemTd'>姓名</th>
                        <th className='itemTd'>年龄</th>
                        <th className='itemTd'>身份</th>
                        <th className='itemTd'>性别</th>
                        <th className='itemTd'>操作</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}