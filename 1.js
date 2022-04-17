var express = require("express");
var app = express();

app.get("/", log, hello);

function log(req, res, next) {
    console.log("log");
    next();
}
function hello (req, res, next) {
    console.log("hello user");
    next();
}

app.listen(1234, function(){
 console.log("server started in port 1234");
})



const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
 
months.forEach(function(monthName, index){
console.log(`Month ${index} : ${monthName}`)
})


var fix = "null"
 
 if(fix) {
 console.log("This is wonderful. One of the many amusing things that are possible with javascript.");
 }


 class Calc {
    constructor() {
    this.count = 0 
    }
    
    increase() {
    this.count ++
    }
    }
    
    const calc = new Calc()
    new Calc().increase()
    console.log(calc.count)



    function find()
 {
 return {
 bar: "hey there"
 };
 }
 
 function good()
 {
 return
 {
 bar: "hello there"
 };
 }
 
 console.log(find())
 console.log(good())






 console.log('20' - 10)
 console.log('11' + 10)
 console.log(true - 100)
 console.log(false - 150)




 console.log(50 + "5" + "5");
 console.log(90 + +"20" + "7");
 console.log(7 + -"1" + "2");
 console.log(+"10" + "11" + "20");
 console.log( "C" - "B" + "2");
 console.log( "A" - "B" + 2);




 var person = {
    name: function() {
    console.log(fname);
    }
    };
    var obj1 = {
    fname:'example',
    };
    person.name.call(obj1);


    var fruit = 'blueberry';
    function getFruit(adjective) { console.log(adjective+' '+this.fruit); };
    var Obj = {fruit: 'mulberry'};
    getFruit.call(Obj, 'fresh'); 






    let myTodoForToday = {
        day: 'Sunday',
        meetings: 0,
        meetingsDone: 0,
        
        addMeetings: function(num){
        meetings = meetings + num
        },
        
        disp : function(){
        return `You have ${meetings} meetings today`
        }
        }
        
        myTodoForToday.addMeetings(10)
        myTodoForToday.disp()





        let Info = {
            name: 'Niki',
            Roll: '17BTCSE22',
            Section: 'A',
            
            dispInfo: function(){
            console.log(this); 
            }
            }
            
            let Info2 = {
            name: 'Niki',
            Roll: '17BTCSE22',
            Section: 'A',
            
            dispInfo: function(){
            console.log(this); 
            }
            }
            
            Info.dispInfo()
            Info2.dispInfo()






            const bird = {
                size: 'small',
                };
                
                const mouse = {
                name: 'Mickey',
                small: true,
                };


                const sum = eval('10*10+5');
                console.log(sum)


                (function test() {
                    console.log(
                    [] - [],
                    [] + [],
                    {} - {},
                    {} + {}
                    );
                    })();


                 



                    Set.prototype.subSet = (otherSet) =>
                    { 
                    if(this.size > otherSet.size) 
                    return false; 
                    else
                    { 
                    for(let elem of this) 
                    { 
                    if(!otherSet.has(elem)) 
                    return false; 
                    } 
                    return true; 
                    } 
                    } 
                    
                    let A = new Set([10, 20, 30]);
                    let B = new Set([10, 30, 40, 50]);
                    console.log(A.subSet(B));




                    (function test() {
                        console.log(
                        [1, 2, 3, 4].map(function (n) {
                        return n === 1 && 1 || arguments.callee(n - 1) * n;
                        })
                        );
                        })();



                        function getAge(...args) {
                            console.log(typeof args);
                            }
                            
                            getAge(21);




                            let Job = function() {
                                this.pays = true;
                                }
                                //prototype method
                                Job.prototype.print = function(){
                                console.log(this.pays?"true":"false");
                                }
                                //subclass
                                let TechJob = function (title, pays) {
                                Job.call(this);//set pays
                                this.title = title;
                                this.pays = pays;
                                };
                                //for inhereting from Job's prototype
                                TechJob.prototype = Object.create(Job.prototype);
                                TechJob.prototype.constructor = TechJob;
                                //below method shadows the Job's print method
                                TechJob.prototype.print = function(){
                                console.log(this.pays?"true2":"false2");
                                }
                                
                                
                                let softwarePosition = new TechJob('JS', true);
                                let softwarePosition2 = new TechJob('JS', false);
                                console.log(softwarePosition.print());
                                console.log(softwarePosition2.print());




                                const a = {};
                                const b = { key: 'b' };
                                const c = { key: 'c' };
                                
                                a[b] = 123;
                                a[c] = 456;
                                
                                console.log(a[b]);





                                var as = 12;
                                var qw = as;
                                as= 0;
                                console.log(qw);
