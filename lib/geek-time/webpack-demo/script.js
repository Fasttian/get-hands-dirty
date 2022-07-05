import ScrollView from "./ScrollView.js"
import TabView from "./TabView.js";
import Div from "./Div.js";
import Text from "./Text.js"

function myCreate(Class, attributes, ...children){
    var object = new Class();
    for(let name in attributes)
        object.setAttribute(name, attributes[name]);
    for(let child of children){
        console.log("child", child)
        if(typeof child === "string"){
            object.appendChild(new Text(child))
        }else{
            object.appendChild(child);
        }

    }
    return object; 
}

var t = <Text>adsasd</Text>


var c = <TabView style="width:100%;height:100%">
            <ScrollView tab-title="推荐" style="background:lightblue"></ScrollView>
            <ScrollView tab-title="有趣的店" style="background:lightgreen"></ScrollView>
            <ScrollView tab-title="品牌新店" style="background:pink"></ScrollView>
        </TabView>
c.appendTo(document.body);