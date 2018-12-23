/* "One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."
   - GoF, Design Patterns: Elements of Reusable Object-Oriented Software

   characters:
   - Subject
   - Observer
   - ConcreteSubject
   - ConcreteObserver
*/

function ObserverList(){
    this.observerList = [];
}

ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
}

ObserverList.prototype.count = function(){
    return this.observerList.length;
}

ObserverList.prototype.get = function(index){
    if(index > -1 && index < this.observerList.length){
        return this.observerList[index];
    }
}

ObserverList.prototype.indexOf = function(obj, startIndex){
    var i = startIndex;
    while(i < this.observerList.length){
        if(this.observerList[i] === obj){
            return i;
        }
        i++;
    }
    return -1;
}

ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index, 1);
}

function Subject(){
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer){
    this.observers.add(observer);
}

Subject.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}
