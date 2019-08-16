1. What problem does the context API help solve?

- Context API solves the problem of prop drilling and allows you to store state on a context object and retrieve from it as needed.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions connect user interactions with state data, form a link that transmits instructions on how to alter state. Reducers alter state depending on the action dispatched. Store holds application state in a centralized location that individual components can connect to as needed

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is state that will be used in multiple components whereas Component state is data that will only be used in that single component. It depends on the situation, but in forms where changeHandler's are needed to log values it would be useful to have Component State and just pass the value logged through hooks/redux. An example of Application state could be an object or array of data that will be rendered in different ways in multiple components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux thunk allows for asynchronous operations, its a middleware that intercepts action creaters before they get to the reducer, once the action executes Thunk dispatches the action to the reducer where it alters the state.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- Redux - I really like centralizing state/data and being able to pull from it as needed, preformance will lag about due to the extra middleware processes but it really keeps the data flow organized and easy to review.
