/**
 * Created by wang7liang on 2017/4/4.
 */
import $ from 'jquery'

class staffItem{
    constructor(item){
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.key = ++staffItem.key;
    }
}
staffItem.key=0;

export default class Staff{
    constructor(){
        this.staffs = [];
    }

    load(tt){
        $.get("http://127.0.0.1:8888/staffs", function (rawData,status) {
            let allStaff=[
                new staffItem(rawData[0]),
                new staffItem(rawData[1]),
                new staffItem(rawData[2]),
                new staffItem(rawData[3]),
                new staffItem(rawData[4]),
                new staffItem(rawData[6]),
                new staffItem(rawData[7]),
                new staffItem(rawData[8]),
                new staffItem(rawData[9]),
                new staffItem(rawData[10])
            ];
            this.staffs = allStaff;
            tt(this);
        });

        return this;
    }

    addStaffItem(item){
        let newItem = new staffItem(item);
        this.staffs.push(newItem);
        return this;
    }

    searchStaff(word){
        this.staffs = this.staffs.filter(item=>{
           // return item.info.name.indexOf(word)!=-1 || item.info.id.indexOf(word)!=-1 || item.info.sex.indexOf(word)!=-1;
            if(item.info.name.indexOf(word)!=-1 || item.info.id.indexOf(word)!=-1 || item.info.sex.indexOf(word)!=-1){
                return item;
            }

        });
        return this;
    }
}

