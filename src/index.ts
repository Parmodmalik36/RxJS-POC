import { Observable } from "rxjs";
/*
var observable = Observable.create(function subscribe(observer: any) {
    observer.next('Hey guys!')
})
*/
// OR 

/*var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
})

//observable.subscribe((x:any) => console.log(x));

observable.subscribe((x:any) => addItem(x));
*/

//A Closer Look at Observers
/*var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('This will not send')
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);
*/

//Canceling a Subscription

/*var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

const subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    var subscription2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: '+x)
    );
}, 1000);
*/

//Hot or Cold Observables:
var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    var subscription2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: '+x)
    );
}, 1000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}