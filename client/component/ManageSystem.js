/**
 * Created by wang7liang on 2017/4/4.
 */
import React from 'react';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import Staff from './Staff.js';


export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            staff:new Staff()
        }
    }

    tt(bb){
        console.log(3333333333);
        console.log(bb);
        this.setState({
            staff:bb
        });
        console.log(4444444444444444);
    }

    componentDidMount(){
        console.log(11111111111);
        this.state.staff.load(this.tt.bind(this));
        console.log(222222222222);
    }

    //增
    addStaffItem(item){
        this.setState({
            staff:this.state.staff.addStaffItem(item)
        });
    }

    //搜索
    searchStaff(word){
        this.setState({
            staff:this.state.staff.searchStaff(word)
        });
    }

    render(){
        console.log(this.state.staff.staffs.length);
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)} />
                <StaffItemPanel items={this.state.staff.staffs} />
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
                <StaffDetail/>
            </div>
        );
    }
}