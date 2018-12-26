#Run Commands
npm install
npm run start


# Info Links:
https://coursetro.com/posts/code/147/How-to-Install-RxJS---Setting-up-a-Development-Environment

https://coursetro.com/posts/code/148/RxJS-Observables-Tutorial---Creating-&-Subscribing-to-Observables

https://coursetro.com/posts/code/149/RxJS-Subjects-Tutorial---Subjects,-BehaviorSubject,-ReplaySubject-&-AsyncSubject

https://coursetro.com/posts/code/150/RxJS-Operators-Tutorial---Learn-How-to-Transform-Observables

https://medium.com/codingthesmartway-com-blog/getting-started-with-rxjs-part-1-setting-up-the-development-environment-creating-observables-db76ce053725

https://github.com/seeschweiler/rxjs-part1

#Important Terms
Observables
            An observable is a function that produces a stream of values to an observer over time. 

observer
            When you subscribe to an observable, you are an observer.

An observable can have multiple observers.

#Hot vs. Cold Observables

A cold observable -- like the type we have been working with so far -- is an observable whose producer is activated once a subscription has been created.

An observable is hot when the producer is emitting values outside of the observable.

By adding the .share() operator, it will share the same source to multiple subscribers.

This is also useful because it results in only 1 network request if you're dealing with an API.

This is warm because we've converted our cold observable to a warm observable. A truly hot observable is one that emits values without a subscriber having subscribed to it. 

An example of a hot observable would be mouse movements made by a user.

Remove all of the current code with exception to the addItem() function and add the following:

#You can use these creation operators that create observables in a variety of ways:

Of
FromEventPattern
FromEvent
FromPromise
Interval
Range
Timer
Empty
Throw
Never

#Subject
A Subject, in contrast to an observable, is simply an observer that's also able to emit values. 

#BehaviorSubject
BehaviorSubject is a special type of Subject whose only different is that it will emit the last value upon a new observer's subscription.

#ReplaySubject
It's like BehaviorSubject, except it allows you to specify a buffer, or number of emitted values to dispatch to observers. BehaviorSubject only dispatches the last emitted value, and ReplaySubject allows you to dispatch any designated number of values.

#AsyncSubject
This is the last subject variation, and it's perhaps the most simple to understand.

AsyncSubject only emits the very last value, and will only do so once .complete() has been called on the subject.


#Operator
Operators are simply methods that you can use on Observables (and Subjects) that allow you to change the original observable in some manner and return a new observable. 
Observable; they simply modify it and return a new one. Operators are known as pure functions, which are functions that do not modify the variables outside of its scope.   

#Static Operators
These operators are usually used to create observables. You will find these mainly under the creation operators.

#Instance Operators
These are methods on observable instances. These account for the majority of RxJS operators that are used.



